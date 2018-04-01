const client = require('./DBindex');

const seedUserFunc = (n) => {
  for (let i = 1; i < n + 1; i++) {
    const userName = `user${i}`;
    const userEmail = `${userName}@gmail.com`;

    const text = 'INSERT INTO users(user_name, user_email) VALUES($1, $2)';
    const values = [userName, userEmail];
    client.query(text, values)
      .catch(e => console.error(e.stack));
  }
};

const seedCheckBooksFunc = (n) => {
  for (let i = 1; i < n + 1; i++) {
    const checkbookName = `checkbook${i}`;

    const text = 'INSERT INTO checkbooks(checkbook_name) VALUES($1)';
    const values = [checkbookName];
    client.query(text, values)
      .catch(e => console.error(e.stack));
  }
};

const seedChecksFunc = (n) => {
  for (let i = 1; i < n + 1; i++) {
    const checkbookId = Math.round(Math.random() * 20);
    const checkNumber = Math.round((Math.random() * 1000), -2);
    const checkAmount = Math.round((Math.random() * 10000), -2);
    const checkTo = `vendor${i}`;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[(Math.round(Math.random() * 10)) + 1];
    let day = Math.round(Math.random() * 28);
    if (day === 0) {
      day = 1;
    }
    const checkDate = `${month} ${day}, 2017`;
    const checkAddedBy = Math.round(Math.random() * 100);
    let checkCleared = false;
    if (i % 10 === 0) {
      checkCleared = true;
    }

    const text = 'INSERT INTO checks(checkbook_id, check_number, check_amount, check_to, check_date, check_added_by, check_cleared ) VALUES($1, $2, $3, $4, $5, $6, $7)';
    const values = [
      checkbookId,
      checkNumber,
      checkAmount,
      checkTo,
      checkDate,
      checkAddedBy,
      checkCleared,
    ];
    client.query(text, values)
      .catch(e => console.error(e.stack));
  }
};


const seedCheckBookUsers = (n) => {
  for (let i = 1; i < n + 1; i++) {
    let checkbookId = i;
    if (i > 20) {
      checkbookId = Math.round(Math.random() * 100);
    }
    const userId = Math.round(Math.random() * 20);
    const values = [checkbookId, userId, true];
    const text = 'INSERT INTO users_checkbooks(user_id, checkbook_id, owner) VALUES($1, $2, $3)';
    client.query(text, values)
      .catch(e => console.error(e.stack));
  }
};

seedUserFunc(100);
seedCheckBooksFunc(20);
seedChecksFunc(200);
seedCheckBookUsers(100);

