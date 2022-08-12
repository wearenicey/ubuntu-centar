<template>
	<div x-data="{ mobileMenuOpen: false }" class="relative bg-white">
		<div class="flex max-w-7xl justify-between mx-auto items-center px-4 py-6 sm:px-6 md:space-x-10" id="position">
			<div>
				<g-link to="/" class="flex">
					<span class="sr-only">Ubuntu Savetovaliste</span>
					<img class="block h-12 w-auto sm:h-14" src="/logo.svg" alt="Ubuntu Savetovaliste" />
				</g-link>
			</div>
			<div class="mr-2 my-2 md:hidden">
				<button x-on:click="mobileMenuOpen = true" type="button"
					class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
					aria-expanded="false">
					<span class="sr-only">Open menu</span>
					<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
			<div class="hidden md:flex md:items-center md:justify-between">
				<nav class="flex space-x-10 items-center">
					<div class="relative" x-description="Flyout menu, show/hide based on flyout menu state."
						x-on:click.away="flyoutMenuOpen = false" x-data="{ flyoutMenuOpen: false }">
						<button x-on:click="flyoutMenuOpen = !flyoutMenuOpen" type="button"
							class="text-gray-700 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
							aria-expanded="false">
							<span>Naše lokacije</span>

							<svg class="text-gray-400 ml-1 h-5 w-5 group-hover:text-gray-500"
								xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
								aria-hidden="true">
								<path fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd" />
							</svg>
						</button>

						<div class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0"
							x-show="flyoutMenuOpen" x-transition:enter="transition ease-out duration-200"
							x-transition:enter-start="opacity-0 translate-y-1"
							x-transition:enter-end="opacity-100 translate-y-0"
							x-transition:leave="transition ease-in duration-150"
							x-transition:leave-start="opacity-100 translate-y-0"
							x-transition:leave-end="opacity-0 translate-y-1">
							<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
									<g-link to="/savetovaliste-novi-sad/"
										class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
										<div>
											<p class="text-base font-medium text-gray-900">Novi Sad</p>
										</div>
									</g-link>

									<g-link to="/savetovaliste-beograd/"
										class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
										<div>
											<p class="text-base font-medium text-gray-900">Beograd</p>
										</div>
									</g-link>

									<g-link to="/online-savetovaliste/"
										class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
										<div>
											<p class="text-base font-medium text-gray-900">Online</p>
											<p class="mt-1 text-sm text-gray-500">Treba vam psiholog ili psihoterapeut
												online? Ubuntu je pravi izbor.</p>
										</div>
									</g-link>
								</div>
							</div>
						</div>
					</div>

					<div class="relative" x-description="Flyout menu, show/hide based on flyout menu state."
						x-on:click.away="flyoutMenuOpen = false" x-data="{ flyoutMenuOpen: false }">
						<button x-on:click="flyoutMenuOpen = !flyoutMenuOpen" type="button"
							class="text-gray-700 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
							aria-expanded="false">
							<span>O nama</span>

							<svg class="text-gray-400 ml-1 h-5 w-5 group-hover:text-gray-500"
								xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
								aria-hidden="true">
								<path fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd" />
							</svg>
						</button>

						<div class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0"
							x-show="flyoutMenuOpen" x-transition:enter="transition ease-out duration-200"
							x-transition:enter-start="opacity-0 translate-y-1"
							x-transition:enter-end="opacity-100 translate-y-0"
							x-transition:leave="transition ease-in duration-150"
							x-transition:leave-start="opacity-100 translate-y-0"
							x-transition:leave-end="opacity-0 translate-y-1">
							<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
									<g-link to="/zasto-ubuntu/"
										class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
										<div>
											<p class="text-base font-medium text-gray-900">Zašto Ubuntu?</p>
											<p class="mt-1 text-sm text-gray-500">Misija Ubuntu centra je da svima
												omogući lako dostupnu psihološku pomoć</p>
										</div>
									</g-link>

									<g-link to="/karijera/"
										class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
										<div>
											<p class="text-base font-medium text-gray-900">Karijera</p>
											<p class="mt-1 text-sm text-gray-500">Kako postati psihoterapeut?
												Savetovalište Ubuntu je pravi izbor</p>
										</div>
									</g-link>
								</div>
							</div>
						</div>
					</div>

					<div class="relative" x-description="Flyout menu, show/hide based on flyout menu state."
						x-on:click.away="flyoutMenuOpen = false" x-data="{ flyoutMenuOpen: false }">
						<button x-on:click="flyoutMenuOpen = !flyoutMenuOpen" type="button"
							class="text-gray-700 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
							aria-expanded="false">
							<span>Blog</span>

							<svg class="text-gray-400 ml-1 h-5 w-5 group-hover:text-gray-500"
								xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
								aria-hidden="true">
								<path fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd" />
							</svg>
						</button>

						<div class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xl sm:px-0 lg:ml-0 -right-20"
							x-show="flyoutMenuOpen" x-transition:enter="transition ease-out duration-200"
							x-transition:enter-start="opacity-0 translate-y-1"
							x-transition:enter-end="opacity-100 translate-y-0"
							x-transition:leave="transition ease-in duration-150"
							x-transition:leave-start="opacity-100 translate-y-0"
							x-transition:leave-end="opacity-0 translate-y-1">
							<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div class="relative grid gap-6 bg-white px-5 py-6 sm:p-8">
									<div v-for="category in $static.category.edges" :key="category.node.id">
										<g-link :to="category.node.path"
											class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
											<div>
												<p class="text-base font-medium text-gray-900">{{ category.node.title }}
												</p>
											</div>
										</g-link>
									</div>
								</div>
								<div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
									<div>
										<p class="text-sm tracking-wide font-medium text-gray-500 uppercase">Poslednje
											objave</p>
										<ul role="list" class="mt-6 space-y-6">
											<li class="flow-root" v-for="post in $static.blogs.edges"
												:key="post.node.id">
												<g-link :to="post.node.path"
													class="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">
													<div class="hidden sm:block flex-shrink-0">
														<img class="w-32 h-20 object-cover rounded-md"
															:src="post.node.imageTwo.path"
															:alt="post.node.imageTwo.alt" />
													</div>
													<div class="min-w-0 flex-1 sm:ml-8">
														<p class="font-medium text-gray-900 hover:text-gray-700">
															{{ post.node.title }}</p>
														<p class="mt-1 text-sm text-gray-500">{{ post.node.excerpt }}
														</p>
													</div>
												</g-link>
											</li>
											<div class="mt-5 text-sm">
												<g-link to="/blog/"
													class="font-medium text-green-600 hover:text-green-500"> Pogledaj
													sve tekstove <span aria-hidden="true">&rarr;</span></g-link>
											</div>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<g-link to="/donacije/" class="text-base font-medium text-gray-700 hover:text-gray-900">Donacije
					</g-link>
					<g-link to="/kontakt/" class="text-base  font-medium flex rounded-3xl justify-center px-5 py-1 border border-transparent
					 text-white bg-green-600 hover:bg-green-700">Kontakt
					</g-link>
				</nav>
			</div>
		</div>

		<div class="z-30 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
			x-description="Mobile menu, show/hide based on mobile menu state." x-show="mobileMenuOpen"
			x-transition:enter="duration-200 ease-out" x-transition:enter-start="opacity-0 scale-95"
			x-transition:enter-end="opacity-100 scale-100" x-transition:leave="duration-100 ease-in"
			x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95">
			<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
				<div class="pt-5 pb-6 px-5">
					<div class="flex items-center justify-between">
						<div>
							<img class="block h-12 w-auto sm:h-10" src="/logo.svg" alt="Workflow" />
						</div>
						<div class="-mr-2">
							<button x-on:click="mobileMenuOpen = false" type="button"
								class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
								<span class="sr-only">Close menu</span>
								<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
									stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
					<div class="mt-6">
						<nav class="grid gap-y-8">
							<g-link to="/savetovaliste-beograd/"
								class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<span class="text-base font-medium text-gray-900"> Savetovalište Beograd </span>
							</g-link>

							<g-link to="/savetovaliste-novi-sad/"
								class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<span class="text-base font-medium text-gray-900"> Savetovalište Novi Sad </span>
							</g-link>

							<g-link to="/online-savetovaliste/"
								class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<span class="text-base font-medium text-gray-900"> Online savetovalište </span>
							</g-link>

							<g-link to="/blog/" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<span class="text-base font-medium text-gray-900"> Blog </span>
							</g-link>
						</nav>
					</div>
				</div>
				<div class="py-6 px-5 space-y-6">
					<div class="grid grid-cols-2 gap-y-4 gap-x-8">
						<g-link to="/zasto-ubuntu/" class="text-base font-medium text-gray-900 hover:text-gray-700">
							Zašto Ubuntu? </g-link>
						<g-link to="/karijera/" class="text-base font-medium text-gray-900 hover:text-gray-700">
							Karijera </g-link>
					</div>
					<div>
						<g-link to="/kontakt/"
							class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-3xl shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">
							Kontaktirajte nas </g-link>
						<p class="mt-6 text-center text-base font-medium text-gray-500">
							Želite da pomognete?
							<g-link to="/donacije/" class="text-green-600 hover:text-green-500"> Donirajte </g-link>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<!--GraphQl upit za  dobijanje kategorija i blogova za header po datumu dodavanja-->


<static-query>
	query {
	blogs: allPost (sortBy: "created", limit: 2) {
	edges {
	node {
	id
	path
	title
	excerpt
	image
	created
	imageTwo {
	path
	alt
	}
	}
	}
	}

	category: allCategory ( filter:{nav: {eq: true}} limit: 6) {
	edges {
	node {
	path
	id
	title
	desc
	}
	}
	}
	}
</static-query>

<script>
	export default {
		name: "Header",

		data() {
			return {};
		},
	};
</script>