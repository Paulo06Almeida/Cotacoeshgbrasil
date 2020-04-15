function CalculoSelic(Capital,Tempo,Juros){

    var CalcSelic = new Object();
    calcjuros = JurosCompostos(Capital,Juros,Tempo);
    CalcSelic.ValorFinal = calcjuros;
    valorfinal = LucroLiquidoSelic(Capital,calcjuros);
    CalcSelic.Lucro = valorfinal;

    return CalcSelic;

}

function JurosCompostos(capital,taxaJuros,tempoAplicacao){

    var montante = capital * Math.pow((1 + (taxaJuros/100)), tempoAplicacao);
    return montante;
}