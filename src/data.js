export const allFood = {
    sourdoughBread: {
        name: 'Sourdough Bread',
        photo: './src/photos/sourdough-bread.jpg',
        type: 'Boulangerie/Patisserie',
        ingredient: {
            breadFlour: '450g',
            water: '300g or less',
            sourdoughStarter: '100g',
            salt: '10g'
        }
    },

    chickenPie: {
        name: 'Chicken Pie',
        photo: './src/photos/default.png',
        type: 'Baked dishes',
        ingredient: {
            dough: '2 pâtes feuilletées',
            stuffing: ['(faux)chicken', 'mushroom', 'carrot', 'onion'],
            sauce: ['cream', 'white pepper', 'sesame oil', 'salt', 'starch'],
            surface: ['egg']
        }
    },

    cinnamonRoll: {
        name: 'Cinnamon Roll',
        photo: './src/photos/cinnamon-roll.jpg',
        type: 'Boulangerie/Patisserie',
        ingredient: {
            dough: {
                milk: '240ml warmed milk',
                'granulated Sugar': '135g',
                'active yeast': '14g',
                'unsalted butter': '113g',
                egg: '2 eggs',
                salt: '1/2 teaspoon of salt',
                flour: '563g',
                oil: '2 teaspoon'
            },
            filling: {
                'unsalted butter': 'softened 113g',
                'light or dark brown sugar': '135g',
                cinnamon: 'at least 2 teaspoons'
            }
        }
    },
    lemonade: {
        name: 'Homemade Lemonade',
        photo: './src/photos/default.png',
        type: 'Drinks'
    }
};
