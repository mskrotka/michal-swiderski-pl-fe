import styles from "/styles/Button.module.css"


const Button = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>{children}</button>
    </div>
  )
};

export default Button;