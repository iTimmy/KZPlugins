class Tab {

	constructor(name, isOn, content) {
		this.name = name;
		this.isOn = isOn;
		this.content = content;
	}

	

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	isOn() {
		return this.isOn;
	}

	setOn(isOn) {
		this.isOn = true;
	}

	setOff(isOn) {
		this.isOn = false;
	}

	getContent() {
		return this.content;
	}

	setContent(content) {
		this.content = content;
	}

}
