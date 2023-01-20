export interface User {
  id: string;
  name: string;
  username: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  isConfirmedEmail?: boolean;
  roles: string[],
  avatar?: string;
}
