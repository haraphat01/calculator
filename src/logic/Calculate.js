import Operate from './Operate';

const Calculate = (calculatorObj, buttonName) => {
  let { total = 0, next, operation } = calculatorObj;
  const operations = ['+', '-', 'X', '/', '%'];
  operation = buttonName;
  if (operations.includes(buttonName)) {
    total = Operate(total, next, buttonName);
    return total;
  }
  if (buttonName === '+/-') {
    if (total) {
      total = Operate(total, -1, 'X');
    } else if (next) {
      next = Operate(next, -1, 'X');
    }
    return { total, next, operation };
  }

  if (buttonName === '=') {
    total = Operate(total, next, buttonName);
    next = null;
    return total;
  }
  if (buttonName === 'AC') {
    total = null;
    next = null;
  }
  if (buttonName === '.') {
    next = next.concat(buttonName);
  }
  return { calculatorObj };
};

export default Calculate;
