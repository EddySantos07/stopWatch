// oop / stop watch

// let sw = {

//   seconds: 0,

//   start: setTimeout(function () {
//     this.seconds++;
//   },1000),

//   stop: clearTimeout(this.seconds),

//   duration: this.seconds,

// }

// console.log(sw.start())
// console.log(sw.durat

function Sw () {

  let startTime, endTime, running, duration = 0;

  this.start = function () {

    if (running) {
      throw new Error('Stop watch has already started');
    }
    running = true;
    console.log(new Date())
    startTime = new Date();

  };

  this.stop = function () {
    if (!running) {
      throw new Error('stop watch is not started');
    }

    running = false;

    endTime = new Date();

    // console.log( endTime.getTime(), startTime.getTime(), endTime.getTime() - startTime.getTime(), (endTime.getTime() - startTime.getTime()) / 1000 )

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;

  };

  this.reset = function  () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  }

  // this.duration = this.seconds['seconds'];

  Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
  });

}

// sw()
let stopWatch = new Sw()
// console.log(stopWatch.start());
