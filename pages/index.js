import Image from 'next/image'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'

import styles from '../styles/Home.module.css'


const Home = () => {
  return (
    <div className={styles.wrapper}>
      <center>
        <Image src="/images/michal_swiderski.svg" alt="Michał Świderski" width={200} height={200} />
        <p>Strona w budowie...</p>
      </center>
    </div>
  )
};


export default Home;