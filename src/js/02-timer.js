import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

const buttonStart = document.querySelector('button[data-start]');
const timerEl = document.querySelector('.timer');
const daysTimer = document.querySelector('span[data-days]');
const hoursTimer = document.querySelector('span[data-hours]');
const minutesTimer = document.querySelector('span[data-minutes]');
const secondsTimer = document.querySelector('span[data-seconds]');


timerEl.style.display = 'flex';
timerEl.style.gap = '10px'
buttonStart.disabled = true;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (new Date().getTime() > selectedDates[0].getTime()) {
      Notify.failure('Будь ласка, виберіть дату в майбутньому!');
    } else {
      buttonStart.disabled = false;
      Notify.success('Дата вибрана правильно');
      Notify.info('Кнопка Start активна, можна тицьнути на неї');
      buttonStart.addEventListener('click', () => {
        timerId = setInterval(() => {
          buttonStart.disabled = true;
          const difference = selectedDates[0].getTime() - new Date().getTime();
          if (difference < 1000) {
            clearInterval(timerId);
            secondsTimer.textContent = '00';
          } else {
            function convertMs(ms) {
              // Number of milliseconds per unit of time
              const second = 1000;
              const minute = second * 60;
              const hour = minute * 60;
              const day = hour * 24;

              // Remaining days
              const days = Math.floor(ms / day);
              // Remaining hours
              const hours = Math.floor((ms % day) / hour);
              // Remaining minutes
              const minutes = Math.floor(((ms % day) % hour) / minute);
              // Remaining seconds
              const seconds = Math.floor(
                (((ms % day) % hour) % minute) / second
              );

              return { days, hours, minutes, seconds };
            }
            daysTimer.textContent = addLeadingZero(convertMs(difference).days);
            hoursTimer.textContent = addLeadingZero(
              convertMs(difference).hours
            );
            minutesTimer.textContent = addLeadingZero(
              convertMs(difference).minutes
            );
            secondsTimer.textContent = addLeadingZero(
              convertMs(difference).seconds
            );
            function addLeadingZero(value) {
              return String(value).padStart(2, '0');
            }
          }
        }, 1000);
      });
    }
  },
};

flatpickr('input#datetime-picker', options);