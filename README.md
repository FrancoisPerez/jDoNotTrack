#jDoNotTrack
===========

An educational jQuery plugin for "Do Not Track" setting

<p align="center"><img src="https://raw.github.com/FrancoisPerez/jDoNotTrack/master/img/jDoNotTrack.png"></p>

This plugin detects if a user is using the "Do Not Track" header and inform him about its dangers.

## Documentation

[Click here for live demo](http://francoisperez.github.com/jDoNotTrack/) (don't forget to enable DNT on your browser to see it work !)

### Basic usage

#### Import
```javascript
  <script type="text/javascript" src="http://donottrack.us/js/dnt.php"></script>
  <script type="text/javascript" src="js/jquery.jDoNotTrack.js"></script>
  <script type="text/javascript" src="js/locales/jquery.jDoNotTrack.en.js"></script>
```

#### Call

```javascript
$(document).ready(function() {
	$('body').doNotTrack();
});
```

### Options

```javascript
options: {
	zindex: '99999', // z-index parameter for the box
	height: '70', // height of the alert box
	id: 'doNotTrackAlert', // id of the alert box
	idCloseButton: 'doNotTrackCloseButton', // id of the [x] link
	animSpeed:1000, // Speed of open/close animation
	autoHide: false, // Choose whether you want to auto-close the box or want the user to click on the [x] link
	timeBeforeHide:10000, // If autoHide = true, time to wait before the box closes
	opacity:0.75, // Opacity of the box
	backgroundColor:"#000", // Background color of the box
}
```
### Browser Support

jDoNotTrack has been tested to work completely in the following browsers (older versions may be supported, but haven't been tested):

* Chrome 15+
* Firefox 9+
* Opera 11+
* Internet Explorer 6+

## License

Licensed under the [MIT license](http://en.wikipedia.org/wiki/MIT_License).

## Credits

DoNotTrack was inspired by the fact that Microsoft decided to activate opt-out by default in their browser while, IMNSHO, it should reflect the explicit choice of the user.

If you like my work, please follow me ( [@FrancoisPerez](http://www.twitter.com/FrancoisPerez) ) ... or donate on the demo page (even 0.01�, that always nice !)

Design taken from [@lipka](https://github.com/lipka) because I really loved it (go check his Github page, he has some amazing stuff ;) ).