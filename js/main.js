$(document).ready(function () {
   window.addEventListener('scroll' , function (){
    const nav = this.document.querySelector('nav');
    if(window.scrollY > 150){
        nav.classList.add('addnav');
    }
    else{
        nav.classList.remove('addnav');
    }
   })
    let cart = []; // Changed to 'let' to allow modification of the array

    document.querySelectorAll('.collection').forEach(function(collection) {
        const seeMenuLink = collection.querySelector('a');
        const menu = collection.querySelector('.menu');
        
        seeMenuLink.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Get the drink type from the data-type attribute
            const drinkType = collection.getAttribute('data-type');
            // Load items into the modal based on the drink type
            loadItemsIntoModal(drinkType);
            
            // Display the modal
            $('.modalProduct').show();//or  $('#itemsModal').show();
        });
    });

    // Function to load items into the modal
    function loadItemsIntoModal(drinkType) {
        const itemsContainer = document.getElementById('itemsContainerPro');
        itemsContainer.innerHTML = ''; // Clear existing items
        let title;
        let items;
        if (drinkType === 'hotDrinks') {
            items = hotDrinks;
            title = '<span>Hot Drinks</span> Menu';
        } else if (drinkType === 'icedDrinks') {
            items = icedDrinks;
            title = '<span>Iced Drinks</span> Menu';
        } else if (drinkType === 'coffeeCake') {
            items = coffeeCake;
            title = '<span>Coffee Cakes</span> Menu';
        } 
        
        else {
            return; // No matching type found
        }
        document.getElementById('modalTitle').innerHTML = title;
        items.forEach(item => {
            itemsContainer.innerHTML += `
                <div class="item">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>$${item.price.toFixed(2)}</p>
                    <button class="add-to-cart" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}">Add to Cart</button>
                    <div class="quantity-controls" style="display: none;">
                        <button class="minus">-</button>
                        <span class="quantity">1</span>
                        <button class="plus">+</button>
                    </div>
                </div>
            `;
        });
    }

    //***************************** */ Close the modal ******************************************************
    document.querySelector('.close-button-product').addEventListener('click', function() {
        $('#itemsModal').hide();
    });

    //***************************** */ Modal close when clicking outside ***********************************
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('itemsModal')) {
            console.log(event.target);
            $('#itemsModal').hide();
        }
    });

    const products = [
        { image: '../img/expresso.png', name: 'Hot Drink', price: 3.00, id: 1 ,quantity:0},
        { image: '../img/cap.png', name: 'cappuccino', price: 4.00, id: 2 },
        { image: '../img/latte.png', name: 'latte', price: 5.00, id: 3 },
        { image: '../img/milkshek.png', name: 'milkshake', price: 4.50, id: 4 },
        { image: '../img/Iced Coffee.png', name: 'Iced Coffee', price: 3.50, id: 5 },
        { image: '../img/coffeecake1.png', name: 'Cofee Cake', price: 1.50, id: 6 },
        { image: '../img/creamcake.png', name: 'Cream Cake', price: 2.50, id: 7 },
        { image: '../img/black coffee.jpg', name: 'Black Coffee', price: 3.00, id: 8 },
        { image: '../img/black coffeemilk.jpg', name: 'Black Coffee & Milk', price: 4.00, id: 9 },
        { image: '../img/black&sugger.jpg', name: 'black Milk & sugger', price: 5.00, id: 10 },
        { image: '../img/singleexpresso.jpg', name: 'Single Expresso', price: 4.50, id: 11 },
        { image: '../img/doubleexpresso.jpg', name: 'Double Expresso', price: 3.50, id: 12 },
        { image: '../img/cappuccino.jpeg', name: 'Cappuccino', price: 1.50, id: 13 },
        { image: '../img/americano.png', name: 'Americano Coffee', price: 2.50, id: 14 }
    ];
    const hotDrinks = [
        { image: './img/black coffee.jpg', name: 'Black Coffee', price: 3.00, id: 15 },
        { image: './img/black coffeemilk.jpg', name: 'Black Coffee & Milk', price: 4.00, id: 16 },
        { image: './img/black&sugger.jpg', name: 'black Milk & sugger', price: 5.00, id: 17 },
        { image: './img/singleexpresso.jpg', name: 'Single Expresso', price: 4.50, id: 18 },
        { image: './img/doubleexpresso.jpg', name: 'Double Expresso', price: 3.50, id: 20 },
        { image: './img/cappuccino.jpeg', name: 'Cappuccino', price: 1.50, id: 21 },
        { image: './img/americano.png', name: 'Americano Coffee', price: 2.50, id: 22 }
    ];
    const icedDrinks = [
        { image: './img/Cold Brew Coffee.jpeg', name: 'Cold Brew Coffee', price: 3.00, id: 23 },
        { image: './img/Iced Latte.jpeg', name: 'Iced Latte', price: 4.00, id: 24 },
        { image: './img/Iced Americano.jpeg', name: 'Iced Americano', price: 5.00, id: 25 },
        { image: './img/Iced Mocha.jpg', name: 'Iced Mocha', price: 4.50, id: 26 },
        { image: './img/Vietnamese Iced Coffee.jpeg', name: 'Vietnamese Iced Coffee', price: 3.50, id: 27 },
        { image: './img/Iced Caramel Macchiato.jpg', name: 'Iced Caramel Macchiato', price: 1.50, id: 28 },
        { image: './img/Iced Cappuccino.jpeg', name: 'Iced Cappuccino', price: 4.50, id: 29 },
        { image: './img/Iced Flat White.jpeg', name: 'Iced Flat White', price: 3.50, id: 30 },
        { image: './img/Iced Coffee with Milk.jpg', name: 'Iced Coffee with Milk', price: 2.50, id: 31 },
        { image: './img/Affogato.jpeg', name: 'Affogato', price: 2.50, id: 32 },
    ];
    const coffeeCake = [
        { image: '../img/Blueberry Coffee Cake.jpg', name: 'Blueberry Cake', price: 15.00, id: 33 },
        { image: '../img/Apple Coffee Cake.jpg', name: 'Apple Coffee Cake ', price: 13.00, id: 34 },
        { image: '../img/Sour Cream Coffee Cake.jpg', name: 'Sour Cream Cake', price: 13.00, id: 35 },
        { image: '../img/Raspberry Coffee Cake.jpg', name: 'Raspberry Cake', price: 9.50, id: 36 },
        { image: '../img/Walnut Coffee Cake.jpg', name: 'Walnut Coffee Cake', price: 12.50, id: 37 },
        { image: '../img/Coffee Cake & Cookies Gift.jpeg', name: 'Coffee Cake & Cookies Gift', price: 41.50, id: 38 },
        { image: '../img/eazycake.png', name: 'Eazy cake', price: 4.50, id: 39 },
        { image: '../img/Crumb Coffee Cake.jpg', name: 'Crumb Coffee Cake', price: 5.50, id: 40 },
        { image: '../img/Hostess Coffee Cakes.jpg', name: 'Hostess Coffee Cakes', price: 6.50, id: 41 },
        { image: '../img/Costco Coffee Cake.jpg', name: 'Costco Coffee Cake', price: 7.50, id: 42 },
    ];

    generateCarouselItems('#carousel1', products);
    generateCarouselItems('#carousel2', hotDrinks);
    generateCarouselItems('#carousel3', icedDrinks);
    generateCarouselItems('#carousel4', coffeeCake);
    function generateCarouselItems(carouselId, products) {
        products.forEach(product => {
            $(carouselId).append(`
              <div class="item">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">Add to Cart</button>
                <div class="quantity-controls" style="display: none;">
                  <button class="minus">-</button>
                  <span class="quantity">1</span>
                  <button class="plus">+</button>
                </div>
              </div>
            `);
        });
    }
    
    //**************************************** */ Initialize Owl Carousel*************************************************************************
    $("#carousel1").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: true,
        navText: [
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
        ]
    });

    $("#carousel2").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: true,
        navText: [
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
        ]
    });

    $("#carousel3").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: true,
        navText: [
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
        ]
    });
    $("#carousel4").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: true,
        navText: [
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
        ]
    });

    console.log('jQuery version:', $.fn.jquery);
    console.log('Owl Carousel version:', $.fn.owlCarousel);

    // Cart functionality
    const cartIcon = document.getElementById('cart-icon');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalAmount = document.getElementById('cart-total-amount');

    $(document).on('click', '.add-to-cart', function() {
       // const $item = $(this).closest('.item'); 
        const productId = $(this).data('id');
        const productName = $(this).data('name');
        const productPrice = parseFloat($(this).data('price'));
        const productImage = $(this).data('image');
        const quantity = 1; // Default to 1 when adding to cart

        addProductToCart(productId, productName, productPrice, productImage, quantity);

        $(this).hide();
        $(this).siblings(".quantity-controls").show();
    });

    $(document).on('click', '.plus', function() {
        const $item = $(this).closest('.item'); 
        const productId = $item.find('.add-to-cart').data('id');
        const quantity = parseInt($item.find('.quantity').text()) + 1;

        $item.find('.quantity').text(quantity);

        updateProductQuantityInCart(productId, quantity);
    });

    $(document).on('click', '.minus', function() {
        const $item = $(this).closest('.item'); 
        const productId = $item.find('.add-to-cart').data('id');
        const quantity = parseInt($item.find('.quantity').text()) - 1;

        if (quantity <= 0) {
            $(this).parent().hide();
            $(this).parent().siblings(".add-to-cart").show();
            removeProductFromCart(productId);
        } else {
            $item.find('.quantity').text(quantity);
            updateProductQuantityInCart(productId, quantity);
        }
    });

    function addProductToCart(productId, productName, productPrice, productImage, quantity) {
        //const existingProduct = cart.find(item => item?.id === productId) ?? null;
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: quantity
            });
        

        renderCartItems();
        console.log(cart)
    }

    function removeProductFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        renderCartItems();
    }

    function updateProductQuantityInCart(productId, quantity) {
        const product = cart.find(item => item.id === productId);
        if (product) {
            product.quantity = quantity;
        }
        renderCartItems();
    }

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        let totalAmount = 0;

        cart.forEach(product => {
            const productTotal = product.price * product.quantity;
            totalAmount += productTotal;
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <div class="cart-item-details">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)} x ${product.quantity}</p>
                
              </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartTotalAmount.textContent = `$( ${totalAmount.toFixed(2)} )`;
    }



    /*************************************animation for p tag inside the hero class ****/
    const text = document.getElementById('typing-text');
