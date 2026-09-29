/*
# Create bookings table for Bea Masszázsterápia

1. New Tables
- `bookings`
  - `id` (uuid, primary key)
  - `name` (text, not null) — client's full name
  - `contact` (text, not null) — phone number or email
  - `service` (text, not null) — chosen service (SHR / Massage / Csontkovácsolás)
  - `preferred_date` (timestamptz, not null) — preferred appointment date/time
  - `notes` (text, nullable) — optional message from client
  - `status` (text, default 'pending') — booking status
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `bookings`.
- Allow anon + authenticated INSERT only (public booking form, no sign-in).
- No SELECT/UPDATE/DELETE for anon — only the studio owner should see bookings (server-side).
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  contact text NOT NULL,
  service text NOT NULL,
  preferred_date timestamptz NOT NULL,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings"
  ON bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);