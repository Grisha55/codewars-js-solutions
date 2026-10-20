String.prototype.isAudio = function () {
    return /^[a-zA-Z]+\.(mp3|flac|alac|aac)$/.test(this);
};

String.prototype.isImage = function () {
    return /^[a-zA-Z]+\.(jpg|jpeg|png|bmp|gif)$/.test(this);
};
