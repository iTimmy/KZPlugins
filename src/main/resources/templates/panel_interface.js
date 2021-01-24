class Panel {

	// BEHAVIORS \\	
	open_nav_panel(panel, content, body) {
                $(panel).css({
                        "width": "30%",
                        "transition-property": "width",
                        "transition-duration": "1000ms"
                });
                $(content).css({
                        "opacity": "100%",
                        "transition-property": "opacity",
                        "transition-duration": "6000ms"
                });
                $(body).css({
                        "width": "70%",
                        "transition-property": "width",
                        "transition-duration": "1000ms"
                });
        }

        close_nav_panel(panel, content, body) {
                $(panel).css({
                        "width": "0%",
                        "transition-property": "width",
                        "transition-duration": "1000ms"
                });
                $(content).css({
                        "opacity": "0%",
                        "transition-property": "opacity",
                        "transition-duration": "500ms"
                });
                $(body).css({
                        "width": "100%",
                        "transition-property": "width",
                        "transition-duration": "1000ms"
                });
	}


	
	// CONDITIONS \\
	isClosed(panel) {
		return $(panel).css("width") <= "0px" ? true : false;
	}

	isOpened(panel) {
		return $(panel).css("width") >= "0px" ? true : false;
	}

}
