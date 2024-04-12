# DevRev API Utilization

## Overview

This README provides an overview of how to utilize the DevRev API to interact with the DevRev platform programmatically. The DevRev API allows you to perform various actions such as creating, updating, and retrieving work items like issues, tickets, and tasks.

## Getting Started

To get started with the DevRev API, you'll need the following:

- DevRev account: Sign up at [DevRev](https://www.devrev.ai/) if you haven't already.
- API Key: Generate an PAT API key from your DevRev account settings. This key will be used to authenticate API requests.

## Making API Requests

API requests to DevRev are made over HTTPS to the base URL `https://api.devrev.ai/`. Each request must include the API key in the `Authorization` header.

## Work Items
- Tickets: Used for customer support requests or inquiries. They track customer issues or problems and ensure they are addressed satisfactorily.

- Issues: Aligned with development and project tracking. Assigned to team members and attached to specific parts to align efforts with product priorities.

- Tasks: Break down larger work into smaller pieces, can be part of tickets and issues.


### Example Request (Python)

```python
import requests

url = "https://api.devrev.ai/works.create"
headers = {
    "Authorization": "<YOUR_API_KEY>",
    "Content-Type": "application/json"
}
payload = {
    "type": "ticket",
    "applies_to_part": "PROD-1",
    "owned_by": ["DEVU-1"],
    "title": "New Ticket"
}

response = requests.post(url, json=payload, headers=headers)
```
## Conclusion

Utilizing the DevRev API effectively can streamline your project management workflows and improve collaboration within your team. By leveraging the API to create, update, and retrieve work items, you can automate repetitive tasks and ensure that project progress is tracked accurately.

## Images

### Screenshot 1: Successful API Request

![Screenshot 2024-04-11 204439](https://github.com/Akarshh711/DevRev_Assignment/assets/96855236/017402dd-3bbc-46c2-9bb7-8fcfddea9762)

### Screenshot 2: Newly Created Ticket

![Screenshot 2024-04-11 204540](https://github.com/Akarshh711/DevRev_Assignment/assets/96855236/c7ac76c4-0e30-4c4d-95bd-358f15874ffd)

### Screenshot 3: Ticket

![Screenshot 2024-04-11 204609](https://github.com/Akarshh711/DevRev_Assignment/assets/96855236/fc38b4c7-8bc3-4779-9f8c-574be91b2808)





