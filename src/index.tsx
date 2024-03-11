import ReactDOM from "react-dom/client";

import App from "./App";

i18next
.init({
    interpolation: {escapeValue: false},
    lng: "de",
    react: {
        useSuspense: false
      },
    resources: {
        en: {
            global: {
                "introPage1": {
                    "hello":"Hello. It's nice to meet you!",
                    "iam": "I am a chatbot",
                    "built": " built to help you with your studies! Before we get started, here are a few important facts.",
                    "play": "Play Tutorial",
                    "chat": "To Chat",
                    "okay": "Okay"
                },
                "introPage2": {
                    "Lets":"Let's start with the basics! It's important to me that working with me is ",
                    "easy": "easy and safe",
                    "thats": " That's why I want to give you as much information as possible about my",
                    "functions": " functions and procedures.",
                    "everything": "Everything we discuss here is confidential; no one will be informed of the subject of this discussion unless you have given your explicit consent (e.g. when submitting a request via the \"Talk to us\" function). In order to improve the quality of the answers, anonymized answers will be evaluated in an initial test phase.",
                    "okay": "Okay"
                },
                "infoPopup": {
                    "welcome":"Welcome to What2Study!",
                    "what2study":"What2Study is a ",
                    "chatbot": "Chatbot",
                    "that": " that was developed to support in all your question and endeavors concerning",
                    "studies": " studies",
                    "please": "Please note:",
                    "isnot": "What2Study is not a real",
                    "person": " person. ",
                    "many": "Many people have been involved in its development and have extensively tested whether the answers and content are correct and helpful. However, we ",
                    "cant": "cannot guarantee",
                    "every": "that every answer given by this chatbot is correct. We recommend that you verify important information yourself."
                },
                "talk2human": {
                    "back":"Back",
                    "write":"Contact [Name of the organisation]:",
                    "message": "Briefly describe the question/concern here (if it is not obvious from the chat history or if it is not sent at the same time)",
                    "send": "Send chat history",
                    "please": "Enter your email address for contact purposes:",
                    "use": "Use the saved email address: ",
                    "different": "Use a different email address",
                    "email": "Enter email address",
                    "would": "Is a phone response preferred?",
                    "number": "Enter contact number",
                    "best": "What is the best time to call you?"
                },
                "filters": {
                    "personality":"Chatbot Personality",
                    "reset":"Default",
                    "discard": "Undo Changes",
                    "friendly": "Casual",
                    "professional": "Formal",
                    "opinionated": "Recommending",
                    "neutral": "Neutral",
                    "many": "Many emojis 🤩",
                    "no": "No emojis",
                    "long": "Long answers",
                    "short": "Short answers"
                },
                "settings": {
                    "settings":"Settings",
                    "restart":"Restart Intro",
                    "language": "Language",
                    "user": "Assumptions",
                    "userAssumption1": "Studies Design",
                    "userAssumption2": "22 year old",
                    "userAssumption3": "University of Bielefeld"
                }
            }
        },
        de: {
            global: {
                "introPage1": {
                    "hello":"Hello,",
                    "iam": "ich bin ein Chatbot",
                    "built": " der dir bei deinem Studium helfen soll! Bevor wir loslegen, ein paar wichtige Fakten.",
                    "play": "Erklärvideo",
                    "chat": "Direkt zum Chat",
                    "okay": "Weiter"
                },
                "introPage2": {
                    "Lets":"Fangen wir mit den Grundlagen an! Es ist mir wichtig, dass der Umgang mit mir ",
                    "easy": "einfach und sicher ist.",
                    "thats": " Deshalb möchte ich so gut wie möglich über meine",
                    "functions": " Funktionen und Vorgehensweisen informieren.",
                    "everything": "Alles, was wir hier besprechen, ist vertraulich, niemand wird über den Inhalt hier in Kenntnis gesetzt, es sei denn, es liegt eine ausdrückliche Zustimmung zur Weitergabe vor (z.B.: bei Weiterleitung einer Anfrage über die Funktion \"Sprich mit uns\"). Um die Qualität der Antworten zu verbessern, werden in einer ersten Testphase anonymisierte Antworten ausgewertet.",
                    "okay": "Okay"
                },
                "infoPopup": {
                    "welcome":"Willkommen bei What2Study!",
                    "what2study":"What2Study ist ein ",
                    "chatbot": "Chatbot, ",
                    "that": "der entwickelt wurde, um Studierende und Studieninteressierte bei allen Fragen rund um das ",
                    "studies": "Studium zu unterstützen",
                    "please": "Bitte beachten:",
                    "isnot": "What2Study ist keine ",
                    "person": "reale Person",
                    "many": "Viele Menschen waren an der Entwicklung beteiligt und haben ausgiebig getestet, ob die Antworten und Signaturen korrekt und hilfreich sind. Dennoch können wir ",
                    "cant": "nicht garantieren, ",
                    "every": "dass jede Antwort des Chatbots korrekt ist. Wir empfehlen daher, insbesondere wichtige Informationen noch einmal selbst zu überprüfen."
                },
                "talk2human": {
                    "back":"Zurück",
                    "write":"[Name of the organisation] kontaktieren:",
                    "message": "Deine Nachricht",
                    "send": "Chatverlauf senden",
                    "please": "Angabe der E-Mail-Adresse für Kontaktzwecke:",
                    "use": "Gespeichtere E-Mail-Adresse verwenden: ",
                    "different": "Andere E-Mail-Adresse verwenden: ",
                    "email": "E-Mail-Adresse eingeben",
                    "would": "Ist eine telefonische Rückmeldung bevorzugt?",
                    "number": "Telefonnummer eingeben",
                    "best": "Wann kann ich Sie am besten anrufen?"
                },
                "filters": {
                    "personality":"Chatbot-Charakter",
                    "reset":"Standard",
                    "discard": "Änderungen zurücksetzen",
                    "friendly": "Locker",
                    "professional": "Formell",
                    "opinionated": "Vorschlagend",
                    "neutral": "Objektiv",
                    "many": "Viele Emojis 🤩",
                    "no": "Keine emojis",
                    "long": "Lange Antworten",
                    "short": "Kurze Antworten"
                },
                "settings": {
                    "settings":"Einstellungen",
                    "restart":"Intro starten",
                    "language": "Sprache",
                    "user": "Annahmen",
                    "userAssumption1": "Studiert Design",
                    "userAssumption2": "22 Jahre alt",
                    "userAssumption3": "Universität Bielefeld"
                }
            }
        }
    }
});
i18next.changeLanguage("de");

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
