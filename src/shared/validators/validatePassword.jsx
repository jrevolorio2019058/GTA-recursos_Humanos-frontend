export const validatePassword = (password) => {
    const regex = /^.{6,}$/;
    return regex.test(password);
  };
  
  export const validatePasswordMessage =
    "La contraseña debe tener al menos 6 caracteres";