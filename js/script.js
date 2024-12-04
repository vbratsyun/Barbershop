const serviceList = document.querySelector(".services__list");
const button = document.querySelector(".control__button");
const servicesItems = serviceList.querySelectorAll(".services__item");
const paginationNumber = document.querySelector(".pagination__number");
const paginationNumberLastPage = document.querySelector(
  ".pagination__number--last-page"
);
const paginationScroll = document.querySelector(".pagination__scroll");
const logo = document.querySelector(".page-header__logo");

let i = 1;
let j = 0;

const onButtonClick = () => {
  if (i < 6) {
    servicesItems.forEach((element) => {
      if (element.classList.contains("services__item--current")) {
        element.classList.remove("services__item--current");
      }
    });

    if (parseInt(paginationNumber.textContent) < parseInt(6)) {
      paginationNumber.textContent =
        "0" + (parseInt(paginationNumber.textContent) + 1);
    }

    j += 32;
    paginationScroll.style.setProperty("margin-top", `${j}px`);

    serviceList.append(serviceList.children[0]);
    serviceList.firstElementChild.classList.add("services__item--current");
    i += 1;
  } else {
    i = 1;
    paginationNumber.textContent = "01";
    j = 0;
    paginationScroll.style.setProperty("margin-top", `${j}px`);

    servicesItems.forEach((element) => {
      if (element.classList.contains("services__item--current")) {
        element.classList.remove("services__item--current");
      }
    });
    serviceList.append(serviceList.children[0]);
    serviceList.firstElementChild.classList.add("services__item--current");
  }
};

const onLogoClick = () => {
  location.reload();
};

button.addEventListener("click", onButtonClick);
logo.addEventListener("click", onLogoClick);
