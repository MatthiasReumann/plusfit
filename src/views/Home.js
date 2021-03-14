var m = require("mithril")
var Info = require("./Info")
var Prices = require("./Prices")
var About = require("./About")
var Media = require("./Media")

module.exports = {
    view: function(){
        return m(".main", [
            m(Media),
            m(Info),
            m(Prices),
            m(About)
    ]);
    }
}