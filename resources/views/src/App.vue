<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted } from "vue";
import { useStore } from "vuex";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import { useRouter } from "vue-router";
import { themeMode } from "@/core/helpers/config";
import { initializeComponents } from "@/core/plugins/keenthemes";

export default defineComponent({
  name: "app",
  setup() {
    const store = useStore();
    const router = useRouter();
    
     
    onMounted(() => {
      /**
       * Overrides the layout config using saved data from localStorage
       * remove this to use static config (@/core/config/DefaultLayoutConfig.ts)
       */
      store.commit(Mutations.OVERRIDE_LAYOUT_CONFIG);

      /**
       *  Sets a mode from configuration
       */
      store.dispatch(Actions.SET_THEME_MODE_ACTION, themeMode.value);

      nextTick(() => {
        initializeComponents();

        store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
      });
    });
  },
});
</script>

<style lang="scss">
@import "bootstrap-icons/font/bootstrap-icons.css";
@import "@fortawesome/fontawesome-free/css/all.min.css";
@import "element-plus/theme-chalk/index.css";

// Main demo style scss
@import "assets/sass/plugins";
@import "assets/sass/style";

#app {
  display: contents;
}
</style>