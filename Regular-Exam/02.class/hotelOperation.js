class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget
        this.roomAvailability = {};
        this.supplyStock = {};
    }

    restockSupplies(supplies) {
        let result = [];

        for (const el of supplies) {
            const tokens = el.split(' ');
            let [name, qty, price] = tokens;
            qty = Number(qty)
            price = Number(price)


            if (price <= this.initialBudget) {

                if (!this.supplyStock.hasOwnProperty(name)) {
                    this.supplyStock[name] = 0;
                }

                this.supplyStock[name] += qty;

                this.initialBudget -= price;

                result.push(`Successfully stocked ${qty} ${name}`);
            } else {

                result.push(`There was not enough money to restock ${qty} ${name}`);
            }
        }

        return result.join('\n');
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {

        if (this.roomAvailability.hasOwnProperty(roomType)) {
            return `The ${roomType} is already available in our hotel, try something different.`;
        }

        this.roomAvailability[roomType] = {
            neededSupplies: neededSupplies.map(supply => {
                const [name, qty] = supply.split(' ');
                return { name, quantity: Number(qty) };
            }),
            pricePerNight: pricePerNight
        };

        const roomCount = Object.keys(this.roomAvailability).length;
        return `Great idea! Now with the ${roomType}, we have ${roomCount} types of rooms available, any other ideas?`;
    }

    showAvailableRooms() {
        const roomTypes = Object.entries(this.roomAvailability)
            .map(([roomType, info]) => `${roomType} - $ ${info.pricePerNight}`)
            .join('\n');

        if (roomTypes.length === 0) {
            return "Our rooms are not ready yet, please come back later...";
        }

        return roomTypes;
    }

    bookRoom(roomType) {

        if (!this.roomAvailability.hasOwnProperty(roomType)) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }

        const neededSupplies = this.roomAvailability[roomType].neededSupplies;
        for (const supply of neededSupplies) {
            const { name, quantity } = supply;
            if (!this.supplyStock.hasOwnProperty(name) || this.supplyStock[name] < quantity) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
            }
        }

        const pricePerNight = this.roomAvailability[roomType].pricePerNight;
        return `Your booking for ${roomType} has been confirmed! The price is $${pricePerNight} per night.`;
    }

}



let hotel = new Hotel(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));








