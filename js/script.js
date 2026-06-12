const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeButton.setAttribute("aria-pressed", "true");
  themeIcon.textContent = "☀";
}

themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeIcon.textContent = isDark ? "☀" : "☾";
});
