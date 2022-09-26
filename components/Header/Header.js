import 'bootstrap/dist/css/bootstrap.css'
import styles from "../../styles/Header.module.css"

import Image from "next/image";
import Head from 'next/head'
import Container from '../Container/Container';
import Button from "../../components/Button/Button"



const Header = () => {
  return (
    <>
      <Head>
        <title>Połączę dane w Twojej firmie</title>
        <meta name="description" content="Zajmuje się budowaniem konektorów danych dla firm potrzebujących scalać ze sobą dane." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.test}>
      <div className={styles.wrapper}>

        <div className={styles.logoSection}>
              <Image src="/images/michal_swiderski.svg" alt="Michał Świderski" width={100} height={100}/>
          </div>

        <div className={styles.buttonSection}>
            <Button version="color" href="#">Zamów audyt procesu</Button>
        </div>

      </div>
      </div>
    </>
  )
};

export default Header;