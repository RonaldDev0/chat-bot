import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  organization: 'personal',
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)
export const response = await openai.listEngines()
