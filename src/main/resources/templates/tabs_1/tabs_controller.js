class TabsController {

	startup(tabname) {
		this.importTab(tabname);
		this.perform_highlightsOff();
		this.perform_highlightOn(tabname);
		this.perform_display_Highlights(data.tabs);
		this.hide_contents();
		this.show_content(tabname);
	}



	importTab(newTab) {
		console.log("_________________________" + "\nimportTab(" + newTab + ")\n" + "_________________________");
		// var d = new TabsData(newTab);
		data.addTab(newTab);
	}

	
	loadTabs() {
		data.tabs;
	}

	perform_highlightsOff() {
		console.log("_________________________" + "\nperform_highlightsOff()\n" + "_________________________");
		for (var t in data.tabs) {
			data.tabs[t].isOn = false;
		}
	}

	perform_highlightOn(tabname) {
		console.log("_________________________" + "\nperform_highlightOn(" + tabname + ")\n" + "_________________________");
		for (var t in data.tabs) {
			if (tabname == data.tabs[t].name) {
				data.tabs[t].isOn = true;
				break;
			}
		}
	}

	perform_display_Highlights(tabs) {
                 Object.values(tabs).forEach(function(value) {
                        if (value.isOn == false) {
                                tabs_interface.display_HighlightsOff(value.name);
                        } else if (value.isOn == true) {
                                tabs_interface.display_HighlightOn(value.name);
                        }       
                });
        }

	hide_contents() {

	}

	show_content(tabname) {
	
	}

}
