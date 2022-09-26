import styles from "/styles/Form.module.css"
import Button from "../Button/Button";


const Form = ({onButton, children }) => {


  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        {children}
        <Button version="color" href="#">{onButton}</Button>
        <Button version="light" href="#">{onButton}</Button>
      </form>
    </div>
  )
};

export default Form;