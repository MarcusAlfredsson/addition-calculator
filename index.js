function displayOutput(number) {
  let el = getOutputElement();
  el.value += number;
}

function calculate(stringValue) {
  const stringValues = stringValue.split('').filter(a => (a !== '#' && a !== '*'));
  const values = stringValues.map(a => parseInt(a));
  return values.reduce((a, b) => a+b);
}

function calculateSum() {
  const el = getOutputElement();
  const sum = calculate(el.value);
  el.value = sum;
}


function getOutputElement() {
  return document.getElementById('numberOutput');
}

function resetOutput() {
  let el = getOutputElement();
  el.value = '';
}