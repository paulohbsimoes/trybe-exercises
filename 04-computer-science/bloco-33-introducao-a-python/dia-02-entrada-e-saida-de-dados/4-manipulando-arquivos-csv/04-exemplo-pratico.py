import csv

# lê os dados
with open("balneabilidade.csv") as file:
    beach_status_reader = csv.DictReader(file, delimiter=",", quotechar='"')
    # a linha de cabeçaçhos é utilizada como chave do dicionário
    # agrupa campanhas e suas respectivas balneabilidades
    bathing_by_campaign = {}
    for row in beach_status_reader:
        campaign = row["numero_boletim"]  # as linhas são dicionários
        bathing = row["categoria"]
        if campaign not in bathing_by_campaign:
            bathing_by_campaign[campaign] = {
                "Própria": 0,
                "Imprópria": 0,
                "Muito Boa": 0,
                "Indisponível": 0,
                "Satisfatória": 0,
            }
        bathing_by_campaign[campaign][bathing] += 1

# abre um arquivo para escrita
with open("report_por_campanha_dicionarios.csv", "w") as file:
    # os valores a serem escritos devem ser dicionários
    header = [
        "Campanha",
        "Própria",
        "Imprópria",
        "Muito Boa",
        "Indisponível",
        "Satisfatória",
    ]
    # É necessário passar o arquivo e o cabeçalho
    writer = csv.DictWriter(file, fieldnames=header)
    # escreve as linhas de dados
    for campaign, bathing in bathing_by_campaign.items():
        # desempacota os valores de balneabilidade para formar uma linha
        # equivalente a
        # row = {"campanha": campaign}
        # for name, value in bathing.items():
        #     row[name] = value
        row = {"Campanha": campaign, **bathing}
        writer.writerow(row)
