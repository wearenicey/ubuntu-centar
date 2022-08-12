<template>
	<div class="relative max-w-7xl mx-auto px-6 sm:px-0">
		<div class="text-center">
			<h2 class="text-3xl text-purple-800 sm:text-4xl">Više o psihoterapiji</h2>
			<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Šta je psihoterapija, ko sve može da postane psihoterapeut i šta možemo da očekujemo ako se upustimo u ovaj proce</p>
		</div>
		<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
			<div v-for="post in $static.pocetna.edges" :key="post.node.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
				<a :href="post.node.path">
					<div class="flex-shrink-0">
						<g-image class="h-48 w-full object-cover" :src="require(`!!assets-loader!@img/${post.node.image}`)" alt="" />
					</div>
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<p class="text-sm font-medium text-indigo-600">
								<a :href="post.node.path" class="hover:underline"> </a>
							</p>
							<a :href="post.node.path" class="block mt-2">
								<p class="text-xl font-semibold text-gray-900">
									{{ post.node.title }}
								</p>
								<p class="mt-3 text-base text-gray-500">
									{{ post.node.excerpt }}
								</p>
							</a>
						</div>
						<div class="mt-6 flex items-center">
					
							<div class="">
								<div class="flex space-x-1 text-sm text-gray-500">
									<time :datetime="post.node.datetime">
										{{ post.node.humanTime }}
									</time>
									<span aria-hidden="true"> &middot; </span>
									<span> {{ post.node.timeToRead }} minuta čitanja </span>
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>
<!--GraphQl upit za  blog postove na karijera stranici-->

<static-query>
	query {
  pocetna:  allPost ( filter:{category: {eq: "psihoterapija"}} limit: 3) {
 
  edges {
    node {
       title
       path
       excerpt
      image
      pocetna  
			timeToRead
      featured
      humanTime: created(format: "DD.MM.YYYY")
      datetime: created
    }
  }
}
}

</static-query>

<script>
export default {
	props: {
		record: {},
	},
};
</script>
