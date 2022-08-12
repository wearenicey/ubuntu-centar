<template>
	<div>
		<Header />
		<transition name="fade" appear>
			<main>
				<slot></slot>
			</main>
		</transition>
		<FooterLanding />
		<back-to-top style="position: fixed; z-index: 99; bottom: 24px; right: 24px">
			<g-link to="/kontakt/">
				<button class="btn btn-info btn-to-top border border-transparent rounded-md shadow-lg text-base font-bold text-green-600 bg-white">
					<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							opacity="0.4"
							d="M9.3667 4.00004C10.0179 4.12708 10.6163 4.44555 11.0854 4.91466C11.5545 5.38378 11.873 5.98222 12 6.63337M9.3667 1.33337C10.7195 1.48366 11.9811 2.08949 12.9442 3.05138C13.9073 4.01327 14.5147 5.27405 14.6667 6.62671"
							stroke="#12572A"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M4.92035 6.56886C5.38435 7.53527 6.01687 8.44104 6.81792 9.24209C7.61898 10.0431 8.52474 10.6757 9.49115 11.1397C9.57428 11.1796 9.61584 11.1995 9.66843 11.2149C9.85534 11.2693 10.0848 11.2302 10.2431 11.1169C10.2877 11.085 10.3258 11.0469 10.402 10.9707C10.6351 10.7376 10.7516 10.6211 10.8688 10.5449C11.3107 10.2575 11.8804 10.2575 12.3223 10.5449C12.4395 10.6211 12.5561 10.7376 12.7891 10.9707L12.9191 11.1006C13.2733 11.4549 13.4505 11.632 13.5467 11.8223C13.7381 12.2006 13.7381 12.6475 13.5467 13.0259C13.4505 13.2161 13.2733 13.3933 12.9191 13.7476L12.814 13.8527C12.4609 14.2057 12.2843 14.3823 12.0443 14.5171C11.778 14.6667 11.3643 14.7743 11.0588 14.7734C10.7835 14.7726 10.5954 14.7192 10.2191 14.6124C8.19683 14.0384 6.28859 12.9554 4.6966 11.3634C3.10462 9.77142 2.02163 7.86318 1.44765 5.84092C1.34085 5.46462 1.28745 5.27647 1.28663 5.00117C1.28572 4.69569 1.39329 4.28203 1.54291 4.01569C1.67774 3.77567 1.85428 3.59913 2.20736 3.24605L2.31245 3.14096C2.66675 2.78666 2.84389 2.60952 3.03415 2.51329C3.41252 2.32191 3.85936 2.32191 4.23774 2.51329C4.42799 2.60952 4.60514 2.78666 4.95943 3.14096L5.08935 3.27087C5.32242 3.50394 5.43895 3.62048 5.51514 3.73766C5.80247 4.17959 5.80247 4.74931 5.51514 5.19124C5.43895 5.30842 5.32242 5.42496 5.08935 5.65803C5.01314 5.73424 4.97504 5.77234 4.94314 5.81688C4.8298 5.97517 4.79067 6.20467 4.84515 6.39158C4.86048 6.44417 4.88044 6.48573 4.92035 6.56886Z"
							stroke="#12572A"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</g-link>
		</back-to-top>
		<back-to-top style="position: fixed; z-index: 99; left: 24px; right: none !important; bottom: 24px">
			<a class="color-red" href="https://wa.me/381658286888" target="_blank"><img src="/wa.png" alt="" srcset="" /></a>
		</back-to-top>
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import FooterLanding from "../components/FooterLanding.vue";
import Header from "../components/Header";

export default {
	components: {
		Header,
		FooterLanding,
	},
};
</script>

<style scoped>
.btn-to-top {
	width: 60px;
	height: 60px;
	padding: 10px 16px;
	border-radius: 50%;
	font-size: 22px;
	line-height: 22px;
}

.fade-enter-active {
	transition: opacity 0.75s;
}

.fade-enter {
	opacity: 0;
}
</style>
