// 1. Дан большой текст, в котором для оформления прямой речи используются одинарные
// кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.

const text = `'Musk is probably happy to jump on the joke of what is a meme(coin),
but investors are probably feeling real pain now, ' said Justin d'Anethan,
Hong Kong-based head of exchange sales at Diginex, a digital asset exchange.
'The supply is essentially unlimited [for Dogecoin], and so unsustainable
long-term. It's a question of who will sell first and who will be left holding the bags.'`;
const regexp1 = /\'/gm;
text.replace(regexp1, '"');

// 2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на
// двойную.

const regexp2 = /(\s)'|'(\s)|^'|'$/gm;
text.replace(regexp2, '$1"$2');

// 3. * Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить.
// При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
const regName = /^[a-z\p{L}]{2,50}$/iu;
const regPhone = /^\+7\(\d{3}\)\d{3}-\d{4}$/; //без скобок и дефиса -- /^\+7\d{10}$/
const regEmail = /^([a-z0-9_\.-]+)@mail.ru$/;

function authSubmit(event) {
  event.preventDefault();
  event.stopPropagation();

  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  if (!name.value || !phone.value || !email.value || !message.value) {
    alert("Все поля должны быть заполнены!");
    return;
  }

  if (!regName.test(name.value)) {
    name.classList.add("red_input");
    alert("Введите правильное имя");
    name.value = "";
  } else {
    name.classList.remove("red_input");
  }

  if (!regPhone.test(phone.value)) {
    phone.classList.add("red_input");
    alert("Введите правильный номер телефона -- +7(ХХХ)ХХХ-ХХХХ");
    phone.value = "";
  } else {
    phone.classList.remove("red_input");
  }

  if (!regEmail.test(email.value)) {
    email.classList.add("red_input");
    alert("Введите правильный адрес почты -- *@mail.ru");
    email.value = "";
  } else {
    email.classList.remove("red_input");
  }
}
