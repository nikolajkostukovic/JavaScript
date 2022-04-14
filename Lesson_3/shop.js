



var basket_price = 0;
Basket = [{name:'Тыква', price:60}, {name:'Капуста', price:35}];
Basket.push({name:'Яблоко', price:50});
function countBasketPrice(x) {
    for (i=0; i<Basket.length; i++) { 
        basket_price = basket_price + Basket[i].price;
    }
    return basket_price;
}
document.write('<h2>В корзине:</h2>');
for (i=0;i<Basket.length;i++){document.write(Basket[i].name + ' — ' + Basket[i].price +' руб</br>');}
document.write('</br><b>Стоимость заказа: '+countBasketPrice(Basket)+'</b>');