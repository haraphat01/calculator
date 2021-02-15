import Big from 'big.js';

function Operate(numberOne = null, numberTwo = null, operation) {
  const operations = ['+', '-', 'X', '/', '%'];
  let result = Infinity;
  if (operations.includes(operation)) {
    if (operation === '+') {
      result = new Big(numberOne).plus(new Big(numberTwo));
    } else if (operation === '-') {
      result = new Big(numberOne).minus(new Big(numberTwo));
    } else if (operation === 'X') {
      result = new Big(numberOne).times(new Big(numberTwo));
    } else if (operation === '/') {
      result = new Big(numberOne).div(new Big(numberTwo));
    } else if (operation === '%') {
      result = new Big(numberOne).div(100);
    }
  } else if (operation === '=') {
    return result;
  }
  return result;
}
export default Operate;