const textContent = text.textContent;
let charIndex = 0;

function typeText() {
  if (charIndex < textContent.length) {
    text.textContent = textContent.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeText, 50); // Adjust the speed of typing
  } else {
    setTimeout(deleteText, 2000); // Wait for 2 seconds before deleting the text
  }
}

function deleteText() {
  if (charIndex > 0) {
    text.textContent = textContent.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 50); // Adjust the speed of deleting
  } else {
    setTimeout(typeText, 2000); // Wait for 2 seconds before typing again
  }
}

typeText(); // Start the animation
});


// *****************************************************************modal script******************************************** 



document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("login-modal");
  var userIcon = document.getElementById("user-icon");
  var checkoutButton = document.getElementById("checkout-button");

  // Open the modal when user icon or checkout button is clicked
  userIcon.onclick = function() {
      modal.style.display = "block";
  }

  checkoutButton.onclick = function(event) {
      event.preventDefault();
      modal.style.display = "block";
  }

  // Close the modal when the close button is clicked
  document.addEventListener("click", function(event) {
      if (event.target.classList.contains("close")) {
          modal.style.display = "none";
      }
  });

  // Close the modal when clicking outside of the modal content
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  // Handle register link click
  document.getElementById("register-link").onclick = function(event) {
      event.preventDefault();
      alert("Registration form will be here.");
  }
});
