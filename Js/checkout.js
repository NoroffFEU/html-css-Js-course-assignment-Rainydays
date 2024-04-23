 
import { itemCartForCart } from "./jacket_items.js";
import { getFromStorage } from "./storage.js";

let localStorageList = getFromStorage('jacketitem')

const cartItems = document.querySelector('.local-storage')


if (localStorageList.length > 0){

    const html = itemCartForCart(localStorageList)

    cartItems.appendChild(html)
    
} else{
    cartItems.innerHTML = 'cart is empty'
}


