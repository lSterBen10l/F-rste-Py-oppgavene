# Enkel kalkulator
def kalkulator():
    tall1 = float(input("Skriv inn første tall: "))
    tall2 = float(input("Skriv inn andre tall: "))
    
    print("Velg operasjon: +, -, *, /")
    operasjon = input("Operasjon: ")
    
    if operasjon == "+":
        print("Resultat:", tall1 + tall2)
    elif operasjon == "-":
        print("Resultat:", tall1 - tall2)
    elif operasjon == "*":
        print("Resultat:", tall1 * tall2)
    elif operasjon == "/":
        print("Resultat:", tall1 / tall2)
    else:
        print("Ugyldig operasjon!")

kalkulator()
