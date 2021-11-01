<script>
  import { todos } from "../../../stores/todos"
  import Todo from "./Todo.svelte"
</script>
{#each $todos as todo}
  <Todo todo={todo}/>
{/each}