# Backend Migration Guide

This guide explains how to migrate the backend from the old project to the new Next.js + Supabase setup.

## Overview

The backend has been migrated from a separate API server to Next.js API routes with Supabase as the database. All endpoints maintain backward compatibility with the old API format.

## Database Setup

### 1. Run Supabase Migrations

First, ensure you have a Supabase project set up. Then run the migrations:

```bash
cd version
npx supabase db push
```

Or if you have Supabase CLI installed globally:

```bash
supabase db push
```

This will create the following tables:
- `devs` - Developer information
- `challenges` - Challenge data
- `newsletters` - Newsletter subscriptions

See `supabase/README.md` for detailed schema information.

### 2. Environment Variables

Make sure you have the following environment variables set in your `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

## API Endpoints

All API endpoints are located in `app/api/` and maintain the same structure as the old API:

### Challenges

- **GET `/api/challenges`** - Get all challenges
  - Returns: Array of challenge objects with nested dev information
  - Format matches old API: `{ _id, name, description, level, type, techs, images, background, github_url, brief, dev_id, createdAt, updatedAt }`

- **GET `/api/challenges/[id]`** - Get a single challenge by ID
  - Returns: Single challenge object with nested dev information
  - Format matches old API

### Devs

- **GET `/api/devs`** - Get all developers
  - Returns: Array of dev objects
  - Format matches old API: `{ _id, name, position, avatar, github, linkedin, createdAt, updatedAt }`

### Newsletter

- **POST `/api/newsletter`** - Subscribe to newsletter
  - Body: `{ email: string }`
  - Returns: `{ message: string }`
  - Handles duplicate emails gracefully

### Categories

- **GET `/api/categories`** - Get challenge categories
  - Returns: Static array of categories
  - Format: `[{ id, name }]`

## Data Format Compatibility

The API routes transform Supabase data to match the old API format:

- `id` → `_id` (for MongoDB compatibility)
- `created_at` → `createdAt`
- `updated_at` → `updatedAt`
- Nested `dev_id` object includes full dev information

## Migration Notes

### Level Values

The database accepts both English and Portuguese level values:
- English: `beginner`, `intermediate`, `advanced`
- Portuguese: `iniciante`, `intermediário`, `avançado`

The frontend uses English values in the data, but the form may use Portuguese labels.

### Techs and Images

Both `techs` and `images` are stored as PostgreSQL arrays (`TEXT[]`). The API automatically converts them to JavaScript arrays.

### Foreign Keys

- `challenges.dev_id` references `devs.id`
- If a dev is deleted, the challenge's `dev_id` is set to NULL (not deleted)

## Testing the API

You can test the endpoints using curl or any HTTP client:

```bash
# Get all challenges
curl http://localhost:3000/api/challenges

# Get a specific challenge
curl http://localhost:3000/api/challenges/{challenge-id}

# Get all devs
curl http://localhost:3000/api/devs

# Subscribe to newsletter
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

## Next Steps

1. Update the frontend to use the new API endpoints (if not already done)
2. Migrate existing data from the old database to Supabase
3. Test all endpoints to ensure compatibility
4. Deploy to production

## Troubleshooting

### Migration Errors

If you encounter errors when running migrations:
1. Check that you're connected to the correct Supabase project
2. Ensure you have the necessary permissions
3. Check the Supabase dashboard for any existing tables that might conflict

### API Errors

If API routes return errors:
1. Verify environment variables are set correctly
2. Check Supabase project is accessible
3. Review Row Level Security (RLS) policies
4. Check browser console and server logs for detailed error messages

### Data Type Issues

If you encounter issues with arrays (techs, images):
- Ensure data is stored as PostgreSQL arrays in Supabase
- Check that the API transformation is working correctly
- Verify the frontend handles arrays properly

