// Define the sequence of components that define the study
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
    <p style="color:red;">PIROS</p>
    <p style="color: yellow;">KÉK</p>
  </div>
  <p>
    A feladatod az lesz, hogy meghatározd, milyen színnel van a szó nyomtatva, 
    miközben a szó jelentését figyelmen kívül hagyod. Például a fenti 2 példára a 
    helyes válaszok a sárga és a piros. Mindegyik szín négy válaszbillentyű 
    (x; c; n; m) valamelyikéhez lesz hozzárendelve. Kérünk, hogy a x, c, n és m 
    billentyűket a bal középső ujjaddal, a bal mutató ujjaddal, a jobb mutató 
    ujjaddal és a jobb középső ujjaddal nyomd le! Azt, hogy melyik szín melyik 
    válaszbillentyűhöz tartozik, később a gyakorló rész alatt lesz alkalmad 
    megtanulni. Kérünk, olyan gyorsan válaszolj, amennyire ez lehetséges hibázás 
    nélkül.
  </p>
  <p>
    Az egész kísérlet 4 részre van felosztva, amelyből mindegyik 6 percet 
    tesz ki (24 perc összesen). A részek között rövid szünetet is tarthatsz.
  </p>
  <p>
    Nagyon fontos, hogy a kísérlet során végig tudj összpontosítani! Kérünk, hogy 
    ne csinálj semmi mást, miközben a feladatot csinálod! Kérünk, vedd figyelembe, 
    hogy ha a megoldásod pontossága 70%-nál alacsonyabb lesz, ami egy ésszerű határ 
    az előző kutatások fényében, akkor nem kapsz pontot a kitöltésért. 
    Ha 70% feletti pontossággal oldod meg a feladatot, akkor 0,5 pontot kapsz 
    a „Pszichológiai kísérletben és tudományos aktivitásban való részvétel” 
    nevű kurzuson.
  </p>
  Nyomd meg a space billentyűt a folytatáshoz!
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
<div style="display: inline-block; color:black;"> \
  x = <span class="dot" style="color:red;"></span> c = <span class="dot" style="color:green;"></span>  n = <span class="dot" style="color:blue"></span>  x = <span class="dot" style="color:yellow;"></span> \
</div> \
</div> \
' 
// Define sequence for one trial for test
var trialTestTemplate = new lab.flow.Sequence({
  title: 'StroopTestTrial',
  content: [
    // Trial screen ------------------------------------------------------------
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
    // Fixation cross ----------------------------------------------------------
    // Participants can still respond during the fixation cross
    new lab.html.Screen({
      title: 'stroopTestFixation', 
      content: testTrialContent,
      parameters: {
        color: 'gray',
        word: '+',
        weight: 'normal',
      },
      // Display the fixation cross depends on the participants own deadline
      timeout: 1000,
      datacommit: false
    })
  ],
  // Because we want to wait until the timeout with proceeding we need to set the responses by hand
  messageHandlers: {
  'before:prepare': function() {
    // Each possible color response is associated with a key
    const responses = {
      'x': 'red',
      'c': 'green',
      'n': 'blue',
      'm': 'yellow',
    }
    // console.log(Object.keys(responses))
    let response = false
    this.options.events['keypress'] = function(e) {
      if (!response) {
        response = true
        if (Object.keys(responses).includes(e.key)) {
          this.data.response = e.key
          this.data.reaction_time = e.timeStamp
        } else {
          
        }

      }
    }
  //   // Set the correct response before the component is prepared
  //   // this.options.correctResponse = this.aggregateParameters.color
  //   }
  //   // 'run': function() {
  //   //   // document.addEventListener('keyup', (e) => {
  //   //   //   console.log(e.key)
  //   //   // })
    }
  }
})

