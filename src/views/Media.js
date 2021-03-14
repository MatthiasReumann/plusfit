var m = require("mithril")

module.exports = {
    view: function(){
        return m(".media .uk-position-relative", [
            m("div",{class: "uk-light uk-position-relative uk-height-1-1 uk-visible-toggle", "uk-slideshow":"max-height: 512;",tabindex:"-1"},[
                m("ul",{class:"uk-slideshow-items"}, [
                    m("li", [
                        m("img",{"src":"https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80","uk-cover":""}),
                    ]),
                    m("li", [
                        m("img",{"src":"https://images.unsplash.com/photo-1593476123561-9516f2097158?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGd5bXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60","uk-cover":""}),
                    ]),
                    m("li", [
                        m("img",{"src":"https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80","uk-cover":""}),
                    ])
            ]),
            m("a", {class:"uk-position-center-left uk-position-small uk-hidden-hover", href:"#","uk-slidenav-previous":"","uk-slideshow-item":"previous"}),
            m("a", {class:"uk-position-center-right uk-position-small uk-hidden-hover", href:"#","uk-slidenav-next":"","uk-slideshow-item":"next"})
        ]),
    ])
    }
}