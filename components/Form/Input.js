import styles from "/styles/Input.module.css"


const Input = ({ type, name, label, labelSmall, ...props }) => {
  const nextLabel = labelSmall ? <span className={styles.labelSmall}> ({labelSmall})</span> : ""
  const req = props.required ? <span className={styles.required}>*</span> : ""

  return (
    <div className={styles.wrapper}>
      {type === "input" ?
        <label className={styles.allInput}>
          <span className={styles.placeholder}>{label}{req}</span>
          {nextLabel}
          <input
            className={styles.input}
            name={name}
            id={name}
            type="text"
            {...props}
          />

        </label>
 :
      type === "textarea" ?
        <label className={styles.allInput}>
          <span className={styles.placeholder}>{label}</span>{req}
          <textarea
            className={styles.textarea}
            placeholder={labelSmall}
            name={name}
            id={name}
            {...props}
          />
        </label>
       :
      type === "checkbox" ?
      <label className={`${styles.allInput} ${styles.allCheckbox}`}>
        <input
          className={styles.checkbox}
          name={name}
          id={name}
          type="checkbox"
          {...props}
        />
        <span className={styles.textCheckbox}>{label}</span>
      </label>
      :
      "Niepoprawny typ!"}
    </div>
  )
};

export default Input;