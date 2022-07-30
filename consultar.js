var axios = require('axios');
var data = JSON.stringify({
    "collection": "APRENDICES",
    "database": "POSFelipeNavarro",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-qhdyq/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'FzgmBsUPSD70D1kLCGgZoqLzfsOgmidKguPKPt17KUPluU5calIH40iLvfppx8uv',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
