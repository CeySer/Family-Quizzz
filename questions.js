// Vollständige Fragensammlung für das Family Quizzz
const allQuestions = [
    // ==========================================
    // KATEGORIE: KLASSE 2 - MATHE (klasse2_mathe)
    // ==========================================
    { id: 2001, level: 1, category: "klasse2_mathe", image: "", question: "Rechne aus: Was ist 25 + 14?", answers: ["35", "38", "39", "40"], correct: 2, explanation: "💡 Tipp: 20+10=30 und 5+4=9. Zusammen 39!" },
    { id: 2002, level: 1, category: "klasse2_mathe", image: "", question: "Was ist das Doppelte von 8?", answers: ["12", "14", "16", "18"], correct: 2, explanation: "💡 8 + 8 ergibt 16." },
    { id: 2003, level: 1, category: "klasse2_mathe", image: "", question: "Rechne aus: 45 - 20?", answers: ["15", "25", "35", "45"], correct: 1, explanation: "💡 45 minus 20 ist 25." },

    // ==========================================
    // KATEGORIE: KLASSE 2 - DEUTSCH (klasse2_deutsch)
    // ==========================================
    { id: 2101, level: 1, category: "klasse2_deutsch", image: "", question: "Welches Tier spuckt Feuer?", answers: ["Wolf", "Drache", "Bär", "Frosch"], correct: 1, explanation: "💡 Es ist der Drache!" },
    { id: 2102, level: 1, category: "klasse2_deutsch", image: "", question: "Wer schlief 100 Jahre?", answers: ["Dornröschen", "Schneewittchen", "Aschenputtel", "Rapunzel"], correct: 0, explanation: "💡 Dornröschen hat 100 Jahre geschlafen." },

    // ==========================================
    // KATEGORIE: KLASSE 5 - ENGLISCH (klasse5_englisch)
    // ==========================================
    { id: 5001, level: 1, category: "klasse5_englisch", image: "", question: "What is 15 in English?", answers: ["5", "15", "50", "115"], correct: 1, explanation: "💡 Fifteen is 15." },
    { id: 5002, level: 1, category: "klasse5_englisch", image: "", question: "Translate 'Klassenzimmer'", answers: ["classroom", "schoolbag", "playground", "teacherroom"], correct: 0, explanation: "💡 Classroom." },

    // ==========================================
    // KATEGORIE: SPRACHEN (sprachen)
    // ==========================================
    { id: 101, level: 1, category: "sprachen", image: "", question: "Was bedeutet 'Seni seviyorum'?", answers: ["Guten Appetit", "Ich liebe dich", "Gute Nacht", "Tschüss"], correct: 1, explanation: "💡 Das bedeutet 'Ich liebe dich'." },
    { id: 102, level: 1, category: "sprachen", image: "", question: "Was bedeutet 'Baba'?", answers: ["Opa", "Onkel", "Vater", "Bruder"], correct: 2, explanation: "💡 Baba bedeutet Vater." },

    // ==========================================
    // KATEGORIE: ISLAM (islam)
    // ==========================================
    { id: 201, level: 1, category: "islam", image: "", question: "Wer ist der letzte Gesandte?", answers: ["Ibrahim", "Isa", "Musa", "Muhammad"], correct: 3, explanation: "💡 Muhammad (s.a.w.) ist der letzte Gesandte." },

    // ==========================================
    // KATEGORIE: KFZ LERNFELD 1 (kfz_lf1)
    // ==========================================
    { id: 8101, level: 1, category: "kfz_lf1", image: "", question: "Welche Flüssigkeit prüft man auf Frostschutz?", answers: ["Öl", "Kühlflüssigkeit", "Bremsflüssigkeit", "Getriebeöl"], correct: 1, explanation: "💡 Kühlflüssigkeit schützt vor Frost." },
    { id: 8102, level: 1, category: "kfz_lf1", image: "", question: "Wo steht der Reifendruck?", answers: ["Serviceheft", "Aufkleber B-Säule", "Reifenflanke", "Gibt es nicht"], correct: 1, explanation: "💡 Auf dem Aufkleber an der B-Säule oder im Tankdeckel." },

    // ==========================================
    // KATEGORIE: KFZ LERNFELD 2 (kfz_lf2)
    // ==========================================
    { id: 8201, level: 1, category: "kfz_lf2", image: "", question: "Werkzeug für Ventilspiel?", answers: ["Fühlerlehre", "Messschieber", "Bügelmessschraube", "Messuhr"], correct: 0, explanation: "💡 Mit einer Fühlerlehre misst man das Ventilspiel." },
    { id: 8202, level: 1, category: "kfz_lf2", image: "", question: "Werkzeug für Zylinderkopfschrauben?", answers: ["Schlagschrauber", "Drehmomentschlüssel", "Ratsche", "Drehmomentschraubendreher"], correct: 1, explanation: "💡 Immer einen Drehmomentschlüssel nutzen." },

    // ==========================================
    // KATEGORIE: KFZ LERNFELD 3 (kfz_lf3)
    // ==========================================
    { id: 8301, level: 1, category: "kfz_lf3", image: "", question: "Messgerät für Spannung?", answers: ["Amperemeter", "Multimeter", "Ohmmeter", "Oszilloskop"], correct: 1, explanation: "💡 Mit einem Multimeter misst man Spannung in Volt." },
    { id: 8302, level: 1, category: "kfz_lf3", image: "", question: "Widerstand in Reihe?", answers: ["kleiner", "gleich", "Summe Einzelwiderstände", "halbiert"], correct: 2, explanation: "💡 R_ges = R1 + R2 + R3..." },

    // ==========================================
    // KATEGORIE: KFZ LERNFELD 4 (kfz_lf4)
    // ==========================================
    { id: 8401, level: 1, category: "kfz_lf4", image: "", question: "Was regelt das ABS?", answers: ["Motorleistung", "Blockieren der Räder", "Scheinwerfer", "Klimaanlage"], correct: 1, explanation: "💡 ABS verhindert das Blockieren der Räder." }
];

// Hilfsfunktion für das Menü
function getCategoriesFor(mainCat) {
    const map = {
        schule2: [
            { value: "klasse2_mathe", text: "🧮 Mathematik" },
            { value: "klasse2_deutsch", text: "📖 Deutsch & Märchen" }
        ],
        schule5: [
            { value: "klasse5_englisch", text: "🇬🇧 Englisch" }
        ],
        kfz: [
            { value: "kfz_lf1", text: "🔧 KFZ LF 1: Wartung" },
            { value: "kfz_lf2", text: "⚙️ KFZ LF 2: Baugruppen" },
            { value: "kfz_lf3", text: "⚡ KFZ LF 3: Elektrik" },
            { value: "kfz_lf4", text: "💻 KFZ LF 4: Regler" }
        ],
        allgemein: [
            { value: "sprachen", text: "🗣️ Sprachen" },
            { value: "islam", text: "🕌 Islam" }
        ]
    };
    return map[mainCat] || [];
}