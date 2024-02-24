import s from "./home.module.scss";
import { Header } from "../../Components/Header/Header";
import { Table } from "../../Components/Table/Table";
// import { ModalDeleteUser } from "../../Components/ModalDeleteUser/ModalDeleteUser";
export function Home() {
  return (
    <div className={s.home}>
      <Header />

      <main className={s.main}>
        <button className={s.btnGreen}>Adicionar</button>
        <Table />
      </main>
      {/* <ModalUser /> */}
      {/* <ModalDeleteUser /> */}
    </div>
  );
}
