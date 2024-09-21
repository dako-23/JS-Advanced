function solve(name, population, treasury) {

    const city = {
        name,
        population,
        treasury,
        taxRate: 10,
    };


    city.collectTaxes = function () {
        this.treasury += Math.floor(this.population * this.taxRate)
    }

    city.applyGrowth = function (percent) {
        this.population += Math.floor((percent / 100) * this.population)

    }

    city.applyRecesion = function (percent) {
        this.treasury -= Math.ceil((percent / 100) * this.treasury)
    }

    return city


}
// const result = solve('Tortuga', 7000, 15000);
// console.log(result);

const result =
    solve('Tortuga',
        7000,
        15000);
console.log(result);

result.collectTaxes();
console.log(result.treasury);
result.applyGrowth(5);
console.log(result.population);