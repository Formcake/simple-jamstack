const axios = require('axios');
const env = require('./env');
console.log("env: ", env);

module.exports = async () => {
    let apiCallError;
    const { data } = await axios.get(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${env.nyTimesToken}`)
        .catch(function (err) {
            apiCallError = err;
        });

    if (apiCallError) {
        return undefined;
    }
    
    return data.results.slice(0, 5);
}
