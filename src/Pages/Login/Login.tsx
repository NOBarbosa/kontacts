import s from "./login.module.scss";
import { NavLink } from "react-router-dom";
export function Login() {
  return (
    <div className={s.login}>
      <div className={s.container}>
        <h1>Faça o login com sua conta</h1>
        <form>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Senha" />
          <button className={s.btnGreen}>login</button>
        </form>
      </div>
      <p>
        Não tem cadastro? <NavLink to={""}>Clique aqui!</NavLink>
      </p>
    </div>
  );
}
