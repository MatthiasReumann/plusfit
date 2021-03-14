var m = require("mithril")

module.exports = {
    view: function(){
        return m(".about",{id:"about"}, [
            m(".uk-flex", [
                m(".uk-margin-auto", [
                    m(".grid .uk-child-width-expand@m", {"uk-grid":""}, [
                        m("div", [
                                m(".element", [
                                    m("i",{class:"fas fa-dumbbell icon", id:"fitness"}),
                                    m("h2", "Fitness"),
                                    m("p", `Wir bieten Dir auf unserer Fläche eine große Auswahl an Top-Trainingsgeräten und die Möglichkeit “frei” zu trainieren.
                                    "Unser geschultes Personal steht dir mit Trainingsplänen und Hilfe jederzeit beiseite.`)
                                ])
                        ]),
                        m("div", [
                            m(".element", [
                                m("i",{class:"fas fa-running icon", id:"cardio"}),
                                m("h2", "Cardio"),
                                m("p", `Eine große Anzahl an Cardio-Geräten der neuesten Generation, selbstverständlich mit TV und Radio wartet auf Dich.
                                Tread-Mills, Stairmaster, Laufbänder, und Fitnessräder stehen in ausreichender Anzahl bereit.`)
                            ])
                        ]),
                        m("div", [
                            m(".element", [
                                m("i",{class:"fas fa-sort-amount-up-alt icon", id:"course"}),
                                m("h2", "Kursangebot"),
                                m("p", [`Für jeden Fitnesslevel und jedes Alter bieten wir passende Kurse an. `,
                                    m("br"),
                                    m("b","Ganz wichtig: Ein Probetraining ist jederzeit möglich.")]),
                                m("p", `Wir bitten um Anmeldung 
                                über die Buttons in den einzelnen Kursbeschreibungen oben oder einfach beim Thekenpersonal.`),
                                m("p",`Den Kursplan, wann welcher Kurs stattfindet findest du hier: `),
                                m("a", {href:"https://www.plus-fit.de/index.php/kurs-stundenplan/"}, m("p", {class: "link"},`Unser "Stundenplan"`))
                            ])
                        ])
                    ])
                ])
            ])
        ])
    }
}