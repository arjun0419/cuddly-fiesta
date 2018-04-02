import React from 'react';
import Checks from './Checks';
import AddCheck from './Addcheck';

const Checkbook = ({ checkbooks }) => {
  const numberToString = (num) => {
    return num.toLocaleString('de-DE', { style: 'currency', currency: 'USD' });
  };
  const checkbookItems = checkbooks.map(checkbook =>
    (
      <div className="checkbook">
        <div className="checkbookinfo">
          <div className="checkbookName"><h2>{ checkbook.checkbook_name }</h2></div>
          <div className="totalOutstanding"><h2>{numberToString(checkbook.totalOutstanding)}</h2></div>
        </div>
        <Checks checks={checkbook.checks} />
        <AddCheck />
      </div>));

  return (
    <div>
      { checkbookItems }
    </div>);
};

export default Checkbook;
