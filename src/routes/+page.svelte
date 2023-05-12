<script>
	let newTodo = '';
</script>

<h1>Awesome Todo App</h1>

<!-- create a form with an input field and bind the value to a variable -->
<form>
	<input type="text" placeholder="What needs to be done?" bind:value={newTodo} />
</form>

<style>
	h1 {
		color: rgb(21, 14, 151);
		text-align: center;
	}
	form {
		display: flex;
		justify-content: center;
	}
	input {
		background-color: rgb(66, 104, 117);
		border: rgb(21, 14, 151) solid 0.2rem;
		border-radius: 1rem;
		color: white;
	}
	input::placeholder {
		color: rgb(178, 186, 219);
	}
</style>
