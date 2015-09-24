/**
 * Just a couple of variables that shouldn't change very often...
 */
goog.provide('config');

config.link_service_endpoint = 'https://bnc.lt';
config.api_endpoint = 'https://api.branch.io';
config.version = '1.6.11';

/** @define {boolean} */
var WEB_BUILD = false; // jshint unused:false

/** @define {boolean} */
var CORDOVA_BUILD = false; // jshint unused:false

/** @define {boolean} */
var TITANIUM_BUILD = false; // jshint unused:false

var isApp = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
if (isApp && WEB_BUILD) {
	console.warning("Please use Branch Cordova SDK instead. Visit " +
		"https://github.com/BranchMetrics/Cordova-Ionic-PhoneGap-Deferred-Deep-Linking-SDK" +
		" for more details.");
}
