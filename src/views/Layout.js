var m = require("mithril")
var Footer = require("./Footer")

function hideDropdown(){
    //
    // Hide dropdown after the creation of the view
    //
    const dropdown = document.getElementById("mobile-nav");
    dropdown.setAttribute("hidden", "");
}

function toggleIcon(){
    const element = document.getElementById("tgl-button");
    element.classList.toggle("fa-times");
}

function scrollTo(id){
    const element = document.getElementById(id);
    UIkit.scroll(element).scrollTo(element);
}

module.exports = {
    oncreate: function(vnode) {
        hideDropdown()

        /*const current_route = m.route.get()
        const idxHash = current_route.lastIndexOf("#")
        if(idxHash != -1){ //id is set
            const id = current_route.substring(idxHash + 1)
            console.log("id: " + id)
            scrollTo(id)
        }*/
    },
    view: function(vnode){
        return m("layout", [
            m("header", [
                m(m.route.Link, {href:"/home"}, [
                    m("img", {id: "logo", src:"https://www.plus-fit.de/wp-content/uploads/2020/07/Plus-Fit_Logo_Final-01_ohne-Schrift.png"}),
                    m(".uk-flex .uk-height-1-1", {id:"name"}, [
                        m("span", {class:"uk-margin-auto-vertical"}, "sports club + more")
                    ])
                ]),
                m(".desktop-nav", [
                    m(m.route.Link, {href:"/corona", onclick: hideDropdown}, [m(".nav-element", "corona"),]),
                    /*m(m.route.Link, {href:"/home#prices", "uk-scroll":"", onclick: hideDropdown}, [m(".nav-element", "preise")]),
                    m(m.route.Link, {href:"/home#about","uk-scroll":"", onclick: hideDropdown}, [m(".nav-element", "über uns")]),*/
                    m("a", {href:"https://www.plus-fit.de/index.php/kurs-stundenplan/", target:"_blank", onclick: hideDropdown}, [ m(".nav-element", "kurse")]),
                    m(m.route.Link, {href:"/datenschutz", onclick: hideDropdown}, [m(".nav-element", "Datenschutz")]),
                    m(m.route.Link, {href:"/impressum", onclick: hideDropdown}, [m(".nav-element", "Impressum")])
                ]),
                m(".mobile-nav", [
                    m("i",{id:"tgl-button", class:"fas fa-bars uk-position-center-right uk-margin-right", "uk-toggle":"target:#mobile-nav; animation: uk-animation-slide-top-small", onclick:toggleIcon}),
                    m(".dropdown .uk-flex", {id:"mobile-nav"}, [
                        m(".uk-margin-auto-vertical .uk-width-1-1", [
                            m(m.route.Link, {href:"/corona", onclick: hideDropdown}, [m(".nav-element", "corona"),]),
                            m("hr"),
                            /*m(m.route.Link, {href:"/home#prices", "uk-scroll":"", onclick: hideDropdown}, [m(".nav-element", "preise")]),
                            m("hr"),
                            m(m.route.Link, {href:"/home#about", "uk-scroll":"",onclick: hideDropdown}, [m(".nav-element", "über uns")]),
                            m("hr"),*/
                            m("a", {href:"https://www.plus-fit.de/index.php/kurs-stundenplan/", target:"_blank", onclick: hideDropdown}, [m(".nav-element", "kurse")]),
                            m("hr"),
                            m(m.route.Link, {href:"/datenschutz", onclick: hideDropdown}, [m(".nav-element", "Datenschutz")]),
                            m("hr"),
                            m(m.route.Link, {href:"/impressum", onclick: hideDropdown}, [m(".nav-element", "Impressum")])
                        ])
                    ])
                ])
            ]),
            m(".subheader", [
                m(".openinghours-wrapper", [
                    m("h6", "Öffnungszeiten"),
                    m(".openingshours", [
                        m("span","Mo.-Fr. 06:00-23:00"),
                        m("span","Sa. 9:00-22:00"),
                        m("span", "So. und Feiertag 9:00-21:00")
                    ])
                ])
            ]),
            m("section", vnode.children),
            m(Footer)
        ])
    }
}