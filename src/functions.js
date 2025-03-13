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

export function showAllFood(foodItems = {}, domElement) {
    Object.values(foodItems).forEach((item) => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('food-item');

        //Add title
        const title = document.createElement('h2');
        title.innerText = item.name;
        itemDiv.appendChild(title);

        //Add photo
        const photo = document.createElement('img');
        photo.src = item.photo || './photos/default.png';
        photo.alt = item.name;
        itemDiv.appendChild(photo);

        domElement.append(itemDiv);
    });
}
