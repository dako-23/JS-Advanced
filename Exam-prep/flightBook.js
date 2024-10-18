class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {

        if (this.flights[flightNumber]) {
            return `Flight ${flightNumber} to ${destination} is already available.`
        } else {
            const flight = {
                flightNumber: flightNumber,
                destination: destination,
                departureTime: departureTime,
                price: price
            }
            this.flights[flightNumber] = flight
            return `Flight ${flightNumber} to ${destination} has been added to the system.`
        }

    }

    bookFlight(passengerName, flightNumber) {
        if (!this.flights[flightNumber]) {
            return `Flight ${flightNumber} is not available for booking.`
        } else {
            const booking = {
                passengerName: passengerName,
                flightNumber: flightNumber
            }
            this.bookings[passengerName + '-' + flightNumber] = booking
            this.bookingsCount++
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
        }
    }

    cancelBooking(passengerName, flightNumber) {
        if (!this.bookings[passengerName + '-' + flightNumber]) {
            return `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
        } else {
            delete this.bookings[passengerName + '-' + flightNumber];
            this.bookingsCount--
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled`
        }
    }

    showBookings(criteria) {

        if (this.bookingsCount == 0) {
            throw new Error('No bookings have been made yet.');
        }

        if (criteria === 'all') {
            let output = `All bookings(${this.bookingsCount}):`
           
            return


        }



    }


}


const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("all"));
// console.log(system.showBookings("cheap"));


