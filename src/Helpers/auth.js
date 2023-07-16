export const deleteToken = () => {
    localStorage.removeItem('token');
  };
  
export const setTokens = token => {
    localStorage.setItem('token', token);
  };

  export const setRol = rol=>{
    localStorage.setItem('rol', rol)
  }

  export const deleteRol=()=>{
    localStorage.removeItem('rol')
  }