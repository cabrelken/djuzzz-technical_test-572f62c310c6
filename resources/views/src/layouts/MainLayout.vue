<template>
  <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
    <!--begin::Page-->
    <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
      <KTHeader  :user="null" />
      <!--begin::Wrapper-->
      <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
        <KTSidebar/>
        <!--begin::Main-->
        <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
          <!--begin::Content wrapper-->
          <div class="d-flex flex-column flex-column-fluid">
            <div id="kt_app_content" class="app-content flex-column-fluid">
              <KTContent></KTContent>
            </div>
          </div>
          <!--end::Content wrapper-->
          <KTFooter />
        </div>
        <!--end:::Main-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Page-->
  </div>
</template>

<script>
import { defineComponent, nextTick, onMounted } from "vue";
import KTHeader from "@/layouts/header/Header.vue";
import KTSidebar from "@/layouts/sidebar/Sidebar.vue";
import KTContent from "@/layouts/content/Content.vue";
import KTFooter from "@/layouts/footer/Footer.vue";
import LayoutService from "@/core/services/LayoutService";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
export default defineComponent({
  name: "default-layout",
  components:{
    KTHeader,
    KTContent,
    KTSidebar,
    KTFooter
  },
  setup(){
    onMounted(()=>{
      nextTick(() => {
        reinitializeComponents();
        LayoutService.init();
      });
    })
    
  }
})
</script>

<style>

</style>