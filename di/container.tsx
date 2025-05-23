import { asClass, createContainer } from "awilix";
import { AuthService } from "../data/sources/remote/services/AuthServices";
import { AuthRepositoryImpl } from "../data/repository/AuthRepositoryImpl";
import { LoginUseCase } from "../domain/useCases/auth/LoginUseCase";
import { LoginViewModel } from "../presentation/components/screens/auth/login/LoginViewModel";
import { RegisterViewModel } from "../presentation/components/screens/auth/register/RegisterViewModel";
import { RegisterUseCase } from "../domain/useCases/auth/RegisterUseCase";

const container = createContainer();

container.register({
  // Servicios
  authService: asClass(AuthService).singleton(),

  // Repositorios
  authRepository: asClass(AuthRepositoryImpl).singleton(),

  // Casos de uso
  loginUseCase: asClass(LoginUseCase).singleton(),
  registerUseCase: asClass(RegisterUseCase).singleton(),

  // View models
  loginViewModel: asClass(LoginViewModel).singleton(),
  registerViewModel: asClass(RegisterViewModel).singleton(),
});

export { container };
