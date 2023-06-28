import { Button } from "@mui/material";
import FormsTextFieldOutlined from "./forms-text-field-outlined";
import styles from "./login-form1.module.css";
const LoginForm1 = () => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.cardsbody}>
        <div className={styles.elevation} />
        <div className={styles.color} />
      </div>
      <FormsTextFieldOutlined
        value="First Name"
        caption="Name"
        propTop="23.87%"
        propBottom="66.16%"
        propDisplay="none"
      />
      <FormsTextFieldOutlined
        value="Email Address"
        caption="E-Mail Adress"
        propTop="36.25%"
        propBottom="53.78%"
        propDisplay="inline-block"
      />
      <FormsTextFieldOutlined
        value="Password"
        caption="Password"
        propTop="48.64%"
        propBottom="41.39%"
        propDisplay="inline-block"
      />
      <div className={styles.check}>
        <div className={styles.iHaveRead}>I have read the</div>
        <div className={styles.terrmsConditions}>{`Terrms & Conditions`}</div>
        <img
          className={styles.formsCheckboxDefault}
          alt=""
          src="/forms--checkbox--default.svg"
        />
      </div>
      <Button
        className={styles.buttonText2large1containe}
        sx={{ width: 432 }}
        variant="contained"
        color="primary"
      >
        Sign up
      </Button>
      <div className={styles.flexGrow}>
        <div className={styles.haveAnAccount}>Have an account?</div>
        <div className={styles.signIn}>Sign In</div>
      </div>
      <div className={styles.title}>
        <div className={styles.signUpTo}>Sign up to PlantApp</div>
      </div>
    </div>
  );
};

export default LoginForm1;
