// MESSAGES TOGGLE \\
$("#acquaintances-button").click(function() {
	if ($("#messages-button").css("display") == "none") {
		$("#messages-button").css({ "display": "block" });
	//	$(this).css({ "background-color": "rgba(255,255,255,0.25)" });
	} else if ($("#messages-button").css("display") == "block") {
		$("#messages-button").css({ "display": "none" });
	//	$(this).css({ "background-color": "rgb(14,19,24)" });
	}
});
