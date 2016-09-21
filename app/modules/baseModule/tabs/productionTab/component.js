define(function(require) {

    // Load the dependencies
    var Boiler = require('Boiler');

    var ViewModel = require('./viewmodel');
    var ViewModel_dro = require('../tabWidgets/viewmodel_dro');
    var ViewModel_file = require('../tabWidgets/viewmodel_file');
    var ViewModel_run = require('../tabWidgets/viewmodel_run');
    var ViewModel_spindle = require('../tabWidgets/viewmodel_spindle');
//    var ViewModel_coolant = require('../tabWidgets/viewmodel_coolant');
    var ViewModel_gcodes = require('../tabWidgets/viewmodel_gcodes');
    var ViewModel_backplot = require('../tabWidgets/viewmodel_backplot');

    var Component = function(moduleContext) {
		var panel = null;
        var panel_dro = null;
        var panel_file = null;
        var panel_run = null;
        var panel_spindle = null;
        var panel_coolant = null;
        var panel_gcodes = null;
        var panel_backplot = null;
        var vm = null;
        var vm_dro = null;
        var vm_file = null;
        var vm_run = null;
        var vm_spindle = null;
        var vm_coolant = null;
        var vm_gcodes = null;
        var vm_backplot = null;

        var privateContext = new Boiler.Context();

		return {
			activate : function(parent) {
				if (!panel) {
                    vm = new ViewModel(moduleContext, privateContext);
					panel = new Boiler.ViewTemplate(parent, vm.getTemplate(), vm.getNls());
                    ko.applyBindings( vm, panel.getDomElement());
				}
                vm.initialize(panel);

                if (!panel_dro) {
                    vm_dro = new ViewModel_dro(moduleContext, privateContext);
                    panel_dro = new Boiler.ViewTemplate(panel.getJQueryElement().find("#DRO_PANEL"), vm_dro.getTemplate(), vm_dro.getNls());
                    ko.applyBindings( vm_dro, panel_dro.getDomElement());
                }
                vm_dro.initialize(panel_dro);

                if (!panel_run) {
                    vm_run = new ViewModel_run(moduleContext, privateContext);
                    panel_run = new Boiler.ViewTemplate(panel.getJQueryElement().find("#RUN_PANEL"), vm_run.getTemplate(), vm_run.getNls());
                    ko.applyBindings( vm_run, panel_run.getDomElement());
                }
                vm_run.initialize(panel_run);

                if (!panel_spindle) {
                    vm_spindle = new ViewModel_spindle(moduleContext, privateContext);
                    panel_spindle = new Boiler.ViewTemplate(panel.getJQueryElement().find("#SPINDLE_PANEL"), vm_spindle.getTemplate(), vm_spindle.getNls());
                    ko.applyBindings( vm_spindle, panel_spindle.getDomElement());
                }
                vm_spindle.initialize(panel_spindle);

/*
                if (!panel_coolant) {
                    vm_coolant = new ViewModel_coolant(moduleContext, privateContext);
                    panel_coolant = new Boiler.ViewTemplate(panel.getJQueryElement().find("#COOLANT_PANEL"), vm_coolant.getTemplate(), vm_coolant.getNls());
                    ko.applyBindings( vm_coolant, panel_coolant.getDomElement());
                }
                vm_coolant.initialize(panel_coolant);
*/
                if (!panel_gcodes) {
                    vm_gcodes = new ViewModel_gcodes(moduleContext, privateContext);
                    panel_gcodes = new Boiler.ViewTemplate(panel.getJQueryElement().find("#GCODES_PANEL"), vm_gcodes.getTemplate(), vm_gcodes.getNls());
                    ko.applyBindings( vm_gcodes, panel_gcodes.getDomElement());
                }
                vm_gcodes.initialize(panel_gcodes);

                if (!panel_backplot) {
                    vm_backplot = new ViewModel_backplot(moduleContext, privateContext);
                    panel_backplot = new Boiler.ViewTemplate(panel.getJQueryElement().find("#BACKPLOT_PANEL"), vm_backplot.getTemplate(), vm_backplot.getNls());
                    ko.applyBindings( vm_backplot, panel_backplot.getDomElement());
                }

                if (!panel_file) {
                    vm_file = new ViewModel_file(moduleContext, privateContext);
                    panel_file = new Boiler.ViewTemplate(panel.getJQueryElement().find("#FILE_PANEL"), vm_file.getTemplate(), vm_file.getNls());
                    ko.applyBindings( vm_file, panel_file.getDomElement());
                }
                vm_file.initialize(panel_file);

                panel.show();

                vm_backplot.initialize(panel_backplot);
                moduleContext.notify("ActivatedTabNeedsResize",panel_backplot.getJQueryElement());

			},



			deactivate : function() {
				if (panel) {
					panel.hide();
				}
			}
		};
	};

	return Component;

});
