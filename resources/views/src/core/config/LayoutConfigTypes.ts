interface General {
  mode: "dark" | "light";
  primaryColor: "#50CD89";
  pageWidth: string;
  layout: "dark-sidebar" | "light-sidebar" | "light-header" | "dark-header";
}

interface Illustrations {
  set: "dozzy-1" | "sigma-1" | "sketchy-1" | "unitedpalms-1";
}

interface ScrollTop {
  display: boolean;
}

interface Header {
  mode: "dark" | "light";
  display: boolean;
  default: {
    container: "fixed" | "fluid";
    fixed: {
      desktop: boolean;
      mobile: boolean;
    };
    menu: {
      display: boolean;
      iconType: "svg" | "font";
    };
  };
}

interface PageTitle {
  mode: "dark" | "light";
  display: boolean;
  breadcrumb: boolean;
  direction: string;
}

interface Sidebar {
  mode: "dark" | "light";
  display: boolean;
  default: {
    minimize: {
      desktop: {
        enabled: boolean;
        default: boolean;
        hoverable: boolean;
      };
    };
    menu: {
      iconType: "svg" | "font";
    };
  };
}

interface Content {
  mode: "dark" | "light";
  container: "fixed" | "fluid";
}

interface Toolbar {
  mode: "dark" | "light";
  display: boolean;
  container: "fixed" | "fluid";
  fixed: {
    desktop: boolean;
    mobile: boolean;
  };
}

interface Footer {
  mode: "dark" | "light";
  display: boolean;
  container: "fixed" | "fluid";
  fixed: {
    desktop: boolean;
    mobile: boolean;
  };
}

interface LayoutConfig {
  general: General;
  illustrations: Illustrations;
  scrolltop: ScrollTop;
  header: Header;
  toolbar: Toolbar;
  pageTitle: PageTitle;
  sidebar: Sidebar;
  content: Content;
  footer: Footer;
}

export default LayoutConfig;

export {
  General,
  Illustrations,
  ScrollTop,
  Header,
  Sidebar,
  Content,
  Toolbar,
  PageTitle,
  Footer,
  LayoutConfig,
};
