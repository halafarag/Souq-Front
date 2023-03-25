export interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  emailAdress?: string;
  moblieNum?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  dateOfBirth?: {
    day: Date;
    month: Date;
    year: Date;
  };
}
