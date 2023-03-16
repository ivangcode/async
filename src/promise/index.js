const promise = new Promise ((resolve, reject) => {
  resolve('All right!');
  reject(new Error('error!!'));
} ) 

const cows = 9;

const countCows = new Promise ((resolve, reject) => {
  cows > 10
    ? resolve(`We have ${cows} jiji.`)
    : reject('There is now cows.')
});


countCows
.then((res) => console.log(res))
.catch((err) => console.log(err))