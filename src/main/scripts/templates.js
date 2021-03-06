(function() {
window["Deckster"] = window["Deckster"] || {};
window["Deckster"]["Templates"] = window["Deckster"]["Templates"] || {};

window["Deckster"]["Templates"]["card/card"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (card.isPopout) { ;
__p += '\n<div class="deckster-card is-popout" id="' +
((__t = ( card.id )) == null ? '' : __t) +
'">\n';
 } else { ;
__p += '\n<div class="deckster-card" id="' +
((__t = ( card.id )) == null ? '' : __t) +
'">\n';
 } ;
__p += '\n    <div class="deckster-card-inner">\n        <div class="deckster-card-header">\n            <div class="card-icon"><i class="' +
((__t = ( card.icon )) == null ? '' : __t) +
'"></i></div>\n            <div class="deckster-card-controls left"></div>\n            <div class="deckster-card-title drag-handle"><h2 class="drag-handle">' +
((__t = ( card.title )) == null ? '' : __t) +
'</h2></div>\n            <div class="deckster-default-controls">\n              <span class="deckster-card-control deckster-card-reload glyphicon glyphicon-refresh"></span>\n              <span class="deckster-card-control deckster-card-toggle glyphicon glyphicon-resize-full"></span>\n              <a href="' +
((__t = ( card.rootUrl )) == null ? '' : __t) +
'/card/' +
((__t = ( card.id )) == null ? '' : __t) +
'" target="_blank" class="deckster-card-control deckster-card-popout glyphicon glyphicon-new-window thin"></a>\n            </div>\n            <div class="deckster-card-controls right"></div>\n        </div>\n        <div class="deckster-card-content">\n            <div class="deckster-card-loading"></div>\n            <div class="deckster-summary"></div>\n            <div class="deckster-details" style="display: none;"></div>\n        </div>\n        ';
 if (card.showFooter) { ;
__p += '\n        <div class="deckster-card-footer">\n          <div class="left-controls"></div>\n          <div class="right-controls">\n            <span class="deckster-card-control deckster-card-remove glyphicon glyphicon-trash"></span>\n          </div>\n        </div>\n        ';
 } ;
__p += '\n    </div>\n</div>\n';

}
return __p
}})();
(function() {
window["Deckster"] = window["Deckster"] || {};
window["Deckster"]["Templates"] = window["Deckster"]["Templates"] || {};

window["Deckster"]["Templates"]["deck/deck"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="deck gridster"></div>\n';

}
return __p
}})();
(function() {
window["Deckster"] = window["Deckster"] || {};
window["Deckster"]["Templates"] = window["Deckster"]["Templates"] || {};

window["Deckster"]["Templates"]["deck/dock"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="deckster-deck-dock">\n</div>';

}
return __p
}})();
(function() {
window["Deckster"] = window["Deckster"] || {};
window["Deckster"]["Templates"] = window["Deckster"]["Templates"] || {};

window["Deckster"]["Templates"]["deck/toolbar"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="deckster-deck-toolbar">\n    <img class="deck-toolbar-logo" src="' +
((__t = ( deck.logoUrl )) == null ? '' : __t) +
'"/>\n    <div class="deck-search-wrapper">\n        <input type="text" class="deck-toolbar-searchbox" placeholder="' +
((__t = ( deck.searchPlaceholder )) == null ? '' : __t) +
'">\n    </div>\n    <div class="deck-toolbar-controls">\n        <span class="toolbar-control refresh glyphicon glyphicon-refresh"></span>\n        <span class="toolbar-control settings glyphicon glyphicon-cog"></span>\n        <span class="toolbar-control save glyphicon glyphicon-floppy-disk"></span>\n    </div>\n</div>';

}
return __p
}})();