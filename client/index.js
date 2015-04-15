'use strict';
$(document).ready(init);

function init(){
  $('#stack').click(getValue);
}

var numbers = [];
var inputString;

function getValue(){

  inputString = $('#window').val();
  $('#window').val('');

  if (inputString === '='){
    // console.log('plus');
    sum();

  } else {
  var inputNumber = parseInt(inputString);
  console.log(inputNumber);
  numbers.push(inputNumber);

  $('.container > div').text('');

  numbers.forEach(function(n){
    var $div = $('<div>');
    $div.text(n);
    $('.container').append($div);
    console.log($('#window').val());

});
}
}
function sum(){
  debugger;

var addedUp = numbers.reduce(function(a, b){
    return a + b;
  });
  console.log(addedUp);
  var $newDiv = $('<div>');
  $newDiv.text(addedUp);
  $('.container').append($newDiv);
}



// $('.container').text(numbers);








































// console.log(text);
//
// var words = text.toLowerCase.match(/\w+/gi);
//
// var counts = {};
//
// words.forEach(function(word){
//
//   counts[word] = counts[word] || 0;
//   counts[word]++;
// });
//
// console.log('is count:', counts);


//
// function toCamelCase(word){
// var array = word.split('-');
// console.log(array);
//
// array.forEach(function(n){
//   console.log(n);
//   if
// });
//
//
// }
//
// console.log(toCamelCase('coding-house'));
// console.log(toCamelCase('something-other-than-coding-house'));
