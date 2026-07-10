# NEXORA Database Design

## Overview

The database is designed to support:

- Multiple conversations
- Multiple messages
- AI memory
- Future user accounts
- File uploads
- AI agents

Initially, SQLite will be used during development.

The schema is designed so it can later be migrated to PostgreSQL without major changes.

---

# Entity Relationship Diagram

```
User
 │
 │ 1
 │
 ▼
Conversation
 │
 │ 1
 │
 ▼
Message
```

Future

```
User
 │
 ├─────────────┐
 ▼             ▼
Conversation   Memory

 │

 ▼

Message

 │

 ▼

Attachment
```

---

# Tables

## users

| Column | Type |
|---------|------|
| id | UUID |
| name | TEXT |
| email | TEXT |
| password_hash | TEXT |
| created_at | DATETIME |

---

## conversations

| Column | Type |
|---------|------|
| id | UUID |
| title | TEXT |
| user_id | UUID |
| created_at | DATETIME |
| updated_at | DATETIME |

---

## messages

| Column | Type |
|---------|------|
| id | UUID |
| conversation_id | UUID |
| role | TEXT |
| content | TEXT |
| created_at | DATETIME |

---

Future

## memory

| Column | Type |
|---------|------|
| id | UUID |
| user_id | UUID |
| memory | TEXT |
| importance | INTEGER |
| created_at | DATETIME |

---

## attachments

| Column | Type |
|---------|------|
| id | UUID |
| conversation_id | UUID |
| filename | TEXT |
| file_type | TEXT |
| path | TEXT |

---

# Relationships

User

↓

Many Conversations

↓

Many Messages

---

# Future Extensions

- Semantic Memory
- Vector Database
- AI Agent Tasks
- Team Workspace
- Shared Conversations
- Conversation Tags

---

# Development Database

SQLite

↓

SQLAlchemy ORM

↓

Alembic Migrations

↓

PostgreSQL (Production)