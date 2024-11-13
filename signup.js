class SignUpForm {
    // Constructor to initialize the form elements
    constructor(formId) {
      this.form = document.getElementById(formId);
      this.nameField = document.getElementById("name");
      this.emailField = document.getElementById("email");
      this.roleField = document.getElementById("role");
      this.messageField = document.getElementById("message");
  
      // Bind form submit to class method
      this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }
  
    // Method to handle form submission
    handleSubmit(event) {
      event.preventDefault(); // Prevent the page from refreshing
      
      const formData = this.collectFormData();
  
      if (this.validateFormData(formData)) {
        this.storeData(formData);
        this.clearForm();
        this.showConfirmationMessage();
      } else {
        this.showValidationError();
      }
    }
  
    // Method to collect data from form fields
    collectFormData() {
      return {
        name: this.nameField.value,
        email: this.emailField.value,
        role: this.roleField.value,
        message: this.messageField.value
      };
    }
  
    // Method to validate form data
    validateFormData(formData) {
      return formData.name && formData.email && formData.role && formData.message;
    }
  
    // Method to store data in localStorage
    storeData(formData) {
      const existingData = this.getStoredData();
      existingData.push(formData);
      this.saveDataToStorage(existingData);
    }
  
    // Method to retrieve stored data from localStorage
    getStoredData() {
      return JSON.parse(localStorage.getItem("signUpData")) || [];
    }
  
    // Method to save data to localStorage
    saveDataToStorage(data) {
      localStorage.setItem("signUpData", JSON.stringify(data));
    }
  
    // Method to clear the form after submission
    clearForm() {
      this.form.reset();
    }
  
    // Method to show confirmation message
    showConfirmationMessage() {
        alert("Thank you for joining our team! We will get back to you soon.");
        window.location.href = "index.html"; // Redirect to index.html after the alert
      }
      
  
    // Method to show validation error message
    showValidationError() {
      alert("Please fill in all fields.");
    }
  }
  
  // Initialize the SignUpForm class when the page is ready
  document.addEventListener("DOMContentLoaded", () => {
    new SignUpForm("signUpForm");
  });
  