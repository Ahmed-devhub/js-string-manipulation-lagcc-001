'use strict';

var encoder = function(phrase){
    let encoded = phrase
    .replace(/a/gi, '4')
    .replace(/e/gi, '3')
    .replace(/g/gi, '6')
    .replace(/t/gi, '7')
    .replace(/b/gi, '8')
    .replace(/o/gi, '0')
    .replace(/ /gi, '$');

  encoded = encoded.split('').reverse().join('');

  return encoded;

};

module.exports = encoder;
