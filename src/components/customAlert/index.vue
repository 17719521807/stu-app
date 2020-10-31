<template>
  <div class="custom-alert" 
  :style="{color, backgroundColor,}" 
  :class="{ 'fade-in': fadeIn, 'fade-out': fadeOut}" 
  @animationend="animationEvent($event)"
  >
      {{ text }}
  </div>
</template>

<script>
export default {
    props: ["text", "color", "stopTime", "backgroundColor"],
    data() {
        return {
            fadeIn: false,
            fadeOut: false,
        }
    },
    created() {
        this.fadeIn = true;
        this.fadeOut = false;
         setTimeout(() => {
             this.fadeIn = false;
             this.fadeOut = true;
         }, this.stopTime || 1000);
    },
    methods: {
        animationEvent(e) {
            const animationName = e.animationName.split('-')[0];
            if(animationName == 'fadeOut') {
                this.$emit('alertevent', {
                    e,
                    text: this.text
                })
            }

        }
    }
}
</script>

<style scoped src="@/assets/css/customAlert/index.css">

</style>