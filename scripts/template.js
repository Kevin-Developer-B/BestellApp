function getTemplateContent() {
    return `
    <header>
        <div class="headline">
            <img class="logo" src="./assets/Logo/Logo.png" alt="">
        <section class="burger-menu button">&#x2261</section>
        </div>
    </header>
    <main class="content-wrapper">
        <section class="content">
            <div class="first-image">
                <div class="position-company-logo">
                    <img class="company-logo" src="assets/Logo/Bestell Logo.png" alt="">
                </div>
            </div>
            <div class="company-Name padding">
                <h1>Orderly</h1>
                <br>
                <p class="color-orange">Bewertung (4,2 von 5 Sternen)
            </div>
            <div class="padding menu-nav">
                <a class="nav-item" href="#jumpToPizza">Pizza</a>
                <a class="nav-item" href="#jumpToPizzaBuns">Pizzabrötchen</a>
                <a class="nav-item" href="#jumpToBurger">Burger</a>
            </div>
            <div class="padding border-top">
                <img class="pizza-image" src="assets/Images/pizza.jpg" alt="">
                <div id="jumpToPizza" class="distance"></div>
                <h3 class="padding">Pizza</h3>
                <div id="pizza"></div>
            </div> 
            <div class="padding border-top">
                <img class="pizza-image" src="assets/Images/pizzabuns.jpg" alt="">
                <div id="jumpToPizzaBuns" class="distance"></div>
                <h3 class="padding">Pizzabrötchen</h3>
                <div id="pizzabuns"></div>
            </div> 
            <div class="padding border-top">
                <img class="pizza-image" src="assets/Images/burgers.jpg" alt="">
                <div id="jumpToBurger" class="distance"></div>
                <h3 class="padding">Burger</h3>
                <div id="burger"></div>
            </div> 
        </section>
        <section class="basket-wrapper">
            <div class="basket">
                <div class="shopping-cart">
                    <h2>Warenkorb</h2>
                </div>
                <div id="dishToBasket" class="padding"></div>
            </div>
        </section>
        <div id="responsive-button" class="responsive-button" onclick="toggleBasket()">Warenkorb</div>
        <div id="responsive-basket" class="responsive-basket">
        <div class="basket-content">
            <div id="responsive-dishToBasket" class="resposiv-dishlist"></div>
        </div>
    </div>
    </main>
    <footer>
        <div class="footer-container padding">
            <div class="icon-container">
                <h3>Folge uns auf Social Media</h3>
                <div class="social-media-icons">
                    <a href=""><img class="footer-icon" src="assets/Icon/facebook.png" alt=""></a>
                    <a href=""><img class="footer-icon" src="assets/Icon/instagram.png" alt=""></a>
                    <a href=""><img class="footer-icon" src="assets/Icon/twitter.png" alt=""></a>
                </div>
            </div>
            <div>
                <a class="guidelines" href="">AGB's</a>
                <a class="guidelines" href="">Impressum</a>
                <a class="guidelines" href="">Datenschutz</a>
            </div>
        </div>
    </footer>
   
    `
}

function getTemplatePizza(index) {
    return `
    <div class="dish-container">
        <div class="padding">
            <p>${myPizzas[index].dish}</p>
            <br>
            <p>${myPizzas[index].description}</p>
            <br>
            <p>${myPizzas[index].price.toFixed(2).replace('.', ',')}€</p>
        </div>
        <div>
            <button class="add-button color-orange button" onclick="addPizzaToShopBasket(${index})">+</button>
        </div>
    </div>
    `
}

function getTemplatePizzaBuns(index){
    return `
    <div class="dish-container">
        <div class="padding">
            <p>${myPizzaBuns[index].dish}</p>
            <br>
            <p>${myPizzaBuns[index].description}</p>
            <br>
            <p>${myPizzaBuns[index].price.toFixed(2).replace('.', ',')}€</p>
        </div>
        <div>
            <button class="add-button color-orange button" onclick="addPizzaBunsToShopBasket(${index})">+</button>
        </div>
    </div>
    `
}

function getTemplateBurger(index){
    return `
    <div class="dish-container">
        <div class="padding">
            <p>${myBurger[index].dish}</p>
            <br>
            <p>${myBurger[index].description}</p>
            <br>
            <p>${myBurger[index].price.toFixed(2).replace('.', ',')}€</p>
        </div>
        <div>
            <button class="add-button color-orange button" onclick="addBurgerToShopBasket(${index})">+</button>
        </div>
    </div>
    `
}

function getTemplateTotalPrice(total) {
    return `
    <table>
        <tr>
            <td>Zwischensumme</td>
            <td>${total.toFixed(2).replace('.', ',')} €</td>
        </tr>
        <tr>
            <td>Lieferkosten</td>
            <td>5,00 €</td>
        </tr>
        <tr class="strong">
            <td>Gesamt</td>
            <td>${(total + 5).toFixed(2).replace('.', ',')} €</td>
        </tr>
    </table>
    <div class="ordercompletion-button-container">
        <button onclick="completeOrder()" class="button btn color-orange">Bestellung abschließen</button>
    </div>
    `  
};

function getTemplateDishBasket(item, index) {
    return `
    <div>
        ${item.dish} 
    </div>
    <div class="quantity-controls">
        <button onclick="decreaseQuantity(${index})" class="button btn color-orange">-</button>
        ${item.quantity}x
        <button onclick="increaseQuantity(${index})" class="button btn color-orange">+</button>
        <p>${(item.price * item.quantity).toFixed(2).replace('.', ',')} €</p>
        <button onclick="removeItem(${index})" class="button btn color-orange">&#128465;</button>
    </div>
    `
}

