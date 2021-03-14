var m = require("mithril")

module.exports = {
    view: function(){
        return m(".info", [
            m(".top", [
                m(".uk-grid-match .uk-child-width-expand@m", {"uk-grid":""}, [
                    m("div", [
                        m(".essentials", [
                            m(".name-wrapper", [
                                m("h1", "Plusfit")
                            ]),
                            m(".adress-wrapper", [
                                m("p", "Sonnenstraße 7"),
                                m("p", "85764 Oberschleißheim"),
                                m("p", "Deutschland")
                            ]),
                        ]),
                    ]),
                    m("div", [
                        m(".contact", [
                            m(".google-review", [
                                m(".uk-flex", [
                                    m("i",{class:"fas fa-star"}),
                                    m("i",{class:"fas fa-star"}),
                                    m("i",{class:"fas fa-star"}),
                                    m("i",{class:"fas fa-star"}),
                                    m("i",{class:"fas fa-star-half"})
                                ]),
                                m("p", "100 Google-Rezensionen")
                            ]),
                            m(".contact-element-wrapper", [
                                m("i",{class:"fas fa-envelope"}),
                                m("a", {href:"tel:+498995876062"},"+49 (0)89 95876062"),
                            ]),
                            m(".contact-element-wrapper", [
                                m("i",{class:"fas fa-phone-square-alt"}),
                                m("a", {href:"mailto:info@plus-fit.de"},"info@plus-fit.de")
                            ])
                        ])
                    ])
                ]),
            ]),
            m("hr", ""),
            m(".openinghours-wrapper", [
                m("h2", "Öffnungszeiten"),
                m(".openinghours", [
                    m(".openinghours-element", [
                        m("h4", "Montag - Freitag"),
                        m("p","06:00-23:00"),
                    ]),
                    m(".openinghours-element", [
                        m("h4", "Samstag"),
                        m("p","9:00-22:00"),
                    ]),
                    m(".openinghours-element", [
                        m("h4", "Sonntag und Feiertag"),
                        m("p", "9:00-21:00")
                    ])
                ])
            ])
        ])
    }
}