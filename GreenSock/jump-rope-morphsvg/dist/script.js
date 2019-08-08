// 直接导入svg的数据，作为新的线
const line2 = "M315.411 368.39c111.741 45.825 273.249 56.509 424.876 3.271";
const line3 = "M315.411 368.39c109.973-51.305 271.098-61.732 424.876 3.271";

var tl = new TimelineMax({ repeat: -1, yoyo: true });
tl.add('start');
tl.to("#line1", .5, {
  morphSVG: line3 }).

to(line2, .5, {
  morphSVG: line3 });