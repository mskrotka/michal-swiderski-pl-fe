import styles from "/styles/Button.module.css"

import Link from 'next/link'


const Button = ({ version, type, href, children, ...props }) => {
  const ver = version === "color" ? styles.color : styles.light

  return (
    <>
    {type === "Form" ?
      <button type="submit" className={ver} {...props}>{children}</button>
     : type === "noLink" ?
     <button className={`${ver} ${styles.small}`} {...props}>{children}</button>
     :
    <div className={styles.wrapper}>
      <Link href={href}>
        <button className={ver} {...props}>{children}</button>
      </Link>
    </div>}
    </>
  )
};

export default Button;