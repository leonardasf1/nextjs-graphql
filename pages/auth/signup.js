import Link from "next/link";
import { useRouter } from "next/router";
import {
  signupFormHandler,
  validAuth
} from './script';

let router;

const SignUp = () => {
  router = useRouter();
  return (
    <div className="block__content">{signupHTML}</div> 
  )
};

export default SignUp;

const signupHTML = (
<form className="form" id="signup-form" onSubmit={(e) => signupFormHandler(e, router)}>
  <div className="form__group">
    <h3>Регистрация</h3>
    <div>
      <div className="textfield--float-label">
        <span className="error"></span>
        <input type="text" required name="name" id="name" onBlur={(e) => validAuth(e)} />
      <label>Имя</label>
      </div>
      <div className="textfield--float-label">
        <span className="error"></span>
        <input type="email" required name="email" id="signEmail" onBlur={(e) => validAuth(e)} />
      <label>Электронный адрес</label>
      </div>
      <div className="textfield--float-label">
        <span className="error"></span>
        <input type="password" required name="password" id="pas" onBlur={(e) => validAuth(e)} />
      <label>Придумайте пароль</label>
      </div>
      <div className="textfield--float-label">
        <span className="error"></span>
        <input type="password" required name="password_2" id="pas2" onBlur={(e) => validAuth(e)} />
      <label>Повторите пароль</label>
      </div>
      <div className="textfield--float-label">
        <span className="error"></span>
        <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" name="tel" id="tel" onBlur={(e) => validAuth(e)} />
      <label>Номер мобильного телефона</label>
      </div>
    </div>
  </div>
  <div className="form__comment">
    <button type="submit" id="do_signup">Зарегистрироваться</button>
    <div>
    Уже есть аккаунт? 
      <Link key="login" href="/auth/login">
        <a id="a_login"> Войти</a>
      </Link>
    </div>
    Нажимая кнопку «Зарегистрироваться»:
    <div>
      <input name="agreement" type="checkbox" required defaultChecked />
      Я принимаю <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Условия использования</a> и даю своё согласие на обработку моей персональной информации на условиях, определенных <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Политикой конфиденциальности</a>.
    </div>
  </div>
</form>
);
