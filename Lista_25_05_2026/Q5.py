numero = int(input("Digite o numero que deseja saber o fatorial: "))

fatorial = 1

while numero > 0:
    fatorial = fatorial*numero
    numero = numero-1

print(f"O fatorial do numero é: {fatorial}")
