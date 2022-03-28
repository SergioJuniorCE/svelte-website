const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["bootstrap.min.js","budget.scss","favicon.png","img/default_profile_pic.jpg"]),
	_: {
		mime: {".js":"application/javascript",".scss":"text/x-scss",".png":"image/png",".jpg":"image/jpeg"},
		entry: {"file":"start-21cc3cb8.js","js":["start-21cc3cb8.js","chunks/vendor-6ff58972.js","chunks/singletons-a6a7384f.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js')),
			() => Promise.resolve().then(() => require('../server/nodes/11.js')),
			() => Promise.resolve().then(() => require('../server/nodes/12.js')),
			() => Promise.resolve().then(() => require('../server/nodes/13.js')),
			() => Promise.resolve().then(() => require('../server/nodes/14.js')),
			() => Promise.resolve().then(() => require('../server/nodes/15.js')),
			() => Promise.resolve().then(() => require('../server/nodes/16.js')),
			() => Promise.resolve().then(() => require('../server/nodes/17.js')),
			() => Promise.resolve().then(() => require('../server/nodes/18.js')),
			() => Promise.resolve().then(() => require('../server/nodes/19.js')),
			() => Promise.resolve().then(() => require('../server/nodes/20.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/dashboard\/?$/,
				params: null,
				path: "/dashboard",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/PostCard\/?$/,
				params: null,
				path: "/PostCard",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/contact\/?$/,
				params: null,
				path: "/contact",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/privacy\/?$/,
				params: null,
				path: "/privacy",
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/profile\/?$/,
				params: null,
				path: "/profile",
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/budget\/?$/,
				params: null,
				path: "/budget",
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/meals\/?$/,
				params: null,
				path: "/meals",
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/posts\/?$/,
				params: null,
				path: "/posts",
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/posts\/Search\/?$/,
				params: null,
				path: "/posts/Search",
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/posts\/create\/?$/,
				params: null,
				path: "/posts/create",
				a: [0,13],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/posts\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/trips\/?$/,
				params: null,
				path: "/trips",
				a: [0,15],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/auth\/?$/,
				params: null,
				path: "/auth",
				a: [0,16,17],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/auth\/register\/?$/,
				params: null,
				path: "/auth/register",
				a: [0,16,18],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/test\/?$/,
				params: null,
				path: "/test",
				a: [0,19],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/tos\/?$/,
				params: null,
				path: "/tos",
				a: [0,20],
				b: [1]
			}
		]
	}
});
