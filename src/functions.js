import { allFood } from './data.js';

/**
 * @param {Object{}} foodItems - An array of food items.
 * @param {HTMLElement} domElement - The DOM element to append the category button to.
 */

export function createCategoryButton(foodItems = {}, domElement) {
    const categories = [
        ...new Set(Object.values(allFood).map((item) => item.type))
    ];
    categories.unshift('All');
    for (const category of categories) {
        let newButton = document.createElement('button');
        newButton.innerText = category;
        domElement.appendChild(newButton);
    }
}
