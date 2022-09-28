import styles from "/styles/MoreInfo.module.css"

const MoreInfo = ({ text }) => {

  return (
    <div className={styles.moreInfo}>
      <p>{text}</p>
    </div>
  )
};

export default MoreInfo;