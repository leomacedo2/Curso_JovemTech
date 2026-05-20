compra = float(input("Digite o valor da compra: R$ "))
fidelidade = input("Tem cartão fidelidade? ")
print("")

desconto = compra*0.20

if compra > 500 or fidelidade == "SIM":
    print(f"Desconto aplicado! Valor da compra com desconto é: R$ {(compra-desconto):.2f}")
else:
    print(f"Valor normal da compra: R$ {compra:.2f}")