let products = [
  { id: 1, name: "Phone", price: 15000, image: "https://via.placeholder.com/100" },
  { id: 2, name: "Laptop", price: 50000, image: "https://via.placeholder.com/100" },
  { id: 3, name: "Headphones", price: 2000, image: "https://via.placeholder.com/100" },
  { id: 4, name: "Shoes", price: 3000, image: "https://via.placeholder.com/100" }
];

let cart = [];

function displayProducts(list) {
  let container = document.getElementById("product-list");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  cart.push(id);
  document.getElementById("cart-count").innerText = cart.length;
}

function searchProduct() {
  let value = document.getElementById("search").value.toLowerCase();
  let filtered = products.filter(p => p.name.toLowerCase().includes(value));
  displayProducts(filtered);
}

// Load products initially
displayProducts(products);
