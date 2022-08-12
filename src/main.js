// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'
import Vuelidate from 'vuelidate'

import InfiniteLoading from 'vue-infinite-loading'



export default function (Vue, { router, head, isClient }) {

	// pozivanje infinit loadinga napravljena funkcija radi gridsome da moze raditi na produkciji
	Vue.use(InfiniteLoading)

	Vue.mixin({
		directives: {
			reload: {
				inserted: function (el, binding, vnode) {
					el.addEventListener('click', (evt) => {
						if (process.isClient) {
							evt.preventDefault();
							window.location.href = evt.target.href || el.href;
						}
					});
				}
			}
		},
	});
	// putanja linkova
	router.beforeEach((to, _from, next) => {
		head.meta.push({
			key: 'og:url',
			name: 'og:url',
			content: process.env.GRIDSOME_BASE_PATH + to.path,
		})
		next()
		console.log(to.path)

	})
	head.htmlAttrs = { lang: 'sr' }
	//validacija napravljena funkcija radi gridsome da moze raditi na produkciji
	Vue.use(Vuelidate)


	if (process.isClient) {
		Vue.use(require("vue-backtotop").default, {
			text: "top",
			visibleoffset: "480",
			visibleoffsetbottom: "0",
		});
	}
	// pozivanje funkcija ako je produkcija za horiznotal scroll i za serovanjw blogova
	if (process.isClient) {
		Vue.use(require("vue-horizontal").default)
	}

	if (process.isClient) {
		Vue.use(require("vue-social-sharing").default)
	}
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout)
}
