// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

const peropero = document.querySelector('.btn-pepperoni');
const mushmush = document.querySelector('.btn-mushrooms');
const greengreeen = document.querySelector('.btn-green-peppers');
const saucesauce = document.querySelector('.btn-sauce');
const crustcrust = document.querySelector('.btn-crust');

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((mama) => {
    if (state.greenPeppers) {
      mama.style.visibility = 'visible';
    } else {
      mama.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  const sauceSection = document.querySelector('.sauce'); //! and without forEach.
  document.querySelectorAll('.sauce').forEach((sauces) => {
    if (state.whiteSauce) {
      sauces.classList.add(`sauce-white`);
    } else {
      sauces.classList.remove(`sauce-white`);
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((gluten) => {
    if (state.glutenFreeCrust) {
      gluten.classList.add(`crust-gluten-free`);
    } else {
      gluten.classList.remove(`crust-gluten-free`);
    }
  });
}

// function renderButtons() {
//   // Iteration 3: add/remove the class "active" of each `<button class="btn">`
//   if (state.pepperoni) {
//     peropero.classList.add('active');
//   } else {
//     peropero.classList.remove('active');
//   }
//   if (state.mushrooms) {
//     mushmush.classList.add('active');
//   } else {
//     mushmush.classList.remove('active');
//   }
//   if (state.greenPeppers) {
//     greengreeen.classList.add('active');
//   } else {
//     greengreeen.classList.remove('active');
//   }
//   if (state.whiteSauce) {
//     saucesauce.classList.add('active');
//   } else {
//     saucesauce.classList.remove('active');
//   }
//   if (state.glutenFreeCrust) {
//     crustcrust.classList.add('active');
//   } else {
//     crustcrust.classList.remove('active');
//   }
// }

//! 小一點比較好 有一個const跟一個loop

function renderButtons() {
  const toppings = {
    pepperoni: peropero,
    mushrooms: mushmush,
    greenPeppers: greengreeen,
    whiteSauce: saucesauce,
    glutenFreeCrust: crustcrust
  };

  for (const topping in toppings) {
    if (state[topping]) {
      toppings[topping].classList.add('active');
    } else {
      toppings[topping].classList.remove('active');
    }
  }
}

function renderPrice() {
  //   // Iteration 4: change the HTML of `<aside class="panel price">`
  //! we declare a const to get element from the tag ul
  const allToppings = document.querySelector('.panel.price ul');

  //! you declare a const to get the tag strong
  const priceElement = document.querySelector('.panel.price strong');

  //! you declare a let variable to get basePrice which is =  to 10 (top of the code)
  let total = basePrice;

  //! allToppings.innerHTML = " " to delete what is written to the ul elements with price and names of the elements
  allToppings.innerHTML = '';

  //! you do a loop in the object state to get all elements from the object
  for (const key in state) {
    //! In the case if state is declare and equal to
    if (state[key]) {
      console.log(ingredients[key]);

      //! ingredient is = to const ingredients (top of the page)
      const ingredient = ingredients[key];

      //! you declare a const to create a li tag.
      const li = document.createElement('li');

      //! In the LI element, you add ingredient and
      li.textContent = `$${ingredient[key]} ${ingredient[key]}`;

      //! and you add them to be written
      allToppings.appendChild(li);

      //! you calculate the price
      total += ingredient.price;
    }
  }
  priceElement.textContent = `$${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
