$(document).ready(function() {
    var words = ['Enterprise', 'Small Business', 'Startups']; // Array of words
    var index = 0;
  
    // Set the interval to update the text every 500ms (half a second)
    setInterval(function() {
      $('.solu').text(words[index]);  // Display the current word
      index++;  // Move to the next word
      
      if (index >= words.length) {
        index = 0;  // Reset the index to loop through the array endlessly
      }
    }, 1300);  // 500ms delay
  });
  