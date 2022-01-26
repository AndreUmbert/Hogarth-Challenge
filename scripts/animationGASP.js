const timeline = gsap.timeline();

const pantallaDesktop = window.matchMedia("(min-width:301px)");

if (!pantallaDesktop.matches) {
    timeline.to("#fisrtsTexts", { duration: 0.5, opacity: 0, delay: 1, display: "none" });
    timeline.to("#animatedMiddleSection", { duration: 0, display: "flex" });
    timeline.to("#firstTitle", { duration: 0, display: "block" });
    timeline.to("#vaccines", { duration: 0, delay: 1, display: "flex", y: 10 });
    timeline.from("#syringer1", { display: "block", duration: 1, x: 300, ease: "power.2" });
    timeline.fromTo("#firstTitle", 0.83, { css: { perspective: 400, transformOrigin: "left", rotationY: 0 } }, { css: { perspective: 400, transformOrigin: "left", rotationY: 90 } }, "<");
    timeline.set("#syringer1", { display: "block" }, "<");
    timeline.set("#secondTitle", { display: "block" }, "<");
    timeline.fromTo("#secondTitle", 1.7, { css: { perspective: 400, transformOrigin: "right", rotationY: 90 } }, { css: { perspective: 400, transformOrigin: "right", rotationY: 0 } }, "<");
    timeline.set("#syringer1", { display: "block", marginRight: "7px" });
    timeline.from("#syringer2", { duration: 1, display: "block", x: 300, ease: "power.2" }, "+=1");
    timeline.fromTo("#secondTitle", 0.92, { css: { perspective: 400, transformOrigin: "left", rotationY: 0 } }, { css: { perspective: 400, transformOrigin: "left", rotationY: 90 } }, "<");
    timeline.set("#thirdTitle", { display: "block" }, "<");
    timeline.fromTo("#thirdTitle", 1.7, { css: { perspective: 400, transformOrigin: "right", rotationY: 90 } }, { css: { perspective: 400, transformOrigin: "right", rotationY: 0 } }, "<");
    timeline.set("#syringer2", { display: "block" });
    timeline.to("#thirdTitle", { duration: 0.3, y: -10 });
    timeline.set("#syringer1", { display: "block", marginRight: "0" });
    timeline.to("#plusIcon", { duration: 0.1, display: "block", opacity: 1 }, "<");
    timeline.to("#secondText", { duration: 0.5, display: "block" })
    timeline.to("#vaccines", { delay: 1, duration: 0.3, display: "flex", y: 0 });
    timeline.to("#thirdTitle", { duration: 0.3, marginTop: "24px" }, "<");
    timeline.to("#secondText", { duration: 0.3, marginTop: "48px" }, "<");
    timeline.to("#learnMore", { duration: 0, display: "block" });
} else {
    timeline.to("#fisrtsTexts", { duration: 0.5, opacity: 0, delay: 1, display: "none" });
    timeline.to("#animatedMiddleSection", { duration: 0, display: "flex" });
    timeline.to("#firstTitle", { duration: 0, display: "block" });
    timeline.to("#vaccines", { duration: 0, delay: 1, display: "flex", y: 10 });
    timeline.from("#syringer1", { display: "block", duration: 1, x: 600, ease: "power.2" });
    timeline.fromTo("#firstTitle", 0.83, { css: { perspective: 400, transformOrigin: "left", rotationY: 0 } }, { css: { perspective: 400, transformOrigin: "left", rotationY: 90 } }, "<");
    timeline.set("#syringer1", { display: "block" }, "<");
    timeline.set("#secondTitle", { display: "block" }, "<");
    timeline.fromTo("#secondTitle", 1.7, { css: { perspective: 400, transformOrigin: "right", rotationY: 90 } }, { css: { perspective: 400, transformOrigin: "right", rotationY: 0 } }, "<");
    timeline.set("#syringer1", { display: "block", marginRight: "10px" });
    timeline.from("#syringer2", { duration: 1, display: "block", x: 600, ease: "power.2" }, "+=1");
    timeline.fromTo("#secondTitle", 0.92, { css: { perspective: 400, transformOrigin: "left", rotationY: 0 } }, { css: { perspective: 400, transformOrigin: "left", rotationY: 90 } }, "<");
    timeline.set("#thirdTitle", { display: "block" }, "<");
    timeline.fromTo("#thirdTitle", 1.7, { css: { perspective: 400, transformOrigin: "right", rotationY: 90 } }, { css: { perspective: 400, transformOrigin: "right", rotationY: 0 } }, "<");
    timeline.set("#syringer2", { display: "block" });
    timeline.to("#thirdTitle", { duration: 0.3, y: -20 });
    timeline.set("#syringer1", { display: "block", marginRight: "0" });
    timeline.to("#plusIcon", { duration: 0.1, display: "block", opacity: 1 }, "<");
    timeline.to("#secondText", { duration: 0.5, display: "block" })
    timeline.to("#vaccines", { delay: 1, duration: 0.3, display: "flex", y: 0 });
    timeline.to("#thirdTitle", { duration: 0.3, marginTop: "34px" }, "<");
    timeline.to("#secondText", { duration: 0.3, marginTop: "48px" }, "<");
    timeline.to("#learnMore", { duration: 0, display: "block" });
}