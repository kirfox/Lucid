'use strict';

const slider = () => {
  const slider = document.querySelector('.slider-dots_list');
  const slide = document.querySelectorAll('.slide');
  const ul = document.querySelector('.slider-dots_list');
  
  let currentSlide = 0;
  let interval;
  let dot;
  const createDots = () =>{
        
    for (let i = 0; i < slide.length; i++) {

        dot = document.createElement("li");
        dot.classList.add('dot');
        ul.append(dot);
    }

    let ulList = ul.querySelectorAll('li');
    
    ulList[0].classList.add('dot-active');
    
    dot = document.querySelectorAll('.dot');

    return dot;
  };
  createDots();

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };
  
  const nextSlide = (elem, index, strClass) => {
   elem[index].classList.add(strClass);
  };
  
  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'active-slide');
    prevSlide(dot, currentSlide, 'dot-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
        currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'active-slide');
    nextSlide(dot, currentSlide, 'dot-active');
  };
  
  const startSlide = (time = 7000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', (event) => {
    event.preventDefault();

    let target = event.target;

    if (!target.matches('.dot')) {
        return;
    }

    prevSlide(slide, currentSlide, 'active-slide');
    prevSlide(dot, currentSlide, 'dot-active'); 

    if (target.matches('.dot')){
        dot.forEach((elem, index) => {
            if (elem === target){
                currentSlide = index;
            }
        });
    }

    if (currentSlide >= slide.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slide.length - 1;
    }
    nextSlide(slide, currentSlide, 'active-slide');
    nextSlide(dot, currentSlide, 'dot-active'); 

  });

  slider.addEventListener('mouseover', (event) => {
    if (event.target.matches('.dot')){
        stopSlide();
    }
  });

  slider.addEventListener('mouseout', (event) => {
    if (event.target.matches('.dot')){
        startSlide();
    }
  });

  startSlide(7000);
};

slider();

const priceBlock = () => {

  const contentPricing = document.querySelector('.content-pricing');
  const contentPricingItem = document.querySelector('.content-pricing_item');

contentPricing.addEventListener('mouseover', (e)=> {
 
  let target = e.target;

    const changeBlue = () => {
      document.body.style.cursor = "pointer";
      const contentPricingItemHeader = target.parentNode.parentNode.querySelector('.content-pricing_item-header');
      const contentPricingItemPrice = target.parentNode.parentNode.querySelector('.content-pricing_item-price');
      const contentPricingItemButton = target.parentNode.parentNode.querySelector('.content-pricing_item-button');
      const contentPricingItemPriceText = target.parentNode.parentNode.querySelector('.content-pricing_item-price_text');
      
      contentPricingItemHeader.style.color = '#008ed6';
      contentPricingItemPrice.style.background = '#008ed6';
      contentPricingItemPrice.style.color = 'white';
      contentPricingItemButton.style.background = '#008ed6';
      contentPricingItemButton.style.color = 'white';
      contentPricingItemPriceText.style.color = 'white';
    };

    if (target.closest('.free') && target.closest('.content-pricing_item-button')) {
      changeBlue();
    } 
    if (target.closest('.personal') && target.closest('.content-pricing_item-button')) {
      changeBlue();
    } 
    if (target.closest('.business') && target.closest('.content-pricing_item-button')) {
      changeBlue();
    } 
    if (target.closest('.ultimate') && target.closest('.content-pricing_item-button')) {
      changeBlue();
    } 
    
  });

  contentPricing.addEventListener('mouseout', (e)=> {
  
    let target = e.target;

    const changeWhite = () => {
      document.body.style.cursor = "default";
      const contentPricingItemHeader = target.parentNode.parentNode.querySelector('.content-pricing_item-header');
      const contentPricingItemPrice = target.parentNode.parentNode.querySelector('.content-pricing_item-price');
      const contentPricingItemButton = target.parentNode.parentNode.querySelector('.content-pricing_item-button');
      const contentPricingItemPriceText = target.parentNode.parentNode.querySelector('.content-pricing_item-price_text');
      
      contentPricingItemHeader.style.color = 'black';
      contentPricingItemPrice.style.background = 'white';
      contentPricingItemPrice.style.color = 'black';
      contentPricingItemButton.style.background = 'white';
      contentPricingItemButton.style.color = '#008ed6';
      contentPricingItemPriceText.style.color = '#7b7b7d';
    };

    if (target.closest('.free') && target.closest('.content-pricing_item-button')) {
      changeWhite();
    } 
    if (target.closest('.personal') && target.closest('.content-pricing_item-button')) {
      changeWhite();
    } 
    if (target.closest('.business') && target.closest('.content-pricing_item-button')) {
      changeWhite();
    } 
    if (target.closest('.ultimate') && target.closest('.content-pricing_item-button')) {
      changeWhite();
    } 
    
  });

};

priceBlock();

const smothScrolling = () => {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
};

smothScrolling();

const arrow = () => {
 
  const content = document.querySelector('.content');
  const arrow = document.querySelector('.arrow');

  window.addEventListener('scroll', function() {
      let cordContent = content.getBoundingClientRect();
      if (cordContent.top < 0) {
        arrow.style.display = 'block';
      }
      if (cordContent.top > 0) {
        arrow.style.display = 'none';
      }
  });
};

arrow();