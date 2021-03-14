var m = require("mithril")
var Layout = require("./views/Layout")
var Home = require("./views/Home")
var Message = require("./views/Message")
var Legal = require("./views/Legal")
var Privacy = require("./views/Privacy")

m.route(document.body, "/home", {
    "/home": {
        render: function(){
            return m(Layout, m(Home))
        }
    },
    "/corona": {
        render: function(){
            return m(Layout, m(Message))
        }
    },
    "/impressum": {
        render: function(){
            return m(Layout, m(Legal))
        }
    },
    "/datenschutz": {
        render: function(){
            return m(Layout, m(Privacy))
        }
    },
    
})