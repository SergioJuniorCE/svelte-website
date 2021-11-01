<script>
  import TodoList from "../../components/utils/todos/TodoList.svelte";
  import TodoForm from "../../components/utils/todos/TodoForm.svelte";
</script>

<h1>Todos</h1>
<hr>
<div class="row">
  <div class="col">
    <!-- <TodoForm/> -->
  </div>
  <div class="col" style="overflow-y: scroll; height: 45rem;">
    <TodoList/>
  </div>
</div>


