import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of muscle groups that a user has and suggests a workout they could do with some those muscle groups. the workout should be around 30 minutes and include at least 3 different movements. Format your response in markdown to make it easier to render to a web page`;

// API key for Hugging Face
const hf = new HfInference(import.meta.env.VITE_HF_API_KEY);

export async function getExerciseRoutine(muscle) {
  const exercise = muscle.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${exercise}. Please give me a 30-minute exercise routine that will help build these muscle groups!`,
        },
      ],
      max_tokens: 1024,
    });

    // Extracting the raw plan
    const rawPlan = response.choices[0].message.content;

    // Return the raw plan (no formatting yet)
    return rawPlan;
  } catch (err) {
    console.error(err.message);
    throw new Error("Failed to fetch workout plan.");
  }
}
