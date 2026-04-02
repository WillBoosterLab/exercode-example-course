const button = document.getElementById('change-btn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'こんにちは！';
});

test();
