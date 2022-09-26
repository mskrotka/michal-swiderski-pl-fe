import styles from "/styles/Container.module.css"

const Container = ({ children }) => {
  return (
      <div className={`container ${styles.container}`}>
        <div class={`row ${styles.row}`}>
          {children}
        </div>
      </div>
  )
};

export default Container;