import AuthRepository from "./repository";

export class AuthService {
  private readonly _authRepository: AuthRepository
  constructor() {
    this._authRepository = new AuthRepository()
  }
  async registerService(username: string, password: string) {
    const existingUser = await this._authRepository.findByUserName(username)
    if (existingUser) {
      throw new Error('El usuario ya existe')
    }

    const newUser = await this._authRepository.createUser({ username, password })
    return newUser
  }
}