import styles from "/styles/Input.module.css"


const Input = ({ type, name, label, ...props }) => {

  return (
    <div className={styles.wrapper}>
      {type === "input" ?
        <div className={styles.allInput}>
          <input
            className={styles.input}
            name={name}
            id={name}
            type="text"
            {...props}
          />
          <label for={name}>{label}</label>
        </div>
 :
      type === "textarea" ?
        <div className={styles.allTextarea}>
          <textarea
            className={styles.textarea}
            name={name}
            id={name}
            {...props}
          />
          <label for={name}>{label}</label>
        </div>
       :
      type === "checkbox" ?
      <div className={styles.allCheckbox}>
        <input
          className={styles.checkbox}
          name={name}
          id={name}
          type="checkbox"
          {...props}
        />
        <label for={name}>{label}</label>
      </div>
      :
      "Niepoprawny typ!"}
    </div>
  )
};

export default Input;