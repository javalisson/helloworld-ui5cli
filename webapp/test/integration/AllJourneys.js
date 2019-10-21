sap.ui.define([
	"sap/ui/test/Opa5",
	"HelloWorld/helloworld-ui5cli/test/integration/arrangements/Startup",
	"HelloWorld/helloworld-ui5cli/test/integration/BasicJourney"
], function(Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		pollingInterval: 1
	});

});
