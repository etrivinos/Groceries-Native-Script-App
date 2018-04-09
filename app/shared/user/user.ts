var validator = require("email-validator");

export class User {
  email: string;
  password: string;
  isValidEmail() {
    return true //validator.validate(this.email);
  }
} 