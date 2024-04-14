class ValidateUtils {
  static isEmail(email: string): boolean {
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return email.match(EMAIL_REGEX) ? true : false;
  }
}
