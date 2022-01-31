<span class="loader" />

<style>
	.loader {
		width: 164px;
		height: 170px;
		display: block;
		margin: auto;
		position: relative;
		background: #fff;
		box-sizing: border-box;
	}
	.loader::after {
		content: '';
		width: calc(100% - 30px);
		height: calc(100% - 30px);
		top: 15px;
		left: 15px;
		position: absolute;
		background-image: linear-gradient(
				90deg,
				transparent,
				rgba(255, 255, 255, 0.5) 50%,
				transparent 100%
			),
			linear-gradient(#ddd 74px, transparent 0), linear-gradient(#ddd 16px, transparent 0),
			linear-gradient(#ddd 24px, transparent 0);
		background-repeat: no-repeat;
		background-size: 50px 170px, 100% 74px, 100% 16px, 100% 32px;
		background-position: 0 0, 0 0, 0px 85px, 0px 110px;
		box-sizing: border-box;
		animation: animloader 1s linear infinite;
	}

	@keyframes animloader {
		0% {
			background-position: 0 0, 0 0, 0px 85px, 0px 110px;
		}
		100% {
			background-position: 150% 0, 0 0, 0px 85px, 0px 110px;
		}
	}
</style>
