TweenMax.set("svg", {
  visibility: "visible" });


let tl = new TimelineMax();
tl.add("s");
tl.timeScale(1.5);
tl.
to("#turb", 3.5, {
  attr: { baseFrequency: "0, 0", ease: Expo.easeOut } },
"s").
to(".post", 1, {
  rotation: 5,
  transformOrigin: "center top",
  yoyo: true,
  repeat: 1,
  ease: Back.easeOut.config(1) },
"s").
to(".rotate", 1, {
  rotation: -3,
  transformOrigin: "bottom right",
  yoyo: true,
  repeat: 1 },
"s").
to("#blur", 1,
{
  attr: { stdDeviation: "0" } },

"s+=3.5");

GSDevTools.create();