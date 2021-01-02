sap.ui.define([
  "com/dataworksbi/sacTCO/controller/BaseController",
  "com/dataworksbi/sacTCO/controller/ModelUtils",
], function(Controller, ModelUtils) {
  "use strict";

  return Controller.extend("com.dataworksbi.sacTCO.controller.MainView", {
    modelUtils: new ModelUtils(),

    onInit: function () {
      var tcoChartModel = this.modelUtils.getTCOChartData();
      tcoChartModel.loadData("model/financials.json", "", false);
			this.getView().setModel(tcoChartModel, "TCOData");      
    }
  });
});
