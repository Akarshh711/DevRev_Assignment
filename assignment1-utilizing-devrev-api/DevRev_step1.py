import requests

# Define the endpoint URL
url = "https://api.devrev.ai/works.create"

# Define the headers
headers = {
    "Authorization": "<PAT API KEY>",
    "Content-Type": "application/json"
}

# Define the payload for creating an issue
payload = {
    "type": "ticket",
    "applies_to_part": "PROD-1",
    "owned_by": ["DEVU-1"],
    "title": "My DevRev Ticket"
}

# Make the POST request to create the issue
response = requests.post(url, json=payload, headers=headers)

# Check the response
if response.status_code == 201:
    print("Ticket created successfully!")
    print("Response:", response.json())  # Print the response JSON
else:
    print("Failed to create ticket. Status code:", response.status_code)
    print("Error message:", response.text)


