// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
	tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
	siteName: 'Ubuntu Centar',
	siteUrl: 'https://ubuntucentar.com/',
	plugins: [
		{
			use: 'gridsome-plugin-gtm',
			options: {
				id: 'GTM-TST9HFJ',
				enabled: true,
				debug: true
			}
		},

		{
			use: '@gridsome/plugin-sitemap',
			options: {
				exclude: ['/404', '/blog/2', '/blog/3'],
				config: {

					'/': {
						changefreq: 'weekly',
						priority: 1.0,
						lastmod: '2021-12-25',
					},
					'/savetovaliste-beograd/': {
						changefreq: 'weekly',
						priority: 0.9,
						lastmod: '2021-12-22',
					},
					'/savetovaliste-novi-sad/': {
						changefreq: 'weekly',
						priority: 0.9,
						lastmod: '2021-12-22',
					},
					'/online-savetovaliste/': {
						changefreq: 'weekly',
						priority: 0.9,
						lastmod: '2021-12-22',
					},
					'/psihoterapeuti-beograd/': {
						changefreq: 'weekly',
						priority: 0.9,
						lastmod: '2021-12-22',
					},
					'/psihoterapeuti-novi-sad/': {
						changefreq: 'weekly',
						priority: 0.9,
						lastmod: '2021-12-22',
					},
					'/blog/': {
						changefreq: 'daily',
						priority: 0.9,
						lastmod: '2021-12-22',
					},
					'/blog/*': {
						changefreq: 'daily',
						priority: 0.7,
						lastmod: '2021-12-22',
					},
					'/blog/*/*': {
						changefreq: 'daily',
						priority: 0.7,
						lastmod: '2021-12-25',
					},
					'/karijera/': {
						changefreq: 'monthly',
						priority: 0.8,
						lastmod: '2021-12-22',
					},
					'/kontakt/': {
						changefreq: 'monthly',
						priority: 0.8,
						lastmod: '2021-12-22',
					},
					'/zasto-ubuntu/': {
						changefreq: 'monthly',
						priority: 0.8,
						lastmod: '2021-12-22',
					},
					'/donacije/': {
						changefreq: 'monthly',
						priority: 0.8,
						lastmod: '2021-12-22',
					},
				}
			}
		},


		{
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'Category',
				path: './content/category/*.md'
			}
		},

		{
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'Author',
				path: './content/author/*.md'
			}
		},

		{
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'Post',
				path: './content/blog/**/**/*.md',

				refs: {
					author: 'Author',
					category: {
						typeName: 'Category',
						create: true
					}
				}
			},
		},

		{
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'Blog',
				path: './content/blog/**/**/*.md',

				refs: {
					author: 'Author',
				}
			},
		},


	],
	templates: {
		Post: '/blog/:category/:path',

		Category: [
			{
				path: '/blog/:id',
				componenent: '~/templates/Category.vue',
			},
		],



	},

	transformers: {
		remark: {
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
			anchorClassName: 'icon icon-link',
			plugins: [
				// ...global plugins
			],
		},
	},
	chainWebpack: config => {
		config.resolve.alias.set('@img', '@/assets/img')
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: postcssPlugins,
			},
		},
	},
}

