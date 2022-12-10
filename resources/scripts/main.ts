import { createApp } from "vue";
import App from "@/App.vue";

import router from "@/router";
import store from "@/store";
import ElementPlus from "element-plus";
import * as Icons from '@element-plus/icons-vue'
import locale from 'element-plus/lib/locale/lang/fr'
import 'dayjs/locale/fr'
import i18n from "@/core/plugins/i18n";

//imports for app initialization
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import Maska from 'maska'

import "@/core/plugins/prismjs";
// import "bootstrap";
// import helpers from "@/helpers/helpers";
import VueFeather from 'vue-feather';
import VueCurrencyInput from 'vue-currency-input';
import VueSignaturePad from 'vue-signature-pad';
import Vue3Signature from "vue3-signature";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus, { locale });

app.use(Maska);
// app.use(helpers);
app.component(VueFeather.name, VueFeather);
app.component("FontAwesomeIcon", FontAwesomeIcon);

//  Register all through traversal  svg Components , Will sacrifice a little performance 
for (let i in Icons) {
  app.component(i, Icons[i])
}

initApexCharts(app);
initInlineSvg(app);
initVeeValidate();

app.use(i18n);

app.use(VueSignaturePad);
app.mount("#app");
