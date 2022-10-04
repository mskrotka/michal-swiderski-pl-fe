import styles from '../styles/Home.module.css'

import React, { useState, useRef, useEffect } from "react";
import Image from 'next/image'
import Clients from '../components/Clients/Clients';
import Container from '../components/Container/Container'
import Form from '../components/Form/Form';
import Input from '../components/Form/Input';
import MoreInfo from '../components/Form/MoreInfo';
import Header from '../components/Header/Header'

import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { DiGoogleDrive } from 'react-icons/di';
import { SiGmail } from 'react-icons/si';

const Home = () => {
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      updateMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  const [myElementIsVisible, updateMyElementIsVisible] = useState();


  const actualYear = new Date().getFullYear()
  return (
    <>
    <Header visible={myElementIsVisible}/>
    <main>
      <Container>
        <div className={`col-sm-6 align-self-center ${styles.textLeft}`}>
          <div className={styles.emptySpace}></div>
            <div>
              <p><b>Cześć</b>,</p>
              <p>mam na imię Michał, zajmuje się <b>zwiększaniem efektywności marketingu i sprzedaży </b>poprzez modernizację procesów w firmach.</p>
              <p className="smallText">Łącze i agreguję ze sobą dane, aby zwiększyć wydajność działań marketingowych oraz sprzedażowych.</p>
            </div>
        </div>
        <div className="col-sm-6">
          <Image src="/images/ja 2.png" alt="Michał Świderski" width={627} height={707} />
        </div>
    </Container>

    <Container>
      <div className="col-sm-6 align-self-center">
        <Image src="/images/slidebg.png" alt="Michał Świderski" width={688} height={450} />
      </div>

      <div className={`col-sm-6 align-self-center ${styles.textLeft}`}>
          <div className={styles.text1}>
            <h3><strong>Moim celem jest automatyzacja procesów</strong></h3>
            <p className="smallText">W Twojej fimie występują procesy, które są powtarzalne i narażone na czynniki ludzkie, niezależnie czy prowadzisz JDG czy MŚP. </p>
            <p className="smallText">Automatyzacja procesów pozwala zaoszczędzić czas oraz zminimalizować koszty z nimi związane.</p>
            </div>
        </div>
    </Container>

    <Container>
      <div className={`col-sm-6 align-self-center ${styles.textLeft}`}>
        <div className={styles.emptySpace}></div>
          <div>
            <h3><strong>Buduję konektory danych</strong></h3>
            <p className="smallText">Automatyzacja procesów odbywa się poprzez łączenie danych w jednym miejscu i przesyłanie ich dalej. </p>
            <p className="smallText">Konektor jest odpowiedzialny za przepływ danych w Twojej firmie, jednocześnie wykonując kopie zapasowe.</p>
          </div>
      </div>
      <div className="col-sm-6 align-self-center">
        <Image src="/images/professional-web-design.png" alt="Michał Świderski" width={688} height={450} />
      </div>
    </Container>

    <Container>
      <div className="col-sm-6 align-self-center">
        <Image src="/images/123.webp" alt="Michał Świderski" width={688} height={555} />
      </div>

      <div className={`col-sm-6 align-self-center ${styles.textLeft}`}>
          <div>
            <h3><strong>Automatyzuję marketing i sprzedaż</strong></h3>
            <p className="smallText">Marketing i sprzedaż rządzą się swoimi prawami, które wymagają natychmiastowej reakcji inaczej możemy stracić klienta.</p>
            <p className="smallText">Twoje kampanie, oprócz danych kontaktowych, mogą dać Ci znacznie więcej informacji. Dowiedz się, która kampania jest najskuteczniejsza, jakich słów kluczowych użyli użytkownicy zostawiający dane do siebie czy inne pogłębione informacje o potencjalnym kliencie.</p>
            </div>
        </div>
    </Container>

    <Container>
      <h2 className={styles.title}>Przykładowe <span className={styles.textRed}>flow</span></h2>

      <div className={`row ${styles.context}`}>
        <div className="col-sm-4">
          <h3>Branża</h3>
          <p>Firma zajmuje się sprzedażą i realizacją instalacji fotowoltaicznych oraz pomp ciepła na terenie białej Podlaskiej i Warszawy. Wcześniej nie korzystała z automatyzacji przy obsłudze klientów.</p>
        </div>

        <div className="col-sm-8">
          <h3>Proces</h3>
          <p>Prowdzone były działania reklamowe z zakresu pozyskiwania kontaktów do potencjalnych klientów poprzez kampanie stworzone w Google Ads. Osobom poszukująch usług tego typu, wyświetlała się reklama, która kierowała na landing page. Znajdował się tam formularz z imieniem, numerem telefonu i dodatkowymi informacjami od użytkownika.</p>
        </div>
      </div>

      <div className={`row ${styles.context}`}>
        <div className="col-sm-12">
          <h3>Szczegóły procesu</h3>
          <Image src="/images/lead.png" alt="Michał Świderski" width={1366} height={970} />
        </div>
      </div>

      <div className={`row ${styles.context}`}>
      <div className="col-sm-3">
          <h3>Konektor</h3>
          <p>Głównym zadaniem konektora w tym procesie było <span className={styles.textRed}>tworzenie niezależnej bazy danych</span>, aby można było w przyszłości przejść na system CRM z prawidziwego zdarzenia. Sprawował on kontrolę nad każdym etapem procesu od momentu otrzymania danych kontaktowych użytkownika (lead), aż do zakończenia kontaktu. <span className={styles.textRed}>Konektor został zbudowany w oparciu o API</span>, za pomocą którego komunikował się z pozostałymi systemami obecnymi w procesie.</p>
        </div>

        <div className="col-sm-9">
          <h3>Zintegrowane technologie w procesie</h3>

          <p className={styles.listDot}>
            <span className={`${styles.yellow} ${styles.dot}`}>⋅⋅</span>
            <span>konektor łączący wszystkie informacje i komunikujący ze sobą pozostałe obszary procesu, w swoich zasobach posiadał niezależną bazę danych</span>
          </p>

          <p className={styles.listDot}>
            <span className={`${styles.purple} ${styles.dot}`}>⋅⋅</span>
            <span>system zadaniowy, w którym handlowcy odznaczali postęp działań, marketing pozyskiwał informacje o źródle danego leada, a biznes obserwował postępy handlowe</span>
          </p>

          <p className={styles.listDot}>
            <span className={`${styles.blue} ${styles.dot}`}>⋅⋅</span>
            <span>miejsce, z którego były wysyłane SMS-y na polecenie konektora</span>
          </p>

          <p className={styles.listDot}>
            <span className={`${styles.turquoise} ${styles.dot}`}>⋅⋅</span>
            <span>technologia frontendowa opierająca się na rozwiązaniu stworzonym przez Facebooka, stabilna i bezporoblemowa w przekazywaniu informacji ze strony www do konektora</span>
          </p>

          <p className={styles.listDot}>
            <span className={`${styles.azure} ${styles.dot}`}>⋅⋅</span>
            <span>po odpowiedniej konfiguracji system reklamowy Google wysyłał do konektora słowo kluczowe, które wykorzystał użytkownik w wyszukiwarce, zanim do nas trafił</span>
          </p>

          <p className={styles.listDot}>
            <span className={`${styles.red} ${styles.dot}`}>⋅⋅</span>
            <span>płatna wersja Google, w której handlowiec udostępniał potencjalnym klientom wybrane terminy w swoim kalendarzu na prezentację oferty</span>
            </p>
        </div>

      </div>
      <div className={`row mb-5 ${styles.context}`}>
      <div className="col-sm-12">
          <h3>Konkluzja</h3>
          <p>Po udoskonaleniu procesu do powyższej wersji wszystkie informacje o leadach były poukładane i zorganizowane, co zwiększyło wydajność działu handlowego. <span className={styles.textRed}>Biznes miał bieżący wgląd</span> w działania prowadzone na leadach, a <span className={styles.textRed}>marketing mógł wyciągać trafne wnioski</span> na podstawie, których podejmował dalsze decyzje o działaniach związanych z optymalizacją kampanii Google Ads.</p>
        </div>
      </div>
    </Container>

    <Container>
      <div className="row">
        <div className={`col-sm-6 align-self-center`}>
          <div>
            <h3><strong>Jak wygląda współpraca?</strong></h3>
            <p className={`${styles.listDot}`}>
              <span className={`${styles.azure} ${styles.dot}`}>⋅⋅</span>
              <span>ustalenie oczekiwanego efektu jest niezwykle ważne, ponieważ od celu zależy podejście oraz dobór odpowiednich narzędzi do procesu</span>
            </p>

            <p className={`${styles.listDot}`}>
              <span className={`${styles.seaweed} ${styles.dot}`}>⋅⋅</span>
              <span>dokładne określenie procesu pokazuje jak on wygląda i z czego się składa na obecną chwilę, na jego podstawie przygotowuję nowy proces</span>
            </p>

            <p className={`${styles.listDot}`}>
              <span className={`${styles.yellow} ${styles.dot}`}>⋅⋅</span>
              <span>rozbudowuję obecny proces o nowe elementy, w tym kroku także dokładnie analizuję obecne elementy, aby móc je dopasować do nowego procesu</span>
            </p>

            <p className={`${styles.listDot}`}>
              <span className={`${styles.blue} ${styles.dot}`}>⋅⋅</span>
              <span>wdrożenie nowej wersji procesu jest najbardziej czasochłonne w całym procesie, w skład tego zazwyczaj wchodzą także szkolenia z nowych narzędzi</span>
            </p>

            <p className={`${styles.listDot}`}>
              <span className={`${styles.purple} ${styles.dot}`}>⋅⋅</span>
              <span>dla każdego nowo wdrożonego procesu trzeba dać czas obserwacji, podczas którego dokładnie analizuję wykonywane w nim kroki, jest to niezwykle ważne, aby można było je później optymalizować</span>
            </p>

            <p className={`${styles.listDot}`}>
              <span className={`${styles.red} ${styles.dot}`}>⋅⋅</span>
              <span>na podstawie wniosków z poprzedniego punktu wdrażane są poprawki i udoskonalenia, rzeczywistość jest najlepszym weryfikatorem, bo nawet najlepsze procesy na papierze mogą nie sprostać rzeczywistości</span>
            </p>

            <p className={`${styles.listDot}`}>
              <span className={`${styles.black} ${styles.dot}`}>⋅⋅</span>
              <span>zakończenie procesu następuje w chwili realizacji ustalonego celu na samym początku, w tym kroku przekazuję dokumentację opisującą dokładnie proces</span>
            </p>

          </div>
        </div>
        <div className="col-sm-6 align-self-center">
        <Image src="/images/how_do.png" width={820} height={850} alt="Proces współpracy" className={styles.image}/>
        </div>
      </div>
    </Container>
    
    <div className="container" id="zamow_rozmowe" ref={myRef}>
      <div className={`row py-5 px-4 ${styles.contactForm}`}>
        <div className="col-sm-6 align-self-center px-5">
        <h2 className={`${styles.title} ${styles.textStrong}`}><span className={styles.textWhite}>Zamów </span><br></br>rozmowę</h2>
        <div className={styles.boxText}>
          <p className={styles.textWhite}>Zostaw kontakt i dowiedz się, jak mogę poprawić procesy w Twojej firmie.</p>
        </div>
        <h3 className={styles.textWhite}><strong>Podczas rozmowy</strong></h3>
        <ul className={`${styles.textWhite} ${styles.checkedList}`}>
          <li>poznamy się 😊</li>
          <li>porozmawiamy o Twoich procesach marketingowych i sprzedażowych</li>
          <li>o innych procesach też możemy porozmawiać</li>
          <li>ustalimy czego potrzebujesz</li>
          <li>opowiem Ci w czym mogę Ci pomóc</li>
        </ul>

        </div>
        <div className="col-sm-6 align-self-center">
          <Form onButton="Zamów rozmowę">
            <Input type="input" name="name" label="Twoje imię" required />
            <Input type="input" name="phone" label="Twój numer telefonu" labelSmall="nikomu dalej nie przekażę" required />
            <MoreInfo text="Podaj mi więcej informacji, dzięki nim będę bardziej przygotowany do rozmowy." />
            <Input type="textarea" name="info" label="Dodatkowe informacje" labelSmall="podaj swój adres strony www, opisz w skrócie czym się zajmujesz, co chciałbyś mi przekazać przed naszą rozmową telefoniczną?" />
            <Input type="checkbox" name="rodo" label="Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w powyższym formularzu w celu kontaktu zwrotnego przez firmę Michał Świderski NIP: 952-203-59-01 zarejestrowaną w Warszawie przy ul. Cukrowniczej 8, 04-214." required />
          </Form>

        </div>

      </div>
    </div>

    <Container>
      <div className={`col-sm-6 align-self-center ${styles.textLeft}`}>
        <div className={styles.emptySpace}></div>
          <div>
            <h3><strong>Pracuję z zespołem</strong></h3>
            <p className="smallText">Współpracuję z programistami, specjlistami ds. marketingu, specjalistami od social media oraz doświadczonymi handlowcami.</p>
            <p className="smallText">Dzięki zespołowi jestem w stanie prowadzić kilka projektów na raz oraz udoskonalać swoje techniki związane z budowaniem i automatyzacją porocesów.</p>
          </div>
      </div>
      <div className="col-sm-6 align-self-center">
        <Image src="/images/zespol.svg" alt="Michał Świderski" width={688} height={688} />
      </div>
    </Container>

    <div className="container mb-5">
      <div className={`col-sm-12 align-self-center`}>
        <div>
          <h3><strong>Współpracowałem z</strong></h3>
          <Clients />
        </div>
      </div>
    </div>

    </main>


      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className={`col-sm-6 ${styles.copy}`}>
              <p>Copyright © 2013 - {actualYear} Michał Świderski</p>

            </div>
            <div className={`col-sm-6 ${styles.icons}`}>
              <a href="https://www.facebook.com/michal.michal.happy/" target="blank"><FaFacebookSquare /></a>
              <a href="https://www.linkedin.com/in/michal-swiderski/" target="blank"><FaLinkedin /></a>
              <a href="http://dysk.michal-swiderski.pl/" target="blank"><DiGoogleDrive /></a>
              <a href="http://poczta.michal-swiderski.pl/" target="blank"><SiGmail /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
};


export default Home;