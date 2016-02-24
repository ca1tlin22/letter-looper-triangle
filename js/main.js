var letter = prompt('Enter a letter:');

var counter;

for (counter = 0; counter < 10; counter++) {
  document.write(letter.repeat(counter + 1) + "<br>");
}
