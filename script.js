document.addEventListener("DOMContentLoaded", function () {
  const skewSetter = gsap.quickTo(".images img", "skewY");
  const clamp = gsap.utils.clamp(-20, 20);

  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true,
    onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
    onStop: () => skewSetter(0)
  });
});