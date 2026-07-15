// Hilfsdatei, um allQuestions auch für das Admin-Dashboard in menu.html verfügbar zu machen.
const allQuestions = [
    // --- SPRACHEN (IDs 101+) ---
    { id: 101, level: 1, category: "sprachen", question: "Was bedeutet der Satz 'Seni seviyorum'?", answers: ["Guten Appetit", "Ich liebe dich", "Wie geht es dir?", "Gute Nacht"], correct: 1 },
    { id: 102, level: 1, category: "sprachen", question: "Was bedeutet das Wort 'Baba' auf Türkisch?", answers: ["Opa", "Bruder", "Vater", "Onkel"], correct: 2 },
    { id: 103, level: 1, category: "sprachen", question: "Wie bedankt man sich auf Türkisch?", answers: ["Merhaba", "Teşekkür ederim", "Lütfen", "Rica ederim"], correct: 1 },
    { id: 104, level: 2, category: "sprachen", question: "Was bedeutet das englische Wort 'Environment'?", answers: ["Familie", "Nachbarschaft", "Umwelt", "Entwicklung"], correct: 2 },
    { id: 105, level: 3, category: "sprachen", question: "Was bedeutet 'Teşekkürler, iyiyim. Sen nasılsın?'?", answers: ["Danke, mir geht's gut. Wie geht es dir?", "Guten Morgen, mein Freund.", "Ich möchte bitte schlafen.", "Wo ist der nächste Laden?"], correct: 0 },

    // --- ISLAM (IDs 201+) ---
    { id: 201, level: 1, category: "islam", question: "Wer ist der letzte Gesandte im Islam?", answers: ["Prophet Ibrahim", "Prophet Isa", "Prophet Musa", "Prophet Muhammad"], correct: 3 },
    { id: 202, level: 1, category: "islam", question: "Wie heißt das heilige Buch im Islam?", answers: ["Tora", "Evangelium", "Koran", "Psalmen"], correct: 2 },
    { id: 203, level: 2, category: "islam", question: "Wie viele Pflichtgebete verrichtet ein Muslim am Tag?", answers: ["3 Gebete", "4 Gebete", "5 Gebete", "6 Gebete"], correct: 2 },
    { id: 204, level: 2, category: "islam", question: "Wie heißt das Mittagsgebet auf Arabisch?", answers: ["Fajr", "Dhuhr", "Asr", "Isha"], correct: 1 },
    { id: 205, level: 3, category: "islam", question: "In welchem Jahr der christlichen Zeitrechnung fand die Hidschra (Auswanderung) statt?", answers: ["570 n. Chr.", "610 n. Chr.", "622 n. Chr.", "632 n. Chr."], correct: 2 },

    // --- SCHULE 2. KLASSE (IDs 301+) ---
    { id: 301, level: 1, category: "klasse2", question: "Rechne aus: Was ergibt 12 + 7?", answers: ["15", "18", "19", "20"], correct: 2 },
    { id: 302, level: 1, category: "klasse2", question: "Welches Wort reimt sich auf 'Maus'?", answers: ["Brot", "Haus", "Katze", "Milch"], correct: 1 },
    { id: 303, level: 2, category: "klasse2", question: "Wie viele Monate hat ein ganzes Jahr?", answers: ["4 Monate", "10 Monate", "12 Monate", "24 Monate"], correct: 2 },
    { id: 304, level: 2, category: "klasse2", question: "Rechne aus: Was ist 30 minus 12?", answers: ["16", "18", "20", "22"], correct: 1 },
    { id: 305, level: 3, category: "klasse2", question: "Welches Tier legt Eier und ist kein Vogel?", answers: ["Fledermaus", "Krokodil", "Hund", "Delfin"], correct: 1 },

    // --- SCHULE 4. KLASSE (IDs 401+) ---
    { id: 401, level: 1, category: "klasse4", question: "Welches Wort ist ein Nomen (Substantiv)?", answers: ["schnell", "laufen", "Der Baum", "schön"], correct: 2 },
    { id: 402, level: 1, category: "klasse4", question: "Mathe: Was ergibt 120 x 3?", answers: ["320", "360", "400", "420"], correct: 1 },
    { id: 403, level: 2, category: "klasse4", question: "Welcher Fluss fließt durch Köln?", answers: ["Donau", "Elbe", "Rhein", "Weser"], correct: 2 },
    { id: 404, level: 2, category: "klasse4", question: "Wie heißt die Hauptstadt von Frankreich?", answers: ["Madrid", "Paris", "Rom", "London"], correct: 1 },
    { id: 405, level: 3, category: "klasse4", question: "Wie nennt man die sprachliche Vergangenheitsform (z.B. 'ich ging')?", answers: ["Präsens", "Perfekt", "Präteritum", "Futur I"], correct: 2 },

    // --- KFZ MECHATRONIKER (IDs 501+) ---
    { id: 501, level: 1, category: "kfz", question: "LF 2: Welches Prüfmittel eignet sich zum Messen von Ventilspiel?", answers: ["Fühlerlehre", "Messschieber", "Bügelmessschraube", "Messuhr"], correct: 0 },
    { id: 502, level: 1, category: "kfz", question: "LF 3: Wie schaltet man ein Voltmeter zur Spannungsmessung?", answers: ["In Reihe", "Parallel", "In Brücke", "Als Shunt"], correct: 1 },
    { id: 503, level: 2, category: "kfz", question: "LF 4: Was bedeutet die Reifenbezeichnung '91V'?", answers: ["Reifenbreite und Felgenbett", "Tragfähigkeitsindex und Geschwindigkeitsindex", "Herstellungsdatum", "Maximaler Reifendruck"], correct: 1 },
    { id: 504, level: 3, category: "kfz", question: "LF 3: Welche Formel berechnet die elektrische Leistung (P)?", answers: ["P = U * I", "P = R * I", "P = U / I", "P = W * t"], correct: 0 }
];