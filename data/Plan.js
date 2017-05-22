const Plan = {
  Head: {
    pageTitle: "Task 1 - Plan",
    metaDescription: "Task 1 - Made by Grzegorz Śpiewak"
  },

  Menu: {
    MenuLinks: [
      {href: "/", anchor: "Home", title: "Home", icon: <i className="fa fa-home" aria-hidden="true"></i>, currentPage: true},
      {href: "/analyse", anchor: "Analyse", title: "analyse", icon: <i className="fa fa-area-chart" aria-hidden="true"></i>},
      {href: "/plan", anchor: "Plan", title: "Plan", icon: <i className="fa fa-folder-open" aria-hidden="true"></i>},
      {href: "/earn", anchor: "Earn", title: "Earn", icon: <i className="fa fa-database" aria-hidden="true"></i>},
    ],
    name: "Jan Kowalski",
    notification: true,
    numberOfMessages: "2",
  },

  Placeholder: {
    title: "There is nothing here",
    button: {
      href: "/",
      anchor: "Home",
      title: "Get back to home",
      icon: "placeholder",
    }
  },

  Footer: {
    title: "Made by Grzegorz Śpiewak",
    link: "https://grzegorzspiewak.github.io/"
  }
}

export default Plan
