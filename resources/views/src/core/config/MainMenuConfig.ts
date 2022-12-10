const DocMenuConfig: object = [
  {
    pages: [
        {
            heading: "Home",
            route: "/home",
            svgIcon: "/media/icons/duotone/Design/Layers.svg",
            fontIcon: "bi-app-indicator",
            quickLink: true,
        },
        
    ],
  },
  {
    heading: "Test",
    quickLink: false,
    pages: [
        {
            heading: "Formation",
            route: "/training",
            svgIcon: "/media/icons/duotone/Home/Library.svg",
            quickLink: true,
        },
        {
            heading: "Utilisateur",
            route: "/user",
            svgIcon: "/media/icons/duotone/General/User.svg",
            quickLink: true,
        }
    ]
}

];

export default DocMenuConfig;
