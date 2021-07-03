const { BOX_PRODUCTS } = require('./pwnageConstants');

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    // Returns a number from 0 to 58 (which is the # of products in the product pool)
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};

const getProdUniqTitle = product => {
    return `${product.title} ${product.variantTitle}`;
};

const logItems = (boxProducts, boxValue, iteration) => {
    console.log(`Box #${iteration}'s \tValue: $${Math.ceil(boxValue)}`);
    boxProducts.forEach(product => {
        boxLog.results[getProdUniqTitle(product)].timesSelected++;
    });
    if (boxProducts.filter(product => product.isMouse).length) {
        boxLog.boxesWithMice++;
    }
    boxLog.totalItems += boxProducts.length;
    boxLog.totalValue += Math.ceil(boxValue);
    boxLog.iterations = iteration;
};

const reduceFunc = (acc, curr) => {
    acc[getProdUniqTitle(curr)] = {
        isMouse: !!curr.isMouse,
        mouseType: curr.mouseType ? curr.mouseType : null,
        timesSelected: 0,
        chanceToBeInBox: null,
    };
    return acc;
};

const crunchNumbers = () => {
    let numebrOfErgos = 0, numberOfSymms = 0;
    boxLog.averageValue = (boxLog.totalValue / boxLog.iterations).toFixed(2);
    boxLog.mousePercentage = `%${((boxLog.boxesWithMice / boxLog.iterations) * 100).toFixed(2)}`;
    Object.keys(boxLog.results).forEach(key => {
        console.log(key);
        const resultObj = boxLog.results[key];
        boxLog.results[key].chanceToBeInBox = `%${((resultObj.timesSelected / boxLog.iterations) * 100).toFixed(2)}`;
        if (boxLog.results[key].isMouse) {
            // TODO: populate ergoPercentage & symmPercentage
        }
    });


};

let boxLog = {
    iterations: 0,
    totalValue: 0,
    boxesWithMice: 0,
    totalItems: 0,
    ErgoPercentage: 0,
    SymmPercentage: 0,
    averageValue: '',
    mousePercentage: '',
    results: {
        ...BOX_PRODUCTS.reduce(reduceFunc, {})
    }
};

const simulateBoxRolls = (iterationCap) => {
    let iterator = 0;
    while(!(iterationCap === iterator)) {
        var currentProducts = []; // list of items in your gift box
        var currentValue = 0; // value of your gift box (value of all items added together)
        var currentLimit = 350; // set maximum value of your gift box

        let minValue = 50 // minimum value of a boxes' worth

        var spin = true; // variable that controls when to stop spinning for new items
        var index = 0; // variable that represents the amount of items in your gift box
        var i2 = 0; // variable that represents the amount of spins that has occured

        while(spin) {
            // Randomly selet a product to add to the gift box:
            var potentialProduct = BOX_PRODUCTS[getRandomInt(0, BOX_PRODUCTS.length)];

            // if the price of the product isn't above the current limit
            if(potentialProduct.price < currentLimit) {
                /*
                * if:
                * - minValue is greater than 20 OR
                * - minValue is lesser that 20 AND the price of the randomly selected product is more than 50 AND a 27% chance succeeds OR
                * - the price of the potential product is less than 50
                */
                if((minValue > 20) ||
                    (minValue < 20 && ((potentialProduct.price > 50 && Math.random() > (73 / 100)) ||
                    potentialProduct.price < 50)))
                    {
                    // then we add the randomly selected product to the gift box,
                    currentProducts.push(potentialProduct);
                    // reduce the limit by the price of the randomly selected product,
                    currentLimit -= potentialProduct.price;
                    // add the price of the randomly selected product to the current value of the whole gift box
                    currentValue += potentialProduct.price;
                    // and finally increase the amount of items in the gift box by 1
                    index++;
                }
            }

            // if the total value of the current gift box is greater than or equal to the set minimum value of any gift box (50)...
            if(currentValue >= minValue) {
                // ...then create a random decimal value between 0 and 1
                var chance = Math.random();
                // set the value of `spin` to true if chance is less then 0.5, set to false if it's greater
                spin = chance < (50 / 100);
                // IF `spin` IS NOW FALSE, THE WHILE LOOP ENDS AND THE GIFT BOX IS DONE BEING ADDED TO
            }

            // if the total number of items in your gift box is somehow greater than 20...
            if(index > 20) {
                // ...then end the loop (this is a case where your gift box could be less than $50 in value, it's VERY unlikely though)
                spin = false;
            }
            // increment the spin counter by 1:
            i2++;
            // if the amount of spins is somehow greater than 1000...
            if(i2 > 1000) {
                // ...then end the loop (this is a case where your gift box could be less than $50 in value, it's VERY unlikely though)
                spin = false;
            }
        }

        // now that we're out of the spin loop, go ahead and show the items in the gift box to the user:
        logItems(currentProducts, currentValue, iterator + 1); // TODO: Add the value and products to set of results

        iterator++;
    }
};

console.log('Starting Random Box Simulation:');
simulateBoxRolls(100000);
console.log('-----\nEnd of Random Box Simulation.');
crunchNumbers();
console.log(boxLog);
