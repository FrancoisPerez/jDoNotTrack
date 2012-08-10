#jDoNotTrack
===========

An educational jQuery plugin for "Do Not Track" setting

<p align="center"><img src="https://raw.github.com/FrancoisPerez/jDoNotTrack/master/img/jDoNotTrack.png"></p>

This plugin detects if a user is using the "Do Not Track" header and inform him about its dangers.

## Documentation

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

DoNotTrack was inspired by the fact that Microsoft decided to activate opt-out by default in their browser while, IMNSHO, it should reflect the direct choice of the user.

If you like my work, please follow me ( [@FrancoisPerez](http://www.twitter.com/FrancoisPerez) ) ... or [donate]<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
			<input type="hidden" name="cmd" value="_s-xclick">
			<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHTwYJKoZIhvcNAQcEoIIHQDCCBzwCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYClyXxn/1w7WSv01jaGPXMw53Wro3WRvZcMQlYNMmJnPh/mHP0wKZxUni1wYr5YI2gM/8uByqIBNLeoYD3KhYXwXikzh7REzFS2Cb6pfSs+duxnzkgpB/K6d3YkMDQsss3xXhVp/27rxl3x2+//TBlXb0WH6XmWa51ZVYahf87QhTELMAkGBSsOAwIaBQAwgcwGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQI+W9mq3KqdP6Agag/H1k1qsAkc+rWvqOWgGJuTPHIDM5kFDinllexbE52aMnWQyJBMQB2fMLd8b96x+1rTzYhmQJhL/7rpqOyJxJzrq4BG8ZAYThWXOUKNvgMWBZqhhZt9EligZdNPjehcQ3tiEIYqekzLHtSjDVp48CIdUdATCRAPyCyB8oqTEnaJxvPUUPv/roSE0+bl0B2XxKcKMizPUYd5D1fq6dlk8HLHRWz0T5ja5SgggOHMIIDgzCCAuygAwIBAgIBADANBgkqhkiG9w0BAQUFADCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wHhcNMDQwMjEzMTAxMzE1WhcNMzUwMjEzMTAxMzE1WjCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMFHTt38RMxLXJyO2SmS+Ndl72T7oKJ4u4uw+6awntALWh03PewmIJuzbALScsTS4sZoS1fKciBGoh11gIfHzylvkdNe/hJl66/RGqrj5rFb08sAABNTzDTiqqNpJeBsYs/c2aiGozptX2RlnBktH+SUNpAajW724Nv2Wvhif6sFAgMBAAGjge4wgeswHQYDVR0OBBYEFJaffLvGbxe9WT9S1wob7BDWZJRrMIG7BgNVHSMEgbMwgbCAFJaffLvGbxe9WT9S1wob7BDWZJRroYGUpIGRMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbYIBADAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4GBAIFfOlaagFrl71+jq6OKidbWFSE+Q4FqROvdgIONth+8kSK//Y/4ihuE4Ymvzn5ceE3S/iBSQQMjyvb+s2TWbQYDwcp129OPIbD9epdr4tJOUNiSojw7BHwYRiPh58S1xGlFgHFXwrEBb3dgNbMUa+u4qectsMAXpVHnD9wIyfmHMYIBmjCCAZYCAQEwgZQwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tAgEAMAkGBSsOAwIaBQCgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEPFw0xMjA4MDgxNTU2MzBaMCMGCSqGSIb3DQEJBDEWBBQtiQp9tLDlwe2qej/kuAFa0aKPSDANBgkqhkiG9w0BAQEFAASBgK3hcx4gAyHoORszeOhXjIAtCVBvYNzkk+9tpwVpnPjj2quMM/iIZRGxm37cQYNsUYb70fENWj9RGu82+We8rpOYL/7MOmV3nUXsg7i8//fWDsbqBGR8sxq7g/hxZZya0hMqE6tXujj3i8mAcbPsXFlGNRBM53QJi8kqRMfnHzjI-----END PKCS7-----
			">
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
			<img alt="" border="0" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1">
		</form> (even 0.01�, that always nice !)

Design taken from [@lipka](https://github.com/lipka) because I really loved it (go check his Github page, he has some amazing stuff ;) ).