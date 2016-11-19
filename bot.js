const googleTrends = require('google-trends-api');
const Twit = require('twit');
const rp = require('request-promise');
const T = require('./T');
const cheerio = require('cheerio');

var options = {
    uri: 'http://www.twitter.com/realdonaldtrump',
    transform: function (body) {
        return cheerio.load(body);
    }
};

// gets trump's latest 10 tweets'
rp(options)
    .then(function ($) {
        // console.log($)
        let tweets = [];
        $('.tweet-text').each(function(i, element){
            // console.log( i + ": " + $( this ).text() );
            tweets.push($( this ).text());
        })
        console.log(tweets);
    })
    .catch(function (err) {
        console.error(err);
    });

// googleTrends.topRelated('trump')
//     .then(function(results){
//         console.log(results);
//     })
//     .catch(function(err){
//         console.error(err);
//     });