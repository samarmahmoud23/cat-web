
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');

hamburgerMenu.addEventListener('click', () => {
  navigation.classList.toggle('show');
});


const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const products = document.querySelectorAll('.product');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();

  products.forEach((product) => {
    const productName = product.querySelector('h3').textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});s