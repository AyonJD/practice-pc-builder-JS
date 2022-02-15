function updatePrice(buttonId, priceId, price) {
    document.getElementById(buttonId).addEventListener('click', () => {
        const extraCostField = document.getElementById(priceId);
        extraCostField.innerText = price;
        extraCostField.style
        totalPrice();
    })
}
//ssd3 button function
function ssd3() {
    const extraCostField = document.getElementById('storage-cost');
        extraCostField.innerText = 250;
}
//Reset to basic price
function reset(buttonId, priceId) {
    document.getElementById(buttonId).addEventListener('click', () => {
        const extraCostField = document.getElementById(priceId);
        extraCostField.innerText = 0;
        totalPrice();
    })
}
//Update total price
function totalPrice() {
    const basicPriceField = document.getElementById('best-price');
    const extraMemoryField = document.getElementById('memory-cost');
    const extraStorageField = document.getElementById('storage-cost');
    const deliveryField = document.getElementById('delivery-cost');
    const besicPrice = parseInt(basicPriceField.innerText);
    const memoryPrice = parseInt(extraMemoryField.innerText);
    const storagePrice = parseInt(extraStorageField.innerText);
    const deliveryPrice = parseInt(deliveryField.innerText);
    const total = besicPrice + memoryPrice + storagePrice + deliveryPrice;
    const updateTotal = document.getElementById('total-price');
    updateTotal.innerText = total;
}
//Promo code
document.getElementById('apply-btn').addEventListener('click', () => {
    const promoInput = document.getElementById('promo-input');
    const updateTotal = document.getElementById('total-price');
    if (promoInput.value === 'PHero') {
        updateTotal.innerText = updateTotal.innerText - (updateTotal.innerText * .2);
    } else {
        alert("Sorry this cupon doesn't exist")
    }
    promoInput.value = '';
})
//Memory
reset('eightGB', 'memory-cost');
updatePrice('sixteenGB', 'memory-cost', 300);
//Storate
reset('ssd1', 'storage-cost')
updatePrice('ssd2', 'storage-cost', 150);
//Delivery Option
reset('free-delivery', 'delivery-cost')
updatePrice('paid-delivery', 'delivery-cost', 50);