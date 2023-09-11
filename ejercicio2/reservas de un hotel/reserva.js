// Define the initial state of the hotel
const hotel = [
  { type: "single", capacity: 2, reservations: [] },
  { type: "double", capacity: 4, reservations: [] },
  { type: "family", capacity: 6, reservations: [] },
];

// Función para realizar una reserva
function makeReservation() {
  const roomType = prompt(
    "Enter the room type (single, double, family):"
  ).toLowerCase();  // Pide al usuario que ingrese el tipo de habitación deseada y lo convierte a minúsculas para ser consistente.

  const room = hotel.find((h) => h.type === roomType);

  if (!room) {
    alert("Invalid room type.");
    return;
  }

  const smoker =
    prompt("Is it a smoking room? (Yes/No):").toLowerCase() === "yes";
  const hasPet = prompt("🐶Do you have a pet🐶? (Yes/No):").toLowerCase() === "yes";
  const name = prompt("Enter your name:");
  const country = prompt("🏠Enter your country of origin:🏠");
  const numPersons = parseInt(prompt("Number of persons:"));

  if (isNaN(numPersons)) {
    alert("Invalid number of persons.");
    return;
  }

  if (numPersons > room.capacity) {
    alert("The number of persons exceeds the room's capacity."); // Si el número de personas no es un número válido, muestra un mensaje de error y retorna.
    return;
  }

  room.reservations.push({
    smoker,
    hasPet,
    name,
    country,
    numPersons,
  });

  const totalReservations = calculateTotalReservations();
  const petMessage = hasPet ? "with pet" : "without pet";

  alert(
    `Reservation successful:\nRoom: ${roomType}\nSmoker: ${
      smoker ? "Yes" : "No"
    }\nPet: ${petMessage}\nName: ${name}\nCountry: ${country}\nNumber of persons: ${numPersons}\nTotal reservations: ${totalReservations}`
  );
}

// Función para calcular el número total de reservas
function calculateTotalReservations() {
  let total = 0;
  for (const room of hotel) {
    total += room.reservations.length;
  }
  return total;
}

// Función para ver el total de reservas
function viewTotalReservations() {
  const totalReservations = calculateTotalReservations();
  alert(`Total reservations: ${totalReservations}`);
}

// Función para ver los datos de los clientes
function viewCustomerData() {
  const roomType = prompt(
    "Enter the room type (single, double, family):"
  ).toLowerCase();

  const room = hotel.find((h) => h.type === roomType);

  if (!room) {
    alert("Invalid room type.");
    return;
  }

  if (room.reservations.length === 0) {
    alert("There are no reservations in this room."); // Si no hay reservas en la habitación seleccionada, muestra un mensaje informativo y retorna.
    return;
  }

  alert("Customer data in this room:");
  for (const reservation of room.reservations) {
    const petMessage = reservation.hasPet ? "with pet" : "without pet";
    alert(
      `Name: ${reservation.name}\nCountry: ${
        reservation.country
      }\nNumber of persons: ${reservation.numPersons}\nSmoker: ${
        reservation.smoker ? "Yes" : "No"
      }\nPet: ${petMessage}`
    );
  }
}

// Función principal para gestionar las reservas del hotel
function manageReservations() {
  while (true) {
    const option = prompt(
      "Select an option:\n1. Make a reservation\n2. View total reservations\n3. View customer data\n4. Exit"
    );

    switch (option) {
      case "1":
        makeReservation();
        break;
      case "2":
        viewTotalReservations();
        break;
      case "3":
        viewCustomerData();
        break;
      case "4":
        alert("Thank you for using our reservation service.");
        return;
      default:
        alert("Invalid option, please select again.");
    }
  }
}

// Iniciar la gestión de reservas del hotel
manageReservations();
