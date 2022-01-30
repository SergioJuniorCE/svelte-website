<script>
  import { todos } from "$lib/stores/todos"
  import Todo from "./Todo.svelte"
</script>
{#each $todos as todo}
  <Todo todo={todo}/>
{/each}