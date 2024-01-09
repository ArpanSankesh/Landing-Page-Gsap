const tl = gsap.timeline();

tl.from(".navbar", {
  delay: 0.5,
  opacity: 0,
});

tl.from(".navbar h1, .navbar h3, .button, .button i", {
  duration: 0.5,
  delay: 0.5,
  y: -100,
  stagger: 0.3,
});

tl.from(".left h1", {
  duration: 0.5,
  delay: 0.3,
  x: -100,
  stagger: 0.3,
  opacity: 0,
});
tl.from(".left img", {
  duration: 0.5,
  x: -100,
  stagger: 0.3,
  opacity: 0,
});

tl.from(".right img", {
  duration: 0.5,
  opacity: 0,
  scale: 0.5,
});

tl.from(".info h3", {
  duration: 0.5,
  opacity: 0,
  y: -100,
});

tl.from(".info-2 .info-btn", {
  duration: 0.5,
  opacity: 0,
  y: 100,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".info-2.info-btn ",
    scroller: "body",
    scrub: 2,
    // markers:true,
    // start:"100%"
  },
});

tl.from(".info-boxes .box", {
  opacity: 0,
  x: 100,
  duration: 2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".info-boxes .box",
    scroller: "body",
    scrub: 2,
    // markers:true,
    end: "-25%",
  },
});
