<script>
  import { range } from '../../static/js/range.js';
  export let imgs;
</script>

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    {#each range(0, imgs.length, 1) as i}
       <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="{i}"
        class:active={i === 0}
        aria-current="true"
        aria-label="Slide {i}"></button>
    {/each}
  </div>
  <!-- Slides -->
  
  <div class="carousel-inner">
    {#each imgs as img, i}
      <div class="carousel-item" class:active={i === 0}>
        <img src="{img.src}" class="d-block w-100" alt="{img.alt}">
      </div>
    {/each}
  </div>
  <!-- Controls -->
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>