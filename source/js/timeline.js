import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector(".timeline__line");
const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.persent(0), CSS.persent(100)],
});

//scrollTracker.animate(
//  {
//    transform: ["scaleX(0)", "scaleX(1)"]
//  },
//  {
//    duration: 1,
//    timeline: scrollTrackingTimeline,
//  }
//);


