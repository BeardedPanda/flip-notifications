/**
 * Flip toast notifications class
 */
class FlipNotifications {
    /**
     * Params is an object which can accept fields:
     *
     * message: required parameter, notification message
     * url: if set this will add >>View anchor that will redirect you to given url
     * duration: notification showing duration
     * attach: the side of notification attachment - can accept string param of 'left' or 'right'
     * type: type of notification - can accept string param of 'notification', 'error', 'warning', 'success'
     *
     * @param params
     */
    constructor(params) {
        if (!params || !params.message)
            throw Error('Message param is required!');
        else if (typeof params.message !== 'string' && typeof params.message !== 'number')
            throw Error(`Message can't accept type ${typeof params.message}`);

        this.message = params.message;
        this.duration = parseInt(params.duration) || 5000;
        this.attachment_direction = params.attach && ['left', 'right'].indexOf(params.attach) !== -1 ? params.attach : 'right';
        this.url = params.url || null;
        this.type = params.type && ['error', 'notification', 'warning', 'success'].indexOf(params.type) !== -1 ? params.type : 'notification';
        this.wrapper = document.createElement('div');

        /**
         * Resize event listener function
         * stored to remove it on dismiss
         */
        this.listener = function () {
            this.resetCurrentNotificationOffsetHeight();
        }.bind(this);
        /**
         * Add event listener to window resize
         * on window resize - recalculate notifications offset height
         */
        window.addEventListener('resize', this.listener);
    }

    /**
     * Show method appends notification wrapper to body
     */
    show() {
        /**
         * Generate notification html code
         */
        this.setUpWrapperHtml();
        /**
         * Add notification to DOM
         */
        document.body.appendChild(this.wrapper);
        /**
         * Calculate notification offset height
         */
        this.resetCurrentNotificationOffsetHeight();
    }

    /**
     * Setting up wrapper InnerHTML out
     */
    setUpWrapperHtml() {
        this.wrapper.className = `notification-wrapper is-animated is-attached-${this.attachment_direction} is-active is-${this.type}`;
        this.wrapper.innerHTML = `<aside class="icon-wrapper">${this.getTypeIconCode()}</aside>`;
        this.wrapper.innerHTML += this.url ? ` <aside class="text"><p>${this.message}</p><p class="url-wrapper"><a href="${this.url}">» View</a></p></aside>` : ` <aside class="text"><p>${this.message}</p></aside>`;
        this.setUpDismissButton();
    }

    /**
     * Get svg icon out of notification type
     *
     * @returns {string}
     */
    getTypeIconCode() {
        switch (this.type) {
            case 'warning':
                return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M507.494,426.066L282.864,53.537c-5.677-9.415-15.87-15.172-26.865-15.172c-10.995,0-21.188,5.756-26.865,15.172 L4.506,426.066c-5.842,9.689-6.015,21.774-0.451,31.625c5.564,9.852,16.001,15.944,27.315,15.944h449.259 c11.314,0,21.751-6.093,27.315-15.944C513.508,447.839,513.336,435.755,507.494,426.066z M256.167,167.227 c12.901,0,23.817,7.278,23.817,20.178c0,39.363-4.631,95.929-4.631,135.292c0,10.255-11.247,14.554-19.186,14.554 c-10.584,0-19.516-4.3-19.516-14.554c0-39.363-4.63-95.929-4.63-135.292C232.021,174.505,242.605,167.227,256.167,167.227z M256.498,411.018c-14.554,0-25.471-11.908-25.471-25.47c0-13.893,10.916-25.47,25.471-25.47c13.562,0,25.14,11.577,25.14,25.47 C281.638,399.11,270.06,411.018,256.498,411.018z"/></g></g></svg>`;
            case 'error':
                return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 509.184 509.184" style="enable-background:new 0 0 509.184 509.184;" xml:space="preserve"><g><g><path d="M504.593,389.844c2.854,2.856,4.284,6.222,4.284,10.098c0,3.877-1.431,7.242-4.284,10.101 l-94.86,94.857c-2.854,2.856-6.12,4.284-9.792,4.284c-3.264,0-6.729-1.428-10.403-4.284L254.284,369.647L119.033,504.899 c-2.856,2.856-6.12,4.284-9.792,4.284c-3.264,0-6.732-1.428-10.404-4.284l-94.86-94.857c-2.448-2.448-3.672-5.916-3.672-10.404 c0-4.08,1.224-7.344,3.672-9.792l135.252-135.254L4.589,119.34c-2.856-2.448-4.284-5.712-4.284-9.792 c0-4.488,1.428-7.956,4.284-10.404l94.248-94.86C101.693,1.428,105.161,0,109.241,0s7.344,1.428,9.792,4.284l135.251,135.252 L389.537,4.284C392.392,1.428,395.761,0,399.637,0s7.242,1.428,10.098,4.284l94.86,94.86c2.854,2.856,4.284,6.222,4.284,10.098 s-1.431,7.242-4.284,10.098L369.341,254.592L504.593,389.844L504.593,389.844z"/></g></g></svg>`;
            case 'success':
                return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="97.619px" height="97.618px" viewBox="0 0 97.619 97.618" style="enable-background:new 0 0 97.619 97.618;" xml:space="preserve"><g><path d="M96.939,17.358L83.968,5.959c-0.398-0.352-0.927-0.531-1.449-0.494C81.99,5.5,81.496,5.743,81.146,6.142L34.1,59.688 L17.372,37.547c-0.319-0.422-0.794-0.701-1.319-0.773c-0.524-0.078-1.059,0.064-1.481,0.385L0.794,47.567 c-0.881,0.666-1.056,1.92-0.39,2.801l30.974,40.996c0.362,0.479,0.922,0.771,1.522,0.793c0.024,0,0.049,0,0.073,0 c0.574,0,1.122-0.246,1.503-0.68l62.644-71.297C97.85,19.351,97.769,18.086,96.939,17.358z"/></g></svg>`;
            default:
                return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 459.334 459.334" style="enable-background:new 0 0 459.334 459.334;" xml:space="preserve"><g><path d="M175.216,404.514c-0.001,0.12-0.009,0.239-0.009,0.359c0,30.078,24.383,54.461,54.461,54.461 s54.461-24.383,54.461-54.461c0-0.12-0.008-0.239-0.009-0.359H175.216z"/><path d="M403.549,336.438l-49.015-72.002c0-22.041,0-75.898,0-89.83c0-60.581-43.144-111.079-100.381-122.459V24.485 C254.152,10.963,243.19,0,229.667,0s-24.485,10.963-24.485,24.485v27.663c-57.237,11.381-100.381,61.879-100.381,122.459 c0,23.716,0,76.084,0,89.83l-49.015,72.002c-5.163,7.584-5.709,17.401-1.419,25.511c4.29,8.11,12.712,13.182,21.887,13.182 H383.08c9.175,0,17.597-5.073,21.887-13.182C409.258,353.839,408.711,344.022,403.549,336.438z"/></g></svg>';
        }
    }

    /**
     * Recalculate all active notifications offsets (on notification dismiss)
     */
    resetOffsetHeights() {
        let active_notifications = document.querySelectorAll('.notification-wrapper.is-animated.is-active' + (window.innerWidth <= 800 ? `` : `.is-attached-${this.attachment_direction}`));
        let offset_top = 0;
        active_notifications.forEach(item => {
            item.style.top = offset_top + 'px';
            offset_top += item.clientHeight;
        })
    }

    /**
     * Recalculate current notification offset (on notification creation or window.resize)
     */
    resetCurrentNotificationOffsetHeight() {
        let active_notifications = document.querySelectorAll('.notification-wrapper.is-animated.is-active' + (window.innerWidth <= 800 ? `` : `.is-attached-${this.attachment_direction}`));
        let offset_top = 0;
        for (let i = 0; i < active_notifications.length; i++) {
            if (active_notifications[i] === this.wrapper) {
                active_notifications[i].style.top = offset_top + 'px';
                break;
            }
            offset_top += active_notifications[i].clientHeight;
        }
    }

    /**
     * Add dismiss button to notification wrapper
     * with dismiss timeout and add click event listener
     */
    setUpDismissButton() {
        let dismiss_button = document.createElement("span");
        dismiss_button.className = 'dismiss';
        dismiss_button.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 212.982 212.982" style="enable-background:new 0 0 212.982 212.982;" xml:space="preserve"><g id="Close"><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/></g></svg>`;
        this.wrapper.appendChild(dismiss_button);

        let dismissTimeout = setTimeout(function () {
            this.dismiss();
        }.bind(this), this.duration);

        dismiss_button.addEventListener('click', function () {
            this.dismiss();
            clearTimeout(dismissTimeout);
        }.bind(this), false);
    }

    /**
     * Dismiss notification and delete it from DOM
     */
    dismiss() {
        this.wrapper.classList.remove("is-active");
        this.wrapper.classList.add("is-hiding");
        setTimeout(function () {
            document.body.removeChild(this.wrapper);
            this.resetOffsetHeights();
        }.bind(this), 260);
        /**
         * Remove this notification resize event listener
         */
        window.removeEventListener('resize', this.listener);
    }
}


window.FlipNotifications = FlipNotifications;

export default FlipNotifications;
