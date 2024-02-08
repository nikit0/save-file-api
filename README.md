# Save File API

## Overview

This Node.js application serves as a simple API for saving files. It allows users to send a POST request to the `/saveFile` endpoint with the necessary data, and the server will save the provided transcript in the `logs` directory.
Example: You can use this for save your Discord chat transcripts!

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/nikit0/discord-transcript-saver-api.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

The server will be running on http://localhost:3000 by default.

## API Usage

### Save Transcript

Endpoint
- POST `/saveFile`

Request Payload
- JSON object with the following properties:

| Parameters   | Types        | Description                                |
|--------------|--------------|--------------------------------------------|
| `fileName`   | (string)     | The name of the file to be saved.          |
| `buffer`     | (string)     | The content of the transcript in a buffer. |

Example Request

```bash
curl -X POST -H "Content-Type: application/json" -d '{"fileName": "transcript.txt", "buffer": "Hello, this is a Discord transcript!"}' http://localhost:3000/saveFile
```

Response
- If the transcript is successfully saved:

```json
{
  "status": "100"
}
```

- If there is an issue with the request:

```json
{
  "status": "500"
}
```

## Static File Access

Transcripts saved using the API can be accessed directly via the /logs path on the server.
Example: http://localhost:3000/logs/transcript.txt

## Error Handling

- If a request is made to an undefined route:
- Response: Status 400 with the message "404 Error: Page not found!"

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/nikit0/discord-transcript-saver-api?tab=MIT-1-ov-file) file for details.
