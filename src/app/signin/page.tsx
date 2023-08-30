import { SigninGoogle } from "@/widgets/signin";
import { SigninForm } from "@/widgets/signin/signin-form/SigninForm";

import styles from "../styles/pages/Signin.module.scss";

export default async function Signin() {

  return (
    <div className={styles.root}>
      <SigninGoogle />
      <div>or</div>
      <SigninForm />
    </div>
  );
};
