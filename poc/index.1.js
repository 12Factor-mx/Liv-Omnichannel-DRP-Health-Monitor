const async = require('async');

function startTimer(duration) {
  var start = Date.now(),
    diff,
    minutes,
    seconds;
  
   function timer() {
    // get the number of seconds that have elapsed since 
    // startTimer() was called
    diff = duration - (((Date.now() - start) / 1000) | 0);

    // does the same job as parseInt truncates the float
    minutes = (diff / 60) | 0;
    seconds = (diff % 60) | 0;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // display.textContent = minutes + ":" + seconds;
    //console.log(minutes + ":" + seconds);
    console.log(minutes + ":" + seconds)
    console.log(diff)

    if (diff <= 0) {
      // add one second so that the count down starts at the full duration
      // example 05:00 not 04:59
      start = Date.now() + 1000;
    }
  }
  // we don't want to wait a full second before the timer starts
  timer();
  var inter = setInterval(timer, 1000);
  return inter;
}


function resolveAfterNSeconds(seconds) {
  return new Promise(resolve => {
      var t = startTimer(seconds)
      setTimeout(() => {
      clearInterval(t);
      resolve('resolved');
    }, seconds * 1000);
  });
}

(function waterfallDemo() {
  const tasks = [
    async function createCompany(callback) {
      console.log("Task1");
      console.log('calling');
      console.log('Wait 5 seconds');
      var result = await resolveAfterNSeconds(-10);
      console.log(result);
      callback(null);
    },
    async function createJob(callback) {
      console.log("Task2");
      callback(null);
    },
    async function createApplication(callback) {
      console.log("Task3");
      console.log('calling');
      console.log('Wait 15 seconds');
      var result = await resolveAfterNSeconds(15);
      callback(null);
    },
    async function createLicence(callback) {
      console.log("Task4");
      callback(null);
    }
  ];
  console.log("Starring waterfall"),
  async.waterfall(tasks, (err, results) => {
    if (err) {
      return next(err);
    }
    return results;
  })
})()
