const screenUp = (num) => {
    const loadingText = document.getElementById("loading-text");
    if (num < 100) {
      loadingText.innerHTML = `Loading ...${num} %`;
    } else {
      loadingText.innerHTML = `Complete! ${num} %`;
    }
}
function updateProgress(newWidth) {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = newWidth + '%';
}

const interval = (num, interval_time) => {
  num++;
  screenUp(num);
  interval_time = 100 - (num / 2);
  if (num >= 97) {
    interval_time = 200;
  }
  updateProgress(num);
  if (num < 100) {
    setTimeout(() => interval(num, interval_time), interval_time);
  } else {
    screenUp(num)
    setTimeout(() => {
      document.querySelector('.progress-container').style.display = 'none';
      document.querySelector('.loading-text').style.display = 'none'
      document.querySelector('.main-content').style.display = 'block';
    }, 700);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let num = 0;
  let interval_time = 100;

  interval(num, interval_time);
});
