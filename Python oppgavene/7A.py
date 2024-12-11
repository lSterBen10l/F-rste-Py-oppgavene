# Ta imot 5 navn fra brukeren og legg dem til en liste
navneliste = []

for i in range(5):
    navn = input(f"Skriv inn navn {i + 1}: ")
    navneliste.append(navn)

print("Navnelisten er:", navneliste)
