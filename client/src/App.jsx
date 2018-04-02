import React from 'react';

const App = () => (
  <div className="checkbooks">
    <div className="checkbook">
      <div className="checkbookinfo">
        <div className="checkbookName"><h2>Wells Fargo 2038 </h2></div>
        <div className="totalOutstanding">Total Outstanding $10,390</div>
      </div>
      <div className="checks">
        <ul className="check">
          <li className="checkNumber">1030</li>
          <li className="to">Pepsi</li>
          <li className="amount">$100</li>
          <li className="date">November 23, 2016</li>
          <li className="creator">Arjun</li>
          <button className="clear">clear</button>
        </ul>
        <ul className="check">
          <li className="checkNumber">1030</li>
          <li className="to">Pepsi</li>
          <li className="amount">$100</li>
          <li className="date">November 23, 2016</li>
          <li className="creator">Arjun</li>
          <button className="clear">clear</button>
        </ul>
        <ul className="check">
          <li className="checkNumber">1030</li>
          <li className="to">Pepsi</li>
          <li className="amount">$100</li>
          <li className="date">November 23, 2016</li>
          <li className="creator">Arjun</li>
          <button className="clear">clear</button>
        </ul>
      </div>
      <button className="addCheck"> + check?</button>
    </div>
    <button className="addCheckbook"> + checkbook</button>
  </div>
);

export default App;
