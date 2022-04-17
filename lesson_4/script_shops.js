let cart = {
    "id1": {
        "name": "apple",
        "price": 300,
        "count": 0,
    },
    "id2": {
        "name": "watermelon",
        "price": 230,
        "count": 0,
    }
};

document.onclick = event => {
    
    if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);

    }
    if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
    }

}

const plusFunction = id => {
    cart[id]['count']++;
    renderCart();
}

const minusFunction = id => {
    if (cart[id]['count']-1 ==0) {
        deletFunction(id);
        return true;
    }
    cart[id]['count']--;
    renderCart();
}

const deletFunction = id => {
    delete cart[id];
    renderCart();
}

const renderCart = () => {
    
    document.getElementById("countId1").innerHTML = cart["id1"].count*cart["id1"].price;
    document.getElementById("countId2").innerHTML = cart["id2"].count*cart["id2"].price;
    document.getElementById("countId3").innerHTML = cart["id1"].count*cart["id1"].price + cart["id2"].count*cart["id2"].price;
    
    console.log(cart);
  

}

renderCart();



