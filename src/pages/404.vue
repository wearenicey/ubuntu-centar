<template>
	<Layout>
		<div class="min-h-full pt-16 pb-12 flex flex-col bg-white">
			<main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
				<div class="py-16">
					<div class="text-center">
						<p class="text-sm font-semibold text-purple-800 uppercase tracking-wide">Uskoro</p>
						<h1 class="mt-2 text-4xl text-gray-900 tracking-tight sm:text-5xl">Stranica je u izradi</h1>
						<div class="mt-6">
							<a href="/" class="text-base font-medium text-purple-600 hover:text-purple-500">Nazad na početnu stranicu<span aria-hidden="true"> &rarr;</span></a>
						</div>
					</div>
				</div>
				<div class="flex-shrink-0 flex justify-center">
					<a href="/" class="inline-flex">
						<span class="sr-only">Workflow</span>
						<g-image class="h-96 w-96" src="~/assets/img/404.svg" alt="" />
					</a>
				</div>
			</main>
		</div>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: "Nepostojeći sadržaj | Savetovalište Ubuntu Centar",
		titleTemplate: "Nepostojeći sadržaj | Savetovalište Ubuntu Centar",

		meta: [
			{
				name: "title",
				content: "Nepostojeći sadržaj | Savetovalište Ubuntu Centar",
			},
			{
				name: "description",
				content: "Nepostojeći sadržaj",
			},
		],
	},
};
</script>
