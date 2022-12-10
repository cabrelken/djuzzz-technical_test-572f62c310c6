import { computed } from "vue";
/* eslint-disable  @typescript-eslint/no-explicit-any */

/**
 * Return name of the theme
 * @returns {string}
 */
export const themeName = computed(() => {
  return process.env.VUE_APP_NAME;
});

/**
 * Return version of the theme
 * @returns {string}
 */
export const version = computed(() => {
  return process.env.VUE_APP_VERSION;
});

/**
 * Return demo name
 * @returns {string}
 */
export const demo = computed(() => {
  return process.env.VUE_APP_DEMO;
});
