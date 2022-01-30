<script>
  import { goto } from '$app/navigation'

  export let title;
  export let text;

  const handleClick = () => {
    goto(`/${route}`, true) 
  }
</script>

<div class="card mb-3">
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{text}</p>
    <button class="btn btn-primary" on:click={handleClick}>Go to {title}</button>
  </div>
</div>