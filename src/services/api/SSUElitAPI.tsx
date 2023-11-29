import ElitSSUAssistantStrings from "../../ElitSSUAssistantStrings.json";

interface HumanPrompt {
  prompt: string;
  language: string;
}

function formatLanguage(language: string) {
  switch (language) {
    case "en":
      return "English";
    case "ua":
      return "Ukrainian";
    default:
      return "Ukrainian";
  }
}

export class SSUElitAPI {
  async sendAIRequest(properties: HumanPrompt) {
    return fetch(process.env.EXPO_PUBLIC_SSU_API_URL + "/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: properties.prompt,
        language: formatLanguage(properties.language),
      }),
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
