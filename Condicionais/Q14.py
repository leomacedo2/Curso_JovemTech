idade = int(input("Digite a sua idade: "))
ensinomedio = input("Qual é o grau de escolaridade? EF(fundamental) - EM(medio) - ES(superior): ")
print("")


if idade < 18 and ensinomedio == "EM":
    print("Aprovado para próxima fase")
else:
    print("Não atende aos critérios")