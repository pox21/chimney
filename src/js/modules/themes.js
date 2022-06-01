const themeCheckbox = document.querySelector('.themes__input');

const colorBg = getComputedStyle(document.documentElement).getPropertyValue("--color-bg");
const colorText = getComputedStyle(document.documentElement).getPropertyValue("--color-black");
const root = document.documentElement;

const setLocalStorage = () => {
  localStorage.setItem("theme", themeCheckbox.checked);
};

const getLocalStorage = () => {
  localStorage.getItem("theme");
};

const renderTheme = () => {
  if (JSON.parse(localStorage.getItem("theme"))) {
    root.style.setProperty("--color-bg", "#000");
    root.style.setProperty("--color-black", "#fff");
  } else {
    root.style.setProperty("--color-bg", "#fff");
    root.style.setProperty("--color-black", "#000");
  }

  themeCheckbox.checked = JSON.parse(localStorage.getItem("theme"));
};

renderTheme();

themeCheckbox.addEventListener('change', () => {
  setLocalStorage();
  renderTheme();
});


