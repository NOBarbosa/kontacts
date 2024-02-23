import s from "./register.module.scss";
export function Register() {
  return (
    <div className={s.register}>
      <div className={s.container}>
        <h2>Cadastre-se</h2>
        <form>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Senha" />
          <button className={s.btnGreen}>Cadastrar</button>
          <button className={s.btnRed}>Cancelar</button>
        </form>
      </div>
    </div>
  );
}
