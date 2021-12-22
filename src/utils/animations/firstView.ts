import gsap from "gsap";

export const firstViewAnimation = () => {
  gsap.to("#first-view__background", {
    scrollTrigger: {
      trigger: "#first-view__background",
      start: "top",
      end: "200px",
      markers: true,
      pin: true,
      scrub: true,
    },

    backgroundSize: "200%",
    backgroundPosition: "center 30%",
  });
};
