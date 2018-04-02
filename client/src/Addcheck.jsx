import React from 'react';

class CheckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to: '',
      checkNumber: '',
      amount: 0,
      date: '',
      creator: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const stateKey = event.target.id;
    this.setState({ [stateKey]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Check Number:
          <input type="text" id='checkNumber' onChange={this.handleChange} />
        </label>
        <label>
          To:
          <input type="text" id='to' value={this.state.to} onChange={this.handleChange} />
        </label>
        <label>
          Amount:
          <input type="text" id='amount' onChange={this.handleChange} />
        </label>
        <label>
          Date:
          <input type="text" id='date' onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CheckForm;
