import styles from "/styles/Clients.module.css"

import Image from 'next/image'
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

const dataClients = [
  {
    number: 1,
    name: "Solid Security",
    image: "/images/portfolio/solid_security.png",
  },
  {
    number: 2,
    name: "Toyota Bank",
    image: "/images/portfolio/toyota.png",
  },
  {
    number: 3,
    name: "Ziemia Inwestycje",
    image: "/images/portfolio/ziemia_inwestycje.png",
  },
  {
    number: 4,
    name: "GreenWin",
    image: "/images/portfolio/greenwin.svg",
  },
  {
    number: 5,
    name: "Deveprom",
    image: "/images/portfolio/deveprom.svg",
  },
  {
    number: 5,
    name: "Audyt Legis",
    image: "/images/portfolio/audyt_legis.svg",
  }
];

const listClients =
  dataClients.map((item, index) => (
    <div key={index} className="col-sm-2">
      <Image alt={item.name} title={item.name} src={item.image} width={150} height={150} className={styles.logo}/>
    </div>
  ))

const Clients = () => {

  return (
    <>
      <div className="row">
        {listClients}
      </div>
    </>





  )
};

export default Clients;