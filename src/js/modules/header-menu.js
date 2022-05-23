const btn = document.querySelector('.burger-menu');

const headerContainer = document.querySelector(".header__container");
const nav = document.querySelector('.header__nav');
const contacts = document.querySelector('.header__contacts');

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

  btn.addEventListener("click", () => {
    console.log('sd')
    mobileMenu.classList.toggle("mobile-menu_active");
  });
}

const mobileMenuDeactive = (selector) => {
  headerContainer.append(contacts);
  headerContainer.append(nav);
  selector.remove();
}

if (document.documentElement.clientWidth <= 1700) {
  if (!document.querySelector(".mobile-menu")) {
    mobileMenuActive();
  }
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
}

window.addEventListener("resize", mobileMenuRender);
