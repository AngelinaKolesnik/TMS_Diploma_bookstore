import React from "react";

interface IAuthBtn {
  function: () => Promise<void>;
  title: string;
}
export const AuthBtn = (props: IAuthBtn) => {
  return <button onClick={props.function}>{props.title}</button>;
};
