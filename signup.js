class SignUpForm {
  // Constructor to initialize the form elements
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.name = document.getElementById("name");
    this.email = document.getElementById("email");
    this.role = document.getElementById("role");
    this.message = document.getElementById("message");

    // Bind form submit to class method
    this.form.addEventListener("submit", this.submit.bind(this));
  }

  // This Method is for handling form submission
  submit(event) {
    event.preventDefault(); // Prevent the page from refreshing

    const formData = this.collectFormData();

    if (this.validateFormData(formData)) {
      this.clearForm();
      this.showConfirmationMessage();
    } else {
      this.showValidationError();
    }
  }

  // This Method is for collecting data from form fields
  collectFormData() {
    return {
      name: this.name.value,      // Use lowercase 'name' here
      email: this.email.value,    // Use lowercase 'email' here
      role: this.role.value,      // Use lowercase 'role' here
      message: this.message.value // Use lowercase 'message' here
    };
  }

  // This Method is to validate form data
  validateFormData(formData) {
    return formData.name && formData.email && formData.role && formData.message;
  }

  // This Method is for clearing the form after submission
  clearForm() {
    this.form.reset();
  }

  // This Method shows the confirmation message
  showConfirmationMessage() {
    alert("Thank you for joining our team! We will get back to you soon.");
    window.location.href = "index.html"; // Going back to index.html after the alert
  }

  // This Method is to show validation error message
  showValidationError() {
    alert("Please fill in all fields.");
  }
}

// It initializes the SignUpForm class when the page is ready
document.addEventListener("DOMContentLoaded", () => {
  new SignUpForm("signUpForm");
});

