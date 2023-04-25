export interface User {
  id?: string;
  firstName: string | null;
  lastName: string | null;
  emailAdress: string | null;
  moblieNum: string | null;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  dateOfBirth?: {
    day: Date;
    month: Date;
    year: Date;
  };
}
