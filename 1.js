let num = 776265327;

function count_duplicate(num) {
  let numb = "0123456789";
  let result = numb + num.toString();

  let counts = {};

  for (let i = 0; i < result.length; i++) {
    if (counts[result[i]]) {
      counts[result[i]] += 1;
    } else {
      counts[result[i]] = 1;
    }
  }
  for (let prop in counts) {
    console.log("The number " + prop + " appears " + (counts[prop] - 1) + " times.");
  }
}
count_duplicate(num);
