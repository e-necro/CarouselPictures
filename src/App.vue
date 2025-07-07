<template>
  <CarouselPictures 
    :aSlides="arSlides"
    ref="showSlidesCarousel"
    :show-preview="true"
  ></CarouselPictures>
  <button @click="showImg">Show slider</button>
</template>


<script >
import CarouselPictures from './components/CarouselPictures.vue';


export default {
  components: {
    CarouselPictures,
  },
 
  data() {
    return {
      arSlides: []
    }
  },
  methods: {
    showImg() {
      const sliderCarousel = this.$refs.showSlidesCarousel;
      if (sliderCarousel) {
        sliderCarousel.showConsole();
      }
      else {
        console.error('child method err!');
      }
    }
  },
  mounted() {
    this.arSlides = [
      'https://plus.unsplash.com/premium_photo-1750343360238-b6861fc1f95b?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1746730015025-6d1847f9964a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1750688650545-d9e2a060dfe8?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1751301833796-9aa515185f10?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1750173588233-8cd7ba259c15?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  }
}

</script>