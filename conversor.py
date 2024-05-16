import csv
import json

# Define the path to your CSV file
csv_file_path = 'contratos2024.csv'
json_file_path = 'data.json'

# Function to convert data types
def convert_types(row):
    # Convert 'idcontrato' and 'prazoExecucao' to integer
    row['idcontrato'] = int(row['idcontrato'])
    row['prazoExecucao'] = int(row['prazoExecucao'])

    # Convert 'precoContratual' to float, handle comma as decimal separator
    row['precoContratual'] = float(row['precoContratual'].replace(',', '.'))

    return row

# Read the CSV data
data = []
with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=';')
    for row in reader:
        # Convert data types for specific fields
        data.append(convert_types(row))

# Convert the data to JSON
with open(json_file_path, 'w', encoding='utf-8') as jsonfile:
    json.dump(data, jsonfile, ensure_ascii=False, indent=4)

print(f"Data has been successfully converted to JSON and saved as {json_file_path}.")
