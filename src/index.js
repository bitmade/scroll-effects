import ScrollMagic from 'scrollmagic';

export const Animatable = (sceneOptions = {
  offset: -120,
}, options = {
  elementClass: 'animatable',
  animateClass: 'animated',
}) => {

  const { elementClass, animateClass, offset } = options;
  const elements = [].slice.call(document.querySelectorAll(`.${elementClass}`));

  if (elements.length) {
    const controller = new ScrollMagic.Controller();

    elements.forEach(triggerElement => {
      const scene = new ScrollMagic.Scene(Object.assign({
        triggerElement,
      }, sceneOptions)).setClassToggle(triggerElement, animateClass);

      controller.addScene(scene);
    });

    return controller;
  }

  return null;
};