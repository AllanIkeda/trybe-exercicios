const btnSubmit = document.getElementById('submit');
const box1 = document.getElementById('iput-email');
btnSubmit.addEventListener('click', (e) => {
  if (box1.value === '') {
    alert('aceita o termmmoo');
    e.preventDefault();
  }
});
document.getElementById('date').DatePickerX.init();