// Define sequence for one trial for practice
var trialPracticeTemplate = new lab.flow.Sequence({
  datacommit: false,
  content: [
    // Trial screen ------------------------------------------------------------
    // The display the first screen participants respond to.
    new lab.html.Screen({
      title: 'StroopPracticeScreen',
      content: practiceTrialContent,
      parameters: {
        // Color and displayed word
        // are determined by the trial
        weight: 'bold'
      },
      // Each possible color response is
      // associated with a key
      responses: {
        'keypress(x)': 'red',
        'keypress(c)': 'green',
        'keypress(n)': 'blue',
        'keypress(m)': 'yellow',
      },
      // The display terminates after 250ms
      timeout: 250,
      // Because the color is set dynamically,
      // we need to set the correct response by hand
      messageHandlers: {
        'before:prepare': function() {
          // Set the correct response
          // before the component is prepared
          this.options.correctResponse = this.aggregateParameters.color
          
        },
      }
    }),
    // Fixation cross ----------------------------------------------------------
    // Participants can still respond during the fixation cross
    new lab.html.Screen({
      title: 'stroopPracticeFixation',
      content: practiceTrialContent,
      parameters: {
        color: 'gray',
        word: '+',
        weight: 'normal',
      },
      // Don't log data from this screen
      datacommit: false
      // Display the fixation cross limitless because of practice
    }),
    // Feedback (or empty) screen for practice only ----------------------------------------------
    new lab.html.Screen({
      content: practiceTrialContent,
      parameters: {
        color: 'gray',
        word: '', // This is a placeholder, we generate the word below
        weight: 'normal',
      },
      datacommit: false,
      // Because feedback can only be given after
      // the choice has been recorded, this component
      // is prepared at the last possible moment.
      tardy: true,
      // Generate feedback
      messageHandlers: {
        'before:prepare': function() {
            // Generate feedback if requested
            this.options.timeout = 1000

            // First, check if the participant responded in time at all
            if (this.options.datastore.state['ended_on'] === 'response') {
              // If there is a response, check its veracity
              if (this.options.datastore.state['correct'] === true) {
                this.options.parameters.word = 'Well done!'
              } else {
                this.options.parameters.word = 'Please respond as quickly and accurately as you can!'
              }
            } else {
              // If no response was given, poke participants to speed up
              this.options.parameters.word = 'Can you go faster?'
            }
        }
      }
    })
  ]
})

// calculate the average of an array
const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;

