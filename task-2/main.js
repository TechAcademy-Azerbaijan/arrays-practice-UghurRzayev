const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let numbers = result.input.split(",")
    let say = 0
    for (let i = 1; i < numbers.length-1; i++) {
        if (numbers[i]>numbers[i-1]&&numbers[i]>numbers[i+1]) {
            say = say + 1
        }
    }console.log(say);
  
});
