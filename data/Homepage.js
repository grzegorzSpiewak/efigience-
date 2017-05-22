const Homepage = {
  Head: {
    pageTitle: "Task 1 - Layout",
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

  Finance: {
    title: "Finance life stream",
    fundsLabel: "Add",
    analysisLabel: "Account analysis",
    funds: [
      {title: "Balance", value: "7200,34", currency: "PLN"},
      {title: "Available founds", value: "7200,34", currency: "PLN"},
      {title: "Scheduled payments", value: "2200,34", currency: "PLN"},
    ],
    buttons: [
      { href: "/", anchor: "Bank", title: "Bank" },
      { href: "/", anchor: "Payment", title: "Payment" }
    ],
  },

  Products: {
    title: "Products",
    items: [
      {icon: "fa fa fa-money", label: "wallets [3]", value: "500,00", currency: "PLN"},
      {icon: "fa fa-balance-scale", label: "deposits [2]", value: "10 000,00", currency: "PLN", notification: true, numberOfMessages: "2"},
      {icon: "fa fa-bar-chart", label: "accounts", value: "7 2000,00", currency: "PLN"},
      {icon: "fa fa-line-chart", label: "founds [7]", value: "7 000,00", currency: "PLN", notification: true, numberOfMessages: "7"},
      {icon: "fa fa-hand-o-right", label: "Bank Loans", value: "-127 000,00", currency: "PLN", active: true},
    ]
  },

  AccountHistory: {
    title: "History",
    transactions: [
      { date: "29.06", name: "Gas Station Shell", genre: "Gas", value: "-100,00", currency: "PLN", expenses: true},
      { date: "28.06", name: "ATM Cracow Bracka Street", genre: "Cash", value: "-50,00", currency: "PLN", expenses: true},
      { date: "19.06", name: "Invoice", genre: "Salary", value: "5 500,00", currency: "PLN", income: true,},
      { date: "16.06", name: "CoffeeHaven", genre: "Food", value: "-19,00", currency: "PLN", expenses: true},
      { date: "16.06", name: "CinemaCity Bemowo", genre: "Fun", value: "-40,70", currency: "PLN", expenses: true},
    ]
  },

  Footer: {
    title: "Made by Grzegorz Śpiewak",
    link: "https://grzegorzspiewak.github.io/"
  }
}

export default Homepage
