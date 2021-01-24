class Home extends HTMLElement {

	constructor() {
		super();
		this.addContent();
		this.attachShadow({mode: 'open'});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}

	addContent() {
		template.innerHTML = this.content();
	}

	content() {
		const home_content = `
			<!-- Bootstrap CSS -->
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        			integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
		        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
			<link rel="preconnect" href="https://fonts.gstatic.com">
	    		<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet">
    			<script src="https://kit.fontawesome.com/a81368914c.js"></script>

			<style>
	       		.info-big {
        	        	font-size: 50px;
		                padding-top: 300px;
		        }

			.info {
	               		margin: 0 auto;
	                	padding: 0px 20px 0px 20px;
        		        width: 500px;
	        	}
			</style>

	        	<p class="info-big">
        	        	There are many variations of passages
		        </p>
			<p class="info">
                		Contrary to popular belief, Lorem Ipsum is not simply random text.
        	        	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
		                Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
        	        	in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        		</p>
		`;
		return home_content;
	}

}

window.customElements.define('home-notify', Home);
