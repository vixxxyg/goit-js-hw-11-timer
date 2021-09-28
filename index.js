class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate);
    this.days = document.querySelector('[data-value="days"]');
    this.hours = document.querySelector('[data-value="hours"]');
    this.minutes = document.querySelector('[data-value="mins"]');
    this.seconds = document.querySelector('[data-value="secs"]');
  }
  
  pad(value) {
    return value < 10 ? `0${value}` : value;
  }

  countDowm() {
    const currentTime = new Date();
    this.createValue(currentTime);
  }

  showTime() {
    setInterval(() => this.countDowm(), 1000);
  }

  createValue(currentTime) {
    const time = this.targetDate - currentTime;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.days.textContent = this.pad(days);
    this.hours.textContent = this.pad(hours);
    this.minutes.textContent = this.pad(mins);
    this.seconds.textContent = this.pad(secs);

  }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),
});

const startButton = document.querySelector("[data-action-start]");
 startButton.addEventListener("click", startTimer);

 function startTimer() {
   startButton.setAttribute('disabled', '')
   timer.showTime();
 }