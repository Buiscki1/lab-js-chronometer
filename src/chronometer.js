class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    //if(printTimeCallback)
    //{printTimeCallback}

    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(printTimeCallback) {
        printTimeCallback()
      }
    }, 1000) 
  }

  getMinutes() {
    return Math.floor(this.currentTime/60); 
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    if (value < 10){
      return `0${value}`
    } else return `${value}`
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
   this.currentTime= 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber( this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`
  }
}