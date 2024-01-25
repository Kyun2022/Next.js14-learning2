import { comments } from "./data";

export async function GET() {
	return new Response(JSON.stringify(comments), {
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export async function POST(request: Request) {
	const comment = await request.json();
	const newComment = {
		id: comments.length + 1,
		text: comment.text,
	};
	comments.push(newComment);
	return new Response(JSON.stringify(newComment), {
		// ここを修正
		headers: {
			"Content-Type": "application/json",
		},
		status: 201,
	});
}