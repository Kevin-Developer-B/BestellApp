let shopBasket = [];

function init() {
    loadContent()
    loadPizzaDishes()
    loadPizzaBurnDishes()
    loadBurgerDishes()
}

function loadContent() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = getTemplateContent();
}

function loadPizzaDishes() {
    let contentPizzaRef = document.getElementById('pizza');
    for (let i = 0; i < myPizzas.length; i++) {
        contentPizzaRef.innerHTML += getTemplatePizza(i);
    }
}

function loadPizzaBurnDishes() {
    let contentPizzaBunsRef = document.getElementById('pizzabuns');
    for (let i = 0; i < myPizzaBuns.length; i++) {
        contentPizzaBunsRef.innerHTML += getTemplatePizzaBuns(i);
    }
}

function loadBurgerDishes() {
    let contentBurgerRef = document.getElementById('burger');
    for (let i = 0; i < myBurger.length; i++) {
        contentBurgerRef.innerHTML += getTemplateBurger(i);
    }
}

function addPizzaToShopBasket(index) {
    let existingItemIndex = shopBasket.findIndex(item => item.dish === myPizzas[index].dish);
    if (existingItemIndex !== -1) {
        shopBasket[existingItemIndex].quantity++;
    } else {
        shopBasket.push({
            dish: myPizzas[index].dish,
            price: myPizzas[index].price,
            quantity: 1
        });
    }
    updateBasket();
}

function addPizzaBunsToShopBasket(index) {
    let existingItemIndex = shopBasket.findIndex(item => item.dish === myPizzaBuns[index].dish);
    if (existingItemIndex !== -1) {
        shopBasket[existingItemIndex].quantity++;
    } else {
        shopBasket.push({
            dish: myPizzaBuns[index].dish,
            price: myPizzaBuns[index].price,
            quantity: 1
        });
    }
    updateBasket();
}

function addBurgerToShopBasket(index) {
    let existingItemIndex = shopBasket.findIndex(item => item.dish === myBurger[index].dish);
    if (existingItemIndex !== -1) {
        shopBasket[existingItemIndex].quantity++;
    } else {
        shopBasket.push({
            dish: myBurger[index].dish,
            price: myBurger[index].price,
            quantity: 1
        });
    }
    updateBasket();
}

function increaseQuantity(index) {
    shopBasket[index].quantity++;
    updateBasket();
}

function decreaseQuantity(index) {
    if (shopBasket[index].quantity > 1) {
        shopBasket[index].quantity--;
    } else {
        shopBasket.splice(index, 1);
    }
    updateBasket();
}

function removeItem(index) {
    shopBasket.splice(index, 1);
    updateBasket();
}

function clearBasket() {
    shopBasket = [];
    updateBasket();
}

function updateBasket() {
    let basketRef = document.getElementById('dishToBasket');
    basketRef.innerHTML = '';
    let total = 0;
    shopBasket.forEach((item, index) => {
        basketRef.innerHTML += getTemplateDishBasket(item, index);
        total += item.price * item.quantity;
    });
    if (shopBasket.length > 0){ 
    basketRef.innerHTML += getTemplateTotalPrice(total);
    }
    updateResponsiveBasket();
}

function updateResponsiveBasket() {
    const responsiveBasketRef = document.getElementById('responsive-dishToBasket');
    responsiveBasketRef.innerHTML = '';
    let total = 0;
    shopBasket.forEach((item, index) => {
        responsiveBasketRef.innerHTML += getTemplateDishBasket(item, index);
        total += item.price * item.quantity;
    });
    if (shopBasket.length > 0) {
        responsiveBasketRef.innerHTML += getTemplateTotalPrice(total);
    }
}

function toggleBasket() {
    const basket = document.getElementById('responsive-basket');
    const button = document.getElementById('responsive-button');
    basket.classList.toggle('open');
    if (basket.classList.contains('open')) {
        button.classList.add('move-up');
    } else {
        button.classList.remove('move-up');
    }
}

function completeOrder() {
    window.open('', '_blank').document.write(`<h1 style="display: flex; align-items: center; justify-content: center; height: 90vh; width: 100%;">Vielen Dank für Ihre Bestellung!</h1>`);
    clearBasket();
}