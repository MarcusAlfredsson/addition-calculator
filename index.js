var result = 0;

const displayOutput = (number) => {
  let el = getOutputElement();
  el.value += number;
}

const calculate = (stringValue) => {
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

const calculateSum = () => {
  const el = getOutputElement();
  const sum = calculate(el.value);
  el.value = sum;
}


const getOutputElement = () => {
  return document.getElementById('numberOutput');
}

const resetOutput = () => {
  let el = getOutputElement();
  el.value = '';
  result = 0;
}