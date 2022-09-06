// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { deleteAuth } from '../../redux/appReducer'
import Link from "next/link";
import { useRouter } from "next/router";
import {
  loginFormHandler,
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
    <div className="block__content">{loginHTML}</div> 
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
