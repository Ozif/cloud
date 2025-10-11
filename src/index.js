export default {
	async fetch(req, env, ctx) {
		const url = new URL(req.url);

		// API 路由处理
		if (url.pathname.startsWith('/api/')) {
		}

		// 静态资源处理
		try {
			const response = await env.ASSETS.fetch(req);
			const newResponse = new Response(response.body, response);
			newResponse.headers.set('Cache-Control', 'public, max-age=86400');
			return newResponse;
		} catch (e) {
			console.log('静态资源获取失败:', e);
		}
	},

	async scheduled(event, env, ctx) {
	},
};
