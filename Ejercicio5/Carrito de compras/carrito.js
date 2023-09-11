// Definición de productos con nombre, precio y stock
const products = [
  { name: "Apples", price: 2500, stock: 10 },
  { name: "Pears", price: 1500, stock: 10 },
  { name: "Potatoes", price: 2000, stock: 10 },
];

// Arreglo para el carrito de compras
const cart = [];

// Función para agregar productos al carrito
function addToCart(productIndex, quantity) {
  if (productIndex >= 0 && productIndex < products.length) { // Verifica si el índice del producto es válido
    const product = products[productIndex];
    if (product.stock >= quantity) { // Verifica si hay suficiente stock del producto
      const subtotal = product.price * quantity;
      cart.push({ name: product.name, quantity, subtotal }); // Agrega el producto al carrito
      product.stock -= quantity; // Reduce el stock del producto
      alert(`"${product.name}" added to the cart.`);
    } else {
      alert(`Not enough stock of "${product.name}".`);
    }
  } else {
    alert("Invalid product.");
  }
}

// Función para calcular el precio total de los productos en el carrito
function calculateTotalPrice() {
  let total = 0;
  for (const item of cart) {
    total += item.subtotal;
  }
  return total;
}

// Función para mostrar el contenido del carrito
function showCart() {
  let cartInfo = "Shopping Cart:\n";
  for (const item of cart) {
    cartInfo += `${item.name} - Quantity: ${item.quantity} - Subtotal: $${item.subtotal}\n`;
  }
  cartInfo += `Total Price: $${calculateTotalPrice()}`;
  alert(cartInfo);
}

// Función principal que muestra un menú y gestiona la interacción con el usuario
function showMenu() {
  while (true) {
    const option = prompt(
      "Select an option:\n" +
        "1. Add a product to the cart\n" +
        "2. Show shopping cart\n" +
        "3. Exit"
    );
    switch (option) {
      case "1":
        const productIndex = parseInt(
          prompt("Select a product:\n1. 🍎Apples🍎\n2. 🍐Pears🍐\n3. 🥔Potatoes🥔")
        );
        const quantity = parseInt(prompt("Enter the quantity to add:"));
        addToCart(productIndex - 1, quantity); // Restamos 1 al índice porque comienza desde 0
        break;
      case "2":
        showCart();
        break;
      case "3":
        alert("Exiting the application.");
        return;
      default:
        alert("Invalid option");
        break;
    }
  }
}

// Llama a la función principal para iniciar el programa
showMenu();
