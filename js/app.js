const checkbox = document.getElementById('toggle');
const pricesMonth = Array.from(document.querySelectorAll('.card__price--month'));
const pricesAnnual = Array.from(document.querySelectorAll('.card__price--annual'));

function togglePrice(e) {
  if(e.target.checked) {
    pricesMonth.forEach(price => price.classList.remove('d-none'));
    pricesAnnual.forEach(price => price.classList.add('d-none'));
  } else {
    pricesMonth.forEach(price => price.classList.add('d-none'));
    pricesAnnual.forEach(price => price.classList.remove('d-none'));
  }
}

checkbox.addEventListener('click', togglePrice);