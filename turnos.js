const turnManagementSystem = {
  waitingQueue: [],
  turnCounter: 0,

  takeTurn: function () {
    this.turnCounter++;
    this.waitingQueue.push(this.turnCounter);
  },

  callCustomer: function () {
    if (this.waitingQueue.length > 0) {
      const calledTurn = this.waitingQueue.shift();
      prompt(`Calling customer with turn ${calledTurn}`);
    } else {
      prompt("There are no customers waiting");
    }
  },

  displayWaitingQueue: function () {
    prompt(`Customers in waiting: ${this.waitingQueue.join(", ")}`);
  },

  displayTurnCounter: function () {
    prompt(`Total turns taken: ${this.turnCounter}`);
  },
};

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
      turnManagementSystem.takeTurn();
      break;
    case "2":
      turnManagementSystem.callCustomer();
      break;
    case "3":
      turnManagementSystem.displayWaitingQueue();
      break; // Add a break statement here
    case "4":
      turnManagementSystem.displayTurnCounter();
      break;
    case "5":
      alert("Exiting the queue management system.");
      return;
    default:
      alert("Invalid option");
      break;
  }
}
