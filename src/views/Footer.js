var m = require("mithril")

module.exports = {
    view: function(){
        return m("footer", [
            m(".uk-flex .line .socials", [
                m(".left .uk-flex", [
                    m(".uk-margin-auto-vertical", [
                        m("a", {id: "insta", href:"https://www.instagram.com/plusfit_osh_/", target:"_blank"},[m("i",{class:"fab fa-instagram"})])
                    ])
                ]),
                m(".right uk-flex", [
                    m("a",{class:"uk-margin-auto-vertical", href:"mailto:info@plus-fit.de"}, "info@plus-fit.de"),
                    m("a",{class:"uk-margin-auto-vertical uk-margin-left-small", href:"tel:+498995876062"}, "+49 (0)89 95876062")
                ])
            ]),
            m(".uk-flex .line .bottom-line", [
                m(".left .uk-flex", [
                    m("p",{class:"uk-margin-auto-vertical"}, "© 2021 PlusFit UG (haftungsbeschränkt)")
                ]),
                m(".right uk-flex", [
                    m("p",{class:"uk-margin-auto-vertical"}, "Made by r6s")
                ])
            ]),
        ]) 
    }
}