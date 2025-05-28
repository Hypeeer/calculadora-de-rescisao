Nome: Calculadora de resição

O que ela resolve? => Faz o calculo da resição contratual do empregador com base nos dados pedidos
Funcionalidades ? => Calcula salario base, ferias venccidas, tipo de demição e jurus no FGT

O que vou precisar para começar ?

Dados Pessoais e Contratuais
Salário base 

Data de admissão

Data de demissão

Tipo de Rescisão
Causa da demissão:

Com justa causa

Sem justa causa

Pedido de demissão

Acordo entre as partes

Rescisão indireta

Férias e Benefícios
Férias vencidas (quantos dias)

Férias proporcionais (pode calcular com base no tempo trabalhado)

13º salário proporcional

Aviso Prévio
Trabalhado

Indenizado

Dispensado

Não cumprido pelo empregador

FGTS
Saldo atual

Se houve saque

Se houve multa de 40% ou 20% (dependendo do tipo de demissão)
____________________________________________________________________

1. Paso: Pergunta ao usuario qual tipo de resição {
  pedido de demissão, demissão sem justa causa, com justa causa, Acordo entre as partes, resição indireta
}

2. Passo: Perunte se a ferias vencidas (Dias), caso aja (logica separada de somatoria)

3. Passo: Calculo do 13 proporcionais (caso demissão seja por justa causa, não recebe) {logica separada}

4. Passo: Pergunta o tipo de aviso previo se e trabalhado, Indenizado ou Dispensado ou
não cumprido pelo empregador (caso pedido de demissão ou justa causa não recebe) {logica separada}

5. Passo: Pergunta sobre valores do FGTS atual? se ouve saques dependendo do tipo de demissão, se a multa de 40% ou 20%
  (Pedido de demissão e demissão por justa causa, não tem direito) {logica separada}

6. Paso: Logica de logica de negócio
    para cada escolha mudase a forma da execução da logica, cada escolha tem seus calculos diferentes, e funçoes reposaveis
