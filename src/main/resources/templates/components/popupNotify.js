const template = document.createElement('template');
template.innerHTML = `

	<style>
		#popup-notify {
		}
	</style>

    <div id="popup-notify">
        heykuyiuyiyjuk
    </div>
`;

class Footer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}

window.customElements.define('footer-notify', Footer);
