const basketStartEl = document.querySelector("header .basket-starter");
const basketEl = basketStartEl.querySelector(".basket");

// 장바구니 이벤트
basketStartEl.addEventListener("click", (event) => {
  event.stopPropagation();
  if (basketEl.classList.contains("show")) {
    //hide
    hideBasket();
  } else {
    //show
    showBasket();
  }
});
basketEl.addEventListener("click", (event) => {
  event.stopPropagation();
});
window.addEventListener("click", () => {
  hideBasket();
});

const showBasket = () => {
  basketEl.classList.add("show");
};
const hideBasket = () => {
  basketEl.classList.remove("show");
};
// 장바구니 이벤트 종료

// 검색 이벤트 searching
const headerEl = document.querySelector("header");
const headerMenuEls = [...headerEl.querySelectorAll("ul.menu > li")];
const searchWrapEl = headerEl.querySelector(".search-wrap");
const searchStarterEl = headerEl.querySelector(".search-starter");
const searchCloserEl = searchWrapEl.querySelector(".search-closer");
const shadowEl = searchWrapEl.querySelector(".shadow");
const searchInputEl = searchWrapEl.querySelector("input");
const searchDelayEls = [...searchWrapEl.querySelectorAll("li")];

searchStarterEl.addEventListener("click", () => showSearch());
searchCloserEl.addEventListener("click", () => hideSearch());
shadowEl.addEventListener("click", () => hideSearch());

const showSearch = () => {
  headerEl.classList.add("searching");
  document.documentElement.classList.add("fixed");
  headerMenuEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = `${(index * 0.4) / headerMenuEls.length}s`;
  });
  searchDelayEls.forEach((el, index) => {
    el.style.transitionDelay = `${(index * 0.4) / searchDelayEls.length}s`;
  });
  setTimeout(() => searchInputEl.focus(), 600);
};
const hideSearch = () => {
  headerEl.classList.remove("searching");
  document.documentElement.classList.remove("fixed");
  headerMenuEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = `${(index * 0.4) / headerMenuEls.length}s`;
  });
  searchDelayEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = `${(index * 0.4) / searchDelayEls.length}s`;
  });
  searchDelayEls.reverse();
  searchInputEl.value = "";
};
// 검색 이벤트 종료
