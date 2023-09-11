const turnManagementSystem = {
  waitingQueue: [],   // Una matriz para almacenar los turnos de los clientes que esperan
  turnCounter: 0,     // Un contador para llevar un registro del número total de turnos

  takeTurn: function () {
    this.turnCounter++;         // Incrementa el contador de turnos
    this.waitingQueue.push(this.turnCounter);  // Agrega el nuevo turno al final de la cola de espera
  },

  callCustomer: function () {
    if (this.waitingQueue.length > 0) {          // Verifica si hay clientes en espera
      const calledTurn = this.waitingQueue.shift();  // Toma el primer turno en la cola de espera
      prompt(`Calling customer with turn ${calledTurn}`); // Muestra un mensaje con el turno llamado
    } else {
      prompt("There are no customers waiting");  // Muestra un mensaje si no hay clientes en espera
    }
  },

  displayWaitingQueue: function () {
    prompt(`Customers in waiting: ${this.waitingQueue.join(", ")}`);  // Muestra la cola de espera
  },

  displayTurnCounter: function () {
    prompt(`Total turns taken: ${this.turnCounter}`);  // Muestra el número total de turnos tomados
  },
};

function showMenu() {
  while (true) {
    const option = prompt(
      "Select an option:\n" +
        "1. Take a turn\n" +
        "2. Call a customer\n" +
        "3. Display waiting queue\n" +
        "4. Display turn counter\n" +
        "5. Exit"
    );
    switch (option) {
      case "1":
        turnManagementSystem.takeTurn();  // Llama al método takeTurn del sistema de gestión de turnos
        break;
      case "2":
        turnManagementSystem.callCustomer();  // Llama al método callCustomer del sistema de gestión de turnos
        break;
      case "3":
        turnManagementSystem.displayWaitingQueue();  // Llama al método displayWaitingQueue del sistema de gestión de turnos
        break;
      case "4":
        turnManagementSystem.displayTurnCounter();  // Llama al método displayTurnCounter del sistema de gestión de turnos
        break;
      case "5":
        alert("Exiting the queue management system.");  // Muestra un mensaje de salida
        return;  // Sale de la función showMenu y termina el programa
      default:
        alert("Invalid option");  // Muestra un mensaje si se ingresa una opción no válida
        break;
    }
  }
}

showMenu(); // Llama a la función showMenu para iniciar el menú
