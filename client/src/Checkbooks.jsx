import React from 'react';

import sample from './sampleData';
import Checkbook from './Checkbook';

class Checkbooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 0,
      user_name: 'guest',
      user_email: 'guest@gmail.com',
      checkbooks: sample[0].checkbooks,
    };

    // this.state.calculateTotalOutstanding = this.calculateTotalOutstanding.bind(this);
  }

  // componentDidUpdate() {
  //   this.calculateTotalOutstanding();
  // }

  componentWillMount(){
    this.calculateTotalOutstanding();
  }

  calculateTotalOutstanding() {
    const oldCheckBooks = this.state.checkbooks.slice();
    // console.log("old: ", oldCheckBooks);
    const newcheckbooks = oldCheckBooks.map((checkbook, index, array) => {
      let checkbookTotal = 0;
      checkbook.checks.forEach((check) => {
        checkbookTotal += check.check_amount;
      });
      oldCheckBooks[index].totalOutstanding = Math.round(checkbookTotal, 2);
      return checkbook;
    });
    // console.log("newcheckbooks", newcheckbooks);
    this.setState({ checkbooks: newcheckbooks });
    // console.log("After:", this.state.checkbooks);
  }

  render() {
    return (
      <div className="checkbooks">
        <Checkbook checkbooks={this.state.checkbooks} />
      </div>
    );
  }
}

export default Checkbooks;