// Define sequence for one trial for calibration
var trialCalibrationTemplate = new lab.flow.Sequence({
  title: 'StroopCalibrationTrial',
  content: [
    // Trial screen ------------------------------------------------------------
    // The display the first screen participants respond to.
    new lab.html.Screen({
      // This screen is assigned a title,
      // so that we can recognize it more easily
      // in the dataset.
      title: 'StroopCalibrationScreen',
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
    // Fixation cross ----------------------------------------------------------
    // Participants can still respond during the fixation cross
    new lab.html.Screen({
      title: 'stroopCalibrationFixation', 
      content: testTrialContent,
      parameters: {
        color: 'gray',
        word: '+',
        weight: 'normal',
      },
      // Display the fixation cross depends on the participants own deadline
      timeout: 1000,
      datacommit: false
    })
  ],
  // Because we want to wait until the timeout with proceeding we need to set the responses by hand
  messageHandlers: {
  'before:prepare': function() {
    // Each possible color response is associated with a key
    const responses = {
      'x': 'red',
      'c': 'green',
      'n': 'blue',
      'm': 'yellow',
    }

    // Set response if key is pressed
    let response = false
    this.options.events['keypress'] = function(e) {
      if (!response) {
        response = true
        if (Object.keys(responses).includes(e.key)) {
          this.data.response = e.key
          this.data.reaction_time = e.timeStamp - this.internals.timestamps.show
          // Set the correct response
          this.data.correct = this.aggregateParameters.color === responses[e.key]
        }
      }
    }
    // Save congruency of the trial
    this.data.congruency = this.aggregateParameters.congruency
  }
}
})

function personalDeadline () {
  // Get only correct trials
  // Get only congruent trials
  // Calulate the average reaction time

   //var personalDeadline = average()
}

// Define the trials in terms of the central parameters
function range(stop) {
  var result = [];
  for (var i = 0; i < stop; i += 1) {
      result.push(i);
  }
  return result;
}

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

var redBlock = [[["green","green","con","c"], ["red","red","con","x"]], [["red","green","inc","c"], ["green","red","inc","x"]]]
var blueBlock = [[["blue","blue","con","n"], ["yellow","yellow","con","m"]], [["blue","yellow","inc","n"], ["yellow","blue","inc","m"]]]

var listOne = []
for (i in range(10)) {
for (j in range(redBlock.length)) {
  for (k in range(redBlock[j].length)) {
    listOne.push(redBlock[j][k])
      }
  }
}

listOne = shuffleArray(listOne)

var listTwo = []
for (i in range(10)) {
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

var testLoop = []
trialList.forEach(element => {
  testLoop.push({word: element[0], color: element[1], congruent: element[2]});
});

// The word shown on screen, and its color for testing the code
var trials = [
  { color: 'red', word: 'red' },
  { color: 'green', word: 'red' },
  { color: 'blue', word: 'red' },
  { color: 'yellow', word: 'yellow' }
]

// Loop for personal calibration
var calibrationLoopData = [
  { word: 'PIROS', color: 'red', correctResponse: 'x', congruency: 'con'},
  { word: 'PIROS', color: 'green', correctResponse: 'c', congruency: 'inc'},
  { word: 'ZÖLD', color: 'red', correctResponse: 'x', congruency: 'inc'},
  { word: 'ZÖLD', color: 'green', correctResponse: 'c', congruency: 'con'},
  { word: 'KÉK', color: 'blue', correctResponse: 'n', congruency: 'con'},
  { word: 'KÉK', color: 'yellow', correctResponse: 'm', congruency: 'inc'},
  { word: 'SÁRGA', color: 'blue', correctResponse: 'n', congruency: 'inc'},
  { word: 'SÁRGA', color: 'yellow', correctResponse: 'm', congruency: 'con'}
]

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

// TODO: create blocks
// Between block page
const betweenBlockScreen = new lab.html.Screen({
  content: `
  <div>
  <h2>Ez a szakasz véget ért.</2>
  <p>
    A következő előtt tarthatsz egy rövid szünetet.
    A folytatáshoz helyezd az ujjaid a megfelelő gombokra és nyomj meg egy billentyűt!
  </p>
  ${keyResponseMapping}
  </div>
  `,
  responses: {
    'keypress(x)': 'red',
    'keypress(c)': 'green',
    'keypress(n)': 'blue',
    'keypress(m)': 'yellow',
  }
})

// Countdown screen page function
const countdownPage = function(countdown) {
  // Create countdown array
  var countdowns = [];
  for (var i = 1; i <= countdown; i += 1) {
    countdowns.unshift({count: i});
  }
  // Create screen for one count
  const countScreen = new lab.html.Screen({
    content: '<h1>${parameters.count}</h1>',
    timeout: 1000
  })
  // Loop over screens
  return new lab.flow.Loop({
    template: countScreen,
    templateParameters: countdowns,
    shuffle: false
  })
}

// End of practice page
const endPracticeScreen = new lab.html.Screen({
  content: `
  <div>
  <h2>Gyakorlás vége</h2>
  <p>
    Most következik a négy kísérleti szakasz, melyeket egy-egy kalibrációs szakasz előz meg.
    Tartsd az ujjaid a megfelelő gombokon és nyomj meg egy billentyűt a kalibráció megkezdéséhez!
  </p>
  ${keyResponseMapping}
  </div>
  `,
  responses: {
    'keypress(x)': 'red',
    'keypress(c)': 'green',
    'keypress(n)': 'blue',
    'keypress(m)': 'yellow',
  }
})

// End of calibration page
const endCalibrationScreen = new lab.html.Screen({
  content: `
  <div>
  <h2>Kalibráció vége</h2>
  <p>
    Továbbra is tartsd az ujjaid a megfelelő gombokon és nyomj meg egy billentyűt a kísérleti szakasz megkezdéséhez!
  </p>
  ${keyResponseMapping}
  </div>
  `,
  responses: {
    'keypress(x)': 'red',
    'keypress(c)': 'green',
    'keypress(n)': 'blue',
    'keypress(m)': 'yellow',
  }
})

// End of experiment page
const endScreen = new lab.html.Screen({
  content: `
  <div>
  <h1>Kész</h1>
  <p>
    A kísérlet véget ért, 80%-os pontossággal teljesítetted a tesztet. Köszönjük a részvételt!
  </p>
  <button id="download">Download your raw data</button>
  <p>
    Ha bármi kérdésed vagy megjegyzésed van, kérlek, vedd fel a kapcsolatot Székely Zsuzsával, a kutatás vezetőjével ezen az email címen: szekely.zsuzsa.mail@gmail.com!
  </p>
  </div>
  `,
  // Respond to clicks on the download button
  events: {
    'click button#download': function() {
      this.options.datastore.download()
    }
  }
})

// Put together the study
const study = new lab.flow.Sequence({
  content: [
    // Inform screen
    informScreen,
    // Consent screen
    // consentScreen,
    // Instructions
    // instructionsScreen,
    // Countdown
    // countdownPage(3),
    // Practice trials
    // new lab.flow.Loop({
    //   template: trialPracticeTemplate,
    //   templateParameters: trials,
    //   shuffle: false
    //   }),
    // End of practice trials
    // endPracticeScreen,
    // Countdown
    // countdownPage(3),
    // Calibration
    new lab.flow.Loop({
      template: trialCalibrationTemplate,
      templateParameters: calibrationLoopData,
      shuffle: false
    }),
    // End of calibration
    // endCalibrationScreen,
    // Countdown
    // countdownPage(3),
    // Test trials
    // new lab.flow.Loop({
    //   template: trialTestTemplate,
    //   templateParameters: trials,
    //   shuffle: false
    //   }),
    // End screen
    endScreen
  ],
  datastore: new lab.data.Store()
  // events: {
  //   'visibilitychange': function(event) {
  //     if (document.hidden) {
  //       alert(`Kérlek, ne válts ablakot amíg tart a kísérlet!`)
  //     }
  //   }
  // }
})

// Start the study
study.run()
