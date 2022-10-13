function solve(arrayOfStrings = [], sorter = '') {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let ticket of arrayOfStrings) {
        let splitedArray = ticket.split('|');
        let destination = splitedArray[0];
        let price = Number(splitedArray[1]);
        let status = splitedArray[2];
        tickets.push(new Ticket(destination, price, status));
    }

    let sortedTickets;
    if (sorter === 'destination') {
        sortedTickets = tickets.sort((curr, next) =>
            curr.destination.localeCompare(next.destination)
        );
    } else if (sorter === 'price') {
        sortedTickets = tickets.sort((curr, next) => curr.price - next.price);
    } else {
        sortedTickets = tickets.sort((curr, next) =>
            curr.status.localeCompare(next.status)
        );
    }
    return sortedTickets;
}