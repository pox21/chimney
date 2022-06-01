const btn = document.querySelector('.burger-menu');

const headerContainer = document.querySelector(".header__container");
const nav = document.querySelector('.header__nav');
const contacts = document.querySelector('.header__contacts');
const favoritesBtn = document.querySelector("#favorites");
const searchBtn = document.querySelector("#search");
const themes  = document.querySelector('.themes');

const mobileMenuActive = () => {

  const mobileMenu = document.createElement("div");
  mobileMenu.classList.add("mobile-menu");

  const openMenu = () => {
    mobileMenu.classList.add("mobile-menu_active");
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("mobile-menu_active");
  };

  headerContainer.append(mobileMenu);
  mobileMenu.append(nav);
  mobileMenu.append(contacts);
  mobileMenu.append(themes);

  btn.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-menu_active");
  });
}

const mobileMenuDeactive = (selector) => {
  headerContainer.append(contacts);
  headerContainer.append(nav);
  headerContainer.append(themes);
  selector.remove();
}

const mobileMenuRender = () => {
  if (document.documentElement.clientWidth <= 1700) {
    if (!document.querySelector(".mobile-menu")) {
      mobileMenuActive();
    }
  } else {
    if (document.querySelector(".mobile-menu")) {
      mobileMenuDeactive(document.querySelector(".mobile-menu"));
    }
  }

  if (document.documentElement.clientWidth < 500) {
      document.querySelector(".mobile-menu").append(favoritesBtn);
      document.querySelector(".mobile-menu").append(searchBtn);
  } else {
    headerContainer.querySelector(".header__user-actions").append(searchBtn);
    headerContainer.querySelector(".header__user-actions").append(favoritesBtn);
  }
}

mobileMenuRender();

window.addEventListener("resize", mobileMenuRender);
