var m = require("mithril")

module.exports = {
    view: function(){
        return m(".message", [
            m("h1", "Corona - Infos"),
            m(".message-content", [
                m("p", `Liebe Mitglieder und Besucher`),
                m("p", `wir haben ein umfassendes Schutz- und Hygienekonzept erarbeitet, um Euch und unser Studiopersonal optimal vor Corona zu schützen.
                Bei einigen Punkten sind wir auf Eure Mithilfe angewiesen:`),
                m("b", "Mindestabstand:"), m("br"),
                m("p", "Bitte haltet stets den Mindestabstand von 1,5 Metern zu anderen Personen ein."),
                m("b", "Maskenpflicht:"), m("br"),
                m("p", `Bitte tragt eine geeignete Mund-Nasen-Bedeckung beim Betreten und Verlassen des Studios (auch im Treppenhaus), 
                beim Durchqueren des Eingangsbereichs, bei der Entnahme und beim Zurückstellen von Sportgeräten, auf dem Weg zu 
                und von den Sanitärbereichen, in den Sanitärbereichen sowie auf dem Weg zu und von der Theke. Während des Trainings an den Geräten besteht keine Maskenpflicht.`),
                m("b", "Händewaschen:"), m("br"),
                m("p", `Bitte wascht Euch regelmäßig und gründlich die Hände, insbesondere vor und nach dem Training. Ausreichende Waschgelegenheiten, Flüssigseife und Einmalhandtücher stehen bereit.`),
                m("b", "Desinfektion:"), m("br"),
                m("p", `Bitte desinfiziert nach jeder Gerätenutzung die Kontaktflächen.`),
                m("b", "Duschen/Umkleiden:"), m("br"),
                m("p", `Die Duschen und Umkleiden sind seit dem 22. Juni wieder geöffnet.`),
                m("b", "Betretungsverbot:"), m("br"),
                m("p", `Das Studio darf nicht betreten werden von Personen mit Kontakt zu COVID-19-Fällen in den letzten 14 Tagen und von Personen mit unspezifischen Allgemeinsymptomen und respiratorischen Symptomen (Atemwegserkrankungen jeglicher Schwere) oder Fieber. 
                Wer während des Trainings entsprechende Symptome entwickelt, muss das Studio umgehend verlassen.`),
                m("p", `Durch unser Einlasskontrollsystem ist sichergestellt, dass sich maximal
                72 Personen gleichzeitig im Studio aufhalten.`),
                m("p", `Bei Fragen wendet Euch bitte an unser Studiopersonal.`),
                m("p", `Vielen Dank für Eure Mithilfe!`),
                m("p", `Euer PlusFit-Team`),
            ])
        ])
    }
}