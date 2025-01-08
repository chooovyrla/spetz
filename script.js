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
        if (targetId === 'tab-1-content') {
            document.querySelector('#tab-1-content').classList.add('show');
        } else if (targetId === 'tab-2-content') {
            document.querySelector('#tab-2-content').classList.add('show');
        } else if (targetId === 'tab-3-content') {
            document.querySelector('#tab-3-content').classList.add('show');
        }
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



// document.addEventListener('DOMContentLoaded', () => {
// const tabItems = document.querySelectorAll('.tab-item');
// const tabContentItems = document.querySelectorAll('.tab-content-item');

// // выбор tab
// function selectItem(e) {
//     removeBorder();
//     removeShow();
//     // добавить подчерк к нынешнему tab
//     this.classList.add('tab-border');


// // найти элемент контента для текущего таба
// const tabContentItem = document.querySelector(`#${this.dataset.target}`);
// }
// // добавить класс show
// tabContentItems.classList.add('show');

// function removeBorder() {
//     tabItems.forEach(item => item.classList.remove('tab-border'));
// }

// function removeShow() {
//     tabContentItems.forEach(item => item.classList.remove('show'));
// }

// // при клике - обработчик событий
// tabItems.forEach(item => item.addEventListener('click', selectItem));
// });

// const describtions = document.querySelectorAll('.description');
// // В функции updateSlider вызываем теперь новую функцию, которая будет выставлять класс .highlight для подписи
// function updateSlider() {

  
//     highlightSlideDescription() 
// }
  
//   // Функция обновления подписи
//   function highlightSlideDescription() {
//     // descriptions - это список элементов, такой же как слайды и их столько же сколько и слайдов
//     // поэтому можем использовать индекс слайдов и для подписей
//     const highlightedDescription = descriptions[slideIndex]
  
//     descriptions.forEach((desc, index) => {
//       if (index === slideIndex) {
//         highlightedDescription.classList.add('highlight')
//       } else {
//         highlightedDescription.classList.remove('highlight')
//       }
//     })
    
//   }

// const element = document.querySelectorAll(".description_to_second_slider"); // исправьте здесь на правильное название класса, если нужно
// const classes = ['.fire', '.reconstr', '.warehouse', '.travel', '.ind_mount', '.mariines', '.horse_carabiner'];
// let currentIndex = 0; // начальный индекс

// // Функция, которая будет изменять стили в зависимости от текущего индекса
// function updateHighlight() {
//     // Снимаем выделение с предыдущего элемента
//     element.forEach(element => element.classList.remove('highlight'));
    
//     // Добавляем выделение на текущий элемент, если индекс в пределах массива
//     if (currentIndex >= 0 && currentIndex < classes.length) {
//         document.querySelector(`.${classes[currentIndex]}`).classList.add('highlight');
//     }
// }

// // Обработчик события для слайдера
// element.addEventListener('click', function() {
//     currentIndex = slideIndex; // присваиваем значение текущего индекса слайдера
//     updateHighlight(); // обновляем выделение
// });



// Выделяю строчку
// document.querySelectorAll(".describtion_to_second_slider");

// // const change = document.querySelectorAll(".describtion_to_second_slider");
// // change.forEach((element, index)  => {
// let element 
// element.addEventListener('click', function() {
// if (slideIndex === 0) {
//     document.querySelector('.fire').classList.add('highlight');    
// } else if (slideIndex === 1) {
//     document.querySelector('.reconstr').classList.add('highlight');   
// } else if (slideIndex === 2) {
//     document.querySelector('.warehouse').classList.add('highlight'); 
// } else if (slideIndex === 3) {
//     document.querySelector('.travel').classList.add('highlight');  
// } else if (slideIndex === 4) {
//     document.querySelector('.ind_mount').classList.add('highlight');  
// } else if (slideIndex === 5) {
//     document.querySelector('.mariine').classList.add('highlight');  
// } else if (slideIndex === 6) {
//     document.querySelector('.horse_carabiner').classList.add('highlight');  
// } else {change.classList.remove('highlight');}
// })
// })

// function highlight(text) {
//     let inputText = document.querySelectorAll(".describtion_to_second_slider");

//     let innerHTML = inputText.innerHTML;
//     let index = innerHTML.indexOf(text);
//     if (index >= 0) { 
//      innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
//      inputText.innerHTML = innerHTML;
//     }
//   }




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

// let cart = {
//     'cara66in1': 5,
//     'cara66in2' : 5,
//     'cara66in3' : 5,
//     'cara66in4' : 5,
//     'cara66in5' : 5,
// }

let iconCart = document.querySelector('.trolley-all');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.list-cart');
let iconCartSpan = document.querySelector('.trolley-index');
let blocksContainer = document.querySelector('.tab-container');

let listProducts = [];
let carts = [];

iconCart.addEventListener('click', () => {
  body.classList.toggle('show-cart');
})

closeCart.addEventListener('click', () => {
  body.classList.toggle('show-cart') 
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
    newProduct.innerHTML = `
      <img src="${product.image}" class="${product.class}" alt="">
      <h4 class="cart_title">${product.name}</h4>
      <div class="price">${product.price} ₽</div>
      <button class="add-trolley">Добавить в корзину</button>
    `;
    targetBlock.appendChild(newProduct);
  }
});
  }
};




blocksContainer.addEventListener('click', (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains('add-trolley')) {
    let product_id = positionClick.parentElement.dataset.id;
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
}
const addCartToMemory = () => {
localStorage.setItem('cart', JSON.stringify(carts));
}

const addToCartHTML = () => {
  listCartHTML.innerHTML = '';
  let totalQuantity = 0;
  if(carts.length > 0) {
    carts.forEach(cart => {
      totalQuantity = totalQuantity + cart.quantity;
      let newCart = document.createElement('div');
      newCart.classList.add('item');
      newCart.dataset.id = cart.product_id;
      let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);
      let info = listProducts[positionProduct];
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
  if(positionItemInCart >=0) {
    switch(type) {
      case 'cart-plus':
        carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
        break;

      default:
        let valueChange = carts[positionItemInCart].quantity - 1;
        if(valueChange > 0) {
          carts[positionItemInCart].quantity = valueChange;
        } else {
          carts.splice(positionItemInCart, 1);
        }
        break;
        }
    }
    addCartToMemory();
    addToCartHTML();
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
    carts = JSON.parse(localStorage.getItem('cart'));
    addToCartHTML();
  }
    })
}
initApp();