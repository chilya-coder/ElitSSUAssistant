interface HumanPrompt {
  prompt: string;
}

const serverAddress = process.env.SERVER_ADDRESS;

export class SSUElitAPI {
  async sendAIRequest(properties: HumanPrompt) {
    return fetch(`http://${serverAddress}:8080/chatbot`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: properties.prompt }),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      })
      .catch((error) => console.error("This is error", error));
  }
}
