nome = input("Digite o nome do cliente: ")
valor = float(input("Digite o valor total da compra: R$ "))
print("")

desconto = valor*0.15

print(f"Cliente: {nome}")
print(f"Valor com desconto: R$ {valor-desconto:.2f}")


