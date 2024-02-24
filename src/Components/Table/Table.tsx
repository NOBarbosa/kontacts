import { Pencil, Trash } from "phosphor-react";
import s from "./table.module.scss";
import { KONTACTS } from "../../data/data";
export function Table() {
  return (
    <table className={s.table}>
      <thead>
        <th>Nome</th>
        <th>Email</th>
        <th>Telefone</th>
        <th></th>
        <th></th>
      </thead>
      <tbody>
        {KONTACTS.map((kontact) => {
          return (
            <tr key={kontact.id}>
              <td>{kontact.nome}</td>
              <td>{kontact.email}</td>
              <td>{kontact.telefone}</td>
              <td>
                <div>
                  <Pencil role="button" />
                </div>
              </td>
              <td>
                <div>
                  <Trash role="button" />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
