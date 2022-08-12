<template>
	<Layout>
		<ClientOnly>
			<read-progress color="#8458c8" opacity="0.5" height="5px" :shadow="true"></read-progress>
		</ClientOnly>
		<div class="container max-w-5xl mx-auto">
			<div class="relative py-16 bg-white overflow-hidden">
				<div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>
				<div class="relative px-4 sm:px-6 lg:px-8">
					<div class="text-lg max-w-prose mx-auto">
						<h1 class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ $page.post.title }}</h1>
						<div class="text-center space-x-1 text-md pt-6 text-gray-500">
							<time :datetime="$page.post.datetime">
								{{ $page.post.humanTime }}
							</time>
							<span aria-hidden="true"> &middot; </span>
							<span> {{ $page.post.timeToRead }} minuta čitanja</span>
						</div>
						<g-image immediate="true" class="mt-4 w-full object-cover" :src="require(`!!assets-loader!@img/${$page.post.image}`)" alt="" />
					</div>
					<div class="mt-6 container">
						<div class="prose mx-auto text-left" v-html="$page.post.content"></div>
					</div>
					<div class="text-center mt-10 grid grid-flow-col lg:gap-4 gap-3 max-w-3xl mx-auto justify-center">
						<div>
							<ShareNetwork
								class="bg-blue-500 hover:bg-blue-600 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
								network="facebook"
								v-bind:url="api_url + this.$page.post.path"
								v-bind:title="this.$page.post.title"
								v-bind:description="this.$page.post.excerpt"
							>
								<svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path
										d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
									/>
								</svg>
							</ShareNetwork>
						</div>
						<div>
							<ShareNetwork
								class="linkdiln px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
								network="linkedin"
								v-bind:url="api_url + this.$page.post.path"
								v-bind:title="this.$page.post.title"
								v-bind:description="this.$page.post.excerpt"
							>
								<svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path
										d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
									/>
								</svg>
							</ShareNetwork>
						</div>
						<div>
							<ShareNetwork
								class="bg-blue-300 hover:bg-blue-400 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
								network="twitter"
								v-bind:url="api_url + this.$page.post.path"
								v-bind:title="this.$page.post.title"
								v-bind:description="this.$page.post.excerpt"
							>
								<svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path
										d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
									/>
								</svg>
							</ShareNetwork>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="pt-10 max-w-7xl mx-auto px-4 sm:px-6">
			<div class="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
				<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
					<div class="flex-shrink-0">
						<g-image class="h-48 w-full object-cover" src="~/assets/img/novisad.jpg" alt="psihološko savetovalište novi sad" />
					</div>
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<a href="/savetovaliste-novi-sad/" class="block mt-2">
								<h2 class="text-xl font-semibold text-gray-900">Psihološko savetovalište u Novom Sadu</h2>
								<p class="mt-3 text-base text-gray-500">Projekat "Novosadsko savetovalište Ubuntu" je pokrenut 2016. godine, sa namerom da našoj lokalnoj zajednici pružimo lako dostupnu psihološku pomoć u Novom Sadu.</p>
							</a>
						</div>
					</div>
					<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
						<a href="/savetovaliste-novi-sad/" class="text-base font-medium text-green-700 hover:text-green-600">Saznajte više<span aria-hidden="true"> &rarr;</span></a>
					</div>
				</div>

				<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
					<div class="flex-shrink-0">
						<g-image class="h-48 w-full object-cover" src="~/assets/img/beograd.jpg" alt="psihološko savetovalište beograd" />
					</div>
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<a href="/savetovaliste-beograd/" class="block mt-2">
								<h2 class="text-xl font-semibold text-gray-900">Psihološko savetovalište u Beogradu</h2>
								<p class="mt-3 text-base text-gray-500">3 godine kasnije, usled velikog interesovanja i uspeha, pokrenut je i projekat "Beogradsko savetovalište Ubuntu", trenutno na 3 adrese.</p>
							</a>
						</div>
					</div>
					<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
						<a href="/savetovaliste-beograd/" class="text-base font-medium text-green-700 hover:text-green-600">Saznajte više<span aria-hidden="true"> &rarr;</span></a>
					</div>
				</div>

				<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
					<div class="flex-shrink-0">
						<g-image class="h-48 w-full object-cover" src="~/assets/img/onilne.jpg" alt="online psihoterapija" />
					</div>
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<a href="/online-savetovaliste/" class="block mt-2">
								<h2 class="text-xl font-semibold text-gray-900">Online psihoterapija</h2>
								<p class="mt-3 text-base text-gray-500">Kako bismo unapredili rad savetovališta i usluge koje pružamo, od sada je moguće zakazati rad sa psihoterapeutom online.</p>
							</a>
						</div>
					</div>
					<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
						<a href="/online-savetovaliste/" class="text-base font-medium text-green-700 hover:text-green-600">Saznajte više<span aria-hidden="true"> &rarr;</span></a>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>
<!--GraphQl upit za  single blog post po slug-u-->

<page-query>
  query Post ($path: String!) {
  post: post (path: $path) {
		path
			name
      title
			metaDesc
			category {
				title
			}
      image
      image_caption
      excerpt
			imageTwo {
        path
        alt
      }
      content
      humanTime: created(format: "DD.MM.YYYY")
      datetime: created
      timeToRead
  	}
  }
</page-query>

<script>
export default {
	//meta desc dinamicni
	metaInfo() {
		return {
			title: this.$page.post.title + " | Ubuntu Blog",
			titleTemplate: this.$page.post.title + " | Ubuntu Blog",

			meta: [
				{ name: "description", content: this.$page.post.metaDesc },

				{
					key: "og:image",
					property: "og:image",
					content: "https://ubuntucentar.com" + this.$page.post.imageTwo.path,
				},
				{
					key: "og:title",
					name: "og:title",
					content: this.$page.post.title + " | Ubuntu Blog",
				},

				{
					key: "og:type",
					name: "og:type",
					content: "article",
				},

				{
					key: "og:description",
					name: "og:description",
					content: this.$page.post.metaDesc,
				},
				{
					key: "twitter:title",
					name: "twitter:title",
					content: this.$page.post.title + " | Ubuntu Blog",
				},
				{
					key: "twitter:description",
					name: "twitter:description",
					content: this.$page.post.metaDesc,
				},
				{
					key: "twitter:image",
					property: "twitter:image",
					content: "https://ubuntucentar.com" + this.$page.post.imageTwo.path,
				},
			],

			// etc...
		};
	},
	data: function () {
		return {
			api_url: "https://ubuntucentar.com/",
			facebook: "http://www.facebook.com/sharer/sharer.php?u=",
		};
	},
	components: {
		ReadProgress: () =>
			import("vue-read-progress")
				.then((m) => m.default)
				.catch(),
	},
};
</script>
