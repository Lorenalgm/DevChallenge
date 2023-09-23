export const AuthErrorHandler = (option: string) => {
  switch (option) {
    case "generic":
      return "Houve um erro ao cadastrar o usuario. Tente novamente mais tarde.";
    case "auth/weak-password":
      return "Senha digitada é muito fraca. Tente usar mais de 6 caracteres com números e caracteres especiais.";
    case "auth/email-already-in-use":
      return "O email fornecido ja está em uso.";
    case "auth/email-already-exists":
      return "O e-mail fornecido já está em uso por outro usuário.";
    case "auth/internal-error":
      return "Erro interno do servidor. Tente novamente mais tarde.";
    case "auth/invalid-email":
      return "Email inválido.";
    case "auth/user-not-found":
      return "Não há registro de usuário existente correspondente ao identificador fornecido.";
    case "auth/wrong-password":
      return "Senha digitada não esta correta";
    case "resource-exhausted":
      return "Servidores em manutenção. Se esse erro persistir, contate o administrador do sistema.";
    default:
      return "Houve um erro ao cadastrar o usuario. Tente novamente mais tarde.";
  }
};
