class Products extends HTMLElement {

        constructor() {
                super();
		this.addContent();
                this.attachShadow({mode: 'open'});
                this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

	addContent() {
		console.log("GOT MEEEEEEEEEEEEEEE");
		template.innerHTML = this.content();
	}

	content() {
		const products_content = `
			<!-- Bootstrap CSS -->
		        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
			        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
			<link rel="preconnect" href="https://fonts.gstatic.com">
		 	<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet">
			<script src="https://kit.fontawesome.com/a81368914c.js"></script>

			<style>

	       		.product-card {
		                cursor: pointer;
	        	        height: 500px;
	                	width: 100px;
		                box-shadow: 5px 10px 50px black;
		                margin: 0 auto;
	        	}

			.product-image {
		                background-size: cover;
	        	        background-position: center;
	                	width: 100%;
	                	height: 100%;
		                margin: 0 auto;
        		        transition-property: transform;
	        	        transition-duration: 500ms;
        		}

			.product-image:hover {
		                transform: scale(1.05,1.05);
                		transition-property: transform;
        	        	transition-duration: 1000ms;
		        }

		       	.product-caption {
		                padding: 30px;
	        	        background-color: rgba(0,0,0,0.8);
	                	width: 100%;
		                height: 25%;
		                margin: 0 auto;
	        	        z-index: 2;
                		transition-property: height;
	        	        transition-duration: 500ms;
		        }

			.product-caption h1 {
		                border: 1px solid white;
                		font-size: 100%;
        	        	width: 100%;
		                padding-top: 15px;
        	        	text-align: center;
	        	}

			.product-caption:hover {
        	        	height: 100%;
        		        transition-property: height;
	                	transition-duration: 1000ms;
	        	}

			#get-your-shit {
		                font-size: 30px;
                		margin: 80px;
        	        	padding: 15px;
		                text-align: center;
        		        color: white;
	        	        opacity: 50%;
        	        	font-family: 'Cinzel', serif;
		                background-color: rgb(0,0,0);
        	        	cursor: pointer;
        		}

			</style>



			<div class="column col-12">
        			<hr>
				<div class="row justify-content-center">
	        		        <div class="column col-lg-3 col-sm-6 col-12 product-card" id="product-card">
			                        <div class="row product-image" style="background-image:url('https://images7.alphacoders.com/952/952546.jpg')">
        	        	                	<div class="row product-caption" id="product-caption"><h1>Synthesizers</h1></div>
	                        		</div>
        		        	</div>
        	        		<div class="column col-lg-3 col-sm-6 col-12 product-card" id="product-card">
			                        <div class="row product-image" style="background-image:url('https://files.oyebesmartest.com/uploads/preview/anonymous-mask-man-wallpaper-hd-1080p---hacking-(1)1npd.jpg')">
		                                	<div class="row product-caption" id="product-caption"><h1>Distortions</h1></div>
		                        	</div>
		                	</div>
		        	        <div class="column col-lg-3 col-sm-6 col-12 product-card" id="product-card">
			                        <div class="row product-image" style="background-image:url('https://i.pinimg.com/originals/55/d2/86/55d2863f054fd10f31b76f9b246703d2.jpg')">
		                                	<div class="row product-caption" id="product-caption"><h1>Reverberation</h1></div>
		                        	</div>
		                	</div>
		        	        <div class="column col-lg-3 col-sm-6 col-12 product-card" id="product-card">
			                        <div class="row product-image" style="background-image:url('https://uhdwallpapers.org/uploads/converted/18/04/06/anonymous-mask-and-orange-smoke-1080x1920_75644-mm-90.jpg')">
		                                	<div class="row product-caption" id="product-caption"><h1>Extra</h1></div>
		                        	</div>
		                	</div>
		        	</div>
				<div class="row" id="get-your-shit">
		                	Get your free shit right here at 100% discount!
		        	</div>
				<hr>
				<div class="row">
		                	<div class="column col-lg-3 col-sm-6 col-12 product-card" id="product-card">
		                	        <div class="row product-caption" id="product-caption"><h1>String</h1></div>
		        	                <div class="row product-image" style="background-image:url('https://swall.teahub.io/photos/small/85-857082_guy-fawkes-mask-neon-burning-newspaper.jpg')">

		        	                </div>

		        	        </div>
			                <div class="column col-lg-3 col-sm-6 col-12 product-card" id="product-card">
		                        	<div class="row product-caption" id="product-caption"><h1>Woodwind</h1></div>
		                	                <img class="row product-image" src="https://1.bp.blogspot.com/-F3YfMk-gB9s/XpcvmV4t--I/AAAAAAAAqtI/hRsDaUT7ElMNtDFGCVBp6f9pFlcrk2v0QCLcBGAsYHQ/s2560/anonymus-guy-smoke-4k-dv-1080x1920.jpg">
		        	                </div>
			                <div class="column col-lg-3 col-sm-6 col-12 product-card" id="product-card">
		                        	<div class="row product-caption" id="product-caption"><h1>Brass</h1></div>
		                	        <img class="row product-image" src="https://i.pinimg.com/originals/8b/7d/47/8b7d47b9e4421707c26ead242110a8a1.jpg">
		        	        </div>
			                <div class="column col-lg-3 col-sm-6 col-12 product-card" id="product-card">
		                        	<div class="row product-caption" id="product-caption"><h1>Percussion</h1></div>
		                	        <img class="row product-image" src="https://image.freepik.com/free-photo/anonymous-man-black-hoodie-hiding-his-face-neon-mask_149155-3696.jpg">
        			        </div>

			        </div>
				<div class="row" style="height:500px">

		        	</div>
			</div>
			`;
			return products_content;
		}
}

window.customElements.define('products-notify', Products);
