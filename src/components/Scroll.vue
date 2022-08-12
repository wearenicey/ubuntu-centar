<template>
	<client-only>
		<vue-horizontal class="this">
			<section class="py-6 first mr-3" v-for="cate in $static.allCategory.edges" :key="cate.node.id">
				<g-link :to="cate.node.path" class="px-5 rounded-md py-3  bg-gray-100 ">{{ cate.node.title }}</g-link>
			</section>
		</vue-horizontal>
	</client-only>
</template>
<!--GraphQl upit za  dobijanje kategorija-->

<static-query>
query {
  allCategory {
    edges {
      node {
        path
        id
        title
      }
    }
  }
}
</static-query>

<script>


export default {
	// definisanje vue horizontal npm instaliran
	data() {
		return { items: [1, 2, 3] };
	},
};
</script>
<style scoped>
a.active--exact.active {
	color: #059669;
}

</style>
