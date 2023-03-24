import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  organization: 'org-e2S5x9SvkC26ycHyVeYccoq4',
  apiKey: process.env.OPENAI_API_KEY
})

export const openai = new OpenAIApi(configuration)
export const response = async () => await openai.listEngines().then(res => res)
