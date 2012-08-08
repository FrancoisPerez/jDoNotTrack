/*!
 * jQuery Do Not Track (DNT) plugin
 * Educational jQuery Plugin for Do Not Track setting
 * Copyright (c) 2012 F. Pérez (@FrancoisPerez)
 * Version: 1.0.0 (8-AUG-2012)
 * Dual licensed under the MIT and GPL licenses.
 * Requires: jQuery v1.3.2 or later
 */
;(function($, undefined){
	'use strict';
	
	var ver = '1.0.0';
	var dntEnabled = false;
	
	function log() {
		if (window.console && console.log) console.log('[jDNT] ' + Array.prototype.join.call(arguments,' '));
	}
	function debug(s) {
		if ($.fn.doNotTrack.debug) log(s);
	}
	function detectDNT() {
		// Set DNT status
		if( dnt != 'undefined' && typeof dnt != 'boolean' ) dnt = false;
		
		// DNT HTTP Headers are NOT set
		if( dnt == false ){	
			if(window.navigator.doNotTrack == 'yes' ) dntEnabled = true; // DoNotTrack set in browser
		} else {
			// DNT HTTP Headers ARE set
			dntEnabled = true;
		}
	}
			
	
	$.doNotTrack = {
		options: {
			zindex: '99999',
			height: '70',
			id: 'doNotTrackAlert',
			idCloseButton: 'doNotTrackCloseButton',
			autoHide: false,
			timeBeforeShow: 0,
			animSpeed:1000,
			timeBeforeHide:10000,
		},
		elements: []
	};
	
	$.fn.doNotTrack = function(options) {
		options = $.extend($.doNotTrack.options, options);
		
		detectDNT();
		
		if(dntEnabled){
			createAlert();
		}
	}
	
	function createAlert() {
		var count = -1;
		for (var k in $.doNotTrack.options.lang) ++count; // Count the number of occurences there is in the lang file
		if(count == 0) alert('[jDoNotTrack] Error : Language file not loaded !');

		var close = $('<a/>',{
			href : '#',
			alt : $.doNotTrack.options.lang['closeAlert'],
			title: $.doNotTrack.options.lang['closeAlert'],
			id: $.doNotTrack.options.idCloseButton,
			css : {
				'position':'absolute',
				'left':'95%',
				'top': ($.doNotTrack.options.height/2) -15,
				'cursor':'pointer',
				'color':'#FFF',
				'text-decoration':'none',
			},
			click: function(){
				$('#' + $.doNotTrack.options.id).animate({
					top: '-='+  $.doNotTrack.options.height,
					height: 'toggle'
				}, $.doNotTrack.options.animSpeed)
			},
			text:'[x]'
		})
		console.log(close)
		var div = $('<p/>', {
			css: {
				'height': $.doNotTrack.options.height + 'px',
				'width': '1%',
				'color': '#FFF',
				'text-align':'center',
				'font-family':'Arial, Helvetica, sans-serif',
				'font-size' : '12px',
				'display': 'table-cell',
				'vertical-align': 'middle',
			},
			html: $.doNotTrack.options.lang[Math.floor(Math.random()*count)+1]
		})
		$(div).append(close);
		
		var elem = $('<div/>', {
			id: $.doNotTrack.options.id,
			css: {
				'position': 'absolute',
				'top': '-' + $.doNotTrack.options.height + 'px',
				'left':0,
				'width': '100%',
				'height': $.doNotTrack.options.height + 'px',
				'background-color':	'#000',
				'display':'none',
				'z-index': $.doNotTrack.options.zindex
			},
			html: div
		})
		
		$('body').append(elem);
		
		$(elem).animate({
			top: '+='+  $.doNotTrack.options.height,
			height: 'toggle'
		}, $.doNotTrack.options.animSpeed, function(){
			if($.doNotTrack.options.autoHide){
				setTimeout( function(){
						$(elem).animate({
							top: '-='+  $.doNotTrack.options.height,
							height: 'toggle'
					}, $.doNotTrack.options.animSpeed)},
					$.doNotTrack.options.timeBeforeHide
				);
			}
		});
	}
	
})(jQuery);