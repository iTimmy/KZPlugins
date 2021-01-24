class TabsInterface {

	// The tabs that share a class name, NOT the ID of every tab \\
	
	display_HighlightsOff(tabname) {
		console.log("_________________________" + "\ndisplay_highlightsOff(" + tabname + ")\n" + "_________________________");
                $("#" + tabname).find("p").css({ "background-color": "rgba(255,255,255,0.1)" });
                $("#" + tabname).find("h3").css({ "text-shadow": "none" });
                $("#" + tabname).find("img").css({ "box-shadow": "none" });
	}

	display_HighlightOn(tabname) {
		console.log("_________________________" + "\ndisplay_highlightOn(" + tabname + ")\n" + "_________________________");
		$("#" + tabname).find("p").css({ "background-color": "white" });
                $("#" + tabname).find("h3").css({ "text-shadow": "0px 2px 13px rgba(255,255,255,0.5)" });
                $("#" + tabname).find("img").css({ "box-shadow": "0px 2px 50px rgba(255,255,255,0.5)" });
	}

}
