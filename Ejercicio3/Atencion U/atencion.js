// Initialize the statistics
const statistics = {
  totalUsersServed: 0,
  totalPhoneCalls: 0,
  totalConsultations: 0,
  totalStudents: 0,
  totalExecutives: 0,
};

// Function to record the service
function recordService() {
  const idNumber = prompt("Enter your ID number:");
  const serviceType = prompt(
    "Enter the service type (terminal/consultation):"
  ).toLowerCase();

  if (serviceType === "terminal") {
    statistics.totalPhoneCalls++;
  } else if (serviceType === "consultation") {
    statistics.totalConsultations++;
    const consultationType = prompt(
      "Enter the consultation type (student/executive):"
    ).toLowerCase();

    if (consultationType === "student") {
      statistics.totalStudents++;
    } else if (consultationType === "executive") {
      statistics.totalExecutives++;
    } else {
      alert("Invalid consultation type.");
    }
  } else {
    alert("Invalid service type.");
    return;
  }

  statistics.totalUsersServed++;
}

// Function to display the statistics
function displayStatistics() {
  console.log("Service Statistics:");
  console.log(`Total users served: ${statistics.totalUsersServed}`);
  console.log(`Phone calls: ${statistics.totalPhoneCalls}`);
  console.log(`Total consultations: ${statistics.totalConsultations}`);
  console.log(`Students served: ${statistics.totalStudents}`);
  console.log(`Executives served: ${statistics.totalExecutives}`);
}

// Main function to manage service
function manageService() {
  while (true) {
    const option = prompt(
      "Select an option:\n1. Record service\n2. Display statistics\n3. Exit"
    );

    switch (option) {
      case "1":
        recordService();
        break;
      case "2":
        displayStatistics();
        break;
      case "3":
        alert("Thank you for using the service system.");
        return;
      default:
        alert("Invalid option, please select again.");
    }
  }
}

// Start the service management
manageService();
