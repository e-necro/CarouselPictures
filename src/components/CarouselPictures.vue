<template lang="pug">
  .slideShow(:class="{'active' : showed === true  }" @click="close")
    .slideShow-close(@click="close")
    .slideShow-container(@click.stop)
      .slideShow-container__big-img
        .slideShow-item.slideShow-fade(
          v-for="(slideItem, index) in aSlides"
          v-bind:key="'slideItem' + index"
          @click="showSlides(index)"
        )
          img(:src="slideItem")
      .slideShow-container__preview(v-if="showPreview")
        .slideShow-container__data
          ul.slideShow-container__data-list
            li.slideShow-item-small(
              v-for="(slideItem, index) in aSlides"
              v-bind:key="'slideItem' + index"
              :style="'background-image: url('+slideItem+')'"
              @click="thisSlide(index)"
            )
        a.slideShow-prev.slideShow-small-prev(
            @click="plusSlides(-1)"
          )
          span
        a.slideShow-next.slideShow-small-next(
          @click="plusSlides(1)"
        )
          span

      a.slideShow-prev(
        @click="plusSlides(-1)"
        )
        span
      a.slideShow-next(
          @click="plusSlides(1)"
        )
        span

</template>


<script>
export default {
  name: 'CarouselPictures',
  props: {
    aSlides: Array,
    showPreview: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideIndex: 1,
      showed: false,
      currentBunch: 1
    }
  },
  methods: {
    showConsole(str) {
      this.showSlides(1);
      this.showed = !this.showed;
    },

    plusSlides(index) {
      this.showSlides(this.slideIndex += index);
    },
    thisSlide(index) {
      this.slideIndex = index+1;
      this.showSlides(this.slideIndex);
    },
    showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("slideShow-item");
      if (n > slides.length) {
        this.slideIndex = 1
        document.getElementsByClassName("slideShow-item-small")[0].parentNode.style.transform = "translateX(0px)";
      }
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.slideIndex-1].style.display = "block";

      if (this.showPreview) {
        let preview = document.getElementsByClassName("slideShow-item-small");
        let previewWdt =  preview[0].clientWidth;
        let previewUl = preview[0].parentNode;
        let previewDataContainer = previewUl.parentNode;
        let newWidth = this.slideIndex * previewWdt;

        console.log(newWidth, previewDataContainer.clientWidth * this.currentBunch, previewDataContainer.clientWidth ,' - ', this.currentBunch);
        if (newWidth >= previewDataContainer.clientWidth * this.currentBunch && newWidth !== 0) {
          // previewUl.style.transform = "translateX(-" + newWidth + "px )";
          previewUl.style.transform = "translateX(-" + previewDataContainer.clientWidth * this.currentBunch + "px )";
          this.currentBunch += 1;
        } else if (newWidth <= previewDataContainer.clientWidth * this.currentBunch && this.currentBunch > 1 && newWidth <= previewDataContainer.clientWidth * (this.currentBunch -1 ) ) {
          // previewUl.style.transform = "translateX(0px )";

          if (this.currentBunch > 1) {
            this.currentBunch -= 1;
            previewUl.style.transform = "translateX(-" + previewDataContainer.clientWidth * this.currentBunch + "px )";
          }
        }


        for (i = 0; i < preview.length; i++) {
          preview[i].className = preview[i].className.replace(" active", "");
        }
        preview[this.slideIndex - 1].className += " active";
      }
    },
    close() {
      this.showed = false;
    }
  },
  mounted() {
    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowRight':
          this.showSlides(this.slideIndex += 1);
          break;
        case 'ArrowLeft':
          this.showSlides(this.slideIndex -= 1);
          break;
        case 'Escape':
          this.showed = false;
          break;
      
        default:
          break;
      }
    })
  },
  watch: {
    currentBunch(newVal, oldVal) {
      // console.log('old = ', oldVal, 'new = ', newVal);
      if (newVal < oldVal && oldVal > 1) {
        // console.log('upd');
        document.getElementsByClassName("slideShow-item-small")[0].parentNode.style.transform = "translateX(0px)";
      }
    }
  }
}
</script>