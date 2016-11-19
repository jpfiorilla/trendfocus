const googleTrends = require('google-trends-api');
const Twit = require('twit');

// var options = {
//     geo: 'country code or name',
//     date: 'yyyymm',
//     keywords: ['some', 'list', 'of', 'keywords'],
//     category: 'some category',
//     timePeriod: {
//         type: enumerated string 'hour', 'day', 'month', or 'year'
//         value: number
//     }
// }

googleTrends.topRelated('trump')
    .then(function(results){
        console.log(results);
    })
    .catch(function(err){
        console.error(err);
    });