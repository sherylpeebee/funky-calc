'use strict';
$(document).ready(init);


function init(){
  $(document).keypress(calc.getValue);
}

var calc = {};

calc.numbers = [];
console.log(calc.numbers);


 calc.getValue = function(event){


   calc.inputString = String.fromCharCode(event.which);
   var inputNumber = parseInt(calc.inputString);

  if (calc.inputString === '+'){
    sum();

  } else if (calc.inputString === '*'){
      multiply();

    } else if (calc.inputString === '-'){
        subtract();

      } else if (calc.inputString === '/'){
            divide();

      }else {
        calc.numbers.push(inputNumber);


        $('.container').empty();

        calc.numbers.forEach(function(n){
          var $div = $('<div>');
          $div.text(n);
          $('.container').append($div);
          console.log($('#window').val());

      });
    }
  };

  function divide(){
    var quotient = calc.numbers.reduce(function(a, b){
      return a / b;
      });
      var $quotientDiv = $('<div>');
      $quotientDiv.text(quotient);
      $('.container').append($quotientDiv);
  }

  function subtract(){
    var difference = calc.numbers.reduce(function(a, b){
      return a - b;
      });
      var $differenceDiv = $('<div>');
      $differenceDiv.text(difference);
      $('.container').append($differenceDiv);
  }

  function sum(){

    var addedUp = calc.numbers.reduce(function(a, b){
      return a + b;
      });
      console.log(addedUp);
      var $newDiv = $('<div>');
      $newDiv.text(addedUp);
      $('.container').append($newDiv);
   }

   function multiply(){
     var product = calc.numbers.reduce(function(a, b){
       return a * b;
       });
       var $productDiv = $('<div>');
       $productDiv.text(product);
       $('.container').append($productDiv);
  }










































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
