import 'bootstrap/dist/css/bootstrap.css'
import styles from "../../styles/Header.module.css"

import Link from 'next/link'
import Image from "next/image";
import Head from 'next/head'
import Button from "../../components/Button/Button"



const Header = ({visible}) => {

  return (
    <>
      <Head>
        <title>Zmodernizuję Twoje procesy marketingowe i sprzedażowe</title>
        <meta name="description" content="Zajmuje się budowaniem procesów marketingowych i sprzedażowych. W ramach tego buduję konektory danych, ktre automatyzują obecne procesy." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>


      <div className={styles.logoSection}>
        <Link href="/">
          <Image src="/images/michal_swiderski.svg" alt="Michał Świderski" width={120} height={120}/>
        </Link>
        </div>

      {visible ? null :
      <div className={styles.buttonSection}>
        <Button version="color" href="#zamow_rozmowe">Zamów audyt procesu</Button>
      </div>
      }

    </>
  )
};

export default Header;