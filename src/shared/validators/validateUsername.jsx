export const validateUsername = (username) => {
    const regex = /^.{4,12}$/;
    return regex.test(username);
  };
  
  export const validateUsernameMessage =
    "El nombre de usuario debe tener entre 4 y 12 caracteres.";