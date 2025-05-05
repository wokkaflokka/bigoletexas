import yaml
import json

def convert_yaml_to_ts():
    # Read the YAML file
    with open('../data/base.yaml', 'r') as file:
        data = yaml.safe_load(file)

    # Generate TypeScript interface
    ts_interface = """interface RegionData {
  ratio: string;
  bigger: string;
  size: string;
  notes: string;
}

export const baseData: Record<string, RegionData> = {
"""

    # Convert each entry to TypeScript format
    entries = []
    for key, value in data.items():
        # Escape any quotes in the key and notes
        escaped_key = key.replace('"', '\\"')
        escaped_notes = value['notes'].replace('"', '\\"')
        
        entry = f'  "{escaped_key}": {{\n'
        entry += f'    "ratio": "{value["ratio"]}",\n'
        entry += f'    "bigger": "{value["bigger"]}",\n'
        entry += f'    "size": "{value["size"]}",\n'
        entry += f'    "notes": "{escaped_notes}"\n'
        entry += '  }'
        entries.append(entry)

    # Join all entries with commas
    ts_content = ts_interface + ',\n'.join(entries) + '\n};'

    # Write to TypeScript file
    with open('../nextjs-site/src/app/data/base.ts', 'w') as file:
        file.write(ts_content)

    # Verify the number of entries
    print(f"Total entries processed: {len(entries)}")

if __name__ == '__main__':
    convert_yaml_to_ts() 