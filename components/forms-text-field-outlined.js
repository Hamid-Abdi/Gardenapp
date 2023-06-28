import { useMemo } from "react";
import styles from "./forms-text-field-outlined.module.css";
const FormsTextFieldOutlined = ({
  value,
  caption,
  propTop,
  propBottom,
  propDisplay,
}) => {
  const formsTextFieldOutlinedStyle = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const valueStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div
      className={styles.formsTextFieldOutlined}
      style={formsTextFieldOutlinedStyle}
    >
      <div className={styles.container} />
      <div className={styles.value} style={valueStyle}>
        {value}
      </div>
      <div className={styles.label}>
        <div className={styles.caption}>{caption}</div>
      </div>
    </div>
  );
};

export default FormsTextFieldOutlined;
