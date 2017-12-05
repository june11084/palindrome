//Back end logic




//Front end logic
$(document).ready(function() {
  $("form#palindromeForm").submit(function(event) {
    event.preventDefault();
    var input = $("#palindromeInput").val();
    var wordArray = input.split('');

    for (var i = 0; i < wordArray.length; i++) {
      if (wordArray[i] !== wordArray[wordArray.length - i - 1]) {
        console.log("Error! Not a Palindrome!");
        $(".output").text("Error! the string: '"+ input +"' is not a Palindrome!");
      } else {
        console.log("Cangratulations! "+ input + " is a Palindrome!");
        $(".output").text("Cangratulations! "+ input + " is a Palindrome!");
      }
    }



  });; //End form submit function.
}); //End document ready function.
