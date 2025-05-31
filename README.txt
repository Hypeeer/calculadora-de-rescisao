# 🧮 Calculadora de Rescisão

Este projeto tem como objetivo calcular a rescisão contratual com base nos dados fornecidos pelo usuário.

## 📋 Passo a passo do processo

1. **Tipo de rescisão**  
   O usuário escolhe entre:  
   - Pedido de demissão  
   - Demissão sem justa causa  
   - Demissão com justa causa  
   - Acordo entre as partes  
   - Rescisão indireta  

2. **Férias vencidas**  
   O sistema pergunta se o usuário possui férias vencidas (em dias). Se sim, realiza o cálculo separado.

3. **13º salário proporcional**  
   Calculado proporcionalmente, exceto nos casos de **demissão por justa causa**.

4. **Aviso prévio**  
   Pergunta se o aviso foi:  
   - Trabalhado  
   - Indenizado  
   - Dispensado  
   - Não cumprido pelo empregador  
   (Em casos de pedido de demissão ou justa causa, o aviso pode não ser devido.)

5. **FGTS**  
   O usuário informa o valor atual do FGTS. O sistema calcula a multa (40% ou 20%) conforme o tipo de demissão.  
   - Pedido de demissão e justa causa **não têm direito** à multa.

6. **Lógica de negócio**  
   Cada tipo de rescisão segue regras específicas. As funções tratam as exceções e cálculos adequadamente.

---

## 📊 Tabela de Direitos

| Tipo de rescisão       | Férias | 13º | Aviso             | Multa FGTS |
|------------------------|--------|-----|-------------------|------------|
| **Pedido de demissão** | ✅     | ✅  | ❌ (se não cumprir) | ❌         |
| **Com justa causa**    | ❌     | ❌  | ❌                | ❌         |
| **Sem justa causa**    | ✅     | ✅  | ✅                | ✅ (40%)   |
| **Acordo comum**       | ✅     | ✅  | ✅                | ✅ (20%)   |
| **Rescisão indireta**  | ✅     | ✅  | ✅                | ✅ (40%)   |

---

## 🛠️ Ferramentas utilizadas

- Node.js  
- readline-sync  

---

> Projeto em desenvolvimento para fins de estudo e prática de lógica de programação com foco em regras de negócio.
