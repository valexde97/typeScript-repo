import React, { useState } from 'react';
import RegistrationForm from "./Homework13"
import LoginForm from "./Homework13Form2"

const FormHW = () => {
  const[isLogin, setIsLogin] = useState(true);
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  return(
    <div>
      <button onClick={toggleForm}>
        Переключиться на {isLogin ? 'Регистрацию' : 'Логин'}
      </button>

    {isLogin ? <LoginForm/> : <RegistrationForm/>}
    </div>
  );
};

export default FormHW;
