import { SignOut } from "phosphor-react";
import s from "./header.module.scss";
export function Header() {
  return (
    <header className={s.header}>
      <p>kontacts</p>
      <div role="button">
        <SignOut size={24} color="white" />
      </div>
    </header>
  );
}
