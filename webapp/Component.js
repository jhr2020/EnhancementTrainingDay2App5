jQuery.sap.declare("query.viewbrowser.s1.CDSBROWSERS1Extension.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "query.viewbrowser.s1",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/CDSBROWSERS1"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.query.viewbrowser.s1.Component.extend("query.viewbrowser.s1.CDSBROWSERS1Extension.Component", {
	metadata: {
		manifest: "json"
	}
});