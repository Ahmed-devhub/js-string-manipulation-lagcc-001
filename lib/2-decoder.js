'use strict';

var decoder = function(encoded){
    let decoded = encoded
    .replace(/4/gi, 'a')
    .replace(/3/gi, 'e')
    .replace(/6/gi, 'g')
    .replace(/7/gi, 't')
    .replace(/8/gi, 'b')
    .replace(/0/gi, 'o')
    .replace(/\$/gi, ' ');

    decoded = decoded.split('').reverse().join('');
    return decoded;
};

module.exports = decoder;

