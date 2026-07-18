// Vollständige Fragensammlung für das Family Quizzz mit Bild- und Erklärungs-Unterstützung
const allQuestions = [
    // ==========================================
    // KATEGORIE: KLASSE 2 - MATHE (klasse2_mathe)
    // ==========================================
    { id: 2001, level: 1, category: "klasse2_mathe", image: "", question: "Rechne aus: Was ist 25 + 14?", answers: ["35", "38", "39", "40"], correct: 2, explanation: "💡 Tipp: Rechne zuerst die Zehner zusammen (20 + 10 = 30) und dann die Einer (5 + 4 = 9). Zusammen ergibt das 39!" },
    { id: 2002, level: 1, category: "klasse2_mathe", image: "bilder/mathe_punkte.png", question: "Zähle die Punkte auf dem Bild: Was ist das Doppelte dieser Zahl?", answers: ["12", "14", "16", "18"], correct: 2, explanation: "💡 Das Doppelte bedeutet, dass du die Zahl mal 2 rechnest oder mit sich selbst plus nimmas. 8 + 8 ergibt 16!" },
    { id: 2003, level: 1, category: "klasse2_mathe", image: "", question: "Rechne aus: Was ist 45 - 20?", answers: ["15", "25", "35", "45"], correct: 1, explanation: "💡 Ziehe einfach 2 Zehner von den 4 Zehnern ab. Aus 40 wird 20, also ist das Ergebnis 25!" },
    { id: 2004, level: 1, category: "klasse2_mathe", image: "", question: "Was ergibt die Malaufgabe 2 * 5?", answers: ["7", "8", "10", "12"], correct: 2, explanation: "💡 2 * 5 ist das Gleiche wie 5 + 5. Das ergibt genau 10!" },
    { id: 2005, level: 1, category: "klasse2_mathe", image: "", question: "Was ist die Hälfte von 20?", answers: ["5", "10", "15", "20"], correct: 1, explanation: "💡 Wenn du 20 Murmeln gerecht an zwei Kinder verteilst, bekommt jeder genau 10 Stück!" },
    { id: 2006, level: 1, category: "klasse2_mathe", image: "", question: "Rechne aus: 3 * 3 = ?", answers: ["6", "8", "9", "12"], correct: 2, explanation: "💡 3 * 3 bedeutet: 3 + 3 + 3. Das macht zusammen 9!" },
    { id: 2007, level: 1, category: "klasse2_mathe", image: "", question: "Welche Zahl fehlt hier: 10, 20, 30, __, 50?", answers: ["35", "40", "45", "60"], correct: 1, explanation: "💡 Das ist die Zehner-Reihe. Nach der 30 kommt beim Vorwärtszählen immer die 40!" },
    { id: 2008, level: 2, category: "klasse2_mathe", image: "", question: "Rechne aus: 58 + 27?", answers: ["75", "85", "95", "83"], correct: 1, explanation: "💡 Am besten im Kopf aufteilen: 58 + 20 = 78. Danach zählst du noch 78 + 7 zusammen, das macht 85!" },
    { id: 2009, level: 2, category: "klasse2_mathe", image: "", question: "Was ergibt 32 geteilt durch 4?", answers: ["6", "7", "8", "9"], correct: 2, explanation: "💡 Denke an das Einmaleins: Da 8 * 4 genau 32 ergibt, ist 32 geteilt durch 4 exakt 8!" },
    { id: 2010, level: 2, category: "klasse2_mathe", image: "", question: "Was ist das Doppelte von 15?", answers: ["20", "25", "30", "35"], correct: 2, explanation: "💡 Das Doppelte von 15 ist 15 + 15. Das ergibt genau 30!" },

    // ==========================================
    // KATEGORIE: KLASSE 2 - DEUTSCH & MÄRCHEN (klasse2_deutsch)
    // ==========================================
    { id: 2101, level: 1, category: "klasse2_deutsch", image: "bilder/drache.jpg", question: "Welches Tier spuckte in alten Geschichten oft Feuer?", answers: ["Der Wolf", "Der Drache", "Der Bär", "Der Frosch"], correct: 1, explanation: "💡 Genau, es ist der Drache! In vielen Märchen bewacht er tapfer goldene Schätze oder hohe Königsschlösser." },
    { id: 2102, level: 1, category: "klasse2_deutsch", image: "", question: "In welchem Märchen schläft ein ganzes Schloss für 100 Jahre?", answers: ["Dornröschen", "Schneewittchen", "Aschenputtel", "Rapunzel"], correct: 0, explanation: "💡 Es ist Dornröschen! Weil sie sich an einer Spindel stach, fiel das ganze Schloss in einen tiefen Zauberschlaf." },
    { id: 2103, level: 1, category: "klasse2_deutsch", image: "", question: "Was ließ Rapunzel aus dem hohen Turm herunterfallen?", answers: ["Eine Strickleiter", "Ihre Haare", "Einen goldenen Ball", "Ein Seil"], correct: 1, explanation: "💡 Rapunzel hatte wunderschöne, extrem lange Haare. Der berühmte Spruch heißt: 'Rapunzel, lass dein Haar herunter!'" },
    { id: 2104, level: 1, category: "klasse2_deutsch", image: "", question: "Welches Wort ist ein Nomen (Namenwort)?", answers: ["laufen", "schön", "Das Haus", "schnell"], correct: 2, explanation: "💡 Das Haus ist ein Nomen! Nomen bezeichnen Gegenstände, Menschen oder Tiere und man schreibt sie immer groß." },
    { id: 2105, level: 1, category: "klasse2_deutsch", image: "", question: "Welches Tier ist 'fleißig'?", answers: ["Die Biene", "Das Faultier", "Die Schildkröte", "Der Esel"], correct: 0, explanation: "💡 Die Biene gilt als fleißig, weil sie den ganzen Tag lang von Blume zu Blume fliegt und Honig sammelt." },

    // ==========================================
    // KATEGORIE: KLASSE 5 - ENGLISCH (klasse5_englisch)
    // ==========================================
    { id: 5001, level: 1, category: "klasse5_englisch", image: "", question: "What is the correct answer to: 'Hello, what is your name?'", answers: ["I am ten years old.", "My name is Sarah.", "I am a boy.", "Fine, thanks."], correct: 1, explanation: "💡 When someone asks for your name ('What is your name?'), you answer with 'My name is...' or 'I am...'" },
    { id: 5002, level: 1, category: "klasse5_englisch", image: "", question: "Which number is 'fifteen'?", answers: ["5", "15", "50", "115"], correct: 1, explanation: "💡 Fifteen is the number 15. Don't mix it up with fifty (50)!" },
    { id: 5003, level: 1, category: "klasse5_englisch", image: "", question: "What colour do you get when you mix blue and yellow?", answers: ["red", "purple", "green", "orange"], correct: 2, explanation: "💡 Mixing blue and yellow paint always creates the color green 🟢!" },
    { id: 5004, level: 1, category: "klasse5_englisch", image: "", question: "Translate to English: 'Klassenzimmer'", answers: ["classroom", "schoolbag", "playground", "teacherroom"], correct: 0, explanation: "💡 'Class' means Klasse and 'room' means Zimmer. Together it forms classroom!" },

    // ==========================================
    // KATEGORIE: SPRACHEN (sprachen)
    // ==========================================
    { id: 101, level: 1, category: "sprachen", image: "", question: "Was bedeutet 'Seni seviyorum'?", answers: ["Guten Appetit", "Ich liebe dich", "Gute Nacht", "Tschüss"], correct: 1, explanation: "💡 Das ist Türkisch für 'Ich liebe dich'!" },
    { id: 102, level: 1, category: "sprachen", image: "", question: "Was bedeutet 'Baba' auf Türkisch?", answers: ["Opa", "Onkel", "Vater", "Bruder"], correct: 2, explanation: "💡 'Baba' bedeutet 'Vater'. 'Dede' bedeutet Opa." },

    // ==========================================
    // KATEGORIE: ISLAM (islam)
    // ==========================================
    { id: 201, level: 1, category: "islam", image: "", question: "Wer ist der letzte Gesandte im Islam?", answers: ["Ibrahim", "Isa", "Musa", "Muhammad"], correct: 3, explanation: "💡 Prophet Muhammad (s.a.w.) ist das 'Siegel der Propheten', also der letzte Gesandte Allahs." },

    // ==========================================
    // KATEGORIE: KFZ LERNFELD 1 (kfz_lf1) - Wartung und Pflege
    // ==========================================
    { id: 8101, level: 1, category: "kfz_lf1", image: "", question: "LF 1: Welche Flüssigkeit muss regelmäßig auf Frostschutz geprüft werden?", answers: ["Motoröl", "Kühlflüssigkeit", "Bremsflüssigkeit", "Getriebeöl"], correct: 1, explanation: "💡 Die Kühlflüssigkeit schützt den Motor vor dem Einfrieren im Winter. Daher muss der Frostschutzgehalt regelmäßig mit einem Refraktometer geprüft werden." },
    { id: 8102, level: 1, category: "kfz_lf1", image: "", question: "LF 1: Wo liest man den korrekten Reifenfülldruck des Fahrzeugs ab?", answers: ["Auf der Reifenflanke", "Im Serviceheft", "Auf dem Aufkleber an der B-Säule oder Tankklappe", "Gibt es nicht"], correct: 2, explanation: "💡 Der fahrzeugspezifische Solldruck steht meistens auf einem Aufkleber im Einstieg der Fahrertür (B-Säule) oder im Tankdeckel." },

    // ==========================================
    // KATEGORIE: KFZ LERNFELD 2 (kfz_lf2) - Baugruppen montieren & instandsetzen
    // ==========================================
    { id: 8201, level: 1, category: "kfz_lf2", image: "", question: "LF 2: Welches Prüfmittel misst das Ventilspiel am Verbrennoonmotor?", answers: ["Fühlerlehre", "Messschieber", "Bügelmessschraube", "Messuhr"], correct: 0, explanation: "💡 Mit den feinen Blechstreifen einer Fühlerlehre misst man das Spiel zwischen Nockenwelle und Ventil." },
    { id: 8202, level: 1, category: "kfz_lf2", image: "", question: "LF 2: Welches Werkzeug wird zum festen Anziehen von Zylinderkopfschrauben benötigt?", answers: ["Schlagschrauber", "Drehmomentschlüssel", "Ratsche", "Drehmomentschraubendreher"], correct: 1, explanation: "💡 Zylinderkopfschrauben müssen exakt nach Herstellervorgaben mit einem Drehmomentschlüssel (und oft einem zusätzlichen Drehwinkel) angezogen werden." },

    // ==========================================
    // KATEGORIE: KFZ LERNFELD 3 (kfz_lf3) - Elektrische Systeme
    // ==========================================
    { id: 8301, level: 1, category: "kfz_lf3", image: "", question: "LF 3: Welches Messgerät wird verwendet, um die Spannung einer Autobatterie zu messen?", answers: ["Amperemeter", "Multimeter (Spannungsmessung)", "Ohmmeter", "Oszilloskop"], correct: 1, explanation: "💡 Mit einem Multimeter parallel zur Spannungsquelle (hier parallel zur Batterie) misst man die elektrische Spannung in Volt." },
    { id: 8302, level: 2, category: "kfz_lf3", image: "", question: "LF 3: Wie verhält sich der Gesamtwiderstand in einer Reihenschaltung?", answers: ["Er wird kleiner", "Er bleibt gleich", "Er ist die Summe der Einzelwiderstände", "Er halbiert sich"], correct: 2, explanation: "💡 In der Reihenschaltung addieren sich die Widerstände: R_ges = R1 + R2 + R3..." },

    // ==========================================
    // KATEGORIE: KFZ LERNFELD 4 (kfz_lf4) - Steuerungs- & Regelungssysteme
    // ==========================================
    { id: 8401, level: 1, category: "kfz_lf4", image: "", question: "LF 4: Was regelt das ABS-System bei einer Vollbremsung?", answers: ["Die Motorleistung", "Den Schlupf und das Blockieren der Räder", "Die Scheinwerferhöhe", "Die Klimaanlage"], correct: 1, explanation: "💡 Das Antiblockiersystem (ABS) verhindert das Blockieren der Räder bei einer Gefahrenbremsung, damit das Fahrzeug lenkbar bleibt." }
];

// Hilfsfunktion zur Bereitstellung der Unterkategorien für die Menü-Dropdowns
function getCategoriesFor(mainCat) {
    const map = {
        schule2: [
            { value: "klasse2_mathe", text: "🧮 Mathematik" },
            { value: "klasse2_deutsch", text: "📖 Deutsch & Märchen" }
        ],
        schule5: [
            { value: "klasse5_englisch", text: "🇬🇧 Englisch-Training" }
        ],
        kfz: [
            { value: "kfz_lf1", text: "🔧 LF 1: Wartung & Pflege" },
            { value: "kfz_lf2", text: "⚙️ LF 2: Motor-Baugruppen" },
            { value: "kfz_lf3", text: "⚡ LF 3: Elektrische Systeme" },
            { value: "kfz_lf4", text: "💻 LF 4: Steuerungs-Systeme" }
        ],
        allgemein: [
            { value: "sprachen", text: "🗣️ Sprachen lernen" },
            { value: "islam", text: "🕌 Islam-Wissen" }
        ]
    };
    return map[mainCat] || [];
}
