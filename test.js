//page load animation
// first function to add to the master timeline
//getting the initial loader state  to display
// and create a gsap timeline to play sequence

const lenis = new Lenis({
  lerp: 0.1,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add(time => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

function pageLoader() {
  const tl = gsap.timeline({delay: 0.5});

  tl.to('.logo_letter', {
    duration: 0.7,
    y: '-20rem',
    opacity: 0,
    ease: 'expo.inOut',
    stagger: {
      each: 0.1,
      from: 3,
    },
  });
  tl.to(
    '.loader_col',
    {
      duration: 0.6,
      scaleY: 0,
      stagger: 0.15,
      ease: 'expo.inOut',
    },
    '<48%',
  );
  return tl;
}
// // second function to add in the master timeline
// // text and elements come into view after pre-loader
const myText = document.querySelector('#data-wb');
const text = new SplitType(myText, {types: 'lines'});

const element = document.getElementById('animButton');

function heroLoader() {
  //timeline hero page
  const tl = gsap.timeline();

  // Step 2: Adding tween animations to the timeline
  tl.from('.header-move', {
    yPercent: 100,
    duration: 1.2,
    opacity: 0,
    stagger: 0.2,
    ease: 'expo.out',
  })
    .from(
      '.hero_image',
      {
        yPercent: 30,
        duration: 1.5,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out',
      },
      '<',
    )
    .from(
      '.large-p',
      {yPercent: 80, duration: 1, opacity: 0, ease: 'power4.out'},
      '<',
    ) //followed by 'class2' moving from 100px left to its original position
    .from(
      '.service_hero',
      {
        duration: 0.6,
        opacity: 0,
        yPercent: 50,
        stagger: 0.15,
        ease: 'expo.inOut',
      },
      '<20%',
    ) //ending with 'class3' moving from 50px below to its original position
    .from(
      '.small-numeral',
      {
        yPercent: 60,
        duration: 0.4,
        opacity: 0,
        stagger: 0.15,
        ease: 'power4.out',
      },
      '<25%',
    )
    .from(
      element,
      {yPercent: 50, duration: 0.5, opacity: 0, ease: 'power4.out'},
      '<',
    )
    .from(
      '.button__text',
      {yPercent: 20, duration: 0.5, opacity: 0, ease: 'power4.out'},
      '<30%',
    )
    .from(
      '.icon_wrapper',
      {yPercent: 20, rotate: 45, duration: 0.5, opacity: 0, ease: 'power4.out'},
      '<40%',
    )
    .set('.loader', {display: 'none'}, '0.5');

  return tl;
}

//master timeline to add both timelines
// lenis stop scrolling before the animation is finished

//lenis.stop();

//const master = gsap.timeline({
//onComplete: () => {
//lenis.start();
//},
//});

//master.add(pageLoader()).add(heroLoader(), '<80%');

gsap.set('.loader', {display: 'none'}); // remove after testing
//gsap scroll triggers
// First section
gsap.registerPlugin(ScrollTrigger);

var h4Elements = document.querySelectorAll('h4');
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section.section--dark',
    start: 'top 60%',
    end: 'top top',
    scrub: 1.5,
  },
});

tl.from(h4Elements, {
  yPercent: 100,
  opacity: 0,
  duration: 2,
  stagger: 0.15,
  ease: 'power3.out',
});

let journeyTrig = gsap.timeline({
  scrollTrigger: {
    trigger: '.journey_wrapper',
    endTrigger: '.pain_wrapper',
    start: 'top 55%',
    end: 'center top',
    toggleActions: 'play none reverse none',
    // play resume pause reverse, restart, reset, complete, none
  },
});

journeyTrig
  .from('.header-move-up', {
    yPercent: 30,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
  })
  .from(
    '.p_up',
    {
      yPercent: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    },
    '<25%',
  );
//medical section scroll trigger
let medicalSec = gsap.timeline({
  scrollTrigger: {
    trigger: '.focus_medical-section',
    start: 'top 70%',
    end: 'bottom top',
    scrub: 1.5,
  },
});

medicalSec
  .from('.medical_image', {
    scale: 1.2,
    opacity: 0,
    ease: 'power3.out',
    duration: 1,
  })
  .from(
    '.graphic_overlay-lines',
    {xPercent: -20, opacity: 0, ease: 'power3.out', duration: 0.5},
    '<10%',
  )
  .from(
    '.focus_graphic',
    {
      rotate: -90,
      xPercent: 40,
      opacity: 0,
      ease: 'power2.out',
      duration: 1,
    },
    '<30%',
  );

let triggers = document.querySelectorAll('[gsap-trigger]');
let headersTl = gsap.timeline({
  scrollTrigger: {
    trigger: triggers,
    endTrigger: '.overlay_graphic',
    start: 'top 60%',
    end: 'bottom 20%',
    scrub: 1.5,
  },
});

headersTl
  .from('.medical_large_p', {
    yPercent: 30,
    opacity: 0,
    ease: 'power3.out',
    duration: 0.8,
  })
  .from(
    '.h3_styling',
    {
      xPercent: 30,
      opacity: 0,
      ease: 'power3.out',
      duration: 0.8,
    },
    '<40%',
  )
  .fromTo(
    '.overhead_line',
    {
      xPercent: -110,
    },
    {
      xPercent: 0,
      ease: 'expo.out',
      duration: 0.8,
    },
    '<20%',
  )
  .from(
    '.medical_text',
    {
      yPercent: 30,
      opacity: 0,
      ease: 'power3.out',
      duration: 0.8,
    },
    '<30%',
  );

