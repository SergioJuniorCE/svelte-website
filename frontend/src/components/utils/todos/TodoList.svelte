<script>
  import Todo from "./Todo.svelte"
  import { todos } from '../../../stores/todostore'
</script>
{#each $todos as todo}
  <Todo todo={todo}/>
{/each}