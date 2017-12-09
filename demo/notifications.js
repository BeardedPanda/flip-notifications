!function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){i(1),i(2),e.exports=i(3)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!t||!t.message)throw Error("Message param is required!");if("string"!=typeof t.message&&"number"!=typeof t.message)throw Error("Message can't accept type "+n(t.message));this.message=t.message,this.duration=parseInt(t.duration)||5e3,this.attachment_direction=t.attach&&-1!==["left","right"].indexOf(t.attach)?t.attach:"right",this.url=t.url||null,this.type=t.type&&-1!==["error","notification","warning","success"].indexOf(t.type)?t.type:"notification",this.wrapper=document.createElement("div"),this.listener=function(){this.resetCurrentNotificationOffsetHeight()}.bind(this),window.addEventListener("resize",this.listener)}return s(e,[{key:"show",value:function(){this.setUpWrapperHtml(),document.body.appendChild(this.wrapper),this.resetCurrentNotificationOffsetHeight()}},{key:"setUpWrapperHtml",value:function(){this.wrapper.className="notification-wrapper is-animated is-attached-"+this.attachment_direction+" is-active is-"+this.type,this.wrapper.innerHTML='<aside class="icon-wrapper">'+this.getTypeIconCode()+"</aside>",this.wrapper.innerHTML+=this.url?' <aside class="text"><p>'+this.message+'</p><p class="url-wrapper"><a href="'+this.url+'">» View</a></p></aside>':' <aside class="text"><p>'+this.message+"</p></aside>",this.setUpDismissButton()}},{key:"getTypeIconCode",value:function(){switch(this.type){case"warning":return'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M507.494,426.066L282.864,53.537c-5.677-9.415-15.87-15.172-26.865-15.172c-10.995,0-21.188,5.756-26.865,15.172 L4.506,426.066c-5.842,9.689-6.015,21.774-0.451,31.625c5.564,9.852,16.001,15.944,27.315,15.944h449.259 c11.314,0,21.751-6.093,27.315-15.944C513.508,447.839,513.336,435.755,507.494,426.066z M256.167,167.227 c12.901,0,23.817,7.278,23.817,20.178c0,39.363-4.631,95.929-4.631,135.292c0,10.255-11.247,14.554-19.186,14.554 c-10.584,0-19.516-4.3-19.516-14.554c0-39.363-4.63-95.929-4.63-135.292C232.021,174.505,242.605,167.227,256.167,167.227z M256.498,411.018c-14.554,0-25.471-11.908-25.471-25.47c0-13.893,10.916-25.47,25.471-25.47c13.562,0,25.14,11.577,25.14,25.47 C281.638,399.11,270.06,411.018,256.498,411.018z"/></g></g></svg>';case"error":return'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 509.184 509.184" style="enable-background:new 0 0 509.184 509.184;" xml:space="preserve"><g><g><path d="M504.593,389.844c2.854,2.856,4.284,6.222,4.284,10.098c0,3.877-1.431,7.242-4.284,10.101 l-94.86,94.857c-2.854,2.856-6.12,4.284-9.792,4.284c-3.264,0-6.729-1.428-10.403-4.284L254.284,369.647L119.033,504.899 c-2.856,2.856-6.12,4.284-9.792,4.284c-3.264,0-6.732-1.428-10.404-4.284l-94.86-94.857c-2.448-2.448-3.672-5.916-3.672-10.404 c0-4.08,1.224-7.344,3.672-9.792l135.252-135.254L4.589,119.34c-2.856-2.448-4.284-5.712-4.284-9.792 c0-4.488,1.428-7.956,4.284-10.404l94.248-94.86C101.693,1.428,105.161,0,109.241,0s7.344,1.428,9.792,4.284l135.251,135.252 L389.537,4.284C392.392,1.428,395.761,0,399.637,0s7.242,1.428,10.098,4.284l94.86,94.86c2.854,2.856,4.284,6.222,4.284,10.098 s-1.431,7.242-4.284,10.098L369.341,254.592L504.593,389.844L504.593,389.844z"/></g></g></svg>';case"success":return'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="97.619px" height="97.618px" viewBox="0 0 97.619 97.618" style="enable-background:new 0 0 97.619 97.618;" xml:space="preserve"><g><path d="M96.939,17.358L83.968,5.959c-0.398-0.352-0.927-0.531-1.449-0.494C81.99,5.5,81.496,5.743,81.146,6.142L34.1,59.688 L17.372,37.547c-0.319-0.422-0.794-0.701-1.319-0.773c-0.524-0.078-1.059,0.064-1.481,0.385L0.794,47.567 c-0.881,0.666-1.056,1.92-0.39,2.801l30.974,40.996c0.362,0.479,0.922,0.771,1.522,0.793c0.024,0,0.049,0,0.073,0 c0.574,0,1.122-0.246,1.503-0.68l62.644-71.297C97.85,19.351,97.769,18.086,96.939,17.358z"/></g></svg>';default:return'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 459.334 459.334" style="enable-background:new 0 0 459.334 459.334;" xml:space="preserve"><g><path d="M175.216,404.514c-0.001,0.12-0.009,0.239-0.009,0.359c0,30.078,24.383,54.461,54.461,54.461 s54.461-24.383,54.461-54.461c0-0.12-0.008-0.239-0.009-0.359H175.216z"/><path d="M403.549,336.438l-49.015-72.002c0-22.041,0-75.898,0-89.83c0-60.581-43.144-111.079-100.381-122.459V24.485 C254.152,10.963,243.19,0,229.667,0s-24.485,10.963-24.485,24.485v27.663c-57.237,11.381-100.381,61.879-100.381,122.459 c0,23.716,0,76.084,0,89.83l-49.015,72.002c-5.163,7.584-5.709,17.401-1.419,25.511c4.29,8.11,12.712,13.182,21.887,13.182 H383.08c9.175,0,17.597-5.073,21.887-13.182C409.258,353.839,408.711,344.022,403.549,336.438z"/></g></svg>'}}},{key:"resetOffsetHeights",value:function(){var e=0;document.querySelectorAll(".notification-wrapper.is-animated.is-active"+(window.innerWidth<=800?"":".is-attached-"+this.attachment_direction)).forEach(function(t){t.style.top=e+"px",e+=t.clientHeight})}},{key:"resetCurrentNotificationOffsetHeight",value:function(){for(var e=document.querySelectorAll(".notification-wrapper.is-animated.is-active"+(window.innerWidth<=800?"":".is-attached-"+this.attachment_direction)),t=0,i=0;i<e.length;i++){if(e[i]===this.wrapper){e[i].style.top=t+"px";break}t+=e[i].clientHeight}}},{key:"setUpDismissButton",value:function(){var e=document.createElement("span");e.className="dismiss",e.innerHTML='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 212.982 212.982" style="enable-background:new 0 0 212.982 212.982;" xml:space="preserve"><g id="Close"><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/></g></svg>',this.wrapper.appendChild(e);var t=setTimeout(function(){this.dismiss()}.bind(this),this.duration);e.addEventListener("click",function(){this.dismiss(),clearTimeout(t)}.bind(this),!1)}},{key:"dismiss",value:function(){this.wrapper.classList.remove("is-active"),this.wrapper.classList.add("is-hiding"),setTimeout(function(){document.body.removeChild(this.wrapper),this.resetOffsetHeights()}.bind(this),260),window.removeEventListener("resize",this.listener)}}]),e}();window.FlipNotifications=r,t.default=r},function(e,t){},function(e,t){}]);