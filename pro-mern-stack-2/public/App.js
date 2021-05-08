"use strict";

var continents = ['Africa', 'Antarctica', 'Asia', 'Australia', 'North America', 'South America'];
var helloContinents = Array.from(continents, function (c) {
  return "Hello ".concat(c);
});
var continentsList = helloContinents.map(function (hc) {
  return /*#__PURE__*/React.createElement("li", {
    key: hc
  }, hc);
});
var continentsElem = /*#__PURE__*/React.createElement("div", {
  title: "helloDiv",
  className: "colorBlue"
}, /*#__PURE__*/React.createElement("h1", null, "Hello to the ", helloContinents.length, " Continents"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("ul", null, continentsList));
ReactDOM.render(continentsElem, document.getElementById('root'));