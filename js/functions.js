function formatCardNumber(inputValue) {
  // Elimina cualquier caracter que no sea un dígito
  const cleanValue = inputValue.replace(/\D/g, '');

  // Divide el número de tarjeta en grupos de cuatro y agrega un espacio entre ellos
  const formattedValue = cleanValue.replace(/(\d{4}(?=\d))/g, '$1 ').trim();

  // Actualiza el valor en el campo de entrada y en la tarjeta
  document.getElementById('cardNumberInput').value = formattedValue;
  updateCardNumber(formattedValue);
}

function updateCardNumber(value) {
  const cardNumberElement = document.getElementById('cardNumber');
  cardNumberElement.textContent = value ? value : '**** **** **** ****';
}



function updateCardHolder(value) {
  const cardHolderElement = document.getElementById('cardHolder');
  cardHolderElement.textContent = value || 'Nombre del Titular';
}

function formatCardExpiry(inputValue) {
  // Elimina cualquier caracter que no sea un dígito
  const cleanValue = inputValue.replace(/\D/g, '');

  // Inserta una barra "/" después de los primeros dos dígitos
  const formattedValue = cleanValue.replace(/(\d{2})(\d{0,2})/, '$1/$2').trim();

  // Actualiza el valor en el campo de entrada y en la tarjeta
  document.getElementById('cardExpiryInput').value = formattedValue;
  updateCardExpiry(formattedValue);
}

function updateCardExpiry(value) {
  const cardExpiryElement = document.getElementById('cardExpiry');
  cardExpiryElement.textContent = value ? value : 'MM/YY';
}

function updateCardCvv(value) {
  const cardCvvElement = document.getElementById('cardCvv');
  cardCvvElement.textContent = value || '123';
}

function updateCardAutomatically(inputElement, updateFunction) {
  const value = inputElement.value;
  updateFunction(value);
}

document.getElementById('cardNumberInput').addEventListener('input', function() {
  updateCardAutomatically(this, updateCardNumber);
});

document.getElementById('cardHolderInput').addEventListener('input', function() {
  updateCardAutomatically(this, updateCardHolder);
});

document.getElementById('cardExpiryInput').addEventListener('input', function() {
  updateCardAutomatically(this, updateCardExpiry);
});

document.getElementById('cardCvvInput').addEventListener('input', function() {
  updateCardAutomatically(this, updateCardCvv);
});

function updateCard() {
  const cardNumberInput = document.getElementById('cardNumberInput').value;
  const cardHolderInput = document.getElementById('cardHolderInput').value;
  const cardExpiryInput = document.getElementById('cardExpiryInput').value;
  const cardCvvInput = document.getElementById('cardCvvInput').value;

  updateCardNumber(cardNumberInput);
  updateCardHolder(cardHolderInput);
  updateCardExpiry(cardExpiryInput);
  updateCardCvv(cardCvvInput);
}
