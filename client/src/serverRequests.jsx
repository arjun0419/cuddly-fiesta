const axios = require('axios');

const getOchex = (callback) => {
  axios({
    method: 'get',
    url: `/ochex}`,
  })
    .then((response) => {
      callback(response.data);
    })
    .catch(error => callback(error));
};

export default getOchex;
