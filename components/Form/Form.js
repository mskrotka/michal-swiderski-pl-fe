import styles from "/styles/Form.module.css"
import Button from "../Button/Button";


const Form = ({onButton, children }) => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        {children}
        <Button>{onButton}</Button>
      </form>
    </div>
  )
};

export default Form;