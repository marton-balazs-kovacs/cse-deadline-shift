// Utils ----------------------------------------------------------
// Detect browser
function detectBrowser() { 
  if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
      return 'Opera';
  } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
      return 'Chrome';
  } else if(navigator.userAgent.indexOf("Safari") != -1) {
      return 'Safari';
  } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
      return 'Firefox';
  } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
      return 'IE';//crap
  } else {
      return 'Unknown';
  }
} 

// Calculate range
function range(stop) {
  var result = [];
  for (var i = 0; i < stop; i += 1) {
    result.push(i);
  }
  return result;
}

// Shuffle the content of an array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {

    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

// calculate the average of an array
const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

// Countdown screen page function
const countdownPage = function (countdown) {
  // Create countdown array
  var countdowns = [];
  for (var i = 1; i <= countdown; i += 1) {
    countdowns.unshift({ count: i });
  }
  // Create screen for one count
  const countScreen = new lab.html.Screen({
    content: '<h1>${parameters.count}</h1>',
    timeout: 1000,
    datacommit: false
  })
  // Loop over screens
  return new lab.flow.Loop({
    template: countScreen,
    templateParameters: countdowns,
    shuffle: false
  })
}

// Create pseudo-random trial orders ----------------------------------------------------------
// For the test trials
var redBlock = [[["ZÖLD", "green", "con", "c"], ["PIROS", "red", "con", "x"]], [["PIROS", "green", "inc", "c"], ["ZÖLD", "red", "inc", "x"]]]
var blueBlock = [[["KÉK", "blue", "con", "n"], ["SÁRGA", "yellow", "con", "m"]], [["KÉK", "yellow", "inc", "m"], ["SÁRGA", "blue", "inc", "n"]]]

function getRandomTrials(numberOfTrials, addFirstTrial) {
  var repetition = numberOfTrials / 8

  var listOne = []
  for (i in range(repetition)) {
    for (j in range(redBlock.length)) {
      for (k in range(redBlock[j].length)) {
        listOne.push(redBlock[j][k])
      }
    }
  }

  listOne = shuffleArray(listOne)

  var listTwo = []
  for (i in range(repetition)) {
    for (j in range(blueBlock.length)) {
      for (k in range(blueBlock[j].length)) {
        listTwo.push(blueBlock[j][k])
      }
    }
  }

  listTwo = shuffleArray(listTwo)

  var trialList = []
  for (i in range(listOne.length)) {
    trialList.push(listOne[i])
    trialList.push(listTwo[i])
  }

  var loopData = []
  trialList.forEach(element => {
    loopData.push({ word: element[0], color: element[1], congruency: element[2], correctResponse: element[3] });
  });

  // Add one random in the beginning as the first trial
  if (addFirstTrial) {
    const firstTrial = blueBlock[Math.floor(Math.random() * 2)][Math.floor(Math.random() * 2)]
    loopData.unshift({ word: firstTrial[0], color: firstTrial[1], congruency: firstTrial[2], correctResponse: firstTrial[3] })
  }

  return loopData
}

const testLoopData = [
  { blockId: '1', testTrialset: getRandomTrials(8, true) },
  { blockId: '2', testTrialset: getRandomTrials(8, true) },
  { blockId: '3', testTrialset: getRandomTrials(8, true) },
  { blockId: '4', testTrialset: getRandomTrials(8, true) },
]

// For practice trials
const practiceLoopData = getRandomTrials(8, false)

// Create screens ----------------------------------------------------------
// Create inform screen
const informScreen = new lab.html.Screen({
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
    <button class="submitBtn hide" id="submitInform">Tovább</button>
  </div>
  `,
  responses: {
    'click(0) button#submitInform': 'continue'
  },
  correctResponse: 'continue'
})

// Add continue button display logic to infrom form
informScreen.on('run', () => {
  const radios = document.getElementsByName('inform-form');
  radios.forEach(radio => {
    radio.addEventListener('click', function () {
      const radioVal = radio.id;
      const submitBtn = document.getElementById('submitInform');
      if (radioVal === 'agree') {
        submitBtn.classList.remove("hide");
      } else if (radioVal === 'disagree') {
        submitBtn.classList.add("hide");
      }
    });
  })
})

// Create consent form
const consentScreen = new lab.html.Screen({
  title: "consent",
  content: `
  <div> 
  <h1>Beleegyező nyilatkozat</h1>
  <p>
    Felelősségem teljes tudatában kijelentem, hogy a mai napon az Eötvös Loránd 
    Tudományegyetem, Dr. Aczél Balázs kutatásvezető által végzett vizsgálatban
    önként veszek részt. A vizsgálat jellegéről annak megkezdése előtt kielégítő
    tájékoztatást kaptam. Elmúltam 18 éves. Nem szenvedek semmilyen pszichiátriai
    betegségben. A vizsgálat idején alkohol vagy drogok hatása alatt nem állok.
    Tudomásul veszem, hogy az azonosításomra alkalmas személyi adataimat bizalmasan
    kezelik. Hozzájárulok ahhoz, hogy a vizsgálat során a rólam felvett, személyem
    azonosítására nem alkalmas adatok más kutatók számára is hozzáférhetők legyenek.
    Fenntartom a jogot arra, hogy a vizsgálat során annak folytatásától bármikor
    elállhassak. Ilyen esetben a rólam addig felvett adatokat törölni kell.
    Tudomásul veszem, hogy csak a teljesen befejezett kitöltésért kapok pontot a
    Pszichológiai kísérletben és tudományos aktivitásban való részvétel című
    kurzuson.
  </p>
  <br>
  <h3>A kutatásban való részvétel körülményeiről részletes tájékoztatást kaptam, a feltételekkel egyetértek.</h3>
  <input type="radio" name="consent-form" id="agree">
  <label for="agree">Részt veszek</label>
  <input type="radio" name="consent-form" id="disagree">
  <label for="disagree">Nem veszek részt</label>
  <button class="submitBtn hide" id="submitConsent">Tovább</button>
  </div> 
  `,
  responses: {
    'click(0) button#submitConsent': 'continue'
  },
  correctResponse: 'continue'
})

// Add continue button display logic to consent form
consentScreen.on('run', () => {
  const radios = document.getElementsByName('consent-form');
  radios.forEach(radio => {
    radio.addEventListener('click', function () {
      const radioVal = radio.id;
      const submitBtn = document.getElementById('submitConsent');
      if (radioVal === 'agree') {
        submitBtn.classList.remove("hide");
      } else if (radioVal === 'disagree') {
        submitBtn.classList.add("hide");
      }
    });
  })
})

// Create instructions
const instructionsScreen = new lab.html.Screen({
  title: "instructions",
  content: `
  <div>
  <h1>Instrukciók</h1>
  <p>
    Ebben a kísérletben arra vagyunk kíváncsiak, hogy az emberek hogyan oldanak
    fel vizuális ingerek feldolgozása közben létrejövő konfliktusokat.
    A kísérlet alatt színek neveit fogod látni különböző színű betűkkel kiírva,
    ahogy a lenti példa mutatja.
  </p>
  <br>
  <div style="display: inline-block;">
    <h1 style="color:red;">PIROS</h1>
    <h1 style="color: yellow;">KÉK</h1>
  </div>
  <p>
    A feladatod az lesz, hogy meghatározd, milyen színnel van a szó nyomtatva, 
    miközben a szó jelentését figyelmen kívül hagyod. Például a fenti 2 példára
    a helyes válaszok a piros és a sárga. Mindegyik szín négy válaszbillentyű (x; c; n; m)
    valamelyikéhez lesz hozzárendelve. Azt, hogy melyik szín melyik válaszbillentyűhöz tartozik,
    később, a gyakorló rész alatt lesz alkalmad megtanulni. Kérünk, olyan gyorsan válaszolj,
    amennyire ez lehetséges hibázás nélkül!
  </p>
  <p>
    Az egész kísérlet 4 részre van felosztva, amelyből mindegyik 6 percet 
    tesz ki (24 perc összesen). A részek között rövid szünetet is tarthatsz.
  </p>
  <p>
    Kérünk, hogy a feladatot számítógépen végezd el (ne telefonon, tableten stb.)! Nagyon fontos,
    hogy a kísérlet során végig tudj összpontosítani, ezért kérünk, hogy ne csinálj semmi mást,
    miközben a feladatot csinálod! Vedd figyelembe, hogy ha a megoldásod pontossága 70%-nál alacsonyabb
    lesz, ami egy ésszerű határ az előző kutatások fényében, akkor nem kapsz pontot a kitöltésért.
    Ha 70% feletti pontossággal oldod meg a feladatot, valamint, ha elvégzed a feladat másik verzióját is,
    akkor 1 pontot kapsz a „Pszichológiai kísérletben és tudományos aktivitásban való részvétel” nevű kurzuson.
  </p>
  Nyomd meg a Space billentyűt a folytatáshoz!
  </div>
  `,
  responses: {
    'keypress(Space)': 'continue'
  }
})

// Table for key-response mapping
const keyResponseMapping = `
<table>
<tr>
  <th>UJJ</th>
  <th>VÁLASZGOMB</th>
  <th>INGER</th>
</tr>
<tr>
  <td>bal középső</td>
  <td>x</td>
  <td>piros</td>
</tr>
<tr>
  <td>bal mutató</td>
  <td>c</td>
  <td>zöld</td>
</tr>
<tr>
  <td>jobb mutató</td>
  <td>n</td>
  <td>kék</td>
</tr>
<tr>
  <td>jobb középső</td>
  <td>m</td>
  <td>sárga</td>
</tr>
</table>
`

// Start of practice page
const startPracticeScreen = new lab.html.Screen({
  title: 'startPracticeScreen',
  content: `
  <div>
  <h2>Gyakorlás</2>
  <p>
    Az alábbi táblázatban láthatod, hogy melyik színhez melyik gomb tartozik, 
    illetve, hogy melyik gombot melyik ujjaddal kell megnyomnod. Helyezd az 
    ujjaid a megfelelő gombokra és nyomd meg a Space billentyűt!
  </p>
  ${keyResponseMapping}
  </div>
  `,
  responses: {
    'keypress(Space)': 'continue'
  }
})

// Define a template for a test stroop trial
var testTrialContent = ' \
<div style="font-size: 36px; font-weight: ${ parameters.weight }; color: ${ parameters.color }"> \
${ parameters.word } \
</div> \
'

// Define a template for a practice stroop trial
const practiceTrialContent = ' \
<div style="font-size: 36px; font-weight: ${ parameters.weight }; color: ${ parameters.color }"> \
${ parameters.word } \
<br> \
<div style="display: inline-block; color:black; font-weight:normal;"> \
  x = <span class="dot" style="background-color:red;"></span> c = <span class="dot" style="background-color:green;"></span>  n = <span class="dot" style="background-color:blue"></span>  m = <span class="dot" style="background-color:yellow;"></span> \
</div> \
</div> \
' 

// Define sequence for one trial for practice
var trialPracticeTemplate = new lab.flow.Sequence({
  title: 'StroopPractice',
  datacommit: false,
  content: [
    // Fixation cross
    // Participants cannot respond during the cross
    new lab.html.Screen({
      title: 'stroopPracticeFixation',
      content: practiceTrialContent,
      parameters: {
        color: 'gray',
        word: '+',
        weight: 'normal',
      },
      // Don't log data from this screen
      datacommit: false,
      // Display the fixation cross 1000ms ITI
      timeout: 1000
    }),
    new lab.flow.Sequence({
      title: 'StroopPracticetrial',
      content: [
        // Trial screen
        // The display the first screen participants respond to.
        new lab.html.Screen({
          title: 'StroopPracticeScreen',
          content: practiceTrialContent,
          parameters: {
            // Color and displayed word
            // are determined by the trial
            weight: 'bold'
          },
          datacommit: false,
          // The display terminates after 250ms
          timeout: 250
        }),
        // Blank screen
        // Participants can still respond during the blank screen
        new lab.html.Screen({
          title: 'stroopPracticeBlank',
          content: practiceTrialContent,
          parameters: {
            word: ''
          },
          // Don't log data from this screen
          datacommit: false
          // Display the blank screen is limitless because of practice
        })
      ],
      responses: {
        'keypress(x)': 'x',
        'keypress(c)': 'c',
        'keypress(n)': 'n',
        'keypress(m)': 'm'
      },
      messageHandlers: {
        'before:prepare': function () {
          // Set the correct response
          this.options.correctResponse = this.aggregateParameters.correctResponse
          // Save congruency of the trial
          this.data.congruency = this.aggregateParameters.congruency
        }
      }
    }),
    // Feedback (or empty) screen for practice only 
    new lab.html.Screen({
      content: practiceTrialContent,
      parameters: {
        color: 'gray',
        word: '', // This is a placeholder, we generate the word below
        weight: 'normal',
      },
      datacommit: false,
      timeout: 1000,
      // Because feedback can only be given after
      // the choice has been recorded, this component
      // is prepared at the last possible moment.
      tardy: true,
      // Generate feedback
      messageHandlers: {
        'before:prepare': function () {
          // If there is a response, check its veracity
          if (this.options.datastore.state['correct'] === true) {
            this.options.parameters.word = 'Helyes'
          } else {
            this.options.parameters.word = 'Helytelen'
          }
        }
      }
    })
  ]
})

// End of practice page
const endPracticeScreen = new lab.html.Screen({
  title: 'endPracticeScreen',
  content: `
  <div>
  <h2>Gyakorlás vége</h2>
  <p>
    Most következik a négy kísérleti szakasz, melyeket egy-egy kalibrációs
    szakasz előz meg. Ezek során már nem lesz a képernyőn, hogy melyik színhez
    melyik gomb tartozik, valamint nem fogsz visszajelzést kapni arról, hogy
    helyesen válaszoltál-e. Tartsd az ujjaid a megfelelő gombokon és nyomd 
    meg a Space billentyűt a kalibráció megkezdéséhez!
  </p>
  ${keyResponseMapping}
  </div>
  `,
  responses: {
    'keypress(Space)': 'continue'
  }
})

// Define sequence for one trial for test
var trialTestTemplate = new lab.flow.Sequence({
  title: 'stroopTest',
  datacommit: false,
  content: [
    // Fixation cross
    // Participants can still respond during the fixation cross
    new lab.html.Screen({
      title: 'stroopTestFixation',
      content: testTrialContent,
      parameters: {
        color: 'gray',
        word: '+',
        weight: 'normal',
      },
      datacommit: false,
      timeout: 1000
    }),
    new lab.flow.Sequence({
      content: [
        // Trial screen
        // The display the first screen participants respond to.
        new lab.html.Screen({
          // This screen is assigned a title,
          // so that we can recognize it more easily
          // in the dataset.
          title: 'StroopTestScreen',
          // Again, we use the trial page template
          content: testTrialContent,
          parameters: {
            // Color and displayed word
            // are determined by the trial
            weight: 'bold'
          },
          // The display terminates after 250ms
          timeout: 250,
          datacommit: false
        }),
        // Blank screen
        // Participants can still respond during the blank screen
        new lab.html.Screen({
          title: 'stroopTestBlank',
          content: testTrialContent,
          parameters: {
            word: ''
          },
          // Don't log data from this screen
          datacommit: false
        })
      ],
      responses: {
        'keypress(x)': 'x',
        'keypress(c)': 'c',
        'keypress(n)': 'n',
        'keypress(m)': 'm'
      },
      messageHandlers: {
        'before:prepare': function () {
          // Set the correct response
          this.options.correctResponse = this.aggregateParameters.correctResponse
          // Save congruency of the trial
          this.data.congruency = this.aggregateParameters.congruency
          // Set title based on loop
          this.options.title = `${this.aggregateParameters.blockId}_StroopTestTrial`
        }
      }
    })
  ]
})

// Between block page
const betweenBlockScreen = new lab.html.Screen({
  title: 'betweenBlockScreen',
  content: `
  <div class='betweenblock'>
  <h2>Ez a szakasz véget ért.</2>
  <p>
    A következő előtt tarthatsz egy rövid szünetet.
    A folytatáshoz helyezd az ujjaid a megfelelő gombokra és nyomd meg a Space billentyűt!
  </p>
  ${keyResponseMapping}
  </div>
  `,
  responses: {
    'keypress(Space)': 'continue'
  },
  tardy: true,
  messageHandlers: {
    "before:prepare": function() {
      this.options.skip = (this.aggregateParameters.blockId === "4")? true : false
    }
  }
})

// End of experiment page
const endScreen = new lab.html.Screen({
  title: 'endScreen',
  content: `
  <div>
  <h1>Kész</h1>
  <p>
    A kísérlet véget ért, 80%-os pontossággal teljesítetted a tesztet. Köszönjük a részvételt!
  </p>
  <button id="download">Töltsd le az adataid!</button>
  <p>
    Ha bármi kérdésed vagy megjegyzésed van, kérlek, vedd fel a kapcsolatot Székely Zsuzsával, a kutatás vezetőjével ezen az email címen: szekely.zsuzsa.mail@gmail.com!
  </p>
  </div>
  `,
  // Respond to clicks on the download button
  events: {
    'click button#download': function () {
      this.options.datastore.download()
    }
  }
})

const blockLoop = new lab.flow.Sequence({
  title: 'blockLoop',
  content: [
    // Countdown
    countdownPage(3),
    // Test trials
    new lab.flow.Loop({
      template: trialTestTemplate,
      shuffle: false,
      messageHandlers: {
        'before:prepare': function () {
          this.options.templateParameters = this.parameters.testTrialset
        }
      }
    }),
    // End block screen
    betweenBlockScreen
  ]
})

// Put together the study
const study = new lab.flow.Sequence({
  content: [
    // Inform screen
    informScreen,
    // Consent screen
    consentScreen,
    // Instructions
    instructionsScreen,
    // Start of practice trials
    startPracticeScreen,
    // Countdown
    countdownPage(3),
    // Practice trials
    new lab.flow.Loop({
      template: trialPracticeTemplate,
      templateParameters: practiceLoopData,
      shuffle: false
    }),
    // End of practice trials
    endPracticeScreen,
    // Test block loop
    new lab.flow.Loop({
      template: blockLoop,
      templateParameters: testLoopData,
      shuffle: false
    }),
    // End screen
    endScreen
  ],
  messageHandlers: {
    "before:prepare": function () {
      this.data.browser_type = detectBrowser()
    }
  },
  datastore: new lab.data.Store()
})

// Start the study
study.run()
