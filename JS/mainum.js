const input = document.getElementById('date-input');

const verifyNumber = (date) => {
  const splitNum = `${date}`.replaceAll('-', '').split('');
  splitNum.length > 1 ?
    simplifyNumber(splitNum) :
    document.getElementById('wrapper-result-numerology').innerHTML = `Tu numerología es ${splitNum}`
};
const simplifyNumber = (array) => {
  const resultSimplify = array.reduce((a, b) => parseInt(a)+parseInt(b), 0);
  switch(resultSimplify){
    case 11:
    case 22:
    case 33:
    case 44:
      document.getElementById('wrapper-result-numerology').innerHTML = `Tu numerología es ${resultSimplify}`;
      break;
    default:
      verifyNumber(resultSimplify);
  }
}

input.onchange = () => verifyNumber(input.value);
