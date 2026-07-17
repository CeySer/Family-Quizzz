// Vollständige Fragensammlung für das Family Quizzz mit Bild- und Erklärungs-Unterstützung
const allQuestions = [
    // ==========================================
    // KATEGORIE: KLASSE 2 - MATHE (klasse2_mathe)
    // ==========================================
    { id: 2001, level: 1, category: "klasse2_mathe", image: "", question: "Rechne aus: Was ist 25 + 14?", answers: ["35", "38", "39", "40"], correct: 2, explanation: "💡 Tipp: Rechne zuerst die Zehner zusammen (20 + 10 = 30) und dann die Einer (5 + 4 = 9). Zusammen ergibt das 39!" },
    { id: 2002, level: 1, category: "klasse2_mathe", image: "bilder/mathe_punkte.png", question: "Zähle die Punkte auf dem Bild: Was ist das Doppelte dieser Zahl?", answers: ["12", "14", "16", "18"], correct: 2, explanation: "💡 Das Doppelte bedeutet, dass du die Zahl mal 2 rechnest oder mit sich selbst plus nimmst. 8 + 8 ergibt 16!" },
    { id: 2003, level: 1, category: "klasse2_mathe", image: "", question: "Rechne aus: Was ist 45 - 20?", answers: ["15", "25", "35", "45"], correct: 1, explanation: "💡 Ziehe einfach 2 Zehner von den 4 Zehnern ab. Aus 40 wird 20, also ist das Ergebnis 25!" },
    { id: 2004, level: 1, category: "klasse2_mathe", image: "", question: "Was ergibt die Malaufgabe 2 * 5?", answers: ["7", "8", "10", "12"], correct: 2, explanation: "💡 2 * 5 ist das Gleiche wie 5 + 5. Das ergibt genau 10!" },
    { id: 2005, level: 1, category: "klasse2_mathe", image: "", question: "Was ist die Hälfte von 20?", answers: ["5", "10", "15", "20"], correct: 1, explanation: "💡 Wenn du 20 Murmeln gerecht an zwei Kinder verteilst, bekommt jeder genau 10 Stück!" },
    { id: 2006, level: 1, category: "klasse2_mathe", image: "", question: "Rechne aus: 3 * 3 = ?", answers: ["6", "8", "9", "12"], correct: 2, explanation: "💡 3 * 3 bedeutet: 3 + 3 + 3. Das macht zusammen 9!" },
    { id: 2007, level: 1, category: "klasse2_mathe", image: "", question: "Welche Zahl fehlt hier: 10, 20, 30, __, 50?", answers: ["35", "40", "45", "60"], correct: 1, explanation: "💡 Das ist die Zehner-Reihe. Nach der 30 kommt beim Vorwärtszählen immer die 40!" },
    { id: 2008, level: 2, category: "klasse2_mathe", image: "", question: "Rechne aus: 58 + 27?", answers: ["75", "85", "95", "83"], correct: 1, explanation: "💡 Am besten im Kopf aufteilen: 58 + 20 = 78. Danach zählst du noch 78 + 7 zusammen, das macht 85!" },
    { id: 2009, level: 2, category: "klasse2_mathe", image: "", question: "Was ergibt 32 geteilt durch 4?", answers: ["6", "7", "8", "9"], correct: 2, explanation: "💡 Denke an das Einmaleins: Da 8 * 4 genau 32 ergibt, ist 32 geteilt durch 4 exakt 8!" },

    // ==========================================
    // KATEGORIE: KLASSE 2 - DEUTSCH & MÄRCHEN (klasse2_deutsch)
    // ==========================================
    { id: 2101, level: 1, category: "klasse2_deutsch", image: "bilder/drache.jpg", question: "Welches Tier spuckte in alten Geschichten oft Feuer?", answers: ["Der Wolf", "Der Drache", "Der Bär", "Der Frosch"], correct: 1, explanation: "💡 Genau, es ist der Drache! In vielen Märchen bewacht er tapfer goldene Schätze oder hohe Königsschlösser." },
    { id: 2102, level: 1, category: "klasse2_deutsch", image: "", question: "In welchem Märchen schläft ein ganzes Schloss für 100 Jahre?", answers: ["Dornröschen", "Schneewittchen", "Aschenputtel", "Rapunzel"], correct: 0, explanation: "💡 Es ist Dornröschen! Weil sie sich an einer Spindel stach, fiel das ganze Schloss in einen tiefen Zauberschlaf." },
    { id: 2103, level: 1, category: "klasse2_deutsch", image: "", question: "Was ließ Rapunzel aus dem hohen Turm herunterfallen?", answers: ["Eine Strickleiter", "Ihre Haare", "Einen goldenen Ball", "Ein Seil"], correct: 1, explanation: "💡 Rapunzel hatte wunderschöne, extrem lange Haare. Der berühmte Spruch heißt: 'Rapunzel, lass dein Haar herunter!'" },
    { id: 2104, level: 1, category: "klasse2_deutsch", image: "", question: "Welches Wort ist ein Nomen (Namenwort)?", answers: ["laufen", "schön", "Das Haus", "schnell"], correct: 2, explanation: "💡 Das Haus ist ein Nomen! Nomen bezeichnen Gegenstände, Menschen oder Tiere und man schreibt sie immer groß." },

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
    { id: 8201, level: 1, category: "kfz_lf2", image: "", question: "LF 2: Welches Prüfmittel misst das Ventilspiel am Verbrennungsmotor?", answers: ["Fühlerlehre", "Messschieber", "Bügelmessschraube", "Messuhr"], correct: 0, explanation: "💡 Mit den feinen Blechstreifen einer Fühlerlehre misst man das Spiel zwischen Nockenwelle und Ventil." },
    { id: 8202, level: 1, category: "kfz_lf2", image: "", question: "LF 2: Welches Werkzeug wird zum festen Anziehen von Zylinderkopfschrauben benötigt?", answers: ["Schlagschrauber", "Drehmomentschlüssel", "Ratsche", "Drehmomentschraubendreher"], correct: 1, explanation: "💡 Zylinderkopfschrauben müssen exakt nach Herstellervorgaben mit einem Drehmomentschlüssel (und oft einem zusätzlichen Drehwinkel) angezogen werden." },

    // ==========================================
    // KATEGORIE: KFZ LERNFELD 3 (kfz_lf3) - Elektrische Systeme
    // ==========================================
    { id: 8301, level: 1, category: "kfz_lf3", image: "", question: "LF 3: Welches Messgerät wird verwendet, um die Spannung einer Autobatterie zu messen?", answers: ["Amperemeter", "Multimeter (Spannungsmessung)", "Ohmmeter", "Oszilloskop"], correct: 1, explanation: "💡 Mit einem Multimeter in Reihe/Parallelschaltung (hier parallel zur Batterie) misst man die elektrische Spannung in Volt." },
    { id: 8302, level: 2, category: "kfz_lf3", image: "", question: "LF 3: Wie verhält sich der Gesamtwiderstand in einer Reihenschaltung?", answers: ["Er wird kleiner", "Er bleibt gleich", "Er ist die Summe der Einzelwiderstände", "Er halbiert sich"], correct: 2, explanation: "💡 In der Reihenschaltung addieren sich die Widerstände: R_ges = R1 + R2 + R3..." },

    // ==========================================
    // KATEGORIE: KFZ LERNFELD 4 (kfz_lf4) - Steuerungs- & Regelungssysteme
    // ==========================================
    { id: 8401, level: 1, category: "kfz_lf4", image: "", question: "LF 4: Was regelt das ABS-System bei einer Vollbremsung?", answers: ["Die Motorleistung", "Den Schlupf und das Blockieren der Räder", "Die Scheinwerferhöhe", "Die Klimaanlage"], correct: 1, explanation: "💡 Das Antiblockiersystem (ABS) verhindert das Blockieren der Räder bei einer Gefahrenbremsung, damit das Fahrzeug lenkbar bleibt." }
];
```

---

### 2. Datei: `menu.html` (Mit neuer Themenaufteilung und dynamischen Fragenzählern)

Hier werden die Kategorien wunderschön aufgeteilt. Ein schickes JavaScript liest im Hintergrund deine `questions.js` aus und trägt unter jeden Button die echte Anzahl der darin befindlichen Fragen ein!

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hauptmenü - Family Quizzz</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-database-compat.js"></script>
    <style>
        .admin-panel { 
            background-color: #1f4068; 
            padding: 15px; 
            border-radius: 12px; 
            margin-bottom: 20px; 
            border: 2px dashed #ffd700; 
            text-align: left; 
        }
        .admin-q-list { 
            max-height: 250px; 
            overflow-y: auto; 
            background: #16213e; 
            padding: 10px; 
            border-radius: 8px; 
            margin-top: 10px; 
            font-size: 0.85rem; 
        }
        .admin-q-item { 
            border-bottom: 1px solid #333; 
            padding: 6px 0; 
        }
        .cat-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 15px !important;
            min-height: 85px;
            font-weight: bold;
            transition: all 0.2s ease-in-out;
        }
        .cat-count {
            font-size: 0.8rem;
            color: #ffd700;
            margin-top: 4px;
            opacity: 0.85;
            font-weight: normal;
        }
        .category-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 10px;
            margin-top: 8px;
        }
    </style>
</head>
<body>

<div class="container">
    <!-- ADMIN PANEL -->
    <div id="admin-box" class="admin-panel" style="display: none;">
        <h2 style="margin-top: 0; color: #ffd700;">👨‍🔧 Admin-Kontrollzentrum</h2>
        <p style="font-size: 0.85rem; color: #aaa;">Alle nummerierten Fragen im System:</p>
        <div class="admin-q-list" id="admin-questions-container">Lade Fragen...</div>
    </div>

    <!-- USER HEADER WITH BUTTONS -->
    <div class="user-profile-header" style="display: flex; align-items: center; justify-content: space-between; background: #16213e; padding: 10px 15px; border-radius: 12px; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 10px;">
            <div id="mini-avatar" style="font-size: 2rem;">🧑</div>
            <div>
                <span id="welcome-text" style="font-weight: bold; font-size: 1.2rem; color: #ff6b81;">Lade...</span><br>
                <span style="color: #ffd700; font-weight: bold;">🪙 <span id="menu-coins">0</span> Coins</span>
                <span id="user-age-tag" style="margin-left: 5px; color:#aaa; font-size:0.8rem;"></span>
            </div>
        </div>
        
        <!-- BUTTON BEREICH -->
        <div style="display: flex; gap: 5px;">
            <button style="background-color:#555; padding: 8px 10px; border-radius: 8px; color: white; border: none; cursor: pointer; font-weight: bold;" onclick="window.location.href='profile.html'">Profil ⚙️</button>
            <button style="background-color:#1368ce; padding: 8px 10px; border-radius: 8px; color: white; border: none; cursor: pointer; font-weight: bold;" id="shop-btn" onclick="window.location.href='avatar.html'">Shop 🎨</button>
            <button style="background-color:#e94560; padding: 8px 10px; border-radius: 8px; color: white; border: none; cursor: pointer; font-weight: bold;" onclick="logout()">Abmelden 🔄</button>
        </div>
    </div>

    <!-- RANGLISTE (FAIR-PLAY-SYSTEM) -->
    <div class="setup-section" style="background-color: #1a1a2e; padding: 15px; border-radius: 12px; border: 2px solid #ffd700; margin-bottom: 20px;">
        <div class="setup-title" style="color: #ffd700; text-align: center; margin-bottom: 2px;">🏆 Familien-Bestenliste 🏆</div>
        <p style="text-align: center; font-size: 0.75rem; color: #aaa; margin-top: 0;">(Faire Alters-Punkte: Jüngere bekommen mehr Sterne pro Frage!)</p>
        <div id="leaderboard-list" style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">Lade Rangliste...</div>
    </div>

    <!-- MODUS WÄHLEN -->
    <div class="setup-section">
        <div class="setup-title">1. Spiel-Modus wählen 🎮</div>
        <div class="option-group" style="display: flex; gap: 10px; margin-top: 8px;">
            <button class="opt-btn active" id="mode-play" onclick="setGameMode('spiel')" style="flex: 1; padding: 12px; border-radius: 8px; border: 2px solid #ff6b81; background: #ff6b81; color: white; font-weight: bold; cursor: pointer;">🏆 Spiel-Modus (Coins & Zeit)</button>
            <button class="opt-btn" id="mode-learn" onclick="setGameMode('lernen')" style="flex: 1; padding: 12px; border-radius: 8px; border: 2px solid #26890c; background: #16213e; color: white; font-weight: bold; cursor: pointer;">📖 Lern-Modus (15m Kisten)</button>
        </div>
    </div>

    <!-- KATEGORIEN WÄHLEN (THEMEN & LERNFELDER) -->
    <div class="setup-section" style="margin-top: 15px;">
        <div class="setup-title">2. Themen & Lernfelder wählen 🎒</div>
        <div class="category-grid">
            <!-- SCHULE KLASSE 2 -->
            <button class="opt-btn cat-btn active" id="cat-klasse2_mathe" onclick="toggleCategory('klasse2_mathe')">
                🏫 Klasse 2: Mathe
                <span class="cat-count" id="count-klasse2_mathe">0 Fragen</span>
            </button>
            <button class="opt-btn cat-btn" id="cat-klasse2_deutsch" onclick="toggleCategory('klasse2_deutsch')">
                🏫 Kl. 2: Deutsch
                <span class="cat-count" id="count-klasse2_deutsch">0 Fragen</span>
            </button>

            <!-- SCHULE KLASSE 5 -->
            <button class="opt-btn cat-btn" id="cat-klasse5_englisch" onclick="toggleCategory('klasse5_englisch')">
                🇬🇧 Klasse 5: Englisch
                <span class="cat-count" id="count-klasse5_englisch">0 Fragen</span>
            </button>

            <!-- SPRACHEN & ISLAM -->
            <button class="opt-btn cat-btn" id="cat-sprachen" onclick="toggleCategory('sprachen')">
                🗣️ Sprachen
                <span class="cat-count" id="count-sprachen">0 Fragen</span>
            </button>
            <button class="opt-btn cat-btn" id="cat-islam" onclick="toggleCategory('islam')">
                🕌 Islam
                <span class="cat-count" id="count-islam">0 Fragen</span>
            </button>

            <!-- KFZ MECHATRONIKER LERNFELDER -->
            <button class="opt-btn cat-btn" id="cat-kfz_lf1" onclick="toggleCategory('kfz_lf1')">
                🔧 KFZ LF 1: Wartung
                <span class="cat-count" id="count-kfz_lf1">0 Fragen</span>
            </button>
            <button class="opt-btn cat-btn" id="cat-kfz_lf2" onclick="toggleCategory('kfz_lf2')">
                🔧 KFZ LF 2: Motor
                <span class="cat-count" id="count-kfz_lf2">0 Fragen</span>
            </button>
            <button class="opt-btn cat-btn" id="cat-kfz_lf3" onclick="toggleCategory('kfz_lf3')">
                ⚡ KFZ LF 3: Elektrik
                <span class="cat-count" id="count-kfz_lf3">0 Fragen</span>
            </button>
            <button class="opt-btn cat-btn" id="cat-kfz_lf4" onclick="toggleCategory('kfz_lf4')">
                ⚙️ KFZ LF 4: Regler
                <span class="cat-count" id="count-kfz_lf4">0 Fragen</span>
            </button>
        </div>
    </div>

    <button onclick="startQuiz()" style="background: #26890c; color: white; padding: 18px; font-size: 1.3rem; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; width: 100%; margin-top: 20px;">Spiel starten! 🚀</button>
</div>

<script src="questions.js"></script>
<script>
    const firebaseConfig = {
        apiKey: "AIzaSyAy5YkfW99nY3t1CxxrFI5dlqe4w2NZfj4",
        authDomain: "family-quizzz-80c40.firebaseapp.com",
        databaseURL: "https://family-quizzz-80c40-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "family-quizzz-80c40",
        storageBucket: "family-quizzz-80c40.firebasestorage.app",
        messagingSenderId: "30751445599",
        appId: "1:30751445599:web:28636f46555f5df49881ea"
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    let playerName = sessionStorage.getItem("current_quiz_player");
    let currentPlayer = null;
    let selectedCategories = ["klasse2_mathe"];
    let gameMode = "spiel";

    function initMenu() {
        if (!playerName) { window.location.href = "index.html"; return; }

        // Fragenanzahlen berechnen und anzeigen
        calculateQuestionCounts();

        if (playerName.toLowerCase() === "admin") {
            document.getElementById("admin-box").style.display = "block";
            document.getElementById("welcome-text").innerText = "Chef (Admin)";
            document.getElementById("mini-avatar").innerText = "⚙️";
            document.getElementById("shop-btn").style.display = "none";
            loadAdminQuestions();
        } else {
            db.ref("players/" + playerName.toLowerCase()).on("value", (snapshot) => {
                currentPlayer = snapshot.val();
                if (!currentPlayer) return;

                document.getElementById("welcome-text").innerText = currentPlayer.name;
                document.getElementById("menu-coins").innerText = currentPlayer.coins || 0;
                document.getElementById("user-age-tag").innerText = `(${currentPlayer.age || '?'} J.)`;
                
                selectedCategories = currentPlayer.lastCategories || ["klasse2_mathe"];
                updateCategoryButtons();

                let base = currentPlayer.avatar ? currentPlayer.avatar.base || "🧑" : "🧑";
                let hat = currentPlayer.avatar ? currentPlayer.avatar.hat || "" : "";
                let glasses = currentPlayer.avatar ? currentPlayer.avatar.glasses || "" : "";
                document.getElementById("mini-avatar").innerText = `${base}${hat}${glasses}`;
            });
        }
        loadLeaderboard();
    }

    // Funktion zur Berechnung der Anzahl vorhandener Fragen
    function calculateQuestionCounts() {
        if (typeof allQuestions === "undefined" || !Array.isArray(allQuestions)) return;

        // Hilfsobjekt mit Zählern aufbauen
        const counts = {
            klasse2_mathe: 0,
            klasse2_deutsch: 0,
            klasse5_englisch: 0,
            sprachen: 0,
            islam: 0,
            kfz_lf1: 0,
            kfz_lf2: 0,
            kfz_lf3: 0,
            kfz_lf4: 0
        };

        allQuestions.forEach(q => {
            if (counts[q.category] !== undefined) {
                counts[q.category]++;
            }
        });

        // DOM mit den errechneten Werten füllen
        Object.keys(counts).forEach(cat => {
            const el = document.getElementById(`count-${cat}`);
            if (el) {
                el.innerText = counts[cat] === 1 ? "1 Frage" : `${counts[cat]} Fragen`;
            }
        });
    }

    function loadLeaderboard() {
        db.ref("players").orderByChild("rankPoints").on("value", (snapshot) => {
            const leaderboardContainer = document.getElementById("leaderboard-list");
            leaderboardContainer.innerHTML = "";
            let playersArray = [];

            snapshot.forEach((childSnapshot) => {
                let p = childSnapshot.val();
                if (p.name && p.name.toLowerCase() !== "admin") { playersArray.push(p); }
            });

            playersArray.sort((a, b) => (b.rankPoints || 0) - (a.rankPoints || 0));
            const medals = ["🥇", "🥈", "🥉"];

            playersArray.forEach((player, index) => {
                let rankBadge = medals[index] || `#${index + 1}`;
                let row = document.createElement("div");
                row.style.cssText = `display:flex; justify-content:space-between; align-items:center; padding:8px 12px; background:${index === 0 ? '#2a2400' : '#16213e'}; border:1px solid ${index === 0 ? '#ffd700' : '#1368ce'}; border-radius:8px; font-weight:bold;`;

                let base = player.avatar ? player.avatar.base || "🧑" : "🧑";
                let hat = player.avatar ? player.avatar.hat || "" : "";
                let glasses = player.avatar ? player.avatar.glasses || "" : "";

                row.innerHTML = `
                    <div style="display:flex; align-items:center; gap:8px;">
                        <span>${rankBadge}</span>
                        <span style="font-size:1.3rem;">${base}${hat}${glasses}</span>
                        <div>
                            <span style="color:white; font-size:0.95rem;">${player.name}</span>
                            <span style="font-size:0.7rem; color:#aaa; display:block;">(${player.age || '?'} J.)</span>
                        </div>
                    </div>
                    <div style="color:#ffd700; font-size:1rem;">⭐ ${player.rankPoints || 0} Pkt.</div>
                `;
                leaderboardContainer.appendChild(row);
            });
        });
    }

    function loadAdminQuestions() {
        const container = document.getElementById("admin-questions-container");
        container.innerHTML = "";
        if (typeof allQuestions !== "undefined" && allQuestions.length > 0) {
            allQuestions.forEach(q => {
                const item = document.createElement("div");
                item.className = "admin-q-item";
                item.innerHTML = `
                    <strong>[Frage #${q.id}]</strong> [${q.category.toUpperCase()}] 
                    <span style="color: #ff6b81;">${q.question}</span><br>
                    <span style="color: #26890c; font-size:0.8rem;">Richtige Antwort: ${q.answers[q.correct]}</span>
                `;
                container.appendChild(item);
            });
        }
    }

    function setGameMode(mode) {
        gameMode = mode;
        document.getElementById("mode-play").style.background = mode === 'spiel' ? '#ff6b81' : '#16213e';
        document.getElementById("mode-learn").style.background = mode === 'lernen' ? '#26890c' : '#16213e';
    }

    function toggleCategory(cat) {
        const idx = selectedCategories.indexOf(cat);
        if (idx > -1) {
            if (selectedCategories.length > 1) selectedCategories.splice(idx, 1);
        } else {
            selectedCategories.push(cat);
        }
        updateCategoryButtons();
        if (currentPlayer && playerName.toLowerCase() !== "admin") {
            db.ref("players/" + playerName.toLowerCase()).update({ lastCategories: selectedCategories });
        }
    }

    function updateCategoryButtons() {
        document.querySelectorAll('.cat-btn').forEach(btn => {
            const catId = btn.id.replace('cat-', '');
            if (selectedCategories.includes(catId)) {
                btn.style.background = '#1368ce'; btn.style.color = 'white';
            } else {
                btn.style.background = '#16213e'; btn.style.color = '#aaa';
            }
        });
    }

    function startQuiz() {
        sessionStorage.setItem("quiz_settings", JSON.stringify({ categories: selectedCategories, mode: gameMode }));
        window.location.href = "quiz.html";
    }

    function logout() { sessionStorage.clear(); window.location.href = "index.html"; }
    window.onload = initMenu;
