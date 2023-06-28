import { Button } from "@mui/material";
import FormsTextFieldOutlined from "./forms-text-field-outlined";
import styles from "./login-form.module.css";
const LoginForm = () => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.cardsbody}>
        <div className={styles.elevation} />
        <div className={styles.color} />
      </div>
      <FormsTextFieldOutlined
        value="First Name"
        caption="Name"
        propTop="25.23%"
        propBottom="64.8%"
      />
      <FormsTextFieldOutlined
        value="Email Address"
        caption="E-Mail Adress"
        propTop="38.97%"
        propBottom="51.06%"
        propDisplay="inline-block"
      />
      <div className={styles.value}>Name</div>
      <FormsTextFieldOutlined
        value="Password"
        caption="Password"
        propTop="52.72%"
        propBottom="37.31%"
        propDisplay="inline-block"
      />
      <div className={styles.check}>
        <div className={styles.iHaveRead}>I have read the</div>
        <div className={styles.terrmsConditions}>{`Terms & Conditions`}</div>
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

export default LoginForm;
