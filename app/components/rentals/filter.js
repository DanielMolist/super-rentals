import Component from '@glimmer/component';

export default class RentalsFilter extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      const queryToLowerCase = query.toLowerCase();
      rentals = rentals.filter(
        (rental) =>
          rental.title.toLowerCase().includes(queryToLowerCase) ||
          rental.city.toLowerCase().includes(queryToLowerCase),
      );
    }

    return rentals;
  }
}
