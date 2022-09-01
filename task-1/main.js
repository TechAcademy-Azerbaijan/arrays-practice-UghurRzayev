const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let array = result.input.split(",")
    let a = 0;
    let cem = 0
    let say = 0
    
    for (let i = 0; i < array.length; i++) {
        a = a + parseFloat(array[i])
    } a = a/array.length
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        if (array[j]>a) {
            cem = parseInt(cem)+parseInt(array[j])
            say++
        }
    } console.log(`${cem}\n${say}`);
    
  
});
