<script setup>
  import {ref} from 'vue'

  const openAccordion = ref(false);

  const props = defineProps({
    title: {
      type: String,
      required: true
    }
  })


  const toggleAccordion = () => {
    openAccordion.value = !openAccordion.value
  }

</script>

<template>

    <div class="accordion">
      <span class="title" @click="toggleAccordion"> {{ title }}</span>
      <div class="text" v-if="openAccordion">
          <slot/>
      </div>
    </div>
    
</template>

<style >
.accordion {
  max-width: 500px;
}
.title {
  font-weight: bold;
  font-size: 20px;  
  margin-bottom: 10px;
  cursor: pointer;
}

</style>