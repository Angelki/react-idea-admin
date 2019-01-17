import * as React from "react";
import * as styles from "./index.module.css";

export default class GlobalHeader extends React.Component<any, any> {
  public render(): JSX.Element {
    return <div className={styles.HeaderWrapper}>header</div>;
  }
}