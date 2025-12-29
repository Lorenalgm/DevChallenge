# API Documentation

This document describes all available API endpoints in the DevChallenge Next.js application.

## Base URL

All API endpoints are prefixed with `/api`.

## Endpoints

### Challenges

#### GET `/api/challenges`

Get all challenges with optional filtering.

**Query Parameters:**
- `type` (optional): Filter by challenge type (`Frontend`, `Backend`, `Mobile`)
- `level` (optional): Filter by challenge level (`beginner`, `intermediate`, `advanced`, `iniciante`, `intermediário`, `avançado`)

**Example Request:**
```bash
GET /api/challenges
GET /api/challenges?type=Frontend
GET /api/challenges?level=beginner&type=Mobile
```

**Response:**
```json
[
  {
    "_id": "uuid",
    "name": "Challenge Name",
    "description": "Challenge description",
    "level": "beginner",
    "type": "Frontend",
    "techs": ["HTML", "CSS", "JavaScript"],
    "images": ["https://example.com/image1.png"],
    "background": "https://example.com/background.png",
    "github_url": "https://github.com/user/repo",
    "brief": "Challenge brief description",
    "dev_id": {
      "_id": "uuid",
      "name": "Developer Name",
      "position": "Developer",
      "avatar": "https://example.com/avatar.png",
      "github": "username",
      "linkedin": "username"
    },
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### POST `/api/challenges`

Create a new challenge.

**Request Body:**
```json
{
  "name": "Challenge Name",
  "description": "Challenge description",
  "level": "beginner",
  "type": "Frontend",
  "techs": "HTML, CSS, JavaScript" // or ["HTML", "CSS", "JavaScript"],
  "images": ["https://example.com/image1.png"],
  "background": "https://example.com/background.png",
  "github_url": "https://github.com/user/repo",
  "brief": "Challenge brief description",
  "dev_id": "uuid" // optional
}
```

**Required Fields:**
- `name`
- `description`
- `level` (must be one of: `beginner`, `intermediate`, `advanced`, `iniciante`, `intermediário`, `avançado`)
- `type` (must be one of: `Frontend`, `Backend`, `Mobile`)

**Response:**
```json
{
  "_id": "uuid",
  "name": "Challenge Name",
  // ... same format as GET response
}
```

**Status Codes:**
- `201`: Challenge created successfully
- `400`: Validation error
- `500`: Server error

#### GET `/api/challenges/[id]`

Get a single challenge by ID.

**Example Request:**
```bash
GET /api/challenges/123e4567-e89b-12d3-a456-426614174000
```

**Response:**
```json
{
  "_id": "uuid",
  "name": "Challenge Name",
  // ... same format as GET /api/challenges response
}
```

**Status Codes:**
- `200`: Success
- `404`: Challenge not found
- `500`: Server error

#### PUT `/api/challenges/[id]`

Update a challenge by ID.

**Request Body:**
```json
{
  "name": "Updated Challenge Name",
  "description": "Updated description",
  // ... any fields to update
}
```

**Response:**
```json
{
  "_id": "uuid",
  "name": "Updated Challenge Name",
  // ... updated challenge data
}
```

**Status Codes:**
- `200`: Challenge updated successfully
- `400`: Validation error
- `404`: Challenge not found
- `500`: Server error

#### DELETE `/api/challenges/[id]`

Delete a challenge by ID.

**Response:**
```json
{
  "message": "Challenge deleted successfully"
}
```

**Status Codes:**
- `200`: Challenge deleted successfully
- `400`: Invalid ID
- `500`: Server error

---

### Devs

#### GET `/api/devs`

Get all developers.

**Example Request:**
```bash
GET /api/devs
```

**Response:**
```json
[
  {
    "_id": "uuid",
    "name": "Developer Name",
    "position": "Full Stack Developer",
    "avatar": "https://example.com/avatar.png",
    "github": "username",
    "linkedin": "username",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### POST `/api/devs`

Create a new developer.

**Request Body:**
```json
{
  "name": "Developer Name",
  "position": "Full Stack Developer", // optional
  "avatar": "https://example.com/avatar.png", // optional
  "github": "username", // optional
  "linkedin": "username" // optional
}
```

**Required Fields:**
- `name`

**Response:**
```json
{
  "_id": "uuid",
  "name": "Developer Name",
  // ... same format as GET response
}
```

**Status Codes:**
- `201`: Dev created successfully
- `400`: Validation error
- `500`: Server error

---

### Newsletter

#### POST `/api/newsletter`

Subscribe to the newsletter.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "message": "Successfully subscribed to newsletter"
}
```

**Status Codes:**
- `200`: Successfully subscribed (or already subscribed)
- `201`: Successfully subscribed (new subscription)
- `400`: Invalid email format
- `500`: Server error

**Notes:**
- Email is automatically converted to lowercase
- Duplicate emails are handled gracefully (returns 200 instead of error)

---

### Categories

#### GET `/api/categories`

Get all challenge categories.

**Example Request:**
```bash
GET /api/categories
```

**Response:**
```json
[
  { "id": 1, "name": "Frontend" },
  { "id": 2, "name": "Backend" },
  { "id": 3, "name": "Mobile" }
]
```

---

## Error Responses

All endpoints may return error responses in the following format:

```json
{
  "error": "Error message description"
}
```

**Common Status Codes:**
- `400`: Bad Request - Invalid input or validation error
- `404`: Not Found - Resource not found
- `500`: Internal Server Error - Server-side error

---

## Data Format Compatibility

All endpoints maintain backward compatibility with the old API format:

- `id` → `_id` (for MongoDB compatibility)
- `created_at` → `createdAt`
- `updated_at` → `updatedAt`
- Nested `dev_id` object includes full dev information

---

## Authentication

Currently, most endpoints are publicly accessible. The newsletter endpoint allows public subscriptions, and challenge/dev endpoints allow public reads.

For future enhancements:
- Challenge creation/update/deletion may require authentication
- User-specific endpoints (e.g., "My Challenges") will require authentication

---

## Notes

- All timestamps are in ISO 8601 format (UTC)
- UUIDs are used for all IDs
- Arrays (`techs`, `images`) are stored as PostgreSQL arrays and returned as JavaScript arrays
- The `techs` field in POST requests can accept either a comma-separated string or an array

