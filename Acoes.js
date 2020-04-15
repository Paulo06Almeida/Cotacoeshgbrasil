function CalculoAcoes(Capital, Perct, Cotacao) {

    var CalcAcoes = new Object();
    Qtd = Quantidade(Capital, Cotacao);
    CalcAcoes.Quantidade = Qtd;
    Prct = Percentual(Cotacao, Perct);
    AtivVend = Cotacao + Prct;
    CalcAcoes.AtivoVenda = AtivVend;
    return CalcAcoes;
}



function Quantidade(capital, cot) {

    ResultQtd = capital / cot;
    return ResultQtd;

}


function Percentual(valor, perct) {

    ResultPrct = (valor * perct) / 100;
    return ResultPrct;

}