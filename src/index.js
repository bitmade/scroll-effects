import ScrollMagic from 'scrollmagic';
import assign from 'lodash/assign';

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
      const scene = new ScrollMagic.Scene(assign({
        triggerElement,
      }, sceneOptions)).setClassToggle(triggerElement, animateClass);

      controller.addScene(scene);
    });

    return controller;
  }

  return null;
};