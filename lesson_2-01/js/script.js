'use strict';

const adsApp = document.querySelector('.ads');
const [...item] = document.querySelectorAll('.item');
const [...title] = document.querySelectorAll('H2');
const [...propList] = document.querySelectorAll('.props__list');
const propItemsTwo = document.querySelectorAll('.item_six .props__item_two');
const propItemFour = document.querySelector('.item_two .props__item_four');
const [...propsItemsFour] = propList[0].querySelectorAll('.props__item');

adsApp.remove();

item[4].before(item[0]);
title[1].classList.add('item__title');
title[1].removeAttribute('name');
title[3].textContent = 'This и прототипы объектов';

const titleFive = title[2].textContent;
const titleTwo = title[4].textContent;
const titleFour = title[5].textContent;
title[2].textContent = titleTwo;
title[4].textContent = titleFour;
title[5].textContent = titleFive;


const copyPropListThree = propList[3].cloneNode(true);
propList[3].replaceWith(propList[4]);
title[4].after(copyPropListThree);

propList[2].append(...propItemsTwo);
propsItemsFour[2].after(propItemFour);
