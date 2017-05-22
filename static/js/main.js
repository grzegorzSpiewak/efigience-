"use strict"
const mobileNav = {
  config: {
    $burgerIcon: document.querySelector(".menu__toggle"),
    $body: document.querySelector("body")
  },

  toggleClass: function(e) {
    const body = this.config.$body;
    body.classList.toggle('body--menu-visible')
  },

  removeClass: function() {
    const body = this.config.$body;
    body.classList.remove('body--menu-visible')
  },

  eventHandler: function(e) {
    const burgerIcon = this.config.$burgerIcon;
    burgerIcon.addEventListener("click", this.toggleClass.bind(this))
    window.addEventListener('load', this.removeClass.bind(this))
  },

  initiazlie: function() {
    this.eventHandler()
  }
}

mobileNav.initiazlie()
