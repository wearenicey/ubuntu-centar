<template>
	<Layout>
		<div>
			<div class="relative max-w-7xl mx-auto px-6 mt-20 sm:px-0">
				<div class="text-center">
					<h1 class="text-3xl text-gray-800 sm:text-4xl">{{ $page.category.title }}</h1>
					<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">{{ $page.category.desc }}</p>
					<div class="mt-10"></div>
				</div>
				<div class="relative max-w-7xl mx-auto">
					<Scroll />
				</div>
				<div class="mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					<div v-for="category in $page.category.belongsTo.edges" :key="category.node.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
						<div class="flex-shrink-0">
							<a :href="category.node.path">
								<g-image class="h-48 w-full object-cover" :src="require(`!!assets-loader!@img/${category.node.image}`)" alt="" />
							</a>
						</div>
						<div class="flex-1 bg-white p-6 flex flex-col justify-between">
							<div class="flex-1">
								<p class="text-sm font-medium text-indigo-600">
									<a :href="category.node.path" class="hover:underline"> </a>
								</p>
								<a :href="category.node.path" class="block mt-2">
									<p class="text-xl font-semibold text-gray-900">
										{{ category.node.title }}
									</p>
									<p class="mt-3 text-base text-gray-500">
										{{ category.node.excerpt }}
									</p>
								</a>
							</div>
							<div class="mt-6 flex items-center">
								<div class="">
									<div class="flex space-x-1 text-sm text-gray-500">
										<time :datetime="category.node.datetime">
											{{ category.node.humanTime }}
										</time>
										<span aria-hidden="true"> &middot; </span>
										<span> {{ category.node.timeToRead }} minuta čitanja </span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>
<!--GraphQl upit za  blog postove po kategoriji-->

<page-query>
query($id: ID!) {

  category(id: $id) {
			imageCategory {
        path
        alt
      }
		id
    title
		desc
		metaDesc
    belongsTo  {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            path
            excerpt
            image
						timeToRead
          featured
          humanTime: created(format: "DD.MM.YYYY")
          datetime: created
          }
        }
      }
    }
  }




  }




</page-query>

<script>
// importovanje komponete
import Scroll from "../components/Scroll.vue";

export default {
	//pozivanje komponente
	components: { Scroll },

	metaInfo() {
		//dinamicki meta desc
		return {
			title: this.$page.category.title + " | Ubuntu Blog",
			titleTemplate: this.$page.category.title + " | Ubuntu Blog",

			meta: [
				{ name: "description", content: this.$page.category.metaDesc },
				{
					key: "og:image",
					property: "og:image",
					content: "https://ubuntucentar.com" + this.$page.category.imageCategory.path,
				},
				{
					key: "og:title",
					name: "og:title",
					content: this.$page.category.title + " | Ubuntu Blog",
				},

				{
					key: "og:type",
					name: "og:type",
					content: "article",
				},

				{
					key: "og:description",
					name: "og:description",
					content: this.$page.category.metaDesc,
				},
				{
					key: "twitter:title",
					name: "twitter:title",
					content: this.$page.category.title + " | Ubuntu Blog",
				},
				{
					key: "twitter:description",
					name: "twitter:description",
					content: this.$page.category.metaDesc,
				},
				{
					key: "twitter:image",
					property: "twitter:image",
					content: "https://ubuntucentar.com" + this.$page.category.imageCategory.path,
				},
			],

			// etc...
		};
	},

	data() {
		return {};
	},
};
</script>
<style></style>
