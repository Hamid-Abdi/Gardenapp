import LoginForm1 from "../components/login-form1";
import LoginForm from "../components/login-form";
import styles from "./index.module.css";
const SignUpPageWeb = () => {
  return (
    <div className={styles.signUpPageWeb}>
      <img className={styles.leftBoxIcon} alt="" src="/leftbox@2x.png" />
      <div className={styles.rightBox}>
        <LoginForm1 />
        <LoginForm />
        <div className={styles.logoBox}>
          <div className={styles.logoText}>
            <div className={styles.plantapp}>plantapp</div>
            <img
              className={styles.logoTextChild}
              alt=""
              src="/group-6925.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageWeb;
