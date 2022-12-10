import LayoutConfigTypes from "@/core/config/LayoutConfigTypes";

const config: LayoutConfigTypes = {
  general: {
    mode: "light",
    primaryColor: "#50CD89",
    pageWidth: "default",
    layout: "dark-sidebar",
  },
  header: {
    mode: "light",
    display: true,
    default: {
      container: "fluid",
      fixed: {
        desktop: true,
        mobile: false,
      },
      menu: {
        display: true,
        iconType: "svg",
      },
    },
  },
  sidebar: {
    mode: "dark",
    display: true,
    default: {
      minimize: {
        desktop: {
          enabled: true,
          default: false,
          hoverable: true,
        },
      },
      menu: {
        iconType: "svg",
      },
    },
  },
  toolbar: {
    mode: "dark",
    display: true,
    container: "fluid",
    fixed: {
      desktop: true,
      mobile: false,
    },
  },
  pageTitle: {
    mode: "dark",
    display: true,
    breadcrumb: true,
    direction: "column",
  },
  content: {
    mode: "dark",
    container: "fluid",
  },
  footer: {
    mode: "dark",
    display: true,
    container: "fluid",
    fixed: {
      desktop: false,
      mobile: false,
    },
  },
  illustrations: {
    set: "sketchy-1",
  },
  scrolltop: {
    display: true,
  },
};

export default config;
