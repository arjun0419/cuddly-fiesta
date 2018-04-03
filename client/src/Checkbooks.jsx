import React from 'react';
import sample from './sampleData';
import Checkbook from './Checkbook';

class Checkbooks extends React.Component {
  constructor(props) {
    super(props);
    this.calculateTotalOutstanding = this.calculateTotalOutstanding.bind(this);
    this.addCheckToCheckbook = this.addCheckToCheckbook.bind(this);
    this.state = {
      user_id: 0,
      user_name: 'guest',
      user_email: 'guest@gmail.com',
      checkbooks: sample[0].checkbooks,
    };
  }

  componentWillMount() {
    this.calculateTotalOutstanding();
  }

  addCheckToCheckbook(check) {
    const newCheck = {
      check_id: 190,
      checkbookBook_id: check.checkbookID,
      check_amount: check.amount,
      check_to: check.to,
      check_date: 'March 23, 2018',
      check_added_by: this.state.user_id,
      check_cleared: false,
    };

    const oldCheckBooks = this.state.checkbooks.slice();
    oldCheckBooks.forEach((checkbook) => {
      if (checkbook.checkbook_id === checkbookID) {
        checkbook.checks.push(newCheck);
      }
    });

    this.setState({ checkbooks: oldCheckBooks });
  }

  calculateTotalOutstanding() {
    const oldCheckBooks = this.state.checkbooks.slice();
    const newcheckbooks = oldCheckBooks.map((checkbook, index) => {
      let checkbookTotal = 0;
      checkbook.checks.forEach((check) => {
        checkbookTotal += check.check_amount;
      });
      oldCheckBooks[index].totalOutstanding = Math.round(checkbookTotal, 2);
      return checkbook;
    });
    this.setState({ checkbooks: newcheckbooks });
  }

  render() {
    return (
      <div className="checkbooks">
        <Checkbook
          checkbooks={this.state.checkbooks}
          addCheckToCheckbook={this.addCheckToCheckbook}
        />
      </div>
    );
  }
}

export default Checkbooks;
