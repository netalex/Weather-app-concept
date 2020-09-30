test dribble
-----------

Creare un widget relativo al meteo, tenendo conto questo esempio https://dribbble.com/shots/2021508-Weather-app-concept

per quanto riguarda comportamento e creatività.



Considera come

- mandatory:

  - responsive (mobile first - desktop > 768)

  - Javascript/JQuery (no framework ReactJS o altri)

  - utilizzo di chiamata ad API di un provider a scelta (Yahoo, OpenWeatherMap etc).

  - più città a scelta

  - interfaccia caratterizzata da:

    - nome città

    - temperatura in C°

    - icona relativa (cloudy, sunny etc)

    - visualizzazione meteo settimana

    - ignorare scala gradi posta in basso

        - pagination città (come da esempio dribble)

    - carousel (accettati anche plugin JS)



A tua discrezione:

- font e icone

- interazioni e effetti


--------------------------------------------




## Istruzioni:

* `yarn`
* `yarn start --open` (sviluppo) apre il sito in `localhost:1234`
* `yarn build`

se non si ha un server locale:
* `yarn global add serve`
* `serve .\dist\` -> `localhost:5000`

Data una lista di città con associata una immagine di sfondo, il widget carica i dati metereologici relativi da Openweathermap.

- le icone vengono da [Weather Icons](http://erikflowers.github.io/weather-icons/)
- e da font awesome versione free.
- Per i font il classico roboto di google.
- Per comodità di sviluppo ho usato [Parcel](https://parceljs.org/) per il building della pagina.
- Le immagini di sfondo sono scelte casualmente da internet, non essendo la pagina da pubblicare non ho verificato i diritti.
- per lo swipe ho usato la libreria [Swiper js](https://swiperjs.com/).
- ho scelto di non usare jquery e utilizzare vanilla js per la selezione e manipolazione del DOM, vista al semplicità della situazione.

Il widget al caricamento della pagina scarica i dati meteo relativi alla lista preimpostata di città.
All'evento SlideChange è associato l'aggiornamento dei valori nell'html.

Per la resa responsive in desktop ho cambiato le dimensioni relative di tutti gli elementi e aumentato i margini per raccogliere i contenuti in una colonna centrale.

--------------------------------------------

## possibili miglioramenti

- rendere la lista di città un parametro esterno inseribile all'avvio della pagina attraverso urlParameters o parametri di console.
- utilizzare le icone "plus" e "cog" (ingranaggio) rispettivamente per aggiungere nuove città e per configurare le caratteristiche dei dati scaricati (es, °C o kelvin, misure imperiali, lingua...). Si può immaginare per l'icona "plus" una interfaccia a pop up in cui inserire il nome di una città, aggiungerla all'array di città di cui richiedere i dati, ricevere da siti di immagini stock come [unsplash](https://unsplash.com/documentation#search-photos) immagini della città, permettere all'utente di selezionarne una e usarne il link come sfondo per l'aggiunta di nuove città, e allo stesso modo un dataset di configurazioni editabile da pop up per l'icona cog. Eventualmente è possibile savare queste impostazioni in localstorage.

**NB:** per il test ho usato le api di openweathermap, ma tra di esse non c'è una chiamata che ritorni una settimana di dati arbitrari, da data a data, indipendentemente se "tempo" (weather) o "previsione" (forecast).
Per semplificare ho trasformato l'esempio in qusto modo:
La scheda principale riposta la situazione "tempo" per la data attuale, mentre sotto, nell'area "weather bar", si riporta la _previsione_ dei 5 giorni successivi.
Per questo set di dati esiste una singola chiamata specifica, [One Call Api](https://openweathermap.org/api/one-call-api) di openweathermap.
È senz'altro possibile ottenere la struttura dell'esempio, con data attuale nella scheda principale e _settimana in cui ricade_ nella weather bar, ma sarebbe necessario alcolare prima il giorno della settimana, se e quanti giorni sono precedenti (quindi "tempo") oppure successivi (quindi "previsione"), ciclare una chiamata per ognuno degli elementi dei due gruppi, con sovraccarico di chiamate, e infine creare il set dati della settimana e stampare i dati a video.