export interface IUser {
  id: number,
  email: string,
  username: string,
  password: string,
  birthdate: string
}

export interface ICredential {
  username: string,
  password: string
}