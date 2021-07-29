export const scrollToElement = (id) => {
  const element = document.querySelector(id);

  window.scrollTo({
    top: element? element.offsetTop - 175 : -10,
    behavior: "smooth",
  });
};