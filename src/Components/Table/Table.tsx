import { Pencil, Trash } from "phosphor-react";
import s from "./table.module.scss";
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
        <tr>
          <td>Natalia</td>
          <td>nati@email</td>
          <td>71999999999</td>
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
        <tr>
          <td>Natalia</td>
          <td>nati@email</td>
          <td>71999999999</td>
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
      </tbody>
    </table>
  );
}
