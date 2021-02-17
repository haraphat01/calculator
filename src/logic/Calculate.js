import Operate from './Operate';

function Calculate(calculatorObj, buttonName) {
  const { total = 0, next, operation } = calculatorObj;
  let ans;
  if (buttonName === '+/-') {
    if (!operation) {
      return {
        ...calculatorObj,
        total: `${total * -1}`,
        operation: buttonName,
      };
    }

    return {
      ...calculatorObj,
      total: `${total * -1}`,
      next: `${next * -1}`,
      operation: buttonName,
    };
  }

  if (buttonName === '=') {
    ans = Operate(total, next, operation);
    return {
      ...calculatorObj,
      total: ans,
      next: null,
      operation: null,
    };
  }

  if (buttonName === 'AC') {
    return {
      ...calculatorObj,
      total: null,
      next: null,
      operation: null,
    };
  }

  if (/[%/X+-]/.test(buttonName)) {
    return {
      ...calculatorObj,
      operation: buttonName,
    };
  }

  if (/\d/.test(buttonName)) {
    if (operation === null) {
      return {
        ...calculatorObj,
        total: total === null ? buttonName : total + buttonName,
      };
    }
    return {
      ...calculatorObj,
      next: next === null ? buttonName : next + buttonName,
    };
  }

  if (buttonName === '.') {
    if (operation === null) {
      return {
        ...calculatorObj,
        total: total === null ? buttonName : total + buttonName,
      };
    }
    return {
      ...calculatorObj,
      next: next === null ? buttonName : next + buttonName,
    };
  }

  return calculatorObj;
}

export default Calculate;
