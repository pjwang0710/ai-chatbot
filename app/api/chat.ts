import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

export const runtime = 'edge'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST(req: Request) {
  const json = await req.json()
  const { messages: histories } = json
  const question = histories[histories.length - 1]['content']

  const messages = [{
    'role': 'system',
    'content': '請你扮演美國人，在台灣教英文的老師'
  }, ...histories.slice(-3, -1), {
    'role': 'user',
    'content': `
    請將 ${question} 翻譯成英文。
    `
  }]

  const res = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
    temperature: 0.7,
    stream: true
  })

  const stream = OpenAIStream(res)

  return new StreamingTextResponse(stream)
}