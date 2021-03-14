var m = require("mithril")

module.exports = {
    view: function(){
        return m(".prices",{id:"prices"}, [
            m("h1", {id:"price-headline"}, "Unsere Preise"),
            m(".uk-flex", [
                m(".uk-margin-auto", [
                    m(".cards", [
                        m(".card-wrapper .uk-grid-match .uk-child-width-expand@m", {"uk-grid":""}, [
                            m("div", [
                                m(".card", [
                                    m("i", {class: "fas fa-crown icon", id:"crown"}),
                                    m("h3", "24 Monats Abo"),
                                    m("div", [
                                        m("h2", "24,99€"),
                                        m("p", {class:"subline"}, "Für Sparfüchse"),
                                        m("p", {class:"price-info"}, "Grundgebühr pro Monat")
                                    ])
                                ]),
                            ]),
                            m("div", [
                                m(".card", [
                                    m("i", {class:"fas fa-money-bill-wave icon", id:"bestbuy"}),
                                    m("h3", "12 Monats Abo"),
                                    m("div", [
                                        m("h2", "29,99€"),
                                        m("p", {class:"subline"}, "Der Einstieg"),
                                        m("p", {class:"price-info"}, "Grundgebühr pro Monat")
                                    ])
                                ])
                            ])
                        ]),
                        m(".card-wrapper .uk-grid-match .uk-child-width-expand@m", {"uk-grid":""}, [
                            m("div", [
                                m(".card", [
                                    m("i", {class:"fas fa-spa icon", id:"wellness"}),
                                    m("h3", "Wellness & Kurse"),
                                    m("div", [
                                        m("h2", "19,99€"),
                                        m("p", {class:"subline"}, "Kurse, Sauna incl."),
                                        m("p", {class:"price-info"}, "Grundgebühr pro Monat")
                                    ])
                                ]),
                            ]),
                            m("div", [
                                m(".card", [
                                    m("i", {class: "fas fa-umbrella-beach icon", id:"solar"}),
                                    m("h3", "Solarium-Abo"),
                                    m("div", [
                                        m("h2", "14,99€"),
                                        m("p", {class:"subline"}, "Solarium-Flat"),
                                        m("p", {class:"price-info"}, "Zusätzlich zum Basis-Abo")
                                    ])
                                ])
                            ]),
                            m("div", [
                                m(".card", [
                                    m("i", {class: "fas fa-glass-whiskey icon", id:"drink"}),
                                    m("h3", "Getränke-Abo"),
                                    m("div", [
                                        m("h2", "7,99€"),
                                        m("p", {class:"subline"}, "Getränke-Flat"),
                                        m("p", {class:"price-info"}, "Zusätzlich zum Basis-Abo")
                                    ])
                                ]),
                            ]),
                            m("div", [
                                m(".card", [
                                    m("i", {class: "fas fa-ticket-alt icon", id:"ticket"}),
                                    m("h3", "10-er Karte"),
                                    m("div", [
                                        m("h2", "99€"),
                                        m("p", {class:"subline"}, "10x All-Inclusive (außer Solarium)"),
                                        m("p", {class:"price-info"}, "Für Unentschlossene")
                                    ])
                                ])
                            ])
                        ])
                    ]),
                ],
                m("p",{id:"short-message"}, `Wegen des derzeit noch eingeschränkten Kursangebots bieten wir Euch das Upgrade Wellness & 
                                                Kurse zum Sonderpreis von EUR 19,99 an. Wer schon jetzt das Upgrade bucht, 
                                                zahlt auch in Zukunft keinen höheren Preis!`),
                                                m("h4",{id: "trial"}, "Ein Probetraining ist kostenfrei möglich!")),
            ])
        ])
    }
}