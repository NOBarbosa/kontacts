import { X } from "phosphor-react";
import s from "./modalUser.module.scss";

// interface IModalUser {
//   title: string;
//   btnConfirmText: string;
//   btnCancelText: string;
// }

export function ModalUser() {
  return (
    <div className={s.modal}>
      <div className={s.background}>
        <div className={s.content}>
          <div role="button" className={s.close}>
            <X size={32} />
          </div>
          <h3>Novo contato</h3>
          <form>
            <input placeholder="Nome" />
            <input placeholder="E-mail" />
            <input placeholder="Telefone" />

            <div>
              <button className={s.btnGreen}>Adicionar</button>
              <button className={s.btnRed}>Limpar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
