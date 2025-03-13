import { createCategoryButton } from './functions.js';
import { allFood } from './data.js';

console.log('--begin--');

//DOM

const dom = {
    categoryContainer: document.getElementById('category-container'),
    displayContainer: document.getElementById('display')
};

document.addEventListener(
    'load',
    createCategoryButton(allFood, dom.categoryContainer)
);
