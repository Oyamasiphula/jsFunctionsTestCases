var isFromCapeTown = function(para) {
    var isItFromCA = para.startsWith("CA");
    return isItFromCA;
};
isFromCapeTown("CA 123 908")
exports.isFromCapeTown = isFromCapeTown;
