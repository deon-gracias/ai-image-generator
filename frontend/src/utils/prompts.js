import surpriseMePrompts from "../constants/surprise-me-prompts.json";

export function getRandomPrompt(prompt) {
  const i = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomPrompt = surpriseMePrompts[i];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
