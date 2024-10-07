function fruits(type, weight, value) {

    let kilograms = weight / 1000;
    let price = kilograms * value

    console.log(`I need $${price.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${type}.`);
















}
fruits('orange', 2500, 1.80);