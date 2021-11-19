// Define the sequence of components that define the study
const study = new lab.flow.Sequence({
  content: [
    new lab.html.Screen({
      title: "inform",
      content: 
        `
        <div> 
        <h1>Tájékoztató nyilatkozat</h1> 
        <p>
          Egy tudományos kutatásban veszel részt, amelynek témavezetője Dr. Aczél Balázs,
          az ELTE Affektív Pszichológia Tanszékének kutatója. A kutatás célja megvizsgálni
          a korlátozott válaszadási idő hatását a konfliktusadaptációra.
        </p>
        <p>
          Az ELTE PPK Affektív Pszichológia Tanszék Metatudomány Kutatócsoportja mint
          adatkezelő szigorúan bizalmasan kezel minden olyan személyes információt,
          amit a kutatás keretein belül gyűjtünk össze. Ezeket kóddal ellátva, 
          biztonságos számítógépeken tároljuk. A kezelt adatok a következők:
          NEPTUN-kód, életkor, nem, iskolai végzettség. Az azonosítására alkalmas
          adatokat (NEPTUN-kód) arra használjuk fel, hogy regisztrálhassuk a
          kutatásban való részvételért járó kurzuspontokat, ezután törölni fogjuk őket. 
          Válaszaid semmilyen módon nem lesznek hozzád köthetők. Személyes adataidat
          más adatkezelőnek, adatfeldolgozónak nem adjuk át, ám az anonimizált
          (személyes azonosításra nem alkalmas) adataid más kutatókkal megosztjuk.
          E tényállás részleteit a „Hozzájárulás adatkezeléshez” c. dokumentum 
          tartalmazza <a target="_blank" href="http://decisionlab.elte.hu/hozzajarulas-adatkezeleshez/">ITT</a>.
          Az adatkezelésről szóló szabályozásról részletesebben pedig
          <a target="_blank" href="https://ppk.elte.hu/file/Hozzajarulas_adatkezeleshez_melleklet_2018.pdf.">ITT</a> tájékozódhatsz.
        </p>
        <p>
          A kutatásban való részvétel teljesen önkéntes. A vizsgálatot bármikor
          indoklás nélkül megszakíthatod, vagy a kérdések megválaszolását megtagadhatod
          a böngészőablak bezárásával.Ha bármilyen kérdésed, aggályod vagy panaszod van
          a kísérlettel kapcsolatban, kérlek, keresd Székely Zsuzsát (szekely.zsuzsa.mail@gmail.com)!
        </p>
        <h3>A „Hozzájárulás az adatkezeléshez” c. dokumentumot elolvastam és a benne foglaltakat elfogadom.</h3>
        <input type="radio" name="inform-form" id="agree">
        <label for="agree">Részt veszek</label>
        <input type="radio" name="inform-form" id="disagree">
        <label for="disagree">Nem veszek részt</label>
        <button class="submitBtn" id="submitInform">Tovább</button>
      </div>
      `,
      responses: {
        'click button#submitInform': 'continue'
      },
      correctResponse: 'continue'
    }),
  ],
})

// Start the study (uncomment to run)
study.run()
