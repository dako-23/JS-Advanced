function solve(order) {

    function getCarriage(type, color) {

        return {
            type,
            color
        }
    }

    const engineType = {
        small: {
            power: 90,
            volume: 1800
        },
        normall: {
            power: 120,
            volume: 2400
        },
        monster: {
            power: 200,
            volume: 3500
        }

    }
    const car = {
        model: null,
        engine: null,
        carriage: null,
        wheels: null
    }


    car.model = order.model

    if (order.power <= 90) {
        car.engine = engineType.small

    } else if (order.power <= 120) {
        car.engine = engineType.normall
    } else {
        car.engine = engineType.monster
    }

    car.carriage = order.carriage === 'hatchback' ? getCarriage('hatchback', order.color) : getCarriage('coupe', order.color)

    let wheelSize = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;

    car.wheels = new Array(4).fill(wheelSize);

    return car

}
let result = solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});

console.log(result)
