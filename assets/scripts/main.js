const dropdown = document.querySelector("#dropdown-navigation");
const menuItems = document.querySelectorAll(".nav-menu-item");

window.addEventListener("load", function () {
  console.log("load document triggered");
  toggleDropdown();
});

window.addEventListener("resize", function () {
  toggleDropdown();
});

dropdown.addEventListener("click", handleDropdown);
for (let menu of menuItems) {
  menu.addEventListener("click", toggleMenus);
}

function handleDropdown(event) {
  event.preventDefault();
  toggleMenus();
}

function toggleMenus() {
  for (let menu of menuItems) {
    menu.classList.toggle("block");
    menu.classList.toggle("hidden");
  }
}

function toggleDropdown() {
  if (window.innerWidth < 576) {
    showDropdown();
  } else {
    hideDropdown();
  }
}

function showDropdown() {
  dropdown.classList.add("block");
  dropdown.classList.remove("hidden");
  for (let menu of menuItems) {
    menu.classList.add("hidden");
    menu.classList.remove("block");
    menu.classList.remove("inline");
  }
}

function hideDropdown() {
  dropdown.classList.add("hidden");
  dropdown.classList.remove("block");
  for (let menu of menuItems) {
    menu.classList.add("inline");
    menu.classList.remove("hidden");
  }
}
