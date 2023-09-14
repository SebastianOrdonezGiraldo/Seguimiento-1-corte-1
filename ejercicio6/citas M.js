const medicalAppointments = [];

function scheduleAppointment() {
  const patientName = prompt("Enter the patient's name:");
  const date = prompt("Enter the appointment date MM,DD,YYYY:");
  const time = prompt("Enter the appointment time:");
  const doctor = prompt("Enter the assigned doctor:");

  const appointment = {
    patientName,
    date,
    time,
    doctor,
  };
  medicalAppointments.push(appointment);
  console.log("Medical appointment scheduled successfully.");
}

function cancelAppointment() {
  if (medicalAppointments.length === 0) {
    console.log("There are no medical appointments to cancel.");
    return;
  }

  console.log("Scheduled Medical Appointments:");
  medicalAppointments.forEach((appointment, index) => {
    console.log(`Appointment ${index + 1}:`);
    console.log(`Patient's Name: ${appointment.patientName}`);
    console.log(`Date: ${appointment.date}`);
    console.log(`Time: ${appointment.time}`);
    console.log(`Assigned Doctor: ${appointment.doctor}`);
    console.log("-------------------------");
  });

  const appointmentNumber =
    parseInt(prompt("Enter the appointment number you want to cancel:")) - 1;

  if (appointmentNumber >= 0 && appointmentNumber < medicalAppointments.length) {
    const canceledAppointment = medicalAppointments.splice(appointmentNumber, 1);
    console.log(`Appointment canceled successfully.`);
  } else {
    console.log("Invalid appointment number. The appointment could not be canceled.");
  }
}

function viewMedicalAppointments() {
  if (medicalAppointments.length === 0) {
    console.log("There are no scheduled medical appointments.");
    return;
  }

  medicalAppointments.sort((appointment1, appointment2) => {
    const dateTime1 = new Date(`${appointment1.date} ${appointment1.time}`);
    const dateTime2 = new Date(`${appointment2.date} ${appointment2.time}`);
    return dateTime1 - dateTime2;
  });

  console.log("Scheduled Medical Appointments (sorted by date and time):");
  medicalAppointments.forEach((appointment, index) => {
    console.log(`Appointment ${index + 1}:`);
    console.log(`Patient's Name: ${appointment.patientName}`);
    console.log(`Date: ${appointment.date}`);
    console.log(`Time: ${appointment.time}`);
    console.log(`Assigned Doctor: ${appointment.doctor}`);
    console.log("-------------------------");
  });
}

let continueApp = true;
while (continueApp) {
  const action = prompt(
    "Do you want to schedule an appointment (1), cancel an appointment (2), view appointments (3), or exit (4)?"
  ).toUpperCase();
  switch (action) {
    case "1":
      scheduleAppointment();
      break;
    case "2":
      cancelAppointment();
      break;
    case "3":
      viewMedicalAppointments();
      break;
    case "4":
      continueApp = false;
      break;
    default:
      console.log("Invalid action. Please enter '1', '2', '3', or '4'.");
  }
}
    