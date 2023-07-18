class Chronometer {
  constructor() {
      this.currentTime = 0;
      this.intervalId = null
    };
  

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;

      if (printTimeCallback){
      printTimeCallback();
      }

    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    // ... your code goes here
    let fixed = (this.currentTime / 100) % 60
    return fixed  
  }

  getCentiseconds() { 
    let fixed = (this.currentTime) % 100
    return fixed
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0"+value.toFixed(0);
    } else {
      return String(value.toFixed(0))
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minute = this.computeTwoDigitNumber(this.getMinutes())
    let second = this.computeTwoDigitNumber(this.getSeconds())
    let centi = this.computeTwoDigitNumber(this.getCentiseconds())

    return minute + ":" + second + "." + centi
  }
}

