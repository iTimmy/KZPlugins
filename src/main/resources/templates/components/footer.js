template.innerHTML = `

<!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/a81368914c.js"></script>

	<style> 
                #footer {
			color: white;
			text-align: center;
                        height: 200px;
                        width: 100%;
                        background-color: black;
                }

		#social-media {
                	padding: 100px 0px 20px 0px;
                	text-align: center;
        	}
	
		.fa {
             		color: white;
                	padding: 0px 20px 0px 20px;
		}
        }

        </style>

        <div id="footer" style="background-color:black;">
                <div id="social-media">
                        <i class="fa fa-instagram"></i>
                        <i class="fa fa-soundcloud"></i>
                        <i class="fa fa-youtube"></i>
                </div>
                ©2021 by Timothy Amarok
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
