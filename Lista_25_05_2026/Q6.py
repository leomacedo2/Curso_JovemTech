numero = int(input("Digite o valor: "))
contador = 0

for i in range(1, numero + 1):
    if numero % i == 0:
        contador = contador + 1

if contador == 2:
    print(f"O numero {numero} é primo!")
else:
    print(f"O numero {numero} não é primo!")
    




