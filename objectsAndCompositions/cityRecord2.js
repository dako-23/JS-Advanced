function solve(name, population, treasury) {

    const city = {
        name,
        population,
        treasury,
    };

    return city;

}

function addTaxBehavior(city) {
    return Object.assign(city, {
        taxRate: 10,

        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate)
        },

        applyGrowth(percent) {
            this.population += Math.floor((percent / 100) * this.population)

        },

        applyRecesion(percent) {
            this.treasury -= Math.ceil((percent / 100) * this.treasury)
        }
    })

}
const result = solve('Tortuga',
    7000,
    15000);

// console.log(result);
addTaxBehavior(result)
console.log(result);


