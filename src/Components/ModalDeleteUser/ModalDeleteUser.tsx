import { X } from "phosphor-react";
import s from "./modalDeleteUser.module.scss";

// interface IModalUser {
//   title: string;
//   btnConfirmText: string;
//   btnCancelText: string;
// }

export function ModalDeleteUser() {
  return (
    <div className={s.modal}>
      <div className={s.background}>
        <div className={s.content}>
          <div role="button" className={s.close}>
            <X size={32} />
          </div>
          <h3>Confirma a exclusão?</h3>
          <p>Deseja excluir o contato, Daniel Lopes?</p>
          <div className={s.buttons}>
            <button className={s.btnGreen}>EXCLUIR</button>
            <button className={s.btnRed}>CANCELAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}
