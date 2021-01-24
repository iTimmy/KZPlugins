class TabsData {

	constructor(tabs) {
                this.tabs = tabs;
	}


	addTab(tab) {
		console.log("_________________________" + "\naddTab(" + tab + ")\n" + "_________________________");
		if (this.tabs === undefined) {
			console.log("RUN BITCH");
			this.tabs = [
				{name: "home", isOn: false, content: "home-notify"},
				{name: "news", isOn: false, content: "news-notify"},
				{name: "products", isOn: true, content: "products-notify"},
				{name: "about", isOn: false, content: "about-notify"},
				{name: "tabsection-5", isOn: false, content: ""}
			];
		} else {
			console.log("PASS BITCH");
		}
		console.log("tabs: ", this.tabs);
        }

	loadTabs() {
                return this.tabs;
        }

	editTab(tab) {
                this.tabs[tab.getName()] = tab;
        }

	removeTab(tab) {

        }

}


     
