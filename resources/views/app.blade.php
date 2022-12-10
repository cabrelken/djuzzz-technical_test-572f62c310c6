<!DOCTYPE html>
<!--
Use below html tag for RTL version
<html lang="en" dir="rtl" direction="rtl" style="direction: rtl">
-->
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" value="{{ csrf_token() }}"/>
    @vite('resources/scripts/main.ts')
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,600,700|Material+Icons" rel="stylesheet" />
    <title>Fresh Management | V3</title>
</head>
{{-- <body style="--kt-toolbar-height:55px;--kt-toolbar-height-tablet-and-mobile:55px">
  <div id="app" class="d-flex flex-column flex-root">
  </div>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</body> --}}
<body class="page-loading">
    <!--begin::Theme mode setup on page load-->
    <script>
        if (document.documentElement) {
            var defaultThemeMode = "light";

            var name = document.body.getAttribute("data-kt-name");
            var themeMode = localStorage.getItem("kt_" + (name ? name + "_" : "") + "theme_mode_value");

            if (themeMode === null) {
                if (defaultThemeMode === "system") {
                    themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                } else {
                    themeMode = defaultThemeMode;
                }
            }
            document.documentElement.setAttribute("data-theme", themeMode);
        }
    </script>
    <!--end::Theme mode setup on page load-->
    <noscript>
        <strong>We're sorry but metronic-vue doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    <!--begin::Loading markup-->
    {{-- <div id="splash-screen" class="splash-screen" style="background-color:#181C32;">
        <img alt="Logo" class="max-h-75px h-75px" src="/media/logos/logo-loading.png" />
  
        <div class="d-flex align-items-center mt-5">
          <span class="spinner-border text-primary" role="status"></span>
          <span class="text-muted fs-6 fw-bold ms-5">Chargement en cours ...</span>
        </div>
    </div> --}}
    <!--end::Loading markup-->
    {{-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> --}}
</body>
</html>