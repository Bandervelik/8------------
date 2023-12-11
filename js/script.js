var modal = document.getElementById('myModal');

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function redirectToBooking(choice) {
  if (choice === 'yes') {
alert('Переход до букінгу...');
  }
  closeModal();
}

window.onload = closeModal;

function smoothScroll(targetId) {
  var targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
