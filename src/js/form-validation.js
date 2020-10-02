import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';

const NESSESARY_FIELD_CAPTION = 'Обязательное поле';
const WRONG_PHONE_CAPTION = 'Неверно набранный номер';
const WRONG_EMAIL_CAPTION = 'Неверно набранный email';

const calcFormEl = document.querySelector('.calc__form');
const calcNameInputEl = document.getElementById('calc__name-input');
const calcPhoneInputEl = document.getElementById('calc__phone-input');
const calcEmailInputEl = document.getElementById('calc__email-input');
const calcEmailLabelEl = document.getElementById('calc__email-label');
const calcPhoneLabelEl = document.getElementById('calc__phone-label');
const calcNameLabelEl = document.getElementById('calc__name-label');
calcNameInputEl.addEventListener('focus', e => {
  e.currentTarget.classList.remove('calc__form-input_error');
});
calcPhoneInputEl.addEventListener('focus', e => {
  e.currentTarget.classList.remove('calc__form-input_error');
});
calcEmailInputEl.addEventListener('focus', e => {
  e.currentTarget.classList.remove('calc__form-input_error');
});

calcFormEl.addEventListener('submit', e => {
  calcNameLabelEl.classList.add('calc__error-msg_invisible');
  calcPhoneLabelEl.classList.add('calc__error-msg_invisible');
  calcEmailLabelEl.classList.add('calc__error-msg_invisible');

  let isOk = true;

  if (calcNameInputEl.value === '') {
    calcNameInputEl.classList.add('calc__form-input_error');
    calcNameLabelEl.textContent = NESSESARY_FIELD_CAPTION;
    calcNameLabelEl.classList.remove('calc__error-msg_invisible');
    isOk = false;
  }
  if (calcPhoneInputEl.value === '') {
    calcPhoneInputEl.classList.add('calc__form-input_error');
    calcPhoneLabelEl.textContent = NESSESARY_FIELD_CAPTION;
    calcPhoneLabelEl.classList.remove('calc__error-msg_invisible');
    isOk = false;
  }
  if (calcEmailInputEl.value === '') {
    calcEmailInputEl.classList.add('calc__form-input_error');
    calcEmailLabelEl.textContent = NESSESARY_FIELD_CAPTION;
    calcEmailLabelEl.classList.remove('calc__error-msg_invisible');
    isOk = false;
  }

  if (calcPhoneInputEl.value !== '' && !isMobilePhone(calcPhoneInputEl.value, 'ru-RU')) {
    calcPhoneInputEl.classList.add('calc__form-input_error');
    calcPhoneLabelEl.textContent = WRONG_PHONE_CAPTION;
    calcPhoneLabelEl.classList.remove('calc__error-msg_invisible');
    isOk = false;
  }

  if (calcEmailInputEl.value !== '' && !isEmail(calcEmailInputEl.value)) {
    calcEmailInputEl.classList.add('calc__form-input_error');
    calcEmailLabelEl.textContent = WRONG_EMAIL_CAPTION;
    calcEmailLabelEl.classList.remove('calc__error-msg_invisible');
    isOk = false;
  }

  if (isOk) {
    calcNameLabelEl.classList.add('calc__error-msg_invisible');
    calcPhoneLabelEl.classList.add('calc__error-msg_invisible');
    calcEmailLabelEl.classList.add('calc__error-msg_invisible');
  }

  e.preventDefault();
});

const topContactFormEl = document.getElementById('contact-form-top');
const topContactInputEl = document.getElementById('contact-form-top__name-input');
const topContactPhoneInputEl = document.getElementById('contact-form-top__phone-input');
const topContactEmailInputEl = document.getElementById('contact-form-top__email-input');
const topContactEmailLabelEl = document.getElementById('contact-form-top__email-label');
const topContactPhoneLabelEl = document.getElementById('contact-form-top__phone-label');
const topContactNameLabelEl = document.getElementById('contact-form-top__name-label');
topContactInputEl.addEventListener('focus', e => {
  e.currentTarget.classList.remove('contact-form__input_error');
});
topContactPhoneInputEl.addEventListener('focus', e => {
  e.currentTarget.classList.remove('contact-form__input_error');
});
topContactEmailInputEl.addEventListener('focus', e => {
  e.currentTarget.classList.remove('contact-form__input_error');
});

topContactFormEl.addEventListener('submit', e => {
  topContactNameLabelEl.classList.add('contact-form__error-msg_invisible');
  topContactPhoneLabelEl.classList.add('contact-form__error-msg_invisible');
  topContactEmailLabelEl.classList.add('contact-form__error-msg_invisible');

  let isOk = true;

  if (topContactInputEl.value === '') {
    topContactInputEl.classList.add('contact-form__input_error');
    topContactNameLabelEl.textContent = NESSESARY_FIELD_CAPTION;
    topContactNameLabelEl.classList.remove('contact-form__error-msg_invisible');
    isOk = false;
  }
  if (topContactPhoneInputEl.value === '') {
    topContactPhoneInputEl.classList.add('contact-form__input_error');
    topContactPhoneLabelEl.textContent = NESSESARY_FIELD_CAPTION;
    topContactPhoneLabelEl.classList.remove('contact-form__error-msg_invisible');
    isOk = false;
  }
  if (topContactEmailInputEl.value === '') {
    topContactEmailInputEl.classList.add('contact-form__input_error');
    topContactEmailLabelEl.textContent = NESSESARY_FIELD_CAPTION;
    topContactEmailLabelEl.classList.remove('contact-form__error-msg_invisible');
    isOk = false;
  }

  if (topContactPhoneInputEl.value !== '' && !isMobilePhone(topContactPhoneInputEl.value, 'ru-RU')) {
    topContactPhoneInputEl.classList.add('contact-form__input_error');
    topContactPhoneLabelEl.textContent = WRONG_PHONE_CAPTION;
    topContactPhoneLabelEl.classList.remove('contact-form__error-msg_invisible');
    isOk = false;
  }

  if (topContactEmailInputEl.value !== '' && !isEmail(topContactEmailInputEl.value)) {
    topContactEmailInputEl.classList.add('contact-form__input_error');
    topContactEmailLabelEl.textContent = WRONG_EMAIL_CAPTION;
    topContactEmailLabelEl.classList.remove('contact-form__error-msg_invisible');
    isOk = false;
  }

  if (isOk) {
    topContactNameLabelEl.classList.add('contact-form__error-msg_invisible');
    topContactPhoneLabelEl.classList.add('contact-form__error-msg_invisible');
    topContactEmailLabelEl.classList.add('contact-form__error-msg_invisible');
  }

  e.preventDefault();
});

const bottomContactFormEl = document.getElementById('contact-form-bottom');
const bottomContactInputEl = document.getElementById('contact-form-bottom__name-input');
const bottomContactPhoneInputEl = document.getElementById('contact-form-bottom__phone-input');
const bottomContactEmailInputEl = document.getElementById('contact-form-bottom__email-input');
const bottomContactEmailLabelEl = document.getElementById('contact-form-bottom__email-label');
const bottomContactPhoneLabelEl = document.getElementById('contact-form-bottom__phone-label');
const bottomContactNameLabelEl = document.getElementById('contact-form-bottom__name-label');
bottomContactInputEl.addEventListener('focus', e => {
  e.currentTarget.classList.remove('contact-form__input_error');
});
bottomContactPhoneInputEl.addEventListener('focus', e => {
  e.currentTarget.classList.remove('contact-form__input_error');
});
bottomContactEmailInputEl.addEventListener('focus', e => {
  e.currentTarget.classList.remove('contact-form__input_error');
});

bottomContactFormEl.addEventListener('submit', e => {
  bottomContactNameLabelEl.classList.add('contact-form__error-msg_invisible');
  bottomContactPhoneLabelEl.classList.add('contact-form__error-msg_invisible');
  bottomContactEmailLabelEl.classList.add('contact-form__error-msg_invisible');

  let isOk = true;

  if (bottomContactInputEl.value === '') {
    bottomContactInputEl.classList.add('contact-form__input_error');
    bottomContactNameLabelEl.textContent = NESSESARY_FIELD_CAPTION;
    bottomContactNameLabelEl.classList.remove('contact-form__error-msg_invisible');
    isOk = false;
  }
  if (bottomContactPhoneInputEl.value === '') {
    bottomContactPhoneInputEl.classList.add('contact-form__input_error');
    bottomContactPhoneLabelEl.textContent = NESSESARY_FIELD_CAPTION;
    bottomContactPhoneLabelEl.classList.remove('contact-form__error-msg_invisible');
    isOk = false;
  }
  if (bottomContactEmailInputEl.value === '') {
    bottomContactEmailInputEl.classList.add('contact-form__input_error');
    bottomContactEmailLabelEl.textContent = NESSESARY_FIELD_CAPTION;
    bottomContactEmailLabelEl.classList.remove('contact-form__error-msg_invisible');
    isOk = false;
  }

  if (bottomContactPhoneInputEl.value !== '' && !isMobilePhone(bottomContactPhoneInputEl.value, 'ru-RU')) {
    bottomContactPhoneInputEl.classList.add('contact-form__input_error');
    bottomContactPhoneLabelEl.textContent = WRONG_PHONE_CAPTION;
    bottomContactPhoneLabelEl.classList.remove('contact-form__error-msg_invisible');
    isOk = false;
  }

  if (bottomContactEmailInputEl.value !== '' && !isEmail(bottomContactEmailInputEl.value)) {
    bottomContactEmailInputEl.classList.add('contact-form__input_error');
    bottomContactEmailLabelEl.textContent = WRONG_EMAIL_CAPTION;
    bottomContactEmailLabelEl.classList.remove('contact-form__error-msg_invisible');
    isOk = false;
  }

  if (isOk) {
    bottomContactNameLabelEl.classList.add('contact-form__error-msg_invisible');
    bottomContactPhoneLabelEl.classList.add('contact-form__error-msg_invisible');
    bottomContactEmailLabelEl.classList.add('contact-form__error-msg_invisible');
  }

  e.preventDefault();
});
