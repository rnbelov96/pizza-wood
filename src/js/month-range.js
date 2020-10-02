const monthLabelEl = document.getElementById('month-label');
const monthInputEl = document.getElementById('month-range-input');
const monthInputStep = Number(monthInputEl.getAttribute('step'));
let stepCounter = 0;
const valuesNumber = 100 / monthInputStep;
const minValue = 6;
const maxValue = 18;
const valueStep = (maxValue - minValue) / valuesNumber;
let valueCounter = 6;
const valueList = Array(valuesNumber + 1)
  .fill(0, 0, valuesNumber + 1)
  .map(() => {
    const value = {
      step: stepCounter,
      value: valueCounter,
    };
    stepCounter += monthInputStep;
    valueCounter += valueStep;

    return value;
  });

monthInputEl.addEventListener('input', e => {
  e.currentTarget.style.background = `
    linear-gradient(to right, #F8CE4C 0%, #F8CE4C ${e.currentTarget.value}%, #E7E8EA ${e.currentTarget.value}%, #E7E8EA 100%)
  `;
  const valueToShow = valueList.find(
    value => value.step === Number(e.currentTarget.value),
  );
  monthLabelEl.textContent = `${valueToShow.value} месяцев`;
});
