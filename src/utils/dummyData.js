import { images } from "../assets";

export const menuData = [
    {
        id: 1,
        name: "pizza",
        menu_image: images.pizza_icon
    },
    {
        id: 2,
        name: "Burgers",
        menu_image: images.burger_icon
    },
    {
        id: 3,
        name: "Hotdog",
        menu_image: images.hotdog_icon
    },
    {
        id: 4,
        name: "Tacos",
        menu_image: images.taco_icon
    },
    {
        id: 5,
        name: "Snacks",
        menu_image: images.snack_icon
    },
    {
        id: 6,
        name: "Drinks",
        menu_image: images.drink_icon
    },
    {
        id: 7,
        name: "Noodles",
        menu_image: images.noodle_icon
    },
    
]

export const foodData = [
    {
        id: 1,
        name: "Crispy Chicken Burger",
        description: "Burger with crispy chicken, cheese and lettuce",
        price: 15,
        food_image: images?.crispy_chicken_burger,
        menu_id: 2,
        restarant_id: 1,
        status: true,
    },
    {
        id: 2,
        name: "Crispy Baked French Fries",
        description: "Crispy Baked French Fries",
        price: 8,
        food_image: images?.baked_fries,
        menu_id: 5,
        restarant_id: 1,
        status: true
    },
    {
        id: 3,
        name: "Chicken Burger with Honey Mustard",
        description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
        price: 25,
        food_image: images?.burger_1,
        menu_id: 2,
        restarant_id: 1,
        status: true
    },
    {
        id: 4,
        name: "Chicago Style Hot Dog",
        description: "Fresh tomatoes, all beef hot dogs",
        price: 20,
        food_image: images?.chicago_hot_dog,
        menu_id: 3,
        restarant_id: 1,
        status: true
    },
    {
        id: 5,
        name: "Spiced Fries",
        description: "Spicy french fries",
        price: 8,
        food_image: images?.fries,
        menu_id: 5,
        restarant_id: 1,
        status: true
    },
    {
        id: 6,
        name: "Hawaiian Pizza",
        description: "Canadian bacon, homemade pizza crust, pizza sauce",
        price: 15,
        food_image: images?.fries,
        menu_id: 1,
        restarant_id: 1,
        status: true
    },
    {
        id: 8,
        name: "Kolo Mee",
        description: "Noodles with char siu",
        price: 5,
        food_image: images?.kolo_me,
        menu_id: 7,
        restarant_id: 1,
        status: true
    },
    {
        id: 9,
        name: "Sushi sets",
        description: "Fresh salmon, sushi rice, fresh juicy avocado",
        price: 50,
        food_image: images?.japanese_restaurant,
        menu_id: 4,
        restarant_id: 1,
        status: true
    },
    {
        id: 10,
        name: "Spicy mustard hot dog",
        description: "Fresh tomatoes, all beef hot dogs",
        price: 20,
        food_image: images?.hotdog_2,
        menu_id: 3,
        restarant_id: 1,
        status: true
    },
    {
        id: 11,
        name: "Briyani with Mutton",
        description: "A traditional Swahili rice dish with mutton",
        price: 12,
        food_image: images?.biriyani,
        menu_id: 5,
        restarant_id: 1,
        status: true
    },
    {
        id: 12,
        name: "Noodle Soup",
        description: "Vermicelli noodles, cooked prawns",
        price: 25,
        food_image: images?.noodle_soup,
        menu_id: 5,
        restarant_id: 1,
        status: true
    },
    {
        id: 13,
        name: "Tomato & Basil Pizza",
        description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
        price: 20,
        food_image: images?.pizza_1,
        menu_id: 1,
        restarant_id: 1,
        status: true
    },
    {
        id: 14,
        name: "Italian Paperoni",
        description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
        price: 15,
        food_image: images?.pizza_2,
        menu_id: 1,
        restarant_id: 1,
        status: true
    },
    {
        id: 15,
        name: "Mediterranean Chopped Salad",
        description: "Finely chopped lettuce, tomatoes, cucumbers",
        price: 10,
        food_image: images?.salad,
        menu_id: 5,
        restarant_id: 1,
        status: true
    },
    {
        id: 16,
        name: "Blue fish tuna sushi",
        description: "Finely chopped lettuce, tomatoes, cucumbers",
        price: 15,
        food_image: images?.sushi,
        menu_id: 5,
        restarant_id: 1,
        status: true
    },
    {
        id: 16,
        name: "Ice cold coffee",
        description: "Chilled ice cold coffee drink",
        price: 5,
        food_image: images?.ice_coffee,
        menu_id: 6,
        restarant_id: 1,
        status: true
    },
    {
        id: 17,
        name: "Tomato pasta",
        description: "Tomato pasta",
        price: 5,
        food_image: images?.tomato_pasta,
        menu_id: 7,
        restarant_id: 1,
        status: true
    },
]

export const userProfile = {
    id: 1,
    first_name: "Jeremy",
    last_name: "Mathews",
    avatar: images.user_profile,
    user_type: "user",
    authenticated: false,
    cards: [
        {
            id: 1,
            type: "VISA",
            balance: 1560,
            card_number: 5467895445,
            holder_name: "Jeremy Mathews",
            expiry_date: "07/27"
        }
    ]
}

export const cartData = [
    {
        food_id: 2,
        name: "Crispy Baked French Fries",
        description: "Crispy Baked French Fries",
        price: 8,
        food_image: images?.baked_fries,
        quantity: 1
    },
    {
        food_id: 3,
        name: "Chicken Burger with Honey Mustard",
        description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
        price: 25,
        food_image: images?.burger_1,
        quantity: 2
    },
    {
        food_id: 3,
        name: "Chicken Burger with Honey Mustard",
        description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
        price: 25,
        food_image: images?.burger_1,
        quantity: 2
    },
   
  
]

const dummyData = {
    menuData,
    foodData,
    userProfile,
    cartData
}

export default dummyData