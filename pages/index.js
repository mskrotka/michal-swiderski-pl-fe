import styles from '../styles/Home.module.css'

import React, { useState, useRef, useEffect } from "react";
import Image from 'next/image'
import Clients from '../components/Clients/Clients';
import Container from '../components/Container/Container'
import Form from '../components/Form/Form';
import Input from '../components/Form/Input';
import MoreInfo from '../components/Form/MoreInfo';
import Header from '../components/Header/Header'
import Button from "../components/Button/Button";

import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { DiGoogleDrive } from 'react-icons/di';
import { SiGmail } from 'react-icons/si';
import { ImQuotesLeft } from 'react-icons/im'


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
  const [email, setVisibleEmail] = useState("hidden")
  const [phone, setVisiblePhone] = useState("hidden")
  const setEmail = () => setVisibleEmail("visible")
  const setPhone = () => setVisiblePhone("visible")

  return (
    <>
    <Header visible={myElementIsVisible}/>
    <main>
      <Container>
        <div className={`col-sm-7 align-self-center ${styles.textLeft}`}>
          <div className={styles.emptySpace}></div>
            <div>
              <p><b>Cześć</b>,</p>
              <p>mam na imię Michał, zajmuje się <b>zwiększaniem efektywności marketingu i sprzedaży </b>poprzez modernizację procesów.</p>
              <p className="smallText">Łączę i agreguję ze sobą dane, aby zwiększyć wydajność działań marketingowych oraz sprzedażowych. Kompleksowo realizuję marketing.</p>
            </div>
        </div>
        <div className="col-sm-5">
          <Image loading="eager" src="https://s3.eu-west-1.amazonaws.com/michal-swiderski.pl/michal_swiderski_ja.png" alt="Michał Świderski" width={354} height={700} />
        </div>
    </Container>

    <Container>
      <div className="col-sm-6 align-self-center">
        <div className={styles.hideMobile}>
          <Image loading="eager" src="https://s3.eu-west-1.amazonaws.com/michal-swiderski.pl/automatyzacja_procesow.png" alt="Automatyzacja procesów" width={688} height={450} />
        </div>
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
      <div className={styles.hideMobile}>
        <Image loading="eager" src="https://s3.eu-west-1.amazonaws.com/michal-swiderski.pl/konektory_danych.png" alt="Konektory danych" width={700} height={400} />
        </div>
      </div>
    </Container>

    <Container>
      <div className="col-sm-6 align-self-center">
        <Image loading="eager" src="https://s3.eu-west-1.amazonaws.com/michal-swiderski.pl/automatyzacja_mark_sprz.svg" alt="Automatyzacja marketingu i sprzedaży" width={688} height={555} />
      </div>

      <div className={`col-sm-6 align-self-center ${styles.textLeft}`}>
          <div>
            <h3><strong>Automatyzuję marketing i sprzedaż</strong></h3>
            <p className="smallText">Marketing i sprzedaż rządzą się swoimi prawami, które wymagają natychmiastowej reakcji inaczej możemy stracić klienta.</p>
            <p className="smallText">Twoje kampanie, oprócz danych kontaktowych, mogą dać Ci znacznie więcej informacji. Dowiedz się, która kampania jest najskuteczniejsza, jakich słów kluczowych użyli użytkownicy zostawiający dane do siebie czy inne pogłębione informacje o potencjalnym kliencie.</p>
            </div>
        </div>
    </Container>

    <div className="container" id="zamow_rozmowe" ref={myRef}>
      <div className={`row py-5 px-4 ${styles.contactForm} ${styles.minHeightValue}`}>
        <div className={`col-sm-6 align-self-center ${styles.spaceX}`}>
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
            <Input type="checkbox" name="rodo" label="Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w powyższym formularzu w celu kontaktu zwrotnego przez firmę Michał Świderski NIP: 9522035901 zarejestrowaną w Warszawie przy ul. Cukrowniczej 8, 04-214." required />
          </Form>

        </div>

      </div>
    </div>

    <Container>
      <h2 className={styles.title}>Przykładowe <span className={styles.textRed}>flow</span></h2>

      <div className={`row ${styles.context}`}>
        <div className="col-sm-4">
          <h3><strong>Branża</strong></h3>
          <p className="smallText">Firma zajmuje się sprzedażą i realizacją instalacji fotowoltaicznych oraz pomp ciepła na terenie białej Podlaskiej i Warszawy. Wcześniej nie korzystała z automatyzacji przy obsłudze klientów.</p>
        </div>

        <div className="col-sm-8">
          <h3><strong>Proces</strong></h3>
          <p className="smallText">Prowdzone były działania reklamowe z zakresu pozyskiwania kontaktów do potencjalnych klientów poprzez kampanie stworzone w Google Ads. Osobom poszukująch usług tego typu, wyświetlała się reklama, która kierowała na landing page. Znajdował się tam formularz z imieniem, numerem telefonu i dodatkowymi informacjami od użytkownika.</p>
        </div>
      </div>

      <div className={`row ${styles.context}`}>
        <div className="col-sm-12">
          <h3><strong>Szczegóły procesu</strong></h3>
          <Image src="https://s3.eu-west-1.amazonaws.com/michal-swiderski.pl/proces.png" loading="eager" alt="Wdrożony proces" width={1366} height={970} />
        </div>
      </div>

      <div className={`row ${styles.context}`}>
      <div className="col-sm-3">
          <h3><strong>Konektor</strong></h3>
          <p className="smallText">Głównym zadaniem konektora w tym procesie było <span className={styles.textRed}>tworzenie niezależnej bazy danych</span>, aby można było w przyszłości przejść na system CRM z prawidziwego zdarzenia. Sprawował on kontrolę nad każdym etapem procesu od momentu otrzymania danych kontaktowych użytkownika (lead), aż do zakończenia kontaktu. <span className={styles.textRed}>Konektor został zbudowany w oparciu o API</span>, za pomocą którego komunikował się z pozostałymi systemami obecnymi w procesie.</p>
        </div>

        <div className="col-sm-9">
          <h3><strong>Zintegrowane technologie w procesie</strong></h3>

          <div className={styles.listDot}>
            <div className={`${styles.yellow} ${styles.dot}`}></div>
            <div className={styles.dotText}><p className="smallText">Konektor łączący wszystkie informacje i komunikujący ze sobą pozostałe obszary procesu, w swoich zasobach posiadał niezależną bazę danych.</p></div>
          </div>

          <div className={styles.listDot}>
            <div className={`${styles.purple} ${styles.dot}`}></div>
            <div className={styles.dotText}><p className="smallText">System zadaniowy, w którym handlowcy odznaczali postęp działań, marketing pozyskiwał informacje o źródle danego leada, a biznes obserwował postępy handlowe.</p></div>
          </div>

          <div className={styles.listDot}>
            <div className={`${styles.blue} ${styles.dot}`}></div>
            <div className={styles.dotText}><p className="smallText">Miejsce, z którego były wysyłane SMS-y na polecenie konektora.</p></div>
          </div>

          <div className={styles.listDot}>
            <div className={`${styles.turquoise} ${styles.dot}`}></div>
            <div className={styles.dotText}><p className="smallText">Technologia frontendowa opierająca się na rozwiązaniu stworzonym przez Facebooka, stabilna i bezporoblemowa w przekazywaniu informacji ze strony www do konektora.</p></div>
          </div>

          <div className={styles.listDot}>
            <div className={`${styles.azure} ${styles.dot}`}></div>
            <div className={styles.dotText}><p className="smallText">Po odpowiedniej konfiguracji, system reklamowy Google wysyłał do konektora słowo kluczowe, które wykorzystał użytkownik.</p></div>
          </div>

          <div className={styles.listDot}>
            <div className={`${styles.red} ${styles.dot}`}></div>
            <div className={styles.dotText}><p className="smallText">Płatna wersja Google, w której handlowiec udostępniał potencjalnym klientom wybrane terminy w swoim kalendarzu na prezentację oferty.</p></div>
            </div>
        </div>

      </div>
      <div className={`row mb-5 ${styles.context}`}>
      <div className="col-sm-12">
          <h3><strong>Konkluzja</strong></h3>
          <p className="smallText">Po udoskonaleniu procesu do powyższej wersji wszystkie informacje o leadach były poukładane i zorganizowane, co zwiększyło wydajność działu handlowego. <span className={styles.textRed}>Biznes miał bieżący wgląd</span> w działania prowadzone na leadach, a <span className={styles.textRed}>marketing mógł wyciągać trafne wnioski</span> na podstawie, których podejmował dalsze decyzje o działaniach związanych z optymalizacją kampanii Google Ads.</p>
        </div>
      </div>
    </Container>

    <Container>
      <div className="row">
        <div className={`col-sm-6 align-self-center`}>
          <div>
            <h3><strong>Jak wygląda współpraca?</strong></h3>
            <div className={`${styles.listDot}`}>
              <div className={`${styles.azure} ${styles.dot}`}></div>
              <div className={styles.dotText}><p className="smallText">Ustalenie oczekiwanego efektu jest niezwykle ważne, ponieważ od celu zależy podejście oraz dobór odpowiednich narzędzi do procesu.</p></div>
            </div>

            <div className={`${styles.listDot}`}>
              <div className={`${styles.seaweed} ${styles.dot}`}></div>
              <div className={styles.dotText}><p className="smallText">Dokładne określenie procesu pokazuje jak on wygląda i z czego się składa na obecną chwilę, na jego podstawie przygotowuję nowy proces.</p></div>
            </div>

            <div className={`${styles.listDot}`}>
              <div className={`${styles.yellow} ${styles.dot}`}></div>
              <div className={styles.dotText}><p className="smallText">Rozbudowuję obecny proces o nowe elementy, w tym kroku także dokładnie analizuję obecne elementy, aby móc je dopasować do nowego procesu.</p></div>
            </div>

            <div className={`${styles.listDot}`}>
              <div className={`${styles.blue} ${styles.dot}`}></div>
              <div className={styles.dotText}><p className="smallText">Wdrożenie nowej wersji procesu jest najbardziej czasochłonne w całym procesie, w skład tego zazwyczaj wchodzą także szkolenia z nowych narzędzi.</p></div>
            </div>

            <div className={`${styles.listDot}`}>
              <div className={`${styles.purple} ${styles.dot}`}></div>
              <div className={styles.dotText}><p className="smallText">Dla każdego nowo wdrożonego procesu trzeba dać czas obserwacji, podczas którego dokładnie analizuję wykonywane w nim kroki, jest to niezwykle ważne, aby można było je później optymalizować.</p></div>
            </div>

            <div className={`${styles.listDot}`}>
              <div className={`${styles.red} ${styles.dot}`}></div>
              <div className={styles.dotText}><p className="smallText">Na podstawie wniosków z poprzedniego punktu wdrażane są poprawki i udoskonalenia, rzeczywistość jest najlepszym weryfikatorem, bo nawet najlepsze procesy na papierze mogą nie sprostać rzeczywistości.</p></div>
            </div>

            <div className={`${styles.listDot}`}>
              <div className={`${styles.black} ${styles.dot}`}></div>
              <div className={styles.dotText}><p className="smallText">Zakończenie procesu następuje w chwili realizacji ustalonego celu na samym początku, w tym kroku przekazuję dokumentację opisującą dokładnie proces.</p></div>
            </div>

          </div>
        </div>
        <div className="col-sm-6 align-self-center align-right">
        <Image loading="eager" src="https://s3.eu-west-1.amazonaws.com/michal-swiderski.pl/wspolpraca.png" width={820} height={850} alt="Proces współpracy" className={styles.image}/>
        </div>
      </div>
    </Container>

    <Container>
      <div className={`row py-5 px-4 ${styles.contactForm} `}>
        <div className="col-sm-4 pt-4">
        <h3 className={`${styles.title} ${styles.textStrong}`}><span className={styles.textWhite}>Napisz</span> albo <span className={styles.textWhite}>zadzwoń</span></h3>
        </div>
        <div className="col-sm-5 pt-4">
        <div className={styles.forHidden}>
          {email === "visible" ?
            <div className={styles.mail}>
              <h3><a href="mailto:marketing@michal-swiderski.pl" target="blank">marketing@michal-swiderski.pl</a></h3>
            </div> :

            <div className={styles.hiddenData}>
              <h3>marketing@mi</h3>
              <Button version="light" type="noLink" onClick={setEmail}>Pokaż e-mail</Button>
            </div>
            }
            </div>
        </div>
          <div className="col-sm-3 pt-4">

          <div className={styles.forHidden}>
          {phone === "visible" ?
          <div className={styles.phone}>
            <h3><a href="tel:+48727929336" target="blank">727 929 336</a></h3>
          </div> :

          <div className={styles.hiddenData}>
            <h3>727 929</h3>
            <Button version="light" type="noLink" onClick={setPhone}>Pokaż telefon</Button>
          </div>
          }
          </div>


        </div>
      </div>
    </Container>

    <Container>
      <div className="col-sm-6 align-self-center">
        <Image loading="eager" src="https://s3.eu-west-1.amazonaws.com/michal-swiderski.pl/makreting_to_proces.png" alt="Marketing to proces" width={600} height={612} />
      </div>

      <div className={`col-sm-6 align-self-center ${styles.textLeft}`}>
          <div>
            <h3><strong>Marketing to proces</strong></h3>
            <p className="smallText">Marketing składa się z wielu narzędzi, które trzeba odpowiednio dobrać ze sobą i ułożyć. Ważnym jest aby spojrzeć na swój marketing w jak najszerszej perspektywie, ponieważ marketing to nie tylko promocje i ładnie wyglądające katalogi.</p>
            <div className={styles.quotes}>
              <p><ImQuotesLeft /></p>
              <p className="smallText">Marketing jest działalnością, zbiorem instytucji i procesów służących tworzeniu komunikowaniu i wymianie ofert, które mają wartość dla klientów, partnerów i ogółu społeczeństwa.</p>
              <p className="smallText"><strong>American Marketing Association</strong></p>
            </div>
          </div>
        </div>
    </Container>

    <Container>
      <div className={`col-sm-6 align-self-center ${styles.textLeft}`}>
        <div className={styles.emptySpace}></div>
          <div>
            <h3><strong>Pracuję z zespołem</strong></h3>
            <p className="smallText">Współpracuję z programistami, specjlistami ds. marketingu, specjalistami od social media oraz doświadczonymi handlowcami.</p>
            <p className="smallText">Dzięki zespołowi poza zaprojektowaniem i przygotowaniem procesu mogę zaproponować kompletną obsługę marketingową w której skład wchodzą: reklamy (PPC) i pozycjonowanie (SEO), projekty graficzne, druk materiałów, budowa identyfikacji wizualnej, projekty wideo i sesje fotograficzne czy produktowe, obsługa Social Media, budowanie stron www, copywriting oraz wiele innych mniej lub bardziej niestandardowych elementów marketingowych. </p>
          </div>
      </div>
      <div className="col-sm-6 align-self-center">
        <Image loading="eager" src="https://s3.eu-west-1.amazonaws.com/michal-swiderski.pl/zespol.svg" alt="Zespół" width={700} height={650} />
      </div>
    </Container>

    <div className="container mb-5">
      <div className={`col-sm-12 align-self-center`}>
        <div>
          <h3 className={styles.centered}><strong>Współpracowałem z</strong></h3>
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