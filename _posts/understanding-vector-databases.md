---
title: 'Understanding Vector Databases for RAG'
excerpt: 'Why Pinecone, Weaviate, and Milvus are becoming the backend of the AI revolution.'
coverImage: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=1000'
date: '2025-01-15'
---

To build a custom AI chatbot, you need more than just prompts. You need context.

## What is a Vector Embedding?
It's a list of numbers representing the "meaning" of text. Words with similar meanings are close together in this mathematical space.

## Why SQL isn't enough
Standard databases match exact keywords. Vector databases match *concepts*.

### How RAG Works
1. **Retrieve**: Find relevant documents from the vector DB.
2. **Augment**: Add them to the prompt.
3. **Generate**: Ask the LLM to answer using that info.

## Top Providers
- **Pinecone**: Easy, managed service.
- **Chroma**: Open source, local-first.
- **pgvector**: Add vector search to your existing Postgres.
