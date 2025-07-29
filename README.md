## Carousel pictures
Like this:
![screenshot] (https://raw.githubusercontent.com/e-necro/CarouselPictures/refs/heads/main/src/assets/images/preview.png)

### params
```
  <CarouselPictures 
    :aSlides="arSlides"
    ref="showSlidesCarousel"
    :show-preview="false"
    :auto-play="true"
    :autoplay-speed="3500"
    :lazy-load-imgs="true"
  ></CarouselPictures>
```
where is:
 - **aSlides** - array with "/path/to/image"
 - **ref="showSlidesCarousel"** - this is necessary to call the slider
 - **show-preview** - true/false(default) to show/not show list of preview images  
 - **auto-play** - true/false(default) to auto play slider
 - **autoplay-speed** - speed autoplay in millisecond (default = 3000, min = 1000)
 - **lazy-load-imgs** - lazy load of main slider images. ***!!!WARNING!!1   - not work if :show-preview="true"***

See example below for connection
---



### Example of use

1) ## Add component

In file with **createApp()** import component and its css-file:
```
import carouselPicturies from 'carousel-pictures'
import '../node_modules/carousel-pictures/dist/carousel-pictures.css'
```
Example:
```
import { createApp } from 'vue'
import './style.css' /// it's vite css file
import App from './App.vue'

import carouselPicturies from 'carousel-pictures'
import '../node_modules/carousel-pictures/dist/carousel-pictures.css'

const app = createApp(App)
app.use(carouselPicturies)
app.mount('#app')
```

2. ### Use component


In template of **App.vue** (in this example) add this component and button/something with click method:
```
<template>
  <CarouselPictures 
    :aSlides="arSlides"
    ref="showSlidesCarousel"
    :show-preview="true"
    :auto-play="true"
    :autoplay-speed="3500"
  ></CarouselPictures>
  <button @click="showImg">Show slider</button>
</template>
```
where is:
 - **aSlides** - array with "/path/to/image"
 - **ref="showSlidesCarousel"** - this is necessary to call the slider
 - **show-preview** - true/false(default) to show/not show list of preview images  
 - **auto-play** - true/false(default) to auto play slider
 - **autoplay-speed** - speed autoplay in millisecond (default = 3000, min = 1000)
---

Click method of button :
```
<button @click="showImg">Show slider</button>
```
Method code:
```
methods: {
    showImg() {
      const sliderCarousel = this.$refs.showSlidesCarousel;
      if (sliderCarousel) {
        sliderCarousel.showConsole(); /// show slider by this method
      }
      else {
        console.error('child method err!');
      }
    }
  },
```

---
All code of example (or on https://github.com/e-necro/CarouselPictures) :
```
<template>
  <CarouselPictures 
    :aSlides="arSlides"
    ref="showSlidesCarousel"
    :show-preview="true"
  ></CarouselPictures>
  <button @click="showImg">Show slider</button>
</template>


<script >

export default {
  data() {
    return {
      arSlides: []
    }
  },
  methods: {
    showImg() {
      const sliderCarousel = this.$refs.showSlidesCarousel;
      if (sliderCarousel) {
        sliderCarousel.showConsole(); /// show slider by this method
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

    ]
  }
}

</script>
```