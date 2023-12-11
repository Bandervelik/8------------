// Отримуємо модальне вікно та кнопку
var modal = document.getElementById('myModal');

// Функція відкриття модального вікна
function openModal() {
  modal.style.display = 'block';
}

// Функція закриття модального вікна
function closeModal() {
  modal.style.display = 'none';
}

// Функція переходу до букінгу
function redirectToBooking(choice) {
  if (choice === 'yes') {
    // Додайте код для переходу до сторінки букінгу
    alert('Переход до букінгу...');
  }
  closeModal();
}

// Приховуємо модальне вікно при завантаженні сторінки
window.onload = closeModal;
