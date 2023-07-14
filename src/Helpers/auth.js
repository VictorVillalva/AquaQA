export const deleteToken = () => {
    localStorage.removeItem('token');
  };
  
export const setTokens = token => {
    localStorage.setItem('token', token);
  };

export const setEmail = email => {
    localStorage.setItem('email', email);
  };

  export const setRol = rol=>{
    localStorage.setItem('rol', rol)
  }

  export const deleteRol=()=>{
    localStorage.removeItem('rol')
  }