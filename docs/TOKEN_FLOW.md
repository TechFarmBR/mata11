# 🔄 Token Flow – MATA11 Project (Visual + Logic Overview)

This document outlines the functional flow of the MATA11 token from acquisition to return distribution, and smart contract logic.

---

## 🧭 1. Token Acquisition
- Investor accesses `https://mata11.vercel.app`
- Clicks on **“Acessar Painel do Investidor”**
- Downloads Term Sheet / Whitepaper
- Proceeds to acquire token via integrated platform (future phase)

---

## 🧱 2. Token Structure
| Item                    | Detalhe                                    |
|-------------------------|---------------------------------------------|
| Nome                    | MATA11                                     |
| Tipo                    | Tokenizado (debênture lastreada)            |
| Lastro                  | 1 hectare de floresta amazônica preservada |
| Valor Venal             | R$ 18.000,00 por hectare                   |
| Compra mínima           | R$ 100,00 (fracionado)                     |

---

## 💸 3. Retorno Financeiro
| Tipo de rendimento         | Condição                                      | Valor   |
|---------------------------|-----------------------------------------------|---------|
| Juros fixos mensais       | Ativo em carteira                            | 3% a.m. |
| Lucro sobre crédito carbono | Somente após 2,5 anos sem venda               | +3%     |

---

## ⛓ 4. Smart Contract Lógica (futura)
```ts
function checkEligibility(holder) {
  if (holder.hasHeldFor >= 30 months) {
    return 0.03 + 0.03; // Total: 6%
  } else {
    return 0.03; // Apenas juros fixos
  }
}
```

---

## 🔁 5. Liquidez e Saída
- Token pode ser vendido a qualquer momento
- Venda antes de 2.5 anos = perda do bônus de 3%
- Contrato registra a data de entrada e saída

---

## 📤 6. Distribuição dos Ganhos
- Ganhos mensais depositados via smart contract
- Participação nos lucros ambientais após certificação e venda dos créditos

---

## 📊 7. Visual Flowchart (opcional para UI)
1. Aquisição → 2. Hold (2,5 anos?) → 3. +3% extra → 4. Saque livre

---

> Este fluxo será utilizado para representar visualmente o token no painel, infográficos e futuras interações do smart contract.

