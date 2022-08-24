const BURGEROPEN = document.querySelector('.js-burger-open');
const BURGER = document.querySelector('.burger');
const NAV = document.querySelector('.js-burger');
const NAVWRAPPER = document.querySelector('.header__wrapper');

const BODY = document.querySelector('body');
const CLASS_OVERFLOW = 'overflow';
const CLASS_ACTIVE = 'active';

const menuBurger =(() => {
  const menuBurgers = function menuBurger(){
    NAV.addEventListener('click', e => {
      e.preventDefault();
      NAV.toggleClass(CLASS_ACTIVE);
      NAV.toggleClass(BURGER);
    })
  };

  const init = () => {
    menuBurgers();
  };

  return {
    init,
  }
})();


export default menuBurger;
