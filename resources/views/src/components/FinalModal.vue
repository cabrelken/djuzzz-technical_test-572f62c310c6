<template>
  <div>
      <vue-final-modal 
        v-model="showModal" 
        :classes="'modal modal-container'" 
        :content-class="'modal-dialog modal-dialog-centered ' + modalSize + ' ' + showText"
        :zIndexBase="1000"
      > 
          <div class="modal-content">
            <div :class="'modal-header'">
              <!-- SLOT HEADER -->
              <slot name="header">

              </slot>
            </div>
            
            <div :class="'modal-body ' + bodyClass">
              <!-- SLOT BODY -->
              <slot name="body">

              </slot>
            </div>
            
            <!-- SLOT FOOTER -->
            <slot name="footer">
              <div class="modal-footer flex-center justify-content-center">
                <button
                  type="button"
                  class="btn btn-sm btn-light-danger me-3"
                  @click="close"
                >
                  Fermer
                </button>
              </div>
            </slot>
            
            
          </div>
          
      </vue-final-modal>
  </div>
</template>

<script>

import { VueFinalModal } from 'vue-final-modal'
import { defineComponent, onMounted, ref, nextTick, watch, computed  } from "vue";

export default defineComponent ({
  name:"FinalModal",
  components: {
    VueFinalModal
  },
  props:{
    modalSize: {
      type: String,
      default: 'modal-lg'
    },
    bodyClass:{
      type:String,
      default:'py-10 px-lg-17'
    },
  },
  setup(props, { emit }) {
    const showModal = ref(false);
    const showText = ref('');

    const show = function(){
      showModal.value = true;
    }
    
    const close = function(){
      showModal.value = false;
    }

    watch(()=> showModal.value, (value)=>{
      if(value){
        setTimeout(() => {
          showText.value='show';
        }, 1);
      }else{
        showText.value='';
      }
    })

    return {
      close,
      show,
      showText,
      showModal
    }
  }
});
</script>

<style lang="scss" scoped>
  :deep(.modal-container) {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    margin: auto !important;
  }
  :deep(.modal-dialog.show) {
    transform: none;
  }
  :deep(.modal-dialog) {
    transition: transform 0.3s ease-out;
    transform: translate(0,-50px);
  }
  
  :deep(.modal-content) {
    position: relative !important;
    display: flex !important;
    flex-direction: column !important;
    border-radius: 0.475rem !important;
  }
  :deep(.modal__title) {
    margin: 0 2rem 0.5rem 0 !important;
    font-size: 1.5rem !important;
    font-weight: 700 !important;
  }
  :deep(.modal__content) {
    flex-grow: 1 !important;
    overflow-y: auto !important;
  }
  :deep(.modal__action) {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    flex-shrink: 0 !important;
    padding: 1rem 0 0 !important;
  }
  :deep(.modal__close) {
    position: absolute !important;
    top: 0.5rem !important;
    right: 0.5rem !important;
  }

  
  :deep(.vfm-enter-active,
        .vfm-leave-active) {
    transition: opacity 0.15s linear;
    
  }
  :deep(.vfm-enter,
        .vfm-leave-to) {
    opacity: 0 !important;
  }

  @keyframes myfirst {
    0%   {top: 0px;}
    100%  {top: -100px;}
  }

</style>

