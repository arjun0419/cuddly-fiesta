import React from 'react';

class CheckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbookID: this.props.checkBookID,
      to: '',
      checkNumber: '',
      amount: 0,
      date: '',
      creator: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const stateKey = event.target.id;
    this.setState({ [stateKey]: event.target.value });
  }

  handleSubmit() {
    const newCheck = {
      check_id: 190,
      checkbookBook_id: this.state.checkbookID,
      check_amount: this.check.amount,
      check_to: this.state.to,
      check_date: 'March 23, 2018',
      check_added_by: 0,
      check_cleared: false,
    };
    this.addCheckToCheckbook(newCheck);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Check Number:
          <input type="text" id="checkNumber" onChange={this.handleChange} />
        </label>
        <label>
          To:
          <input type="text" id="to" onChange={this.handleChange} />
        </label>
        <label>
          Amount:
          <input type="text" id="amount" onChange={this.handleChange} />
        </label>
        <label>
          Date:
          <input type="text" id="date" onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" onsubmit="return false;" />
      </form>
    );
  }
}

export default CheckForm;
