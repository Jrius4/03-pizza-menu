const pizzaData = [
    {
        id: 1,
        name: "Margherita",
        description: "Classic Italian pizza topped with fresh tomatoes, mozzarella, and basil.",
        price: 9.99,
        recipe: "Dough, Tomato Sauce, Mozzarella, Basil, Olive Oil",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 2,
        name: "Pepperoni",
        description: "A fan-favorite loaded with pepperoni slices and gooey mozzarella.",
        price: 11.99,
        recipe: "Dough, Tomato Sauce, Mozzarella, Pepperoni",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 3,
        name: "BBQ Chicken",
        description: "Smoky BBQ sauce with chicken, onions, and cilantro.",
        price: 12.49,
        recipe: "Dough, BBQ Sauce, Chicken, Mozzarella, Red Onion, Cilantro",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 4,
        name: "Hawaiian",
        description: "Sweet pineapple and savory ham make for the perfect sweet-savory combo.",
        price: 10.99,
        recipe: "Dough, Tomato Sauce, Mozzarella, Ham, Pineapple",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 5,
        name: "Veggie Delight",
        description: "Packed with fresh veggies like bell peppers, onions, mushrooms, and olives.",
        price: 9.49,
        recipe: "Dough, Tomato Sauce, Mozzarella, Bell Peppers, Onions, Mushrooms, Olives",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 6,
        name: "Buffalo Chicken",
        description: "Spicy buffalo sauce with tender chicken and a ranch drizzle.",
        price: 12.99,
        recipe: "Dough, Buffalo Sauce, Chicken, Mozzarella, Ranch Dressing",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 7,
        name: "Meat Lover's",
        description: "A hearty pizza loaded with pepperoni, sausage, ham, and bacon.",
        price: 13.49,
        recipe: "Dough, Tomato Sauce, Mozzarella, Pepperoni, Sausage, Ham, Bacon",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 8,
        name: "Four Cheese",
        description: "A cheesy masterpiece featuring mozzarella, parmesan, gorgonzola, and ricotta.",
        price: 11.49,
        recipe: "Dough, Tomato Sauce, Mozzarella, Parmesan, Gorgonzola, Ricotta",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 9,
        name: "Mushroom Truffle",
        description: "Earthy mushrooms paired with a drizzle of truffle oil.",
        price: 14.99,
        recipe: "Dough, Mozzarella, Mushrooms, Truffle Oil, Parmesan",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 10,
        name: "Mediterranean",
        description: "A light and refreshing pizza with feta, olives, spinach, and artichokes.",
        price: 11.99,
        recipe: "Dough, Tomato Sauce, Mozzarella, Feta, Olives, Spinach, Artichokes",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 11,
        name: "Spinach & Ricotta",
        description: "A creamy mix of spinach and ricotta cheese on a crispy crust.",
        price: 10.49,
        recipe: "Dough, Mozzarella, Spinach, Ricotta, Garlic",
        imageUrl: "https://www.thelastfoodblog.com/wp-content/uploads/2017/06/white-pizza-1.jpg"
    },
    {
        id: 12,
        name: "Supreme",
        description: "Packed with pepperoni, sausage, peppers, onions, and mushrooms.",
        price: 13.99,
        recipe: "Dough, Tomato Sauce, Mozzarella, Pepperoni, Sausage, Bell Peppers, Onions, Mushrooms",
        imageUrl: "https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg"
    },
    {
        id: 13,
        name: "Chicken Alfredo",
        description: "Creamy Alfredo sauce with tender chicken and mozzarella.",
        price: 12.49,
        recipe: "Dough, Alfredo Sauce, Chicken, Mozzarella, Parmesan",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 14,
        name: "Taco Pizza",
        description: "A fusion of pizza and tacos, topped with beef, cheese, lettuce, and salsa.",
        price: 12.99,
        recipe: "Dough, Tomato Sauce, Mozzarella, Ground Beef, Lettuce, Salsa, Cheddar Cheese",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 15,
        name: "Pesto Chicken",
        description: "A fresh pesto base topped with grilled chicken and sun-dried tomatoes.",
        price: 13.49,
        recipe: "Dough, Pesto Sauce, Chicken, Mozzarella, Sun-dried Tomatoes",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 16,
        name: "Sausage & Peppers",
        description: "Italian sausage and sautéed bell peppers for a flavorful kick.",
        price: 11.49,
        recipe: "Dough, Tomato Sauce, Mozzarella, Italian Sausage, Bell Peppers",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 17,
        name: "Philly Cheesesteak",
        description: "Tender beef, onions, and peppers, with gooey mozzarella.",
        price: 13.99,
        recipe: "Dough, Mozzarella, Sliced Beef, Onions, Bell Peppers, Provolone",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 18,
        name: "Shrimp Scampi",
        description: "Garlicky shrimp with a light lemon-butter sauce and mozzarella.",
        price: 14.49,
        recipe: "Dough, Mozzarella, Shrimp, Garlic, Lemon, Butter, Parsley",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 19,
        name: "Prosciutto & Arugula",
        description: "A delicate balance of salty prosciutto and fresh arugula.",
        price: 13.49,
        recipe: "Dough, Tomato Sauce, Mozzarella, Prosciutto, Arugula, Olive Oil",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    },
    {
        id: 20,
        name: "White Pizza",
        description: "A garlic-infused white sauce with ricotta and mozzarella.",
        price: 11.99,
        recipe: "Dough, White Sauce, Ricotta, Mozzarella, Garlic",
        imageUrl: "https://tastyoven.com/wp-content/uploads/2023/05/mediterranean-pizza-image-1.jpg"
    }
];
export default pizzaData;
