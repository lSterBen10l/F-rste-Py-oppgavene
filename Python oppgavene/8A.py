# Funksjon som sorterer og beregner gjennomsnittet av en liste
def sorter_og_beregn_gjennomsnitt(talliste):
    talliste.sort()
    gjennomsnitt = sum(talliste) / len(talliste)
    return talliste, gjennomsnitt

tall = [5, 3, 8, 1, 4]
sorterte_tall, gjennomsnitt = sorter_og_beregn_gjennomsnitt(tall)
print("Sorterte tall:", sorterte_tall)
print("Gjennomsnitt:", gjennomsnitt)