// my holistic approach section in animation
let serviceIn = gsap.timeline({
  scrollTrigger: {
    trigger: '.steps_wrapper',
    start: 'top 70%',
    end: 'bottom center',
    scrub: 2,
  },
});
// holistic_titles holistic_p icon_rotate
serviceIn
  .from('.icon_rotate', {
    xPercent: 20,
    rotate: 180,
    opacity: 0,
    ease: 'expo.inOut',
    stagger: 0.2,
    duration: 1,
  })
  .from(
    '.holistic_titles',
    {
      yPercent: 30,
      opacity: 0,
      ease: 'power3.out',
      duration: 1.2,
    },
    '<30%',
  )
  .from(
    '.holistic_p',
    {
      yPercent: 30,
      opacity: 0,
      ease: 'power3.out',
      duration: 0.8,
    },
    '<25%',
  );

// next step section
// Select all elements with the 'text-up' attribute
function setStates() {
  gsap.set('.sequence_image_wrapper', {
    y: gsap.utils.random(100, 40),
    opacity: 0,
  });
}

setStates();

let sequenceImageUp = gsap.timeline({
  scrollTrigger: {
    trigger: '.sequence_wrapper',
    start: 'top 90%',
    end: 'bottom center',
    markers: true,
    scrub: 1.2,
  },
});

sequenceImageUp.to('.sequence_image_wrapper', {
  opacity: 1,
  y: 0,
  duration: 0.6,
  stagger: 0.03,
  ease: 'power3.out',
});

//// parallax slide up after scrolling into view
let parallax = gsap.timeline({
  scrollTrigger: {
    trigger: '.sequence_wrapper',
    start: 'top 90%',
    end: 'top top',
    scrub: 1.2,
  },
});

parallax.fromTo(
  '.sequence_image',
  {
    yPercent: -3,
  },
  {
    yPercent: -25,
  },
);

// animate txt up function
function animateText(id, selector, trigger, start, end) {
  const texts = document.querySelectorAll(`#${id} ${selector}`);

  texts.forEach((text, index) => {
    let textAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: end,
        scrub: 1.2,
      },
    });

    const content = text.querySelector('.h2_style');

    textAnimation.fromTo(
      content,
      {y: 50, opacity: 0},
      {
        y: 0,
        opacity: 1,
        ease: 'expo.out',
        duration: 1.6,
        delay: () => index * 0.03,
      },
      0,
    );
  });
}
// call the function to animate text
animateText('large-p', '.text__effect', '#large-p', 'top 60%', 'bottom 40%');
animateText(
  'next-steps',
  '.text__effect',
  '#next-steps',
  'top 90%',
  'bottom 40%',
);
// create function for image animation
function imageSlideUp(id, attributeName, trigger, start, end) {
  const images = document.querySelectorAll(`#${id} [${attributeName}]`);

  images.forEach((image, index) => {
    let imageSlide = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: end,
        scrub: 1.2,
      },
    });

    const content = image.querySelector('.img');

    imageSlide.fromTo(
      content,
      {
        yPercent: -3,
      },
      {
        yPercent: -25,
      },
    );
  });
}
// call the function for different sections
imageSlideUp('acu', 'data-image', '#acu', 'top 80%', 'bottom top');
imageSlideUp('cosmetic', 'data-cosmetic', '#cosmetic', 'top 80%', 'bottom top');
imageSlideUp('rehab', 'data-rehab', '#rehab', 'top 80%', 'bottom top');

// header scale down to next section transition
function scaleHeader(triggerClass, targetClass) {
  $(triggerClass).each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(targetClass);

    let logoScale = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
      },
    });
    logoScale.from(targetElement, {
      y: '-100vh',
      width: '100vw',
      duration: 1.2,
    });
  });
}

// call function with different classes to play
scaleHeader('.section_transition2', '.transition_services');
scaleHeader('.section_transition-wrapper', '.transition_title');

// mouse hover animations
$('.clinic_link').on('mouseenter', function () {
  gsap.fromTo(
    $(this).find('.line'),
    {
      x: '-102%',
    },
    {
      x: '0%',
      duration: 0.4,
    },
  );
});

$('.clinic_link').on('mouseleave', function () {
  gsap.to($(this).find('.line'), {
    x: '102%',
    duration: 0.4,
  });
});
// mouse enter large text links
$('.header_links').on('mouseenter', function () {
  gsap.fromTo(
    $(this).find('.text_link-line'),
    {
      x: '-102%',
    },
    {
      x: '0%',
      duration: 0.4,
    },
  );
});

$('.header_links').on('mouseleave', function () {
  gsap.to($(this).find('.text_link-line'), {
    x: '102%',
    duration: 0.4,
  });
});

// mouse enter nav links
$('.nav_overflow-hidden').on('mouseenter', function () {
  gsap.fromTo(
    $(this).find('.line'),
    {
      x: '-102%',
    },
    {
      x: '0%',
      duration: 0.4,
    },
  );
});

$('.nav_overflow-hidden').on('mouseleave', function () {
  gsap.to($(this).find('.line'), {
    x: '102%',
    duration: 0.4,
  });
});

// Optional - Set sticky section heights based on inner content width
// Makes scroll timing feel more natural
function setTrackHeights() {
  $('.section-height').each(function (index) {
    let trackWidth = $(this).find('.track').outerWidth();
    $(this).height(trackWidth);
  });
}
setTrackHeights();

window.addEventListener('resize', function () {
  setTrackHeights();
});
