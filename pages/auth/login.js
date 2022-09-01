// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { deleteAuth } from '../../redux/appReducer'
import Link from "next/link";
import { useRouter } from "next/router";
import {
  loginFormHandler,
  // signupFormHandler,
  validAuth
} from './script';

// let dispatch = {}
// export default function Auth(props) {
//     // dispatch = useDispatch()
//     useEffect(() => {
//         document.querySelectorAll('.form__group input').forEach((i) => {
//             i.addEventListener('blur', validAuth)
//         })
//     })
// };
// let flagP = "login";

// export const getStaticProps = () => {
//   return { props: { flag: flagP } }
// };

let router;

const Auth = ({ flag }) => {
  router = useRouter();
  return (
    <div className="block__content">{loginHTML
      // (flag == "login") ? loginHTML :
      // (flag == "signup") ? signupHTML : null
    }</div> 
  )
};

export default Auth;

const loginHTML = (
  <form className="form" onSubmit={(e) => loginFormHandler(e, router)}>
    <div className="form__group">
      <h3>Вход</h3>
      <div>
        <div className="textfield--float-label">
          <span className="error"></span>
          <input type="email" id="email" onBlur={(e) => validAuth(e)} required />
        <label>Введите почту</label>
        </div>
        <div className="textfield--float-label">
          <span className="error"></span>
          <input type="password" id="password" onBlur={(e) => validAuth(e)} required />
          <label>Введите пароль</label>
        </div>
      </div>
    </div>
    <div className="form__comment">
      <button type="submit">Войти</button>
      <div>
        Ещё нет аккаунта? 
        <Link key="signup" href="/auth/signup">
          <a id="a_signup"> Зарегистрируйтесь</a>
        </Link>
      </div>
    </div>
  </form>
);

// const signupHTML = (
// <form className="form" id="signup-form" onSubmit={(e) => signupFormHandler(e)}>
//   <div className="form__group">
//     <h3>Регистрация</h3>
//     <div>
//       <div className="textfield--float-label">
//         <span className="error"></span>
//         <input type="text" required name="name" id="name" />
//       <label>Имя</label>
//       </div>
//       <div className="textfield--float-label">
//         <span className="error"></span>
//         <input type="email" required name="email" id="signEmail" />
//       <label>Электронный адрес</label>
//       </div>
//       <div className="textfield--float-label">
//         <span className="error"></span>
//         <input type="password" required name="password" id="pas" />
//       <label>Придумайте пароль</label>
//       </div>
//       <div className="textfield--float-label">
//         <span className="error"></span>
//         <input type="password" required name="password_2" id="pas2" />
//       <label>Повторите пароль</label>
//       </div>
//       <div className="textfield--float-label">
//         <span className="error"></span>
//         <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" name="tel" id="tel" />
//       <label>Номер мобильного телефона</label>
//       </div>
//     </div>
//   </div>
//   <div className="form__comment">
//     <button type="submit" id="do_signup">Зарегистрироваться</button>
//     <div>Уже есть аккаунт? <a href="/auth/login" id="a_login">Войти</a></div>
//     Нажимая кнопку «Зарегистрироваться»:
//     <div>
//       <input name="agreement" type="checkbox" required defaultChecked />
//       Я принимаю <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Условия использования</a> и даю своё согласие на обработку моей персональной информации на условиях, определенных <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Политикой конфиденциальности</a>.
//     </div>
//   </div>
// </form>
// );
