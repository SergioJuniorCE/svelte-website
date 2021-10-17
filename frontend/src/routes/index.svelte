<script>
  import Carousel from "../components/Carousel.svelte";

  let slides = [
    {
      src: "img/29365.jpg",
      alt: "1"
    },
    {
      src: "img/29366.jpg",
      alt: "2"
    },
    {
      src: "img/29403.jpg",
      alt: "3"
    }
  ]
</script>
<br>
<Carousel imgs={slides}/>