</script>
</body>
</html>
```

---

### 3. Datei: `quiz.html` (Die Spielarena mit Erklärung nach Fehlern)

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Arena - Family Quizzz</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-database-compat.js"></script>
    <style>
        .quiz-image {
            max-width: 100%;
            max-height: 200px;
            border-radius: 10px;
            margin-bottom: 15px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            display: none;
        }
        .option-btn {
            padding: 15px;
            background: #1f4068;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: background 0.2s, opacity 0.2s;
            width: 100%;
        }
        .option-btn.correct-glow {
            background: #26890c !important;
            font-weight: bold;
        }
        .option-btn.wrong-glow {
            background: #e94560 !important;
        }
        .explanation-card {
            background: #1a1a2e;
            border-left: 5px solid #ffd700;
            padding: 15px;
            border-radius: 8px;
            margin-top: 15px;
            text-align: left;
            font-size: 1rem;
            color: #eee;
            line-height: 1.4;
            display: none;
        }
    </style>
</head>
<body>

<div class="container">
    <!-- BAR FÜR SCHATZKISTE -->
    <div id="learning-chest-bar" style="display: none; background: #1f4068; padding: 10px; border-radius: 10px; margin-bottom: 10px; text-align: center; border: 2px solid #ffd700; font-weight: bold; color: white;">
        🎁 Lernzeit bis zur epischen Schatzkiste: <span id="chest-timer-display">15:00</span> Min
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; color: white;">
        <button onclick="window.location.href='menu.html'" style="background: #555; color: white; border: none; padding: 8px 15px; border-radius: 8px; cursor: pointer;">Menü 🏠</button>
        <span style="font-size: 1.2rem; font-weight: bold; color: #ffd700;">🪙 <span id="quiz-coins">0</span></span>
    </div>

    <div id="quiz-box" style="background: #16213e; padding: 20px; border-radius: 15px; text-align: center; color: white;">
        <!-- BILD-ANZEIGE -->
        <img id="question-image" class="quiz-image" src="" alt="Quiz Bild">
        
        <h2 id="question-text" style="color: #ff6b81; margin-top: 5px;">Lade Frage...</h2>
        <div id="options-container" style="display: flex; flex-direction: column; gap: 10px; margin-top: 20px;"></div>
        
        <!-- DYNAMISCHE ERKLÄRUNGS-BOX -->
        <div id="explanation-box" class="explanation-card"></div>
        
        <!-- FORTFAHREN BUTTON -->
        <button id="next-btn" style="display: none; margin-top: 20px; background: #ffd700; color: #111; font-weight: bold; border: none; padding: 15px; border-radius: 10px; font-size: 1.1rem; width: 100%; cursor: pointer;" onclick="nextQuestion()">Nächste Frage ➔</button>
    </div>
</div>

<!-- KISTEN-OVERLAY -->
<div id="chest-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10,10,25,0.95); z-index: 1000; flex-direction: column; align-items: center; justify-content: center; color: white; text-align: center;">
    <h1 style="color: #ffd700; font-size: 2.2rem; margin-bottom: 20px;">🎉 15 MINUTEN GELERNT! 🎉</h1>
    <div id="chest-emoji" style="font-size: 7rem; cursor: pointer;" onclick="openChest()">🎁</div>
    <p id="chest-instruction" style="color: #aaa; margin-top: 15px;">Klicke auf das Geschenk, um es zu öffnen!</p>
    
    <div id="reward-display" style="display: none; margin-top: 20px;">
        <h2 style="color: #ff6b81;">Neues episches Item freigeschaltet!</h2>
        <div id="reward-emoji" style="font-size: 5rem; margin: 15px 0;">👑</div>
        <h3 id="reward-name" style="color: #ffd700;">Goldene Krone</h3>
        <button onclick="closeChestAndContinue()" style="background: #26890c; color: white; border: none; padding: 12px 30px; border-radius: 8px; font-size: 1.1rem; cursor: pointer; margin-top: 20px;">Genial! Weiter ➔</button>
    </div>
</div>

<script src="questions.js"></script>
<script>
    const firebaseConfig = {
        apiKey: "AIzaSyAy5YkfW99nY3t1CxxrFI5dlqe4w2NZfj4",
        authDomain: "family-quizzz-80c40.firebaseapp.com",
        databaseURL: "https://family-quizzz-80c40-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "family-quizzz-80c40",
        storageBucket: "family-quizzz-80c40.firebasestorage.app",
        messagingSenderId: "30751445599",
        appId: "1:30751445599:web:28636f46555f5df49881ea"
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    let playerName = sessionStorage.getItem("current_quiz_player");
    let settings = JSON.parse(sessionStorage.getItem("quiz_settings")) || { categories: ["klasse2_mathe"], mode: "spiel" };
    let currentPlayer = null;
    let currentQuestionIndex = 0;
    let filteredQuestions = [];
    let hasAnswered = false;

    let learningSeconds = 0;
    let learningInterval;
    const SECONDS_NEEDED_FOR_CHEST = 900;

    db.ref("players/" + (playerName ? playerName.toLowerCase() : "")).on("value", (snapshot) => {
        currentPlayer = snapshot.val();
        if (currentPlayer) {
            document.getElementById("quiz-coins").innerText = currentPlayer.coins || 0;
            if (!currentPlayer.unlockedHats) currentPlayer.unlockedHats = [];
            if (!currentPlayer.unlockedGlasses) currentPlayer.unlockedGlasses = [];
        }
    });

    function initQuiz() {
        if (typeof allQuestions === "undefined" || !Array.isArray(allQuestions) || allQuestions.length === 0) {
            document.getElementById("question-text").innerText = "❌ Fehler: 'questions.js' fehlt!";
            return;
        }

        filteredQuestions = allQuestions.filter(q => settings.categories.includes(q.category));
        if (filteredQuestions.length === 0) filteredQuestions = allQuestions;

        showQuestion();
        if (settings.mode === "lernen" && playerName) startLearningTimer();
    }

    function showQuestion() {
        if (filteredQuestions.length === 0) return;
        hasAnswered = false;
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("explanation-box").style.display = "none";

        let q = filteredQuestions[currentQuestionIndex];
        document.getElementById("question-text").innerText = `[#${q.id}] ${q.question}`;
        
        // BILD LOGIK
        let imgEl = document.getElementById("question-image");
        if (q.image && q.image.trim() !== "") {
            imgEl.src = q.image;
            imgEl.style.display = "inline-block";
        } else {
            imgEl.style.display = "none";
            imgEl.src = "";
        }

        let container = document.getElementById("options-container");
        container.innerHTML = "";

        q.answers.forEach((ans, idx) => {
            let btn = document.createElement("button");
            btn.innerText = ans;
            btn.className = "option-btn";
            btn.onclick = () => handleAnswer(btn, idx, q.correct, q.explanation);
            container.appendChild(btn);
        });
    }

    function handleAnswer(clickedBtn, selectedIdx, correctIdx, explanationText) {
        if (hasAnswered) return;
        hasAnswered = true;

        let isCorrect = (selectedIdx === correctIdx);
        let buttons = document.querySelectorAll(".option-btn");

        buttons.forEach((btn, idx) => {
            btn.style.opacity = "0.4";
            if (idx === correctIdx) {
                btn.className = "option-btn correct-glow";
                btn.style.opacity = "1";
            }
        });

        if (isCorrect) {
            if (playerName && playerName.toLowerCase() !== "admin") {
                let age = currentPlayer ? currentPlayer.age || 10 : 10;
                let multiplier = age < 8 ? 5 : (age <= 10 ? 3 : (age <= 14 ? 2 : 1));
                
                db.ref("players/" + playerName.toLowerCase()).transaction((p) => {
                    if (p) {
                        p.coins = (p.coins || 0) + 10;
                        p.rankPoints = (p.rankPoints || 0) + (1 * multiplier);
                    }
                    return p;
                });
                confetti({ particleCount: 40, spread: 40 });
            }
            setTimeout(nextQuestion, 1200);
        } else {
            clickedBtn.className = "option-btn wrong-glow";
            clickedBtn.style.opacity = "1";
            
            let expBox = document.getElementById("explanation-box");
            expBox.innerText = explanationText || "💡 Schade! Beim nächsten Mal klappt es bestimmt.";
            expBox.style.display = "block";
            
            document.getElementById("next-btn").style.display = "block";
        }
    }

    function nextQuestion() {
        currentQuestionIndex = (currentQuestionIndex + 1) % filteredQuestions.length;
        showQuestion();
    }

    function startLearningTimer() {
        document.getElementById("learning-chest-bar").style.display = "block";
        db.ref("players/" + playerName.toLowerCase() + "/learningProgress").once("value", (snapshot) => {
            learningSeconds = snapshot.val() || 0;
            updateChestDisplay();

            learningInterval = setInterval(() => {
                learningSeconds++;
                updateChestDisplay();
                if (learningSeconds % 10 === 0) {
                    db.ref("players/" + playerName.toLowerCase() + "/learningProgress").set(learningSeconds);
                }
                if (learningSeconds >= SECONDS_NEEDED_FOR_CHEST) {
                    clearInterval(learningInterval);
                    document.getElementById("chest-overlay").style.display = "flex";
                }
            }, 1000);
        });
    }

    function updateChestDisplay() {
        let remaining = Math.max(0, SECONDS_NEEDED_FOR_CHEST - learningSeconds);
        let mins = Math.floor(remaining / 60);
        let secs = remaining % 60;
        document.getElementById("chest-timer-display").innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function openChest() {
        const epicHats = [{ id: "halo", label: "Heiligenschein 😇", emoji: "😇" }, { id: "ninja", label: "Ninja-Stirnband 🥷", emoji: "🥷" }];
        let prize = epicHats[Math.floor(Math.random() * epicHats.length)];

        if (!currentPlayer.unlockedHats.includes(prize.id)) currentPlayer.unlockedHats.push(prize.id);
        if (!currentPlayer.avatar) currentPlayer.avatar = {};
        currentPlayer.avatar.hat = prize.emoji;

        db.ref("players/" + playerName.toLowerCase()).set(currentPlayer);
        db.ref("players/" + playerName.toLowerCase() + "/learningProgress").set(0);

        document.getElementById("chest-emoji").style.display = "none";
        document.getElementById("chest-instruction").style.display = "none";
        document.getElementById("reward-emoji").innerText = prize.emoji;
        document.getElementById("reward-name").innerText = prize.label;
        document.getElementById("reward-display").style.display = "block";
        confetti({ particleCount: 100, spread: 70 });
    }

    function closeChestAndContinue() {
        document.getElementById("chest-overlay").style.display = "none";
        learningSeconds = 0;
        startLearningTimer();
    }

    window.onload = initQuiz;
</script>
</body>
</html>
```

---

### 4. Datei: `index.html` (Mit neuem Kategorien-Standard beim Anmelden)

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Özdemir Familien-Quiz - Login</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-database-compat.js"></script>
    <style>
        .profile-container { margin-bottom: 20px; background-color: #16213e; padding: 15px; border-radius: 15px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); }
        .profile-grid { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-top: 15px; }
        .profile-card { background-color: #1a1a2e; border: 3px solid #1368ce; border-radius: 12px; padding: 12px; width: 95px; text-align: center; cursor: pointer; transition: transform 0.2s; }
        .profile-card:hover { transform: scale(1.05); border-color: #ff6b81; }
        .profile-avatar-wrapper { position: relative; width: 65px; height: 95px; background-color: #16213e; border-radius: 10px; margin: 0 auto 8px auto; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 2px solid #e94560; }
        .profile-name { font-weight: bold; font-size: 1rem; color: white; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .profile-coins { font-size: 0.8rem; color: #ffd700; margin-top: 3px; }
        .divider { margin: 20px 0; color: #555; display: flex; align-items: center; justify-content: center; font-weight: bold; }
        .divider::before, .divider::after { content: ""; flex: 1; height: 1px; background: #333; margin: 0 15px; }
        .age-input-container { margin-top: 10px; margin-bottom: 15px; }
        #age-input { width: 100%; max-width: 320px; padding: 14px; font-size: 1.15rem; border: 2px solid #1368ce; border-radius: 8px; background-color: #16213e; color: white; text-align: center; box-sizing: border-box; }
    </style>
</head>
<body>

<div class="container" id="login-screen">
    <h1 class="main-title">Özdemir Familien-Quiz 🎮</h1>
    
    <!-- BESTEHENDE PROFILE -->
    <div class="profile-container" id="existing-profiles-box" style="display: none;">
        <div class="setup-title" style="margin-bottom: 5px;">Wer spielt heute? 👤</div>
        <p style="color: #aaa; font-size: 0.85rem; margin-bottom: 15px;">Tippe auf dein Profil, um direkt loszulegen!</p>
        <div class="profile-grid" id="profile-grid"></div>
    </div>

    <div class="divider" id="profile-divider" style="display: none;">ODER</div>

    <!-- NEU ANMELDEN -->
    <div class="setup-section">
        <div class="setup-title" id="new-player-title">Neuen Spieler anmelden ✍️</div>
        <p style="color: #aaa; font-size: 0.85rem; margin-bottom: 5px;">Gib deinen Namen und dein Alter an:</p>
        
        <input type="text" id="username-input" placeholder="Dein Name..." autocomplete="off"><br>
        
        <div class="age-input-container">
            <input type="number" id="age-input" placeholder="Dein Alter (z.B. 8)..." min="1" max="99">
        </div>
        
        <button id="login-btn" onclick="handleLogin()">Anmelden & Weiter 🚀</button>
    </div>
</div>

<script>
    const firebaseConfig = {
        apiKey: "AIzaSyAy5YkfW99nY3t1CxxrFI5dlqe4w2NZfj4",
        authDomain: "family-quizzz-80c40.firebaseapp.com",
        databaseURL: "https://family-quizzz-80c40-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "family-quizzz-80c40",
        storageBucket: "family-quizzz-80c40.firebasestorage.app",
        messagingSenderId: "30751445599",
        appId: "1:30751445599:web:28636f46555f5df49881ea"
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    function listenToProfiles() {
        db.ref("players").on("value", (snapshot) => {
            const players = snapshot.val();
            const grid = document.getElementById("profile-grid");
            grid.innerHTML = "";

            if (players) {
                document.getElementById("existing-profiles-box").style.display = "block";
                document.getElementById("profile-divider").style.display = "flex";

                Object.keys(players).forEach(key => {
                    const playerData = players[key];
                    if (playerData.name && playerData.name.toLowerCase() === "admin") return;

                    const card = document.createElement("div");
                    card.className = "profile-card";
                    card.onclick = () => loginAs(playerData.name);

                    let base = playerData.avatar ? playerData.avatar.base || "🧑" : "🧑";
                    let hat = playerData.avatar ? playerData.avatar.hat || "" : "";
                    let glasses = playerData.avatar ? playerData.avatar.glasses || "" : "";

                    card.innerHTML = `
                        <div class="profile-avatar-wrapper">
                            <span style="font-size: 2rem;">${base}${hat}${glasses}</span>
                        </div>
                        <div class="profile-name">${playerData.name}</div>
                        <div class="profile-coins">🪙 ${playerData.coins || 0}</div>
                        <div style="font-size:0.75rem; color:#aaa; margin-top:2px;">⭐ ${playerData.rankPoints || 0} Pkt.</div>
                    `;
                    grid.appendChild(card);
                });
            }
        });
    }

    function loginAs(name) {
        sessionStorage.setItem("current_quiz_player", name);
        window.location.href = "menu.html";
    }

    function handleLogin() {
        const input = document.getElementById("username-input");
        const ageInput = document.getElementById("age-input");
        const name = input.value.trim();
        const age = parseInt(ageInput.value);

        if (!name) { alert("Bitte gib deinen Namen ein!"); return; }

        if (name.toLowerCase() === "admin") {
            sessionStorage.setItem("current_quiz_player", "Admin");
            window.location.href = "menu.html";
            return;
        }

        if (!age || age < 1) { alert("Bitte gib ein gültiges Alter an!"); return; }

        sessionStorage.setItem("current_quiz_player", name);
        let nameKey = name.toLowerCase();

        db.ref("players/" + nameKey).once("value", (snapshot) => {
            if (!snapshot.exists()) {
                let newPlayer = {
                    name: name,
                    age: age,
                    coins: 0,
                    rankPoints: 0,
                    avatar: { base: "🧑", hat: "", glasses: "" },
                    unlockedHats: ["cap"],
                    unlockedGlasses: ["nerd"],
                    lastCategories: ["klasse2_mathe"],
                    learningProgress: 0
                };
                db.ref("players/" + nameKey).set(newPlayer, () => {
                    window.location.href = "avatar.html";
                });
            } else {
                db.ref("players/" + nameKey).update({ age: age }, () => {
                    window.location.href = "menu.html";
                });
            }
        });
    }

    window.onload = listenToProfiles;
</script>
</body>
</html>
```

---

### 5. Datei: `profile.html` (Unverändert & Kompatibel)

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profil bearbeiten - Family Quizzz</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-database-compat.js"></script>
</head>
<body>

<div class="container" style="text-align: center; max-width: 400px; margin: 0 auto; padding: 20px;">
    <h2 style="color: #ff6b81;">Profil bearbeiten ⚙️</h2>
    
    <div style="background: #16213e; padding: 20px; border-radius: 12px; text-align: left; margin-bottom: 20px;">
        <label style="color: #aaa; font-size: 0.9rem;">Dein Name:</label>
        <input type="text" id="profile-name" style="width:100%; padding:12px; border-radius:8px; border:2px solid #1368ce; background:#1a1a2e; color:white; font-size:1rem; margin:8px 0 18px 0; box-sizing:border-box;">
        
        <label style="color: #aaa; font-size: 0.9rem;">Dein Alter (für faire Punkte):</label>
        <input type="number" id="profile-age" min="1" max="99" style="width:100%; padding:12px; border-radius:8px; border:2px solid #1368ce; background:#1a1a2e; color:white; font-size:1rem; margin:8px 0 0 0; box-sizing:border-box;">
    </div>

    <button onclick="saveProfile()" style="background-color: #26890c; color:white; padding:15px; border:none; border-radius:10px; width:100%; font-size:1.1rem; font-weight:bold; cursor:pointer; margin-bottom: 10px;">Speichern & zurück 💾</button>
    <button onclick="window.location.href='menu.html'" style="background-color: #555; color:white; padding:12px; border:none; border-radius:10px; width:100%; font-size:1rem; cursor:pointer;">Abbrechen ❌</button>
</div>

<script>
    const firebaseConfig = {
        apiKey: "AIzaSyAy5YkfW99nY3t1CxxrFI5dlqe4w2NZfj4",
        authDomain: "family-quizzz-80c40.firebaseapp.com",
        databaseURL: "https://family-quizzz-80c40-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "family-quizzz-80c40",
        storageBucket: "family-quizzz-80c40.firebasestorage.app",
        messagingSenderId: "30751445599",
        appId: "1:30751445599:web:28636f46555f5df49881ea"
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();
    let oldName = sessionStorage.getItem("current_quiz_player");

    if (!oldName) { window.location.href = "index.html"; }

    let oldKey = oldName.toLowerCase();
    let playerData = null;

    db.ref("players/" + oldKey).once("value", (snapshot) => {
        playerData = snapshot.val();
        if (playerData) {
            document.getElementById("profile-name").value = playerData.name || oldName;
            document.getElementById("profile-age").value = playerData.age || "";
        }
    });

    function saveProfile() {
        let newName = document.getElementById("profile-name").value.trim();
        let newAge = parseInt(document.getElementById("profile-age").value);

        if (!newName) { alert("Bitte gib einen Namen ein!"); return; }
        if (!newAge || newAge < 1) { alert("Bitte gib ein gültiges Alter ein!"); return; }

        let newKey = newName.toLowerCase();

        if (newKey !== oldKey) {
            db.ref("players/" + newKey).once("value", (snapshot) => {
                if (snapshot.exists()) {
                    alert("Dieser Name ist bereits vergeben!");
                } else {
                    playerData.name = newName;
                    playerData.age = newAge;

                    db.ref("players/" + newKey).set(playerData, () => {
                        db.ref("players/" + oldKey).remove(() => {
                            sessionStorage.setItem("current_quiz_player", newName);
                            window.location.href = "menu.html";
                        });
                    });
                }
            });
        } else {
            db.ref("players/" + oldKey).update({ age: newAge }, () => {
                window.location.href = "menu.html";
            });
        }
    }
</script>
</body>
</html>