//Datos del cliente y cuentas
const customerData = {
  id: "1234",
  pin: "1234",
  accounts: {
    account1: {
      balance: 1000000,
      accountNumber: 10,
    },
    account2: {
      balance: 1000000,
      accountNumber: 20,
    },
  },
};
// Estado de inicio de sesión y conteo de intentos de inicio de sesión
let loggedIn = false; // Inicialmente no se ha iniciado sesión
let loginAttempts = 0;  // Contador de intentos de inicio de sesión
// Función para iniciar sesión
function login() {
  if (loggedIn) {
    console.log("You are already logged in.");
    return;
  }

  const id = prompt("Enter your ID:");
  const pin = prompt("Enter your PIN (4 digits):");

  if (id === customerData.id && pin === customerData.pin) {
    loggedIn = true; // Si el ID y el PIN coinciden, se inicia sesión
    console.log("Successful login.");
  } else {
    console.log(
      "Invalid ID or PIN. Please try again."
    );
    loginAttempts++;

    if (loginAttempts >= 3) { // Aumentar el contador de intentos de inicio de sesión

      console.log("Three incorrect attempts. Exiting the application.");
      return;
    }

    login();
  }
}
// Función para cerrar sesión
function logout() {
  loggedIn = false;
  console.log("Successful logout.");
}
// Función para realizar un retiro de efectivo
function withdraw() {
  if (!loggedIn) {
    console.log("Please log in first."); // Verificar si se ha iniciado sesión
    return;
  }

  const accountType = prompt("Select an account (account1 or account2):");
  const amount = parseInt(
    prompt("Enter the amount to withdraw in multiples of $50000:")
  );

  if (
    accountType in customerData.accounts &&
    amount % 50000 === 0 &&
    amount <= customerData.accounts[accountType].balance
  ) {
    customerData.accounts[accountType].balance -= amount;
    console.log(
      `Successful withdrawal. You can take $${amount} from account ${accountType}.`
    );
  } else {
    console.log("Invalid withdrawal amount or insufficient funds.");
  }
}
// Función para realizar un depósito
function deposit() {
  if (!loggedIn) {
    console.log("Please log in first.");
    return;
  }

  const accountType = prompt("Select an account (account1 or account2):");
  const amount = parseInt(prompt("Enter the amount to deposit:"));

  if (accountType in customerData.accounts && amount > 0) {
    customerData.accounts[accountType].balance += amount;
    console.log(`Successful deposit of $${amount} into account ${accountType}.`);
  } else {
    console.log("Invalid account type or deposit amount.");
  }
}
// Función para consultar el saldo

function checkBalance() {
  if (!loggedIn) {
    console.log("Please log in first.");
    return;
  }

  const account1Balance = checkAccountBalance("account1");
  const account2Balance = checkAccountBalance("account2");

  if (account1Balance !== "Account does not exist") {
    prompt(`Balance of account1: $${account1Balance}`);
  } else {
    console.log("Account1 does not exist.");
  }

  if (account2Balance !== "Account does not exist") {
    prompt(`Balance of account2: $${account2Balance}`);
  } else {
    console.log("Account2 does not exist.");
  }
}
// Función para verificar el saldo de una cuenta específica
function checkAccountBalance(account) {
  if (customerData.accounts.hasOwnProperty(account)) {
    return customerData.accounts[account].balance;
  } else {
    return "Account does not exist";
  }
}
// Función para realizar una transferencia
function transfer() {
  if (!loggedIn) {
    console.log("Please log in first.");
    return;
  }

  const fromAccount = prompt(
    "Enter the source account (account1 or account2):"
  );
  const toAccount = prompt(
    "Enter the destination account (account1 or account2):"
  );
  const amount = parseInt(prompt("Enter the amount to transfer:"));

  if (
    fromAccount in customerData.accounts &&
    toAccount in customerData.accounts &&
    amount > 0 &&
    amount <= customerData.accounts[fromAccount].balance
  ) {
    customerData.accounts[fromAccount].balance -= amount;
    customerData.accounts[toAccount].balance += amount;
    console.log(
      `Successful transfer of $${amount} from ${fromAccount} to ${toAccount}.`
    );
  } else {
    console.log("Invalid transfer details or insufficient funds.");
  }
}
// Función para mostrar el menú principal
function showMenu() {
  if (!loggedIn) {
    console.log("Please log in first.");
    return;
  }

  while (true) {
    console.log("Select an option:");
    console.log("1. Withdrawal");
    console.log("2. Deposit");
    console.log("3. Transfer");
    console.log("4. Check balance");
    console.log("5. Logout");

    const choice = prompt(
      "What do you want to do today?\n1-Withdrawal\n2-Deposit\n3-Transfer\n4-Check balance\n5-Logout"
    );

    switch (choice) {
      case "1":
        withdraw();
        break;
      case "2":
        deposit();
        break;
      case "3":
        transfer();
        break;
      case "4":
        checkBalance();
        break;
      case "5":
        logout();
        return;
      default:
        console.log("Invalid option.");
    }

    const continueTransaction = confirm("Do you want to perform another transaction?");
    if (!continueTransaction) {
      logout();
      return;
    }
  }
}
// Iniciar sesión y mostrar el menú principal
login();
showMenu();
