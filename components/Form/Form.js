import styles from "/styles/Form.module.css"
import Button from "../Button/Button";


const Form = ({ onButton, children }) => {


  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        {children}
        <div className={styles.footer}>
          <div className={styles.button}>
            <Button version="light" href="#">{onButton}</Button>
          </div>
          <div className={styles.req}>
            <span className={styles.required}>*</span> pole obowiązkowe
          </div>
        </div>
      </form>
    </div>
  )
};

export default Form;