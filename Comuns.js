function LucroLiquidoAcoes(capit, qtdacoes, ativovenda) {

    ResultLucro = (qtdacoes * ativovenda) - capit;
    return ResultLucro;
}

function LucroLiquidoSelic(capit, valorfinal) {

    ResultLucro = valorfinal - capit;
    return ResultLucro;
}