<script lang="ts">
	function handleLogin() {
		console.log('login');
	}
</script>

<!-- Modal -->
<div class="registerModal">
	<div
		class="modal fade"
		id="registerModal"
		tabindex="-1"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog modalCenter ">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Register</h5>
					<button
						type="button"
						class="btn-close cross"
						data-bs-dismiss="modal"
						aria-label="Close"
					/>
				</div>
				<div class="modal-body">
					<fieldset class="login-fieldset">
						<input type="text" placeholder="Username" class="register-fieldset-field" />
						<input type="text" placeholder="E-Mail" class="register-fieldset-field" />
						<input type="password" placeholder="******" class="register-fieldset-field" />
						<button class="register-fieldset-submit"> Sign Up </button>
					</fieldset>
				</div>
				<div class="modal-footer" />
				<input type="checkbox" />
				<p>aceptar los terminos y condiciones</p>
			</div>
		</div>
	</div>
</div>

<div class="Parent">
	<div class="child1">
		<div id="blurFrontImage"><div id="blurBackImage" /></div>
	</div>

	<div class="child2">
		<div class="container">
			<main class="main">
				<a class="button-twitter" href="#" target="_blank" alt="SJCE" />
				<form class="login" on:submit|preventDefault={handleLogin}>
					<svg class="login-sides">
						<line class="top-right first" x1="50%" x2="100%" y1="0" y2="0" />
						<line class="top-left first" x1="50%" x2="0" y1="0" y2="0" />
						<line class="right second" x1="100%" x2="100%" y1="0" y2="100%" />
						<line class="left second" x1="0" x2="0" y1="0" y2="100%" />
						<line class="bottom-left third" x1="0" x2="50%" y1="100%" y2="100%" />
						<line class="bottom-right third" x1="100%" x2="50%" y1="100%" y2="100%" />
					</svg>
					<fieldset class="login-fieldset">
						<input type="text" placeholder="Username" class="login-fieldset-field" />
						<input type="password" placeholder="******" class="login-fieldset-field" />
						<button class="login-fieldset-submit"> Login </button>
					</fieldset>
					<fieldset class="login-fieldset">
						<button
							class="login-fieldset-submit"
							data-bs-toggle="modal"
							data-bs-target="#registerModal"
						>
							Register
						</button>
					</fieldset>
				</form>
			</main>
			<div class="login-with-btn">
				<div class="google-btn">
					<div class="google-icon-wrapper">
						<img
							class="google-icon"
							src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
							alt="Google"
						/>
					</div>
					<p class="btn-text"><b>Sign in with google</b></p>
				</div>

				<div class="facebook-btn">
					<div class="facebook-icon-wrapper">
						<img class="facebook-icon" src="../static/img/facebook.png" alt="Facebook" />
					</div>
					<p class="btn-text"><b>Sign in with Facebook</b></p>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	// variables

	$default-font-size: 8px;
	$twitter-color: #55acee;
	$animation-time: 0.5s;
	$white: #fff;
	$google-blue: #4285f4;
	$button-active-blue: #1669f2;
	$facebook-blue: #3a559f;

	.Parent {
		display: flex;
		flex-direction: row;
	}
	@media screen and (max-width: 600px) {
		.child1 {
			display: none;
		}
		.child2 {
			display: table;
			margin: auto;
			
		}
	}
	@media screen and (max-height: 450px) {
		.main {
			margin-top: 0vh;
		}
	}
	.child1 {
		width: 100%;
		height: 100vh;
		background-size: cover;
		background-position: center;
		text-align: right;
		color: white;
	}
	#blurBackImage {
		background-image: url('../static/img/hyperbeast-removebg.png');
		background-size: cover;
		background-position: center;
		width: 100%;
		height: 100vh;
	}
	#blurFrontImage {
		background-image: url(../static/img/grafiti.jpg);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%;
		height: 100vh;
	}
	.child2 {
		width: 50%;
		color: green;
		height: 100vh;
	}

	.modalCenter {
		top: 10%;
		left: 30%;
		transform: translate(-30%, -30%);
	}
	// mixins
	@mixin size($width, $height) {
		height: $height;
		width: $width;
	}

	@mixin square-size($value) {
		@include size($value, $value);
	}

	@mixin border($size: 0, $type: solid, $color: $twitter-color, $radius: 0) {
		border: 0;
		@if $size>0 {
			border: $size $type $color;
		}
		@if $radius>0 {
			border-radius: $radius;
		}
	}

	@mixin position($type: relative, $top: auto, $bottom: auto, $left: auto, $right: auto) {
		position: $type;
		@if $type==absolute {
			bottom: $bottom;
			left: $left;
			right: $right;
			top: $top;
		}
	}

	// keyframes
	@keyframes button-twitter-animation {
		from {
			top: 50%;
			@include size(10em, 10em);
		}
		to {
			top: -3em;
			@include size(6em, 6em);
		}
	}

	@keyframes login-fadein {
		0% {
			opacity: 0;
		}
		75% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes login-border-animation {
		to {
			stroke-dasharray: 100%;
			stroke-dashoffset: 0;
		}
	}

	// reset
	* {
		padding: 0;
		margin: 0;
	}

	// styles
	.main {
		@include position();
		font-size: $default-font-size;
		margin-top: 30vh;
	}

	%login-item {
		min-width: 250px;
		font-size: 1.6em;
		margin: 0.8em auto;
		padding: 0.8em;
		width: 80%;
		box-sizing: border-box;
	}

	.login {
		width: 300px;
		box-sizing: border-box;
		margin: auto;
		@include position(relative);
		@include border($radius: 5px);

		&-sides {
			@include square-size(100%);
			@include position($type: absolute, $top: 0, $left: 0, $right: 0, $bottom: 0);
			@include border($radius: 5px);
			line {
				fill: none;
				stroke: $twitter-color;
				stroke-dasharray: 100%;
				stroke-dashoffset: 100%;
				stroke-linecap: round;
				stroke-width: 5;
				animation: login-border-animation $animation-time forwards;
				&.first {
					animation-delay: $animation-time;
				}
				&.second {
					animation-delay: $animation-time + 0.25s;
				}
				&.third {
					animation-delay: $animation-time * 2;
				}
			}
		}
		&-fieldset {
			animation: login-fadein $animation-time ease-in-out forwards;
			animation-delay: $animation-time;
			box-sizing: border-box;
			display: flex;
			flex-flow: column wrap;
			justify-content: space-between;
			padding: 0px 0;
			opacity: 0;

			&-field {
				@extend %login-item;
				box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
				@include border($size: 1px, $color: #f2f2f2);
			}
			&-submit {
				@extend %login-item;
				background-color: $twitter-color;
				box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
				color: #fff;
				font-weight: bold;
				@include border($radius: 3px);
			}
		}
	}

	%register-item {
		min-width: 250px;
		font-size: 12px;
		margin: 0.8em auto;
		padding: 0.8em;
		width: 80%;
		box-sizing: border-box;
	}

	.register {
		width: 100px;
		box-sizing: border-box;
		margin: auto;
		@include position(relative);
		@include border($radius: 5px);

		.cross {
			margin-right: 5px;
		}

		&-fieldset {
			animation: login-fadein $animation-time ease-in-out forwards;
			animation-delay: $animation-time;
			box-sizing: border-box;
			display: flex;
			flex-flow: column wrap;
			justify-content: space-between;
			padding: 0px 0;
			opacity: 0;

			&-field {
				@extend %register-item;
				background-color: rgb(85, 85, 85);
				box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.89);
				border-radius: 5px;
				@include border($size: 1px, $color: #f2f2f2);
			}
			&-submit {
				@extend %register-item;
				background-color: $twitter-color;
				box-shadow: inset 0 0 0px 9999px #55acee;
				color: #fff;
				border-radius: 5px;
				font-weight: bold;
				@include border($radius: 3px);
			}
		}
	}

	.button-twitter {
		animation: button-twitter-animation $animation-time forwards;
		background-image: url('https://image.flaticon.com/icons/svg/145/145812.svg');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-color: $twitter-color;
		margin: auto;
		z-index: 1;
		transition: box-shadow 0.5s;
		@include border($size: 3px, $color: #fff, $radius: 50%);
		@include position($type: absolute, $left: 0, $right: 0);
		@include size($width: 6em, $height: 6em);
		&:hover {
			box-shadow: 0px 1px 1px 1px #ccc;
		}
	}
	.login-with-btn {
		display: grid;
		justify-content: center;

		.facebook-btn {
			width: 184px;
			height: 42px;
			background-color: $facebook-blue;
			margin: 0px 20px;
			border-radius: 5px;
			box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
			.facebook-icon-wrapper {
				position: absolute;
				margin-top: 1px;
				margin-left: 1px;
				width: 0px;
				height: 0px;
				border-radius: 2px;
				background-color: $white;
			}
			.facebook-icon {
				position: 10px;
				margin-top: 7px;
				margin-right: 6px;
				width: 25px;
				height: 25px;
			}
			.btn-text {
				float: right;
				margin: 11px 11px 0 0;
				color: $white;
				font-size: 14px;
				letter-spacing: 0.2px;
				font-family: 'Roboto';
			}
			@extend .btn-text;
			&:hover {
				box-shadow: 0 0 6px $google-blue;
			}
			&:active {
				background: $button-active-blue;
			}
		}

		@import url(https://fonts.googleapis.com/css?family=Roboto:500);

		.google-btn {
			width: 184px;
			height: 42px;
			background-color: $google-blue;
			margin: 20px;
			border-radius: 5px;
			box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
			.google-icon-wrapper {
				position: absolute;
				margin-top: 1px;
				margin-left: 1px;
				width: 40px;
				height: 40px;
				border-radius: 2px;
				background-color: $white;
			}
			.google-icon {
				position: 10px;
				margin-top: 11px;
				margin-left: 10px;
				width: 18px;
				height: 18px;
			}
			.btn-text {
				float: right;
				margin: 11px 11px 0 0;
				color: $white;
				font-size: 14px;
				letter-spacing: 0.2px;
				font-family: 'Roboto';
			}
			&:hover {
				box-shadow: 0 0 6px $google-blue;
			}
			&:active {
				background: $button-active-blue;
			}
		}

		@import url(https://fonts.googleapis.com/css?family=Roboto:500);
	}
</style>
