import { gsap } from "gsap";

export default function projectCancelBtnShowUp() {
  const btnWraps = document.querySelectorAll(".newProjectBtnWrap");
  const cancelBtns = document.querySelectorAll(".projectEditBtnsWrapper");

  btnWraps.forEach((btnWrap, i) => {
    const cancelBtn = cancelBtns[i];

    if (!btnWrap || !cancelBtn) return;

    btnWrap.addEventListener("mouseenter", () => {
      gsap.to(cancelBtn, {
        display: "flex",
        width: "70px",
        overflow: "hidden",
        duration: 0.4,
      });
    });

    btnWrap.addEventListener("mouseleave", () => {
      gsap.to(cancelBtn, {
        display: "none",
        width: 0,
        overflow: "hidden",
        duration: 0.4,
      });
    });
  });
}
