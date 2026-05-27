salarioHora = float(input("Digite o quanto você ganha em horas: "))
horasTrabalhadas = int(input("Digite a quantidade de horas trabalhadas no mês: "))

salariobruto = salarioHora*horasTrabalhadas

impostoIR = salariobruto*0.11
impostoINSS = salariobruto*0.08
impostoSindicato = salariobruto*0.05

salarioLiquido = salariobruto - impostoIR - impostoINSS - impostoSindicato

print("")
print(f"Salario Bruto: R$ {salariobruto}")
print(f"Imposto de IR: R$ {impostoIR}")
print(f"Imposto de INSS: R$ {impostoINSS}")
print(f"Imposto de Sindicato: R$ {impostoSindicato}")
print(f"Salário Líquido: R$ {salarioLiquido}")