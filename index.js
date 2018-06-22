var result = 0;
function displayOutput(number) {
  let el = getOutputElement();
  el.value += number;
}

function calculate(stringValue) {
  const stringWithoutResult = stringValue.replace(`${result}`, '');
  const stringValues = stringWithoutResult.split('').filter(a => (a !== '#' && a !== '*'));
  const values = stringValues.map(a => parseInt(a));
  let sumWithoutPreviousResult = 0;
  if (values.length > 0) {
    sumWithoutPreviousResult = values.reduce((a, b) => a+b);
  }
  result += sumWithoutPreviousResult
  return result;
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
  result = 0;
}