function Solve(val) {
  const display = document.getElementById('result');
  display.value += val;
}

function Result() {
  const display = document.getElementById('result');
  try {
    const expression = display.value.replace('x', '*');
    display.value = eval(expression);
  } catch {
    display.value = 'Error';
  }
}

function Clear() {
  document.getElementById('result').value = '';
}

function Back() {
  const display = document.getElementById('result');
  display.value = display.value.slice(0, -1);
}

// Keyboard functionality
document.addEventListener('keydown', function (event) {
  const key = event.key;
  const validKeys = '0123456789+-*/.%';

  if (validKeys.includes(key)) {
    Solve(key);
  } else if (key === 'Enter') {
    event.preventDefault();
    Result();
  } else if (key === 'Backspace') {
    Back();
  } else if (key.toLowerCase() === 'c') {
    Clear();
  }
});
