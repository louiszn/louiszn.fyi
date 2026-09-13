export const WORDS_PER_MINUTE = 200;

export function countWords(body?: string) {
	return body?.trim().split(/\s+/).filter(Boolean).length ?? 0;
}

export function estimateReadTime(body?: string) {
	const words = countWords(body);
	return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function formatPublishDate(publishDate: Date) {
	return publishDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
