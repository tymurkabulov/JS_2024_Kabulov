
    // // - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

    fetch('https://dummyjson.com/carts')
        .then(response => {
            if (!response.ok){
                throw new Error('Network was not ok');
            }
            return response.json();
        })
        .then(data => {
            data.carts.forEach(cart => {
                let cartBlock = document.createElement('div');
                let cartProductsWrapper = document.createElement('div');
                let cartId = document.createElement('h2');
                let cartInfo = document.createElement('p');

                cartId.textContent = 'Cart ID: ' + cart.id;

                cartProductsWrapper.style.border = '3px solid yellow';
                cartProductsWrapper.style.padding = '5px';
                cartBlock.style.border = '3px solid blue';
                cartBlock.style.padding = '10px';

                cart.products.forEach(product =>{
                    let cartProducts = document.createElement('p');
                    let productImage = document.createElement('img');

                    productImage.src = product.thumbnail;
                    productImage.alt = 'Product image';
                    productImage.width = 250;
                    productImage.height = 250;

                    cartProducts.innerHTML = `
                     ID: ${product.id}<br>
                     Title: ${product.title}<br>
                     Price: ${product.price}<br>
                     Quantity: ${product.quantity}<br>
                     Total: ${product.total}<br>
                     Discount: ${product.discountPercentage}<br>
                     Price with discount: ${product.discountedPrice}<br>
                   `;

                    cartProductsWrapper.appendChild(cartProducts);
                    cartProductsWrapper.appendChild(productImage);
                });

                cartInfo.innerHTML = `
                    Total: ${cart.total}<br>
                    Total with discont: ${cart.discountedTotal}<br>
                    User ID: ${cart.userId}<br>
                    Total products: ${cart.totalProducts}<br>
                    Total quantity: ${cart.totalQuantity}<br>
                `;

                cartBlock.appendChild(cartId);
                cartBlock.appendChild(cartProductsWrapper);
                cartBlock.appendChild(cartInfo);
                document.body.appendChild(cartBlock);



            })
        })
        .catch(error => {
            console.error('Issue with fetch operation', error);
        });



    // - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

    fetch('https://dummyjson.com/recipes')
        .then(response => {
            if (!response.ok){
                throw new Error('Network was not ok');
            }
            return response.json();
        })
        .then(data =>{
            console.log(data.recipes);
            data.recipes.forEach(recipe =>{

                let block = document.createElement('div');
                let ingredientsList = document.createElement('ul');
                let ingredientsListTitle = document.createElement('h3');
                let instructionsTitle = document.createElement('h3');
                let recipeInstructions = document.createElement('p');
                let recipeName = document.createElement('h2');
                let recipeStats = document.createElement('p');
                let recipeImage = document.createElement('img');

                instructionsTitle.textContent = 'How to cook:';
                ingredientsListTitle.textContent = 'Ingredients list:';
                recipeInstructions.textContent = recipe.instructions;
                recipeName.textContent = recipe.name;
                recipeStats.innerHTML = `
                    Preparation time: ${recipe.prepTimeMinutes} minutes<br>
                    Cooking time: ${recipe.cookTimeMinutes} minutes<br>
                    Servings: ${recipe.servings}<br>
                    Difficulty: ${recipe.difficulty}<br>
                    Cuisine: ${recipe.cuisine}<br>
                    Calories per Serving: ${recipe.caloriesPerServing}<br>
                    Tags: ${recipe.tags}<br>
                    Rating: ${recipe.rating}<br>
                    Reviews: ${recipe.reviewCount}<br>
                    Type of meal: ${recipe.mealType}
                `;

                recipeImage.src = recipe.image;
                recipeImage.alt = 'Meal picture';
                recipeImage.width = 400;
                recipeImage.height = 400;

                recipe.ingredients.forEach(ingredient => {
                    let ingredientElement = document.createElement('li');
                    ingredientElement.textContent = ingredient;
                    ingredientsList.appendChild(ingredientElement);
                })

                block.appendChild(recipeName);
                block.appendChild(ingredientsListTitle);
                block.appendChild(ingredientsList);
                block.appendChild(instructionsTitle);
                block.appendChild(recipeInstructions);
                block.appendChild(recipeStats);
                block.appendChild(recipeImage);
                document.body.appendChild(block);

            })
        })
        .catch(error =>{
            console.error('Issue with fetch operation', error);
        })


