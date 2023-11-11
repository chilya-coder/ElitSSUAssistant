import ElitSSUAssistantStrings from "../../ElitSSUAssistantStrings.json";

interface HumanPrompt {
  prompt: string;
}

export class SSUElitAPI {
  async sendAIRequest(properties: HumanPrompt) {
    return fetch(`ip_address/chatbot`, {
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
      .catch((error) => {
        console.error(ElitSSUAssistantStrings.request_failed, error);
      });
  }
}
