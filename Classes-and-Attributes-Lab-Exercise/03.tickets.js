function solve(input, criteria) {

    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = price
            this.status = status
        }

        static sort(tickets, criteria) {

            if (criteria === 'price') {
                tickets.sort((a, b) => a[criteria] - b[criteria])
            } else {
                tickets.sort((a, b) => a[criteria].localeCompare(b[criteria]));
            }
        }
    }

    for (const line of input) {

        [destination, price, curStatus] = line.split('|')

        const ticket = new Ticket(destination, Number(price), curStatus);
        
        tickets.push(ticket);

    }

    Ticket.sort(tickets, criteria);
    return tickets

}
console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));


