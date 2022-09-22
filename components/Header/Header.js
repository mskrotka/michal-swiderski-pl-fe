import Image from "next/image";
import Head from 'next/head'

import styles from "../../styles/Header.module.css"


const Header = () => {
  return (
    <>
      <Head>
        <title>Połączę dane w Twojej firmie</title>
        <meta name="description" content="Zajmuje się budowaniem konektorów danych dla firm potrzebujących scalać ze sobą dane." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.wrapper}>
      <Image src="/images/logo_michal_swiderski.png" alt="Michał Świderski" width={150} height={150}/>
    </div>
    </>
  )
}

export default Header;