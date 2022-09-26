import styles from "/styles/Button.module.css"

import Link from 'next/link'

const Button = ({ version, href, children }) => {
  const ver = version === "color" ? styles.color : styles.light

  return (
    <div className={styles.wrapper}>
        <Link href={href}>
          <button className={ver}>{children}</button>
        </Link>
    </div>
  )
};

export default Button;