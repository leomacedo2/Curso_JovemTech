numero = int(input("Digite um numero para saber o seu módulo: "))

if numero < 0:
    modulo = numero*-1
else:
    modulo = numero

print(f"O módulo de {numero} é: {modulo}")