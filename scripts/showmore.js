const button = document.querySelector(".video__button");
const hidden = document.querySelectorAll(".video__block_hidden");
const showMore = () => {
  button.addEventListener("click", () => {
    if (!hidden[0].classList.contains("video__block_hidden")) {
      hidden[1].classList.remove("video__block_hidden");
      button.classList.add('video__button_disabled');
    }
    hidden[0].classList.remove("video__block_hidden");
  });
};

showMore();
