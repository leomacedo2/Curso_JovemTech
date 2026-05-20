numero1 = int(input("Qual o primeiro numero? "))
numero2 = int(input("Qual o segundo numero? "))
print("")

if numero1 > numero2 :
    print(f"{numero1} é maior que {numero2}")
elif numero2 > numero1 :
    print(f"{numero2} é maior que {numero1}")
else :
    print(f"{numero1} e {numero2} são iguais")
