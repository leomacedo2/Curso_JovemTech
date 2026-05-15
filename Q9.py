nota1 = float(input("Digite a nota 1: "))
nota2 = float(input("Digite a nota 2: "))
nota3 = float(input("Digite a nota 3: "))

media = (nota1+nota2+nota3)/3

print("")
print(f"A média do aluno é: {media:.2f}")

if media >= 7:
    print("Aluno aprovado")
else:
    print("Aluno reprovado")