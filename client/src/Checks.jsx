import React from 'react';

const Checks = ({ checks }) => {
  // console.log('checks',checks);
  const checkItems = checks.map(check => (
    <ul className="check">
      <li className="checkNumber">{check.check_number}</li>
      <li className="to">{check.check_to}</li>
      <li className="amount">${check.check_amount}</li>
      <li className="date">{check.check_date}</li>
      <li className="creator">Arjun</li>
      <button className="clear">clear</button>
    </ul>
  ));
  return (<div className="checks">{ checkItems }</div>);
};

export default Checks;
