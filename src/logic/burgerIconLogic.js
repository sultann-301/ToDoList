const handleBurgerMenu = () => {
  const burgerMenu = document.querySelector(".burger-container");
  const sideNav = document.querySelector(".sidenav");
  const closeNavBtn = document.querySelector(".closebtn");

  burgerMenu.addEventListener("click", (e) => {
    burgerMenu.classList.toggle("change");
    sideNav.style.width = "250px";
  });

  closeNavBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("change");
    sideNav.style.width = "0px";
  });
};

export { handleBurgerMenu };
