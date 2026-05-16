cigarrodiario = int(input("Digite a quantidade de cigarros fumados por dia: "))
anosfumando = int(input("Digite a quantidade de anos fumando: "))
minutosperdidos = cigarrodiario * anosfumando * 365 * 10
diasperdidos = minutosperdidos / 1440
print("")
print(f"O fumante perdeu aproximadamente {diasperdidos:.2f} dias de vida.")

