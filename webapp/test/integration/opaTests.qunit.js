/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"HelloWorld/helloworld-ui5cli/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});
