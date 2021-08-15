const clock = document.querySelector('.clock');
const tick = () => {
  const now = new Date();

  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let session = '';

  if (hour >= 12) {
    session = 'PM';
  }
  if (hour >= 0 && hour < 12) {
    session = 'AM';
  }

  hour = hour < 10 ? '0' + hour : hour;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  html = `
  <span>${hour}</span> :
  <span>${min}</span> :
  <span>${sec}</span> :
  <span> ${session}</span>
  `;
  clock.innerHTML = html;
};

setInterval(tick, 1000);
