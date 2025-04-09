document.addEventListener("DOMContentLoaded", () => {
  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true
  });

  // 可選加上動態 skew 效果
  const skewSetter = gsap.quickTo(".images img", "skewY"),
        clamp = gsap.utils.clamp(-20, 20);

  smoother.scrollTrigger?.addEventListener("update", (self) => {
    skewSetter(clamp(self.getVelocity() / -50));
  });
});
