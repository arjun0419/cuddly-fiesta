import React from 'react';
import Checks from './Checks';
import AddCheck from './Addcheck';

const Checkbook = ({ checkbooks, addCheckToCheckbook }) => {
  const numberToString = (num) => {
    return num.toLocaleString('en', { style: 'currency', currency: 'USD' });
  };
  const checkbookItems = checkbooks.map(checkbook =>
    (
      <div className="checkbook">
        <div className="checkbookinfo">
          <div className="checkbookName"><h2>{ checkbook.checkbook_name }</h2></div>
          <div className="totalOutstanding"><h2>{numberToString(checkbook.totalOutstanding)}</h2></div>
        </div>
        <Checks checks={checkbook.checks} />
        <AddCheck addCheckToCheckbook={addCheckToCheckbook} checkBookID={checkbook.checkbook_id} />
      </div>));

  return (
    <div>
      { checkbookItems }
    </div>);
};

export default Checkbook;
