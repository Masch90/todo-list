<script lang="ts">
	import Icon from '@iconify/svelte';
	let newTodo = '';
	export let data;
	let todos = data.todos;

	async function handleDelete(id: number) {
		await fetch('/' + id, { method: 'DELETE' });
		todos = todos.filter((todo) => todo.id !== id);
	}

	async function handlePatchDone(id: number) {
		await fetch('/' + id, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ done: true })
		});
		todos = todos.filter((todo) => todo.id !== id);
	}
</script>

<h1 class="h1 text-center pb-6 checkmark">Awesome Todo App</h1>

<form class="mb-6" method="POST">
	<label class="label">
		<span>Create a new Todo</span>
		<input
			name="todo"
			class="input mt-3"
			bind:value={newTodo}
			type="text"
			placeholder="What needs to be done?"
		/>
		<input type="hidden" name="author" value={data.user.username} />
	</label>
</form>

{#each todos as todo}
	<div class="card flex justify-between relative m-3">
		<button class="bg-green-900 p-2" on:click={() => handlePatchDone(todo.id)}>
			<Icon icon="bi:check2-circle" />
		</button>
		<div class="p-4">
			{todo.title}
		</div>
		<button class="bg-red-900 p-2" on:click={() => handleDelete(todo.id)}>
			<Icon icon="bi:trash" />
		</button>
	</div>
{/each}
