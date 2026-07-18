// Vollständige und geprüfte Fragensammlung für das Family Quizzz
const allQuestions = [
    // ==========================================
    // KATEGORIE: KLASSE 2 - MATHE (klasse2_mathe)
    // ==========================================
    { id: 2001, level: 1, category: "klasse2_mathe", image: "", question: "Rechne aus: Was ist 25 + 14?", answers: ["35", "38", "39", "40"], correct: 2, explanation: "💡 Tipp: Rechne zuerst die Zehner zusammen (20 + 10 = 30) und dann die Einer (5 + 4 = 9). Zusammen ergibt das 39!" },
    { id: 2002, level: 1, category: "klasse2_mathe", image: "", question: "Rechne aus: Was ist 45 - 20?", answers: ["15", "25", "35", "45"], correct: 1, explanation: "💡 Ziehe einfach 2 Zehner von den 4 Zehnern ab. Aus 40 wird 20, also ist das Ergebnis 25!" },
    { id: 2003, level: 1, category: "klasse2_mathe", image: "", question: "Was ergibt die Malaufgabe 2 * 5?", answers: ["7", "8", "10", "12"], correct: 2, explanation: "💡 2 * 5 ist das Gleiche wie 5 + 5. Das ergibt genau 10!" },
    { id: 2004, level: 1, category: "klasse2_mathe", image: "", question: "Was ist die Hälfte von 20?", answers: ["5", "10", "15", "20"], correct: 1, explanation: "💡 Wenn du 20 Murmeln gerecht an zwei Kinder verteilst, bekommt jeder genau 10 Stück!" },
    { id: 2005, level: 1, category: "klasse2_mathe", image: "", question: "Rechne aus: 3 * 3 = ?", answers: ["6", "8", "9", "12"], correct: 2, explanation: "💡 3 * 3 bedeutet: 3 + 3 + 3. Das macht zusammen 9!" },
    { id: 2006, level: 1, category: "klasse2_mathe", image: "", question: "Welche Zahl fehlt hier: 10, 20, 30, __, 50?", answers: ["35", "40", "45", "60"], correct: 1, explanation: "💡 Das ist die Zehner-Reihe. Nach der 30 kommt beim Vorwärtszählen immer die 40!" },
    { id: 2007, level: 2, category: "klasse2_mathe", image: "", question: "Wie viele Minuten hat eine ganze Stunde?", answers: ["30 Minuten", "50 Minuten", "60 Minuten", "100 Minuten"], correct: 2, explanation: "💡 Eine Stunde hat genau 60 Minuten. Eine halbe Stunde hat 30 Minuten!" },
    { id: 2008, level: 2, category: "klasse2_mathe", image: "", question: "Welche Nachbarzahlen hat die Zahl 49?", answers: ["47 und 48", "48 und 50", "50 und 51", "40 und 50"], correct: 1, explanation: "💡 Die Nachbarzahlen sind die Zahl direkt davor (48) und direkt danach (50)." },
    { id: 2009, level: 2, category: "klasse2_mathe", image: "", question: "Rechne aus: 63 + 8?", answers: ["71", "73", "69", "81"], correct: 0, explanation: "💡 Zähle von 63 einfach 8 Schritte weiter: 64, 65, 66, 67, 68, 69, 70, 71!" },
    { id: 2010, level: 2, category: "klasse2_mathe", image: "", question: "Welches Zeichen passt hier: 34 [ ] 43?", answers: ["> (größer als)", "< (kleiner als)", "= (gleich)", "+ (plus)"], correct: 1, explanation: "💡 34 ist kleiner als 43. Das Krokodil frisst immer die größere Zahl, also zeigt die Öffnung nach rechts: < !" },

    // ==========================================
    // KATEGORIE: KLASSE 2 - DEUTSCH & MÄRCHEN (klasse2_deutsch)
    // ==========================================
    { id: 2101, level: 1, category: "klasse2_deutsch", image: "", question: "Welches Wort schreibt man mit 'ä'? (Mehrzahl von Hand)", answers: ["Hende", "Hände", "Hande", "Hähne"], correct: 1, explanation: "💡 Wenn das Einzahlwort ein 'a' hat (Hand), schreibt man die Mehrzahl (Hände) fast immer mit 'ä'!" },
    { id: 2102, level: 1, category: "klasse2_deutsch", image: "", question: "In welchem Märchen schläft ein ganzes Schloss für 100 Jahre?", answers: ["Dornröschen", "Schneewittchen", "Aschenputtel", "Rapunzel"], correct: 0, explanation: "💡 Es ist Dornröschen! Weil sie sich an einer Spindel stach, fiel das ganze Schloss in einen tiefen Zauberschlaf." },
    { id: 2103, level: 1, category: "klasse2_deutsch", image: "", question: "Was ließ Rapunzel aus dem hohen Turm herunterfallen?", answers: ["Eine Strickleiter", "Ihre Haare", "Einen goldenen Ball", "Ein Seil"], correct: 1, explanation: "💡 Rapunzel hatte wunderschöne, extrem lange Haare. Der berühmte Spruch heißt: 'Rapunzel, lass dein Haar herunter!'" },
    { id: 2104, level: 1, category: "klasse2_deutsch", image: "", question: "Welches Wort ist ein Nomen (Namenwort)?", answers: ["laufen", "schön", "Das Haus", "schnell"], correct: 2, explanation: "💡 Das Haus ist ein Nomen! Nomen bezeichnen Gegenstände, Menschen oder Tiere und man schreibt sie immer mit großem Anfangsbuchstaben." },
    { id: 2105, level: 1, category: "klasse2_deutsch", image: "", question: "Wie viele Silben hat das Wort 'Schmet-ter-ling'?", answers: ["1 Silbe", "2 Silben", "3 Silben", "4 Silben"], correct: 2, explanation: "💡 Klatsche das Wort einmal laut: Schmet-ter-ling. Du klatschst genau 3 Mal!" },
    { id: 2106, level: 1, category: "klasse2_deutsch", image: "", question: "Welches Wort ist richtig geschrieben?", answers: ["Fogel", "Vogel", "Wogel", "Folgel"], correct: 1, explanation: "💡 Vogel schreibt man mit einem 'V' (wie Vater), obwohl man es wie 'F' spricht." },
    { id: 2107, level: 2, category: "klasse2_deutsch", image: "", question: "Welches dieser Wörter ist ein Verb (Tu-Wort)?", answers: ["der Hund", "spielen", "laut", "groß"], correct: 1, explanation: "💡 'spielen' ist ein Verb. Es beschreibt, was man gerade tut." },
    { id: 2108, level: 2, category: "klasse2_deutsch", image: "", question: "Was ist das Gegenteil von 'groß'?", answers: ["riesig", "klein", "dick", "nett"], correct: 1, explanation: "💡 Das Gegenteil von groß ist klein!" },

    // ==========================================
    // KATEGORIE: KLASSE 5 - ENGLISCH (klasse5_englisch)
    // ==========================================
    { id: 5001, level: 1, category: "klasse5_englisch", image: "", question: "What is the correct answer to: 'Hello, what is your name?'", answers: ["I am ten years old.", "My name is Sarah.", "I am a boy.", "Fine, thanks."], correct: 1, explanation: "💡 When someone asks for your name ('What is your name?'), you answer with 'My name is...' or 'I am...'" },
    { id: 5002, level: 1, category: "klasse5_englisch", image: "", question: "Which number is 'fifteen'?", answers: ["5", "15", "50", "115"], correct: 1, explanation: "💡 Fifteen is the number 15. Don't mix it up with fifty (50)!" },
    { id: 5003, level: 1, category: "klasse5_englisch", image: "", question: "What colour do you get when you mix blue and yellow?", answers: ["red", "purple", "green", "orange"], correct: 2, explanation: "💡 Mixing blue and yellow paint always creates the color green 🟢!" },
    { id: 5004, level: 1, category: "klasse5_englisch", image: "", question: "Translate to English: 'Klassenzimmer'", answers: ["classroom", "schoolbag", "playground", "teacherroom"], correct: 0, explanation: "💡 'Class' means Klasse and 'room' means Zimmer. Together it forms classroom!" },
    { id: 5005, level: 1, category: "klasse5_englisch", image: "", question: "What day comes after Tuesday?", answers: ["Monday", "Wednesday", "Thursday", "Friday"], correct: 1, explanation: "💡 The order is: Sunday, Monday, Tuesday, Wednesday..." },

    // ==========================================
    // KATEGORIE: SPRACHEN (sprachen)
    // ==========================================
    { id: 101, level: 1, category: "sprachen", image: "", question: "Was bedeutet 'Seni seviyorum' auf Deutsch?", answers: ["Guten Appetit", "Ich liebe dich", "Gute Nacht", "Tschüss"], correct: 1, explanation: "💡 Das ist Türkisch für 'Ich liebe dich'!" },
    { id: 102, level: 1, category: "sprachen", image: "", question: "Was bedeutet 'Baba' auf Türkisch?", answers: ["Opa", "Onkel", "Vater", "Bruder"], correct: 2, explanation: "💡 'Baba' bedeutet 'Vater'. 'Dede' bedeutet Opa." },
    { id: 103, level: 1, category: "sprachen", image: "", question: "Wie heißt 'Guten Morgen' auf Türkisch?", answers: ["Merhaba", "Günaydın", "İyi geceler", "Lütfen"], correct: 1, explanation: "💡 'Günaydın' bedeutet 'Guten Morgen'. 'Merhaba' ist 'Hallo'." },

    // ==========================================
    // KATEGORIE: ISLAM (islam)
    // ==========================================
    { id: 201, level: 1, category: "islam", image: "", question: "Wer ist der letzte Gesandte im Islam?", answers: ["Ibrahim", "Isa", "Musa", "Muhammad"], correct: 3, explanation: "💡 Prophet Muhammad (s.a.w.) ist das 'Siegel der Propheten', also der letzte Gesandte Allahs." },
    { id: 202, level: 1, category: "islam", image: "", question: "Wie viele Säulen hat der Islam?", answers: ["3 Säulen", "4 Säulen", "5 Säulen", "6 Säulen"], correct: 2, explanation: "💡 Der Islam hat genau 5 Säulen: Schahada (Glaubensbekenntnis), Salah (Gebet), Zakat (Almosensteuer), Sawm (Fasten im Ramadan) und Haddsch (Pilgerreise)." },
    { id: 203, level: 1, category: "islam", image: "", question: "Wie heißt der heilige Fastenmonat im Islam?", answers: ["Muharram", "Ramadan", "Schawwal", "Rajab"], correct: 1, explanation: "💡 Der heilige Fastenmonat heißt Ramadan." },

    // ==========================================
    // KATEGORIE: KFZ LERNFELD 1 (kfz_lf1) - Wartung und Pflege
    // ==========================================
    { id: 8101, level: 1, category: "kfz_lf1", image: "", question: "LF 1: Welche Flüssigkeit muss regelmäßig auf Frostschutz geprüft werden?", answers: ["Motoröl", "Kühlflüssigkeit", "Bremsflüssigkeit", "Getriebeöl"], correct: 1, explanation: "💡 Die Kühlflüssigkeit schützt den Motor vor dem Einfrieren im Winter. Daher muss der Frostschutzgehalt regelmäßig mit einem Refraktometer geprüft werden." },
    { id: 8102, level: 1, category: "kfz_lf1", image: "", question: "LF 1: Wo liest man den korrekten Reifenfülldruck des Fahrzeugs ab?", answers: ["Auf der Reifenflanke", "Im Serviceheft", "Auf dem Aufkleber an der B-Säule oder Tankklappe", "Gibt es nicht"], correct: 2, explanation: "💡 Der fahrzeugspezifische Solldruck steht meistens auf einem Aufkleber im Einstieg der Fahrertür (B-Säule) oder im Tankdeckel." },
    { id: 8103, level: 2, category: "kfz_lf1", image: "", question: "LF 1: Wie hoch ist die gesetzliche Mindestprofiltiefe für Sommerreifen in Deutschland?", answers: ["1,0 mm", "1,6 mm", "3,0 mm", "4,0 mm"], correct: 1, explanation: "💡 Gesetzlich vorgeschrieben sind mindestens 1,6 mm. Empfohlen werden für Sommerreifen jedoch 3 mm und für Winterreifen 4 mm." },
    { id: 8104, level: 2, category: "kfz_lf1", image: "", question: "LF 1: Warum ist Bremsflüssigkeit hygroskopisch?", answers: ["Sie schmiert die Kolben", "Sie zieht Wasser aus der Umgebung an", "Sie verhindert Rost im Motor", "Sie erhöht den Siedepunkt"], correct: 1, explanation: "💡 Hygroskopisch bedeutet wasseranziehend. Da Bremsflüssigkeit Wasser aufnimmt, sinkt ihr Siedepunkt mit der Zeit, weshalb sie alle 2 Jahre gewechselt werden muss." },

    // ==========================================
    // KATEGORIE: KFZ LERNFELD 2 (kfz_lf2) - Baugruppen montieren & instandsetzen
    // ==========================================
    { id: 8201, level: 1, category: "kfz_lf2", image: "", question: "LF 2: Welches Prüfmittel misst das Ventilspiel am Verbrennungsmotor?", answers: ["Fühlerlehre", "Messschieber", "Bügelmessschraube", "Messuhr"], correct: 0, explanation: "💡 Mit den feinen Blechstreifen einer Fühlerlehre misst man das Spiel zwischen Nockenwelle und Ventil." },
    { id: 8202, level: 1, category: "kfz_lf2", image: "", question: "LF 2: Welches Werkzeug wird zum festen Anziehen von Zylinderkopfschrauben benötigt?", answers: ["Schlagschrauber", "Drehmomentschlüssel", "Ratsche", "Drehmomentschraubendreher"], correct: 1, explanation: "💡 Zylinderkopfschrauben müssen exakt nach Herstellervorgaben mit einem Drehmomentschlüssel (und oft einem zusätzlichen Drehwinkel) angezogen werden." },
    { id: 8203, level: 2, category: "kfz_lf2", image: "", question: "LF 2: Welcher Werkstoff hat die beste Wärmeleitfähigkeit für Zylinderköpfe?", answers: ["Grauguss", "Aluminium-Legierung", "Stahlguss", "Kohlenstoffstahl"], correct: 1, explanation: "💡 Aluminium-Legierungen leiten Wärme deutlich besser ab als Grauguss, was für die Kühlung moderner Motoren extrem wichtig ist." },

    // ==========================================
    // KATEGORIE: KFZ LERNFELD 3 (kfz_lf3) - Elektrische Systeme
    // ==========================================
    { id: 8301, level: 1, category: "kfz_lf3", image: "", question: "LF 3: Welches Messgerät wird verwendet, um die Spannung einer Autobatterie zu messen?", answers: ["Amperemeter", "Multimeter (Spannungsmessung)", "Ohmmeter", "Oszilloskop"], correct: 1, explanation: "💡 Mit einem Multimeter parallel zur Spannungsquelle (hier parallel zur Batterie) misst man die elektrische Spannung in Volt." },
    { id: 8302, level: 2, category: "kfz_lf3", image: "", question: "LF 3: Wie verhält sich der Gesamtwiderstand in einer Reihenschaltung von Widerständen?", answers: ["Er wird kleiner", "Er bleibt gleich", "Er ist die Summe der Einzelwiderstände", "Er halbiert sich"], correct: 2, explanation: "💡 In der Reihenschaltung addieren sich die Widerstände: $R_{ges} = R_1 + R_2 + R_3...$" },
    { id: 8303, level: 2, category: "kfz_lf3", image: "", question: "LF 3: Wie schließt man ein Strommessgerät (Amperemeter) zur Messung in einem Stromkreis an?", answers: ["Parallel zum Verbraucher", "In Reihe in den aufgetrennten Stromkreis", "Direkt an die Batteriepole parallel", "Gar nicht, das geht nur induktiv"], correct: 1, explanation: "💡 Stromstärkenmessungen müssen immer in Reihe durchgeführt werden, damit der gesamte Strom durch das Messgerät fließt." },

    // ==========================================
    // KATEGORIE: KFZ LERNFELD 4 (kfz_lf4) - Steuerungs- & Regelungssysteme
    // ==========================================
    { id: 8401, level: 1, category: "kfz_lf4", image: "", question: "LF 4: Was regelt das ABS-System bei einer Vollbremsung?", answers: ["Die Motorleistung", "Den Schlupf und das Blockieren der Räder", "Die Scheinwerferhöhe", "Die Klimaanlage"], correct: 1, explanation: "💡 Das Antiblockiersystem (ABS) verhindert das Blockieren der Räder bei einer Gefahrenbremsung, damit das Fahrzeug lenkbar bleibt." },
    { id: 8402, level: 2, category: "kfz_lf4", image: "", question: "LF 4: Welcher Sensor erfasst die Raddrehzahl für das Steuergerät?", answers: ["Klopfsensor", "Raddrehzahlsensor (aktiv/passiv)", "Ladedrucksensor", "Lambdasonde"], correct: 1, explanation: "💡 Raddrehzahlsensoren (häufig Hall-Sensoren oder induktive Geber) senden die Signale über die aktuelle Raddrehzahl an das ABS/ESP-Steuergerät." }
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