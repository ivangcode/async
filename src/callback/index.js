// Using callbacks..
function sum(value1, value2) {
  return value1 + value2;
}
function calculate(value1, value2, callback) {
  return callback(value1, value2);
}

calculate(1, 2, sum)

// Using setTimeOut web API..
setTimeout(() => {
  console.log('Hello JavaScript');
}, 500)

// Using setTimeOut in another way
function greetings(name){
  console.log(`Hello ${name}`);
}

setTimeout(greetings, 500, 'Ivan');