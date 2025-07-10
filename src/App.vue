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
      'https://img.freepik.com/free-photo/misurina-sunset_181624-34793.jpg?t=st=1752126827~exp=1752130427~hmac=1bf7026036a524fcbacb4167b1fd2d7498530ab2f3c0f1a7cbcde76406664ca1&w=1380',
      'https://img.freepik.com/free-photo/japan-background-digital-art_23-2151546131.jpg?t=st=1752126784~exp=1752130384~hmac=75195b586fc73f29f4c57f47006f9b45d6b7630222056e874d34606cafa2e062&w=826',
      'https://img.freepik.com/free-photo/bright-pop-landscape-design_23-2149213461.jpg?t=st=1752127073~exp=1752130673~hmac=32797a544e2bff85507a10b53ef2710bfaa1692150ae5f945379e6fd808c5eec&w=826',
      'https://img.freepik.com/free-photo/galaxy-nature-aesthetic-background-starry-sky-mountain-remixed-media_53876-126761.jpg?t=st=1752127110~exp=1752130710~hmac=4bbcf262a96267f8ebeaf2113c73d3d091f43eee92fc314ad440d6d0d7bf2d52&w=826',
      'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?t=st=1752127296~exp=1752130896~hmac=77b6ea44d3d9045376b49ea2bfae7f833daae1d9ec5636321ee990f26af43da2&w=826',
      'https://img.freepik.com/free-photo/bright-light-black-background_23-2148132465.jpg?t=st=1752127334~exp=1752130934~hmac=948ea6c2b4f2d5ecff55cc057c1f09efb0653e6a8a9e2ece015a48e69169fc76&w=826',
      'https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?t=st=1752126460~exp=1752130060~hmac=e6002f290a2e219fa0c88a87872952ecc64a7006b96b93da9d9dbe9e2a380cb7&w=826',
      'https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1752127189~exp=1752130789~hmac=88b4403acbb2a606c9bdd93f09231b233328734712303e1167386c5f672c5578&w=826',


      // 'https://plus.unsplash.com/premium_photo-1750343360238-b6861fc1f95b?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      // 'https://images.unsplash.com/photo-1746730015025-6d1847f9964a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      // 'https://images.unsplash.com/photo-1750688650545-d9e2a060dfe8?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      // 'https://images.unsplash.com/photo-1751301833796-9aa515185f10?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      // 'https://images.unsplash.com/photo-1750173588233-8cd7ba259c15?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      // 'https://burst.shopifycdn.com/photos/landscape-of-green-rolling-hills-and-mountain-peaks.jpg?width=925&format=pjpg&exif=0&iptc=0',
      // 'https://burst.shopifycdn.com/photos/glacier-and-mountain-cold-landscape.jpg?width=925&format=pjpg&exif=0&iptc=0'
    ]
  }
}

</script>