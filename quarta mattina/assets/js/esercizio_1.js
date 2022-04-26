salvaIlDato = function (info_da_salvare) {
localStorage.ultimo_pensiero = info_da_salvare;
alert("Memorizzare effettuata");
};

recuperaIlDato = function (elemento) {
    if(confirm("Sostituire il contenuto")) {
    elemento.value = localStorage.ultimo_pensiero;
}
};
