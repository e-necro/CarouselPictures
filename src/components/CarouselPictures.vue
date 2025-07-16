<template lang="pug">
  .slideShow(:class="{'active' : showed === true  }" )
    .slideShow-close(@click="close")
    .slideShow-container(@touchstart="handleTouchStart" @touchend="handleTouchEnd")
      .slideShow-container__big-img(@mousedown="handleMouseDown" @mouseup="handleMouseUp") 
        .slideShow-item.slideShow-fade(
          v-for="(slideItem, index) in aSlides"
          v-bind:key="'slideItem' + index"
          :data-id="index + 1"
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
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    autoplaySpeed:{
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      containerId: NaN,
      slideIndex: 1,
      showed: false,
      currentBunch: 1,
      intervalID: null,
      stopAutoPlay: false,
    }
  },
  methods: {
    showConsole(str) {
      if (this.showSlides && this.autoPlay) {
        try {
          if (typeof this.autoplaySpeed == "number" && this.autoplaySpeed >= 1000) {
            // ok
          } else {
            this.autoplaySpeed = 1000;
          } 
        } catch (error) {
          this.autoplaySpeed = 1000;
        }
        this.showSlides(this.slideIndex);
        this.slideIndex += 1;
        this.intervalID = setInterval( () => {
         this.ShowByInterval();
        }, this.autoplaySpeed );
        
        this.showed = !this.showed;
        
      } else {
        this.showSlides(1);
        this.showed = !this.showed;
      }
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
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      try {
        slides[this.slideIndex-1].style.display = "block";  
      } catch (error) {
        slides[1].style.display = "block";  
      }
      

      if (this.showPreview) {
        let preview = document.getElementsByClassName("slideShow-item-small");
        let previewWdt =  preview[0].clientWidth;
        let previewUl = preview[0].parentNode;
        let previewDataContainer = previewUl.parentNode;
        let newWidth = this.slideIndex * previewWdt;

        // console.log(newWidth, previewDataContainer.clientWidth * this.currentBunch, previewDataContainer.clientWidth ,' - ', this.currentBunch);
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


        for (let i = 0; i < preview.length; i++) {
          preview[i].className = preview[i].className.replace(" active", "");
        }
        try {
          preview[this.slideIndex - 1].className += " active";  
        } catch (error) {
          preview[1].className += " active";  
        }
        
      }
    },
    close() {
      this.showed = false;
      this.slideIndex = 1;
      try {
        clearInterval(this.intervalID);
      } catch (error) {}
    },
    ShowByInterval() {
      if (!this.stopAutoPlay) {
        this.showSlides(this.slideIndex);
        this.slideIndex += 1;  
      }
      
    },
    handleMouseUp() {
      this.stopAutoPlay = false
    },
    handleMouseDown() {
      this.stopAutoPlay = true
    },
    handleTouchStart() {
      this.stopAutoPlay = true
    }, 
    handleTouchEnd() {
      this.stopAutoPlay = false
    }

  },
  mounted() {
    this.containerId = document.getElementsByClassName('slideShow-container__big-img');

    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowRight':
          this.showSlides(this.slideIndex += 1);
          break;
        case 'ArrowLeft':
          this.showSlides(this.slideIndex -= 1);
          break;
        case 'Escape':
          this.close();
          break;
      
        default:
          break;
      }
    })
  },
  onBeforeUnmount() {
    try {
      clearInterval(this.intervalID);
    } catch (error) {
      
    }
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

<style lang="sass">
.slideShow
  display: none
  &.active
    display: block
    z-index: 998
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    margin: 0
    background: rgba(0, 0, 0, .5)
  &-close
    position: absolute
    top: 50px
    right: 10px
    width: 28px
    height: 28px
    background-image: url('data:image/svg+xml, %3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.09797%2017.7416C8.79286%2018.0467%208.79286%2018.5414%209.09797%2018.8465C9.40307%2019.1516%209.89772%2019.1516%2010.2028%2018.8465L19.2284%209.82091C19.5335%209.5158%2019.5335%209.02116%2019.2284%208.71605C18.9233%208.41095%2018.4286%208.41095%2018.1235%208.71605L9.09797%2017.7416Z%22%20fill%3D%22%23434553%22%2F%3E%3Cpath%20d%3D%22M18.1236%2018.8464C18.4287%2019.1515%2018.9233%2019.1515%2019.2284%2018.8464C19.5335%2018.5413%2019.5335%2018.0467%2019.2284%2017.7416L10.2029%208.71601C9.89775%208.41091%209.4031%208.41091%209.098%208.71601C8.79289%209.02112%208.79289%209.51576%209.098%209.82087L18.1236%2018.8464Z%22%20fill%3D%22%23434553%22%2F%3E%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2226.5%22%20height%3D%2226.5%22%20rx%3D%2213.25%22%20stroke%3D%22%23434553%22%20stroke-width%3D%221.5%22%2F%3E%3C%2Fsvg%3E')
    filter: invert(100%)
    transition: transform 0.3s ease
    &:hover
      cursor: pointer
      transform: rotate(90deg)

  &-container
    max-width: 750px
    z-index: 1001
    position: relative
    margin: auto
    top: 3%
    align-items: center
    background-color: #fafcff
    border-radius: 16px
    box-sizing: border-box
    max-height: 90vh
    &__big-img
      padding: 30px
      max-width: 750px
      position: relative
      margin: auto
      // top: 10%
      img
        max-height: 65vh
        max-width: 100%
        &:hover
          cursor: grabbing
    &__preview
      position: relative
      padding: 0 10%
      overflow-x: hidden
    &__data
      position: relative
      overflow: hidden
      //padding: 0 10%
      &-list
        transition: transform 1s ease
        display: flex
        justify-content: center
        width: max-content
        list-style-type:  none
        padding: 0
  &-item
    display: none
    max-width: 80%
    &-small
      background-position: center
      background-repeat: no-repeat
      background-size: contain
      cursor: pointer
      width: 100px
      height: 100px
      margin: 15px
      &:hover
        cursor: pointer
      &.active
        border: solid 1px #41e141
        border-radius: 5px

  &-prev, &-next
    cursor: pointer
    position: absolute
    top: 50%
    width: auto
    margin-top: -22px
    padding: 16px
    color: white
    font-weight: bold
    font-size: 18px
    transition: 0.6s ease
    border-radius: 0 3px 3px 0
    user-select: none
  &-next
    right: 0
    border-radius: 3px 0 0 3px
    background-image: url('data:image/svg+xml, %3Csvg%20width%3D%2211%22%20height%3D%2217%22%20viewBox%3D%220%200%2011%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.93155%207.89323L2.28673%200.250952C1.95128%20-0.0836506%201.4078%20-0.0836506%201.0715%200.250952C0.736053%200.585554%200.736053%201.12904%201.0715%201.46364L8.10995%208.49954L1.07235%2015.5354C0.736901%2015.87%200.736901%2016.4135%201.07235%2016.749C1.4078%2017.0836%201.95213%2017.0836%202.28758%2016.749L9.9324%209.1067C10.2628%208.77555%2010.2628%208.22353%209.93155%207.89323Z%22%20fill%3D%22%2300A651%22%2F%3E%3C%2Fsvg%3E')
    background-position: 50%
    background-repeat: no-repeat
  &-prev
    background-image: url('data:image/svg+xml, %3Csvg%20width%3D%2211%22%20height%3D%2217%22%20viewBox%3D%220%200%2011%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%0A%3Cpath%20d%3D%22M1.06845%209.10677L8.71327%2016.749C9.04872%2017.0837%209.5922%2017.0837%209.9285%2016.749C10.2639%2016.4144%2010.2639%2015.871%209.9285%2015.5364L2.89005%208.50046L9.92765%201.46456C10.2631%201.12996%2010.2631%200.586473%209.92765%200.251024C9.5922%20-0.0835782%209.04787%20-0.0835782%208.71242%200.251024L1.0676%207.8933C0.737232%208.22445%200.737233%208.77647%201.06845%209.10677Z%22%20fill%3D%22%2300A651%22%2F%3E%0A%3C%2Fsvg%3E ')
    background-position: 50%
    background-repeat: no-repeat
    left: 0
  &-next:hover, &-prev:hover
    transform: scale(1.5)
    //background-color: rgba(0,0,0,0.8)

  &-small
    &-prev
      left: 5%
    &-next
      right: 5%

  &-fade 
    animation-name: fade
    animation-duration: 1s
    // border: 2px solid #DDE5EE
    margin: 0 auto
  
  @keyframes fade
    from
      opacity: .4
    to
      opacity: 1


@media screen and (max-width="767px")
  .slideShow
    &-container
      max-width: 90%


</style>