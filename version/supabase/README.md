# Supabase Migrations

This directory contains database migrations for the DevChallenge project.

## Running Migrations

### Using Supabase CLI (Recommended)

1. Install the Supabase CLI if you haven't already:
   ```bash
   npm install -g supabase
   ```

2. Link your project to Supabase:
   ```bash
   supabase link --project-ref your-project-ref
   ```

3. Push migrations to your Supabase project:
   ```bash
   npx supabase db push
   ```

   Or using the Supabase CLI directly:
   ```bash
   supabase db push
   ```

### Using Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy the contents of `migrations/20240101000001_initial_schema.sql`
4. Paste and run the SQL in the SQL Editor

## Migration Files

### `20240101000001_initial_schema.sql`

This migration creates the initial database schema with:

- **devs table**: Stores developer information (name, position, avatar, github, linkedin)
- **challenges table**: Stores challenge information (name, description, level, type, techs, images, etc.)
- **newsletters table**: Stores newsletter subscriptions (email)

#### Features:
- UUID primary keys
- Foreign key relationship between challenges and devs
- Automatic `updated_at` timestamps via triggers
- Indexes for performance optimization
- Row Level Security (RLS) policies for data access control

## Database Schema

### devs
- `id` (UUID, Primary Key)
- `name` (VARCHAR)
- `position` (VARCHAR)
- `avatar` (TEXT)
- `github` (VARCHAR)
- `linkedin` (VARCHAR)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### challenges
- `id` (UUID, Primary Key)
- `name` (VARCHAR)
- `description` (TEXT)
- `level` (VARCHAR) - 'beginner', 'intermediate', or 'advanced'
- `type` (VARCHAR) - 'Frontend', 'Backend', or 'Mobile'
- `techs` (TEXT[]) - Array of technologies
- `images` (TEXT[]) - Array of image URLs
- `background` (TEXT) - Background image URL
- `github_url` (TEXT)
- `brief` (TEXT)
- `dev_id` (UUID, Foreign Key to devs)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### newsletters
- `id` (UUID, Primary Key)
- `email` (VARCHAR, Unique)
- `created_at` (TIMESTAMP)

## Row Level Security (RLS)

- **devs**: Public read access
- **challenges**: Public read access
- **newsletters**: Public insert access, authenticated read access

## Notes

- The migration uses PostgreSQL UUID extension for generating unique IDs
- All timestamps are stored with timezone information
- The `techs` and `images` fields in challenges are stored as PostgreSQL arrays
- Foreign key constraints ensure data integrity between challenges and devs

