numero = int(input("Digite o valor: "))

if numero <= 1:
    print("Numero 0, 1 ou negativo não é primo")
elif numero == 2:
    print("Numero 2 é primo")
elif numero % 2 == 0:
    print("Numeros pares não são primos")
else:

    e_primo = True
    i = 3
    while (i * i) <= numero:
        if numero % i == 0:
            e_primo = False
            break   
        i += 2   
        
    if e_primo:
        print(f"O número {numero} é primo")
    else:
        print(f"O número {numero} não é primo")




