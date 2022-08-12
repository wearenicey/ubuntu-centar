<template>
	<Layout>
		<div class="bg-no-repeat bg-bottom w-full mb-20" style="background-image: url(../pozadina-donacije.svg)">
			<div class="mx-auto max-w-7xl lg:px-8">
				<div class="lg:grid lg:grid-cols-2 lg:gap-8">
					<div class="mx-auto max-w-xl px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
						<div class="lg:pb-48 lg:pt-32">
							<h1 class="pt-8 text-3xl text-green-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl">Donacije</h1>
							<p class="text-base mt-4 text-gray-700 sm:text-xl lg:text-lg xl:text-xl">
								Kao i svaka skupina entuzijasta koji rade nešto novo i korisno za svoju zajednicu susrećemo se sa izazovom–nedostatkom finansija. Neke stvari je moguće ostvariti pokretačkom energijom i dobrom voljom, ali postoje stvari koje
								jednostavno zahtevaju novac.
							</p>
							<div class="mt-8 sm:mt-8">
								<div class="sm:max-w-xl sm:mx-auto lg:mx-0">
									<div class="sm:flex">
										<div class="mt-3 text-center">
											<a href="#" @click="onClick()" class="block w-full rounded-3xl px-5 py-3 border border-transparent text-base font-medium text-white bg-green-600 hover:bg-green-700"> Donirajte </a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
						<div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
							<g-image class="lg:absolute lg:inset-y-32 h-80 lg:h-full lg:inset-x-40" src="~/assets/img/donacije.svg" alt="" />
						</div>
					</div>
				</div>
				<svg class="absolute hidden lg:block transform -translate-y-28 translate-x-96" width="30" height="130" viewBox="0 0 30 130" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M4.34385 1.48903C14.5154 10.4755 20.2323 23.1116 22.8127 36.8876C26.7092 57.6922 23.4568 81.101 17.4328 98.6575C13.648 109.692 7.39876 115.892 1.35122 125.802C1.10649 126.203 1.23311 126.727 1.63456 126.972C2.03387 127.216 2.55982 127.09 2.80241 126.688C8.92079 116.663 15.213 110.373 19.0429 99.2092C25.1506 81.408 28.4352 57.6708 24.4851 36.5742C21.8338 22.4182 15.9237 9.44938 5.47092 0.213842C5.11885 -0.097444 4.58218 -0.0652755 4.27089 0.2868C3.95961 0.638875 3.99178 1.17774 4.34385 1.48903Z"
						fill="black"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M1.89213 129.085C1.91574 129.051 2.06811 128.819 2.21624 128.638C2.82593 127.887 4.01312 126.67 5.60175 125.223C10.9365 120.375 20.7797 112.969 28.8924 112.226C29.3604 112.183 29.7039 111.769 29.661 111.301C29.6181 110.833 29.2058 110.487 28.7378 110.53C20.2966 111.303 10.007 118.92 4.45749 123.965C3.7147 124.641 3.05356 125.27 2.49539 125.83C2.97627 123.462 3.5172 121.112 4.0861 118.761C5.72625 111.994 5.74342 105.801 4.34585 98.9266C4.25354 98.4672 3.80273 98.1689 3.34331 98.2633C2.8839 98.3556 2.58553 98.8064 2.67999 99.2658C4.02388 105.882 4.01102 111.846 2.43312 118.359C1.69033 121.432 0.994735 124.508 0.412952 127.614C0.354989 127.924 0.213312 128.729 0.211165 128.844C0.198285 129.506 0.734985 129.669 0.855206 129.699C0.913169 129.714 1.6431 129.858 1.89213 129.085ZM0.292719 128.505C0.286278 128.527 0.27767 128.548 0.27123 128.572C0.275523 128.553 0.284132 128.531 0.292719 128.505Z"
						fill="black"
					/>
				</svg>
			</div>
		</div>

		<svg class="hidden lg:block absolute -right-0 transform -translate-y-10" width="288" height="1086" viewBox="0 0 288 1086" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="543" cy="543" r="543" fill="#FEF2F2" />
		</svg>

		<div class="relative py-10">
			<div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
				<div class="relative mt-12 sm:mt-16 lg:mt-24">
					<div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
						<div class="lg:col-start-2">
							<dl class="mt-6 space-y-6">
								<div x-data="{open: false}" class="p-6 rounded-md border bg-white shadow-sm">
									<dt class="text-lg">
										<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
											<span class="font-medium text-gray-900"> Kako da znam da će moja donacija biti utrošena na pravi način? </span>
											<span class="ml-6 h-7 flex items-center">
												<svg x-bind:class="{ 'rotate-180': open }" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
												</svg>
											</span>
										</button>
									</dt>
									<dd x-show="open" class="mt-2 pr-12" id="faq-0">
										<p class="text-base text-gray-500">
											Sve naše aktivnosti, pa i bankovne transakcije su dostupne našim donatorima na uvid. Takođe možete da sami izaberete na koje od naših aktivnosti će vaša donacija biti utrošena (npr. 10 besplatnih psiholoških seansi za
											jednog samohranog roditelja).
										</p>
									</dd>
								</div>

								<div x-data="{open: false}" class="p-6 rounded-md border bg-white shadow-sm">
									<dt class="text-lg">
										<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
											<span class="font-medium text-gray-900"> Ko može da donira?</span>
											<span class="ml-6 h-7 flex items-center">
												<svg x-bind:class="{ 'rotate-180': open }" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
												</svg>
											</span>
										</button>
									</dt>
									<dd x-show="open" class="mt-2 pr-12" id="faq-0">
										<p class="text-base text-gray-500">I fizička i pravna lica mogu da izvrše donaciju.</p>
									</dd>
								</div>

								<div x-data="{open: false}" class="p-6 rounded-md border bg-white shadow-sm">
									<dt class="text-lg">
										<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
											<span class="font-medium text-gray-900"> Šta ja imam od donacije? </span>
											<span class="ml-6 h-7 flex items-center">
												<svg x-bind:class="{ 'rotate-180': open }" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
												</svg>
											</span>
										</button>
									</dt>
									<dd x-show="open" class="mt-2 pr-12" id="faq-0">
										<p class="text-base text-gray-500">
											Pored lične satisfakcije što ste pomogli očuvanju mentalnog zdravlja u lokalnoj zajednici, i pomogli nekom od naših korisnika koji nemaju sredstava da to sebi sami obezbede, ima još stvari koje možete da dobijete.
											Ukoliko ste fizičko ili pravno lice, možete da dobijete neke od artikala iz našeg web shopa. Pravnim licima, kao znak zahvalnosti možemo da ponudimo sprovođenje nekih od naših treninga, seminara i radionica za
											razvijanje ličnih i poslovnih veština i kompetencija. Takođe možemo da ponudimo individualni savetodavni ili koučing rad sa zaposlenima.
										</p>
									</dd>
								</div>
							</dl>
						</div>

						<div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
							<g-image class="relative mx-auto px-4 md:px-0" src="~/assets/img/donacija-slika.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<svg class="hidden lg:block absolute mt-36" width="240" height="1086" viewBox="0 0 240 1086" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="-303" cy="543" r="543" fill="#FEF2F2" />
		</svg>

		<div class="bg-white" id="scroll">
			<div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<h2 class="text-3xl tracking-tight text-purple-800 sm:text-4xl">
					<span class="block">Donaciju možete izvršiti </span>
					<span class="block">popunjavanjem uplatnice</span>
					<span class="block">kako je navedeno u</span>
					<span class="block">primeru</span>
				</h2>
				<div class="mt-8 flex justify-center">
					<g-image src="~/assets/img/uplatnica.png" quality="100" alt="" srcset="" />
				</div>
			</div>
		</div>
		<div class="bg-white">
			<div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<h2 class="text-3xl tracking-tight text-purple-800 sm:text-4xl">
					<span class="block">ili jednostavnim </span>
					<span class="block">skeniranjem IPS QR koda </span>
					<span class="block">mobilnom aplikacijom </span>
					<span class="block">vaše banke.</span>
				</h2>
				<div class="mt-8 flex justify-center">
					<g-image src="~/assets/img/qr.png" alt="" srcset="" />
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
export default {
		// meta deskripcija
	metaInfo: {
		title: "Donacije | Savetovalište Ubuntu Centar",
		titleTemplate: "Donacije | Savetovalište Ubuntu Centar",

		meta: [
			{
				name: "title",
				content: "Donacije | Savetovalište Ubuntu Centar",
			},
			{
				name: "description",
				content: "Donirajte rad savetovališta i omogućite pružanje psihološke pomoći svim članovima društva.",
			},
			{
				key: "og:title",
				name: "og:title",
				content: "Donacije | Savetovalište Ubuntu Centar",
			},

			{
				key: "og:description",
				name: "og:description",
				content: "Donirajte rad savetovališta i omogućite pružanje psihološke pomoći svim članovima društva.",
			},
			{
				key: "og:image",
				property: "og:image",
				content: "https://ubuntucentar.com/assets/static/donacija-slika.3b6e8e5.e44d69cc10ef6d3a1ce2fd1cf0a02009.png",
			},
			{
				key: "twitter:title",
				name: "twitter:title",
				content: "Donacije | Savetovalište Ubuntu Centar",
			},
			{
				key: "twitter:description",
				name: "twitter:description",
				content: "Donirajte rad savetovališta i omogućite pružanje psihološke pomoći svim članovima društva.",
			},
			{
				key: "twitter:image",
				property: "twitter:image",
				content: "https://ubuntucentar.com/assets/static/donacija-slika.3b6e8e5.e44d69cc10ef6d3a1ce2fd1cf0a02009.png",
			},
		],
	},

	methods: {

		onClick() {
			let element = document.getElementById("scroll");
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		},
		processFile() {
			this.formData.files = event.target.files;
		},
	},
};
</script>
