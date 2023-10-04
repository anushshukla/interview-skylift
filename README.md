# Skylift Technical Test

## Introduction
This is the live technical test for Skylift.

## Task

You must create an extremely basic AI chat app, similar to the likes of ChatGPT. 

You must also create a basic SDK for a business to use to integrate with Skylift. The SDK will be used to consume AI services and log analytics to Skylift's API.

You have been provided with a mock Skylift API. This is a simple API which you can post a log to and retrieve the logs from.

You have a boilerplate react template (frontend) and express template (backend) to get you started. 

#### At minimum, you must (by order of priority)
- Build a (very) basic chat UI - input, and display both side's messages appropriately.
- Build out the backend to be able interact with the AI chat bot.
- Build a basic "SDK" to use in the backend.
    - Must be at least structured like an SDK would be. Takes in API key, has a prompt function, etc.
    - Must be able to log analytics to the mock Skylift API when a prompt is triggered.
- Link it all up!
  
*Note 1: We do not care about making the chat super pretty. Just make it a basic chat.*


#### Base libraries
Backend: TypeScript, Express

Frontend: TypeScript, React, TailwindCSS

#### Allowed
- Read documentation
- Search the internet
- Add additional libraries

#### Not allowed
- Cannot copy full solutions from the internet
- You MUST use the libraries provided
  - E.g. you cannot swap out React for Vue, Tailwind for Styled Components, etc.
- ChatGPT / LLM tools
- Copilot. We'll allow it if you are struggling, but we'd prefer you didn't use it.

## Setup
- Clone this repo
- Create 3 terminal windows
- Install dependencies in all windows
	- `yarn install` or `npm install` or `pnpm install`
- Run all 3 servers in each window
	- `yarn dev` or `npm run dev` or `pnpm dev`
