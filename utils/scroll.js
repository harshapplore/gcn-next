export const scrollToElement = (id) => {
  const element = document.querySelector(id);

  window.scrollTo({
    top: element? element.offsetTop - 175 : -5,
    behavior: "smooth",
  });
};
export const divReload = (id) => {
  // const element = document.querySelector(id);

  document.querySelector(id).onload(window.location.href + id );
};