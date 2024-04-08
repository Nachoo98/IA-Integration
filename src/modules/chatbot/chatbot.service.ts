import { Injectable } from '@nestjs/common'
import {
  Document,
  VectorStoreIndex,
  SimpleDirectoryReader,
  RouterQueryEngine,
  storageContextFromDefaults,
  ContextChatEngine,
} from 'llamaindex'

// import {
//   Document,
//   VectorStoreIndex,
//   SimpleDirectoryReader,
//   RouterQueryEngine,
//   OpenAIAgent,
//   QueryEngineTool,
//   FunctionTool,
// } from 'npm:llamaindex@0.1.18'

@Injectable()
export class ChatbotService {
  constructor() {}

  async getHello(): Promise<string> {
    // const storageContext = await storageContextFromDefaults({
    //   persistDir: './storage',
    // })

    // const documents = await new SimpleDirectoryReader().loadData({
    //   directoryPath: './data', // we have the React wikipedia page in here
    // })

    // let index = await VectorStoreIndex.fromDocuments(documents, {
    //   storageContext,
    // })

    // let engine = await index.asQueryEngine()

    // let response = await engine.query({ query: 'What is JSX?' })
    // console.log(response.toString())

    // let storageContext2 = await storageContextFromDefaults({
    //   persistDir: './storage',
    // })

    // let index2 = await VectorStoreIndex.init({
    //   storageContext: storageContext2,
    // })

    // let engine2 = await index2.asQueryEngine()

    // let response2 = await engine2.query({ query: 'What is JSX?' })
    // console.log(response2.toString())

    // const retriever = index2.asRetriever()
    // retriever.similarityTopK = 3

    // let chatEngine = new ContextChatEngine({
    //   retriever,
    // })

    // let messageHistory = [
    //   {
    //     role: 'user',
    //     content: 'What is JSX?',
    //   },
    //   {
    //     role: 'assistant',
    //     content:
    //       'JSX stands for JavaScript Syntax Extension. It is an extension to the JavaScript language syntax that provides a way to structure component rendering using syntax familiar to many developers. JSX is similar in appearance to HTML and is typically used to write React components, although components can also be written in pure JavaScript. It was created by Facebook and is similar to another extension syntax created for PHP called XHP.',
    //   },
    // ]

    // let newMessage = 'What was that last thing you mentioned?'

    // const response3 = await chatEngine.chat({
    //   message: newMessage,
    //   chatHistory: messageHistory,
    // })
    // console.log(response3.toString())

    // const response4 = await chatEngine.chat({
    //   message: newMessage,
    //   chatHistory: messageHistory,
    //   stream: true,
    // })
    // console.log(response4)

    // for await (const data of response4) {
    //   console.log(data.response)
    // }

    return 'Hello World!'
  }

  // async chatWithAgent(): Promise<string> {
  //   const documents1 = await new SimpleDirectoryReader().loadData({ directoryPath: './data' })
  //   const index1 = await VectorStoreIndex.fromDocuments(documents1)
  //   const queryEngine1 = index1.asQueryEngine()

  //   let response1 = await queryEngine1.query({ query: 'What did the author do in college?' })
  //   console.log(response1.toString())

  //   const documents2 = await new SimpleDirectoryReader().loadData({ directoryPath: './data2' })
  //   const index2 = await VectorStoreIndex.fromDocuments(documents2)
  //   const queryEngine2 = index2.asQueryEngine()

  //   let response2 = await queryEngine2.query({ query: 'What is React?' })
  //   console.log(response2.toString())

  //   const queryEngine = await RouterQueryEngine.fromDefaults({
  //     queryEngineTools: [
  //       {
  //         queryEngine: queryEngine1,
  //         description: 'Useful for questions about Dan Abramov',
  //       },
  //       {
  //         queryEngine: queryEngine2,
  //         description: 'Useful for questions about the React library',
  //       },
  //     ],
  //   })

  //   let response3 = await queryEngine.query({ query: 'What is React?' })
  //   console.log(response3.toString())

  //   let response4 = await queryEngine.query({ query: 'What did Dan Abramov do in college?' })
  //   console.log(response4.toString())

  //   function sumNumbers({ a, b }) {
  //     return a + b
  //   }

  //   const sumJSON = {
  //     type: 'object',
  //     properties: {
  //       a: {
  //         type: 'number',
  //         description: 'The first number',
  //       },
  //       b: {
  //         type: 'number',
  //         description: 'The second number',
  //       },
  //     },
  //     required: ['a', 'b'],
  //   }

  //   const sumFunctionTool = new FunctionTool(sumNumbers, {
  //     name: 'sumNumbers',
  //     description: 'Use this function to sum two numbers',
  //     parameters: sumJSON,
  //   })

  //   const queryEngineTool = new QueryEngineTool({
  //     queryEngine: queryEngine,
  //     metadata: {
  //       name: 'react_and_dan_abramov_engine',
  //       description: 'A tool that can answer questions about Dan Abramov and React',
  //     },
  //   })

  //   const agent = new OpenAIAgent({
  //     tools: [queryEngineTool, sumFunctionTool],
  //     verbose: true,
  //   })

  //   let response5 = await agent.chat({ message: 'What is React? Use a tool.' })
  //   console.log(response5.toString())

  //   let response6 = await agent.chat({ message: 'What is 501 + 5?' })
  //   console.log(response6.toString())
  //   return 'Hello There'
  // }
}
