const phoneNumberFormatter = function (number) {
    // 1. Remove caracteres que não sejam números
    let formatted = number.replace(/\D/g, '');

    // 2. Elimine o 0 inicial (prefixo)
    //    Em seguida, substituído por 55
    if (formatted.startsWith('0')) {
        formatted = '55' + formatted.substr(1);
    }

    if (!formatted.endsWith('@c.us')) {
        formatted += '@c.us';
    }

    return formatted;
}

module.exports = {
    phoneNumberFormatter
}
