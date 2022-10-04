import styles from "/styles/Container.module.css"

const Container = ({ children }) => {
  return (
      <div className={`container my-5 ${styles.container}`}>
        <div className={`row ${styles.row}`}>
          {children}
        </div>
      </div>
  )
};

export default Container;