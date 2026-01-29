function getKipchogeMantra() {
    return "No man is limited!"
}

console.log(getKipchogeMantra());

function kasaraniStadiumCheer(athleteName) {
    const loudName = athleteName.toUpperCase();
    return `Keep jogging ${loudName}`;
}
console.log(kasaraniStadiumCheer("Jabali"));

function bonusMoney (city, distanceInKm) {
    let moneyCount;

    if (distanceInKm >= 42) {
        moneyCount = 5000;
    } else if (distanceInKm >= 21) {
        moneyCount = 2500;
    } else {
        moneyCount = 1000;
    }

    return `After running in the ${city} for ${distanceInKm} you get a bonus of ${moneyCount}`
}
const nairobiMarathon = bonusMoney("Nairobi", 20);
console.log(nairobiMarathon)


function calculateMarketBill(itemName, quantity, pricePerItem) {
    const total = quantity * pricePerItem;
    return {
    description: `Buying ${quantity} ${itemName} at ${pricePerItem} for each, and your total cost is ${total}`,
    cost: total
};
}

const ovacadoBill = calculateMarketBill("Avocado", 30, 30);
// console.log(ovacadoBill);

const marketBasket = [
  { name: "Avocado", qty: 4, price: 30 },
  { name: "Sukuma Wiki bunch", qty: 3, price: 20 },
  { name: "Tomato", qty: 10, price: 5 },
  { name: "Onion", qty: 2, price: 15 }
];

let totalBill = 0; 
// Loop to go through each items in the basket
marketBasket.forEach( item => {
    const result =  calculateMarketBill(item.name, item.qty, item.price)
    totalBill += result.cost;
});

console.log(totalBill);