sap.ui.define([
	"sap/ui/test/Opa5"
], function(Opa5) {
	"use strict";

	return Opa5.extend("HelloWorld.helloworld-ui5cli.test.integration.arrangements.Startup", {

		iStartMyApp: function () {
			this.iStartMyUIComponent({
				componentConfig: {
					name: "HelloWorld.helloworld-ui5cli",
					async: true,
					manifest: true
				}
			});
		}

	});
});
