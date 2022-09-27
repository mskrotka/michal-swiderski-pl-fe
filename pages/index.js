import Image from 'next/image'
import Container from '../components/Container/Container'
import Form from '../components/Form/Form';
import Input from '../components/Form/Input';
import Header from '../components/Header/Header'

import styles from '../styles/Home.module.css'


const Home = () => {
  return (
    <>
    <Header />
    <main>
      <Container>
        <div className={`col-sm-6 align-self-center ${styles.textLeft}`}>
          <div className={styles.emptySpace}></div>
            <div>
              <p><b>Cześć</b>,</p>
              <p>mam na imię Michał i <b>zajmuje się</b><br></br><b>łączeniem i agregacją danych</b> w firmach.</p>
              <p className="smallText">Specjalizuje się w narzędziach<br></br>wspierających marketing i sprzedaż. </p>
            </div>
        </div>
        <div class="col-sm-6">
          <Image src="/images/ja 2.png" alt="Michał Świderski" width={627} height={707} />
        </div>
    </Container>

    <Container>
      <div class="col-sm-6 align-self-center">
        <Image src="/images/slidebg.png" alt="Michał Świderski" width={688} height={450} />
      </div>

      <div className={`col-sm-6 align-self-center ${styles.textLeft}`}>
          <div className={styles.text1}>
            <p><b>Moim celem jest automatyzacja procesów</b>.</p>
            <p className="smallText">W Twojej fimie występują procesy, które są powtarzalne i narażone na czynniki ludzkie, niezależnie czy prowadzisz JDG czy MŚP. </p>
            <p className="smallText">Automatyzacja procesów pozwala zaoszczędzić czas oraz zminimalizować koszty z nimi związane.</p>
            </div>
        </div>
    </Container>

    <Container>
      <div className={`col-sm-6 align-self-center ${styles.textLeft}`}>
        <div className={styles.emptySpace}></div>
          <div>
            <p><b>Buduję konektory danych</b></p>
            <p className="smallText">Automatyzacja procesów odbywa się poprzez łączenie danych w jednym miejscu i przesyłanie ich dalej. </p>
            <p className="smallText">Konektor jest odpowiedzialny za przepływ danych w Twojej firmie, jednocześnie wykonując kopie zapasowe.</p>
          </div>
      </div>
      <div class="col-sm-6 align-self-center">
        <Image src="/images/professional-web-design.png" alt="Michał Świderski" width={688} height={450} />
      </div>
    </Container>

    <Container>
      <div class="col-sm-6 align-self-center">
        <Image src="/images/123.webp" alt="Michał Świderski" width={688} height={555} />
      </div>

      <div className={`col-sm-6 align-self-center ${styles.textLeft}`}>
          <div className={styles.text1}>
            <p><b>Automatyzuję marketing i sprzedaż</b></p>
            <p className="smallText">Marketing i sprzedaż rządzą się swoimi prawami, które wymagają natychmiastowej reakcji inaczej możemy stracić klienta.</p>
            <p className="smallText">Twoje kampanie mogą przekazać Ci więcej informacji niż tylko dane kontaktowe. Dowiedz się, która kampania jest najskuteczniejsza, jakich słów kluczowych użyli użytkownicy zostawiający dane do siebie czy inne pogłębione informacje o potencjalnym kliencie.</p>
            </div>
        </div>
    </Container>

    <Container>
      <h2 className={styles.title}>Wdrożone <span className={styles.textRed}>flow</span></h2>

      <div className={`row ${styles.context}`}>
        <div className="col-sm-4">
          <h3>Branża</h3>
          <p>Firma zajmuje się sprzedażą i realizacją instalacji fotowoltaicznych oraz pomp ciepła na terenie białej Podlaskiej i Warszawy. Wczeżniej nie korzystała z automatyzacji przy obsłudze klientów.</p>
        </div>

        <div className="col-sm-8">
          <h3>Proces</h3>
          <p>Prowdzone były działania reklamowe z zakresu pozyskiwania kontaktów do potencjalnych klientów poprzez kampanie stworzone w Google Ads. Reklamy wyświetlały się osobom poszukującym usług tego typu, które były kierowane na landing page, gdzie znajdował się formularz z imieniem, numerem telefonu i dodatkowymi informacjami.</p>
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
          <p>Głównym zadaniem konektora w tym procesie było <span className={styles.textRed}>tworzenie niezależnej bazy danych</span>, aby można było w przyszłości przejść na system CRM z prawidziwego zdarzenia. Sprawował on kontrolę nad każdym etapem procesu od momentu otrzymania danych kontaktowych od użytkownika (lead), aż do zakończenia kontaktu. <span className={styles.textRed}>Konektor został zbudowany w oparciu o API</span>, za pomocą którego komunikował się z pozstałymi systemami obecnymi w procesie.</p>
        </div>

        <div className="col-sm-9">
          <h3>Zintegrowane technologie</h3>

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
            <span>system reklamowy Google, gdzie po odpowiedniej konfiguracji, konektor otrzymywał słowo kluczowe, którego użytkownik wykorzystał w wyszukiwarce zanim do nas trafił oraz informacje o kampanii</span>
          </p>

          <p className={styles.listDot}>
            <span className={`${styles.red} ${styles.dot}`}>⋅⋅</span>
            <span>płatna wersja Google, w której handlowiec tworzył w swoim kalendarzu obszary, na które mógł zapisać się potencjalny klient na prezentację oferty</span>
            </p>
        </div>

      </div>
      <div className={`row mb-5 ${styles.context}`}>
      <div className="col-sm-12">
          <h3>Konkluzja</h3>
          <p>Po udoskonaleniu procesu do powyższej wersji wszystkie informacje o leadach były poukładane i zorganizowane, co zwiększyło wydajność samego działu handlowego. <span className={styles.textRed}>Biznes miał bieżący wgląd</span> w działania prowadzone na leadach, a <span className={styles.textRed}>marketing mógł wyciągać trafne wnioski</span> na podstawie, których podejmował dalsze decyzje o działaniach związanych z optymalizacją kampanii Google Ads.</p>
        </div>
      </div>
    </Container>

    <Container>
      <div className="row">
        <div className={`col-sm-6 align-self-center`}>
          <div>
            <p className={styles.textLeft}><b>Proces wdrażania udoskonaleń</b></p>
            <p className={`${styles.listDot}`}>
              <span className={`${styles.azure} ${styles.dot}`}>⋅⋅</span>
              <span>ustalenie oczekiwanego efektu jest niezwykle ważne, ponieważ od celu zależy podejście oraz dobór odpowiednich narzędzi do procesu</span>
            </p>

            <p className={`${styles.listDot}`}>
              <span className={`${styles.turquoise} ${styles.dot}`}>⋅⋅</span>
              <span>dokładne określenie obecnego procesu pokazuje jak on wygląda i z czego się składa na obecną chwilę, na jego podstawie przygotowuję nowy proces</span>
            </p>

            <p className={`${styles.listDot}`}>
              <span className={`${styles.yellow} ${styles.dot}`}>⋅⋅</span>
              <span>rozbudowuję obecny proces o nowe elementy, w tym kroku także dokładnie analizuję obecne elementy aby móc je dopasować do nowego procesu</span>
            </p>

            <p className={`${styles.listDot}`}>
              <span className={`${styles.blue} ${styles.dot}`}>⋅⋅</span>
              <span>wdrożenie nowej wersji procesu jest najbardziej czasochłonne w całym procesie, w skład tego zazwyczaj wchodzą także szkolenia z nowych narzędzi</span>
            </p>

            <p className={`${styles.listDot}`}>
              <span className={`${styles.purple} ${styles.dot}`}>⋅⋅</span>
              <span>dla każdego nowo wdrożonego procesu trzeba dać czas obserwacji, podczas którego dokładnie analizuję wykonywane w nim kroki, niezwykle ważne aby można było móc potem je optymalizować</span>
            </p>

            <p className={`${styles.listDot}`}>
              <span className={`${styles.red} ${styles.dot}`}>⋅⋅</span>
              <span>na podstawie wniosków z poprzedniego punktu wdrażane są poprawki i udoskonalenia, rzeczywistość jest najlepszym weryfikatorem bo nawet najlepsze procesy na papierze mogą nie sprostać rzeczywistości</span>
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

    <Container>
      <div className={`row ${styles.contactForm}`}>
        <div className="col-sm-6 align-self-center px-5">
        <h2 className={`${styles.title} ${styles.textStrong}`}>Zamów <br></br><span className={styles.textWhite}>rozmowę</span></h2>
        <p className={styles.textWhite}>Dowiedz się jak mogę usprawnić procesy w Twojej firmie zostawiając kontakt do siebie.</p>
        <p>podczas rozmowy</p>
        <ul>
          <li>porozmawiamy o Twoich procesach</li>
          <li>ustalimy czego potrzebujesz</li>
          <li>opowiem Ci w czym mogę Ci pomóc</li>
          <li>poznamy się 😊</li>
        </ul>

        </div>
        <div className="col-sm-6 align-self-center">
          <Form onButton="Zamów rozmowę">
            <Input type="input" name="name" label="Twoje imię" required />
            <Input type="input" name="phone" label="Twój numer telefonu" required />
            <Input type="textarea" name="info" label="Dodatkowe informacje" />
            <Input type="checkbox" name="rodo" label="Zgoda na kontakt" required />
          </Form>

        </div>

      </div>
    </Container>

    <Container>
      <div className="row">
        <div className="col-sm-12 align-self-center">
          <p>zespół</p>
        </div>
      </div>
    </Container>

    <Container>
      <div className="row">
        <div className="col-sm-12 align-self-center">
          <p>pozostale uslugi: marketing internetowy, prowadzenie social</p>
        </div>
      </div>
    </Container>

    </main>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
};


export default Home;