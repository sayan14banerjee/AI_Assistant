# NEXORA Architecture

## Frontend

```
Next.js
│
├── Components
├── Hooks
├── Services
├── Types
├── Assets
└── Styles
```

---

## Backend

```
FastAPI
│
├── API
├── Services
├── Tools
├── Schemas
├── Core
├── Database
└── Models
```

---

## Current Flow

```
User

↓

ChatInput

↓

useChat

↓

FastAPI

↓

LLM Service

↓

Groq

↓

Streaming Response

↓

Frontend

↓

Markdown Renderer

↓

Code Block
```

---

## Future Architecture

```
User

↓

Frontend

↓

API Gateway

↓

AI Orchestrator

├── Web Search

├── Memory

├── Document Parser

├── Vector Search

├── AI Agents

└── LLM
```