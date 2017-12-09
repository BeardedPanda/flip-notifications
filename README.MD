# Flip Notifications

Lightweight Toast Notifications script with smooth flip animation.

### Demo
To run demo, clone repository and run `/demo/index.html` file.

### Usage

To show notification simple run this line of code.
```
let options = {message: 'Hello world!'}
new FlipNotifications(options).show();
```
### Available options:
* message: required parameter, notification message
* url: if set this will add >>View anchor that will redirect you to given url
* duration: notification showing duration (in ms)
* attach: the side of notification attachment - can accept string param of `['left', 'right']`
* type: type of notification - can accept string param of `['notification', 'error', 'warning', 'success']`

Enjoy!
