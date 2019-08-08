TweenMax.set(".draw", {
  visibility: "visible"
});

// functions allows you to generate animations and glue them all together into a single timeline.
// You must remember to return them. 

const draw = () => {
  let tl = new TimelineMax()
  tl.add("start")
   tl.from('.hand', 3.5, {
      y: 1270,
      ease: Power3.easeOut
      }, "start")
  .fromTo(".draw", 3.5,
       {drawSVG:"100% 100%"}, 
       {drawSVG:true, 
        ease:Power3.easeOut
       }
      , "start")
  .to(".circle", 0.5,
       {
      autoAlpha:1,
      ease:BounceIn.ease
   }
      , "start+=0.38")
  .to(".circle2", 0.5,
       {
      autoAlpha:1,
      scale: 1,
      ease:BounceIn.ease
   }
      , "start+=1.12")

return tl;
}

//master timeline
const master = new TimelineMax();
master.add(draw());