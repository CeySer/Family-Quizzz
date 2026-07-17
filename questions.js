const allQuestions = [
    { category: "klasse2_mathe", question: "Was ist 5 + 7?", answer: "12" },
    { category: "klasse2_mathe", question: "Was ist 15 - 8?", answer: "7" },
    { category: "klasse2_deutsch", question: "Wie schreibt man das Tier mit dem Rüssel?", answer: "Elefant" },
    { category: "klasse5_englisch", question: "Wie heißt 'Hund' auf Englisch?", answer: "dog" },
    { category: "kfz_lf1", question: "Welches Werkzeug braucht man zum Radwechsel?", answer: "Radkreuz" },
    { category: "kfz_lf2", question: "Aus wie vielen Takten besteht ein Viertaktmotor?", answer: "4" },
    { category: "kfz_lf3", question: "Was ist die Einheit für Spannung?", answer: "Volt" },
    { category: "kfz_lf4", question: "Welches Bauteil regelt die Motordrehzahl?", answer: "Steuergerät" },
    { category: "sprachen", question: "Wie sagt man 'Guten Tag' auf Türkisch?", answer: "Merhaba" },
    { category: "islam", question: "Wie viele Gebete gibt es am Tag?", answer: "5" }
];

function getCategoriesFor(mainCat) {
    const map = {
        schule2: [{ value: "klasse2_mathe", text: "🧮 Mathe" }, { value: "klasse2_deutsch", text: "📖 Deutsch" }],
        schule5: [{ value: "klasse5_englisch", text: "🇬🇧 Englisch" }],
        kfz: [
            { value: "kfz_lf1", text: "🔧 LF 1: Wartung" },
            { value: "kfz_lf2", text: "⚙️ LF 2: Motor" },
            { value: "kfz_lf3", text: "⚡ LF 3: Strom" },
            { value: "kfz_lf4", text: "💻 LF 4: Steuergeräte" }
        ],
        allgemein: [{ value: "sprachen", text: "🗣️ Sprachen" }, { value: "islam", text: "🕌 Islam" }]
    };
    return map[mainCat] || [];
}