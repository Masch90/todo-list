import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';

export const load = async () => {
	console.log('load');
	const response = prisma.todo.findMany({
		where: { done: false }
	});

	return { todos: response };
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const author = data.get('author');
		const todo = data.get('todo');

		if (!todo || !author) {
			return fail(400, { todo, author, missing: true });
		}

		if (typeof todo != 'string' || typeof author != 'string') {
			return fail(400, { incorrect: true });
		}

		await prisma.todo.create({
			data: {
				title: todo,
				author: author
			}
		});
	}
};
