import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export async function PATCH({ params, request }) {
	const { todoId } = params;
	const { done } = await request.json();
	if (typeof done !== 'boolean') {
		return json({ error: 'Invalid request' }, { status: 400 });
	}
	const todo = await prisma.todo.update({
		where: { id: parseInt(todoId) },
		data: { done }
	});
	return json(todo);
}

export async function DELETE({ params }) {
	const { todoId } = params;
	await prisma.todo.delete({ where: { id: parseInt(todoId) } });
	return json({});
}
