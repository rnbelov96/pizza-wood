const checkLabelEl = document.getElementById('check-label');
const checkInputEl = document.getElementById('check-range-input');
const checkInputStep = Number(checkInputEl.getAttribute('step'));
let stepCounter = 0;
const valuesNumber = 100 / checkInputStep;
const minValue = 100;
const maxValue = 1100;
const valueStep = (maxValue - minValue) / valuesNumber;
let valueCounter = 100;
const valueList = Array(valuesNumber + 1)
  .fill(0, 0, valuesNumber + 1)
  .map(() => {
    const value = {
      step: stepCounter,
      value: valueCounter,
    };
    stepCounter += checkInputStep;
    valueCounter += valueStep;

    return value;
  });

checkInputEl.addEventListener('input', e => {
  e.currentTarget.style.background = `
    linear-gradient(to right, #F8CE4C 0%, #F8CE4C ${e.currentTarget.value}%, #E7E8EA ${e.currentTarget.value}%, #E7E8EA 100%)
  `;
  const valueToShow = valueList.find(
    value => value.step === Number(e.currentTarget.value),
  );
  checkLabelEl.textContent = `${valueToShow.value} ₽`;
});
