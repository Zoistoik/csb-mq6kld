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

    const content = text.querySelector('.h2_style, .service-title');

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
  },

// call the function to animate text
animateText('large-p', '.text__effect', '#large-p', 'top 60%', 'bottom 40%');
animateText(
  'next-steps',
  '.text__effect',
  '#next-steps',
  'top 90%',
  'bottom 40%',
);
animateText(
  'acu-title',
  '.service_title_wrapper',
  '#acu-title',
  'top 90%',
  'bottom 60%',
);
animateText(
  'cosmetic-title',
  '.service_title_wrapper',
  '#cosmetic-title',
  'top 90%',
  'bottom 60%',
);
animateText(
  'sports-rehab-title',
  '.service_title_wrapper',
  '#sports-rehab-title',
  'top 90%',
  'bottom 60%',
);