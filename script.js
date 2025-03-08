// 'use strict'

// Получаем элементы слайдера
const slider = document.querySelector('.second_slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const descriptions = Array.from(document.querySelectorAll('.description'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
  updateDescription();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
  updateDescription();
}
// ОПИСАНИЕ СЛОВАМИ!!!!
function updateDescription(){ 
    descriptions.forEach((description, index) => {
    if (index === slideIndex) {
        description.classList.add('highlight');
      } else {
        description.classList.remove('highlight');
      }
    });
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
// Инициализация слайдера
updateSlider();
updateDescription();

document.addEventListener('DOMContentLoaded', () => {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContentItems = document.querySelectorAll('.tab-content-item');

    // Выбор таба
    function selectItem(e) {
        removeBorder();
        removeShow();
        this.classList.add('tab-border');

        // Получаем ID таба из атрибута data-target
        const targetId = this.dataset.target;

        // Используем if..else для показа нужного контента
        // if (targetId === 'tab-1-content') {
        //     document.querySelector('#tab-1-content').classList.add('show');
        // } else if (targetId === 'tab-2-content') {
        //     document.querySelector('#tab-2-content').classList.add('show');
        // } else if (targetId === 'tab-3-content') {
        //     document.querySelector('#tab-3-content').classList.add('show');
        // }
        document.querySelector(`#${targetId}`).classList.add('show');

    }

    function removeBorder() {
        tabItems.forEach(item => item.classList.remove('tab-border'));
    }

    function removeShow() {
        tabContentItems.forEach(item => item.classList.remove('show'));
    }

    // При клике - обработчик событий
    tabItems.forEach(item => item.addEventListener('click', selectItem));
});


let advantages = [ 
{ text: 'Поставка средств индивидуальной защиты с 1992 года'},
{ text: 'Соответствие международным стандартам безопасности'},
{ text: 'Широкий ассортимент спасательного оборудования'},
{ text: 'Доступные цены при высоком качестве продукции'},
{ text: 'Оперативная доставка по всей территории страны'},
{ text: 'Ваш надёжный партнёр!'},
]

function getElement(arr) { 
let randIndex = Math.floor(Math.random() * arr.length);
return arr[randIndex];
}

let spetzDescript = document.querySelector('.spetz-description');

document.addEventListener('DOMContentLoaded', function () {
    let randomElement = getRandomElement(advantages);
    smoothly(spetzDescript, 'textContent', randomElement.text);
  
    if (randomElement.text.length > 46) {
      advantages.style.fontSize = '11px';
    } else {
      advantages.style.fontSize = '14px';
    }
  });

for (let i = 0; i <=5; i = i+1) {
    smoothly(spetzDescript, 'textContent', advantages[i].text);
   }

let iconCart = document.querySelector('.trolley-all');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.list-cart');
let iconCartSpan = document.querySelector('.trolley-index');
let blocksContainer = document.querySelector('.tab-container');
let checkOut = document.querySelector('.checkout');
let backToCart = document.querySelector('.back-2-cart');

let listProducts = [];
let carts = [];

const updateCheckoutPage = () => {
  window.dispatchEvent(new Event('cartUpdated')); 
};

iconCart.addEventListener('click', () => {
  body.classList.toggle('show-cart');
})

closeCart.addEventListener('click', () => {
  body.classList.toggle('show-cart') 
})

checkOut.addEventListener('click', () => {
  body.classList.toggle('show-checkout') 
})
backToCart.addEventListener('click', () => {
  body.classList.toggle('show-checkout') 
})


const addDataToHTML = () => {
  const blocks = {
    'block1': document.getElementById('tab-1-content'),
    'block2': document.getElementById('tab-2-content'),
    'block3': document.getElementById('tab-3-content')
  };
  Object.values(blocks).forEach(block => block.innerHTML = '');
  if(listProducts.length > 0) {

      listProducts.forEach(product => {
  // Находим нужный блок с помощью ID, указанного в product.block
  const targetBlock = blocks[product.block];
  if (targetBlock) {
    let newProduct = document.createElement('div');
    newProduct.classList.add('item1');
    newProduct.dataset.id = product.id;
    newProduct.id = product.id;

    let positionThisProductInCart = carts.find(cart => cart.product_id == product.id);
    let quantity = positionThisProductInCart ? positionThisProductInCart.quantity : 0;

    newProduct.innerHTML = `
      <img src="${product.image}" class="${product.class}" alt="">
      <h4 class="cart_title">${product.name}</h4>
      <div class="price">${product.price} ₽</div>
      <div class="add-quantity"> <button class="add-trolley">Добавить в корзину</button>
      <span class="card-minus"><</span>
      <div class="quantity-product"> </div>
      <span class="card-plus">></span>
      </div>
    `;
    targetBlock.appendChild(newProduct);
  }
});
  }
};


blocksContainer.addEventListener('click', (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains('add-trolley')) {
    let product_id = positionClick.parentElement.parentElement.dataset.id;
    console.log(product_id);
    addToCart(product_id); 
  }
})

const addToCart = (product_id) => {
  let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if(carts.length <= 0) {
      carts = [{
        product_id: product_id,
        quantity: 1
      }]
    } else if (positionThisProductInCart < 0) {
      carts.push({
        product_id: product_id,
        quantity: 1
      });
    } else {
      carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
    }
    addToCartHTML();
    addCartToMemory();
    updateCheckoutPage();
}
const addCartToMemory = () => {
localStorage.setItem('cart', JSON.stringify(carts));
}

const addToCartHTML = () => {
  listCartHTML.innerHTML = '';
  let totalQuantity = 0;
  let totalAmount = 0; // Итоговая сумма заказа
  let totalPriceElement = document.querySelector('.cart-total-price'); // div для суммы
  if(carts.length > 0) {
    carts.forEach(cart => {
      totalQuantity += cart.quantity;
      let newCart = document.createElement('div');
      newCart.classList.add('item');
      newCart.dataset.id = cart.product_id;
      let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);
      let info = listProducts[positionProduct];
      let itemTotalPrice = info.price * cart.quantity;
      totalAmount += itemTotalPrice; // Добавляем в общую сумму

      newCart.innerHTML = `
   <div class="item-img">
    <img src="${info.image}" class="item-image" alt="">
      </div>
      <div class="item-name">
            ${info.name} </div>
   <div class="total-price">
            ${info.price * cart.quantity} ₽
     </div>
       <div class="quantity">
    <span class="cart-minus"><</span>
     <span class="one">${cart.quantity}</span>
     <span class="cart-plus">></span>
  </div>      
      `;
      listCartHTML.appendChild(newCart);
    })
  }
  iconCartSpan.innerText = totalQuantity;
  totalPriceElement.textContent = `${totalAmount} ₽`; // Выводим итоговую сумму
  updateCheckoutPage();
}
listCartHTML.addEventListener('click', (event) => {
  let positionClick = event.target;

  if(positionClick.classList.contains('cart-minus') || positionClick.classList.contains('cart-plus')) {
    let product_id = positionClick.parentElement.parentElement.dataset.id;
    let type = 'cart-minus';
    if(positionClick.classList.contains('cart-plus')) {
      type = 'cart-plus';
    }
    changeQuantity(product_id, type);
  }
})
const changeQuantity = (product_id, type) => {
  let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
  
  const card = document.getElementById(product_id);
  const quantityElement = card.querySelector('.quantity-product');
  const knopka = card.querySelector('.add-trolley');

  if(positionItemInCart >=0) {
    switch(type) {
      case 'cart-plus':
        carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
        quantityElement.textContent = '<' + carts[positionItemInCart].quantity + ' шт.' + '>';
        break;

      default:
        let valueChange = carts[positionItemInCart].quantity - 1;
        if(valueChange > 0) {
          carts[positionItemInCart].quantity = valueChange;
          quantityElement.textContent = '<' + carts[positionItemInCart].quantity + ' шт.' + '>';
        } else {
          carts.splice(positionItemInCart, 1);
          quantityElement.classList.remove('visible');
          knopka.textContent = 'Добавить в корзину';
          knopka.style.backgroundColor = '#140534c2';
          knopka.style.width = '100%'; 
        }
        break;
        }
    }
    addCartToMemory();
    addToCartHTML();
    updateCheckoutPage();
    
  }

const initApp = () => {
  // вынуть данные из JSON
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        addDataToHTML();
        

  // Вынуть данные в памяти
  if(localStorage.getItem('cart')) {
    carts = JSON.parse(localStorage.getItem('cart'))?.filter(item => item.product_id);
    addToCartHTML();
  }
    })
}
initApp();

blocksContainer.addEventListener('click', (event) => {
  let clickedElement = event.target;
  let quantityElement = clickedElement.parentElement.querySelector('.quantity-product');

  if (clickedElement.classList.contains('add-trolley')) {
    clickedElement.textContent = 'Уже в корзине';
    clickedElement.style.backgroundColor = '#4CAF50';
    clickedElement.style.width = '50%'; 
    quantityElement.classList.add('visible');
    quantityElement.textContent = '1 шт.';
  }
});

// blocksContainer.addEventListener('click', (event) => {
//   let clickedElement = event.target;

//   if (clickedElement.classList.contains('add-trolley')) {
//     let productCard = clickedElement.parentElement; // Карточка товара
//     let quantityElement = productCard.querySelector('.quantity-product'); // Ищем элемент с количеством товара

//     if (quantityElement) {
//       clickedElement.textContent = 'Уже в корзине';
//       clickedElement.style.backgroundColor = '#4CAF50';
//       clickedElement.style.width = '60%'; 
//       quantityElement.style.display = 'block'; // Показываем количество товара
//     }
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  let formCheckout = document.querySelector('.form-checkout form'); // Форма
  let checkoutItemsContainer = document.createElement('div'); // Контейнер для чекбоксов
  checkoutItemsContainer.classList.add('checkout-items');
  formCheckout.insertBefore(checkoutItemsContainer, formCheckout.querySelector('label[for="customer-name"]')); // Вставляем перед полем имени

  let carts = JSON.parse(localStorage.getItem('cart')) || []; // Загружаем корзину
  let listProducts = []; // Загружаем товары из products.json

  // Получаем список продуктов
  fetch('products.json')
      .then(response => response.json())
      .then(data => {
          listProducts = data;
          renderCheckoutList();
      });

  function renderCheckoutList() {
      checkoutItemsContainer.innerHTML = ''; // Очищаем перед добавлением
      carts = JSON.parse(localStorage.getItem('cart')) || []; 

      carts.forEach(cart => {
          let product = listProducts.find(p => p.id == cart.product_id);
          if (!product) return; // Если товара нет в products.json, пропускаем

          let itemTotalPrice = product.price * cart.quantity; // Цена * количество

          let itemElement = document.createElement('p');
          itemElement.innerHTML = `
              <label>
                  <input type="checkbox" name="selected-items" checked data-price="${itemTotalPrice}">
                  ${product.name} (${cart.quantity} шт.) - ${itemTotalPrice} ₽
              </label>
          `;

          checkoutItemsContainer.appendChild(itemElement);
      });

      if (carts.length === 0) {
          checkoutItemsContainer.innerHTML = '<p>Корзина пуста</p>';
      }
  }
       window.addEventListener('cartUpdated', () => {
      renderCheckoutList();
    });
});
