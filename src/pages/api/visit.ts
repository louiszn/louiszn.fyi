
import type { APIRoute } from "astro";

const redis = await import("bun")
	.then((mod) => mod.redis)
	.catch(() => null);

const COUNT_KEY = "visit:count";

export const prerender = false;

export const POST: APIRoute = async () => {
	if (!process.env.REDIS_URL || !redis) {
		return new Response("Server is not available", { status: 500 });
	}

	const count = await redis.incr(COUNT_KEY);
	return Response.json({ count });
}

export const GET: APIRoute = async () => {
	if (!process.env.REDIS_URL || !redis) {
		return new Response("Server is not available", { status: 500 });
	}

	const value = Number(await redis.get(COUNT_KEY));
	const count = Number.isNaN(value) ? 0 : value;

	return Response.json({ count });
}
