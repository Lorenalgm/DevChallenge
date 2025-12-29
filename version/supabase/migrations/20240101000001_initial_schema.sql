-- Create devs table
CREATE TABLE IF NOT EXISTS devs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255),
    avatar TEXT,
    github VARCHAR(255),
    linkedin VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create challenges table
CREATE TABLE IF NOT EXISTS challenges (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    level VARCHAR(50) NOT NULL CHECK (level IN ('beginner', 'intermediate', 'advanced', 'iniciante', 'intermediário', 'avançado')),
    type VARCHAR(50) NOT NULL CHECK (type IN ('Frontend', 'Backend', 'Mobile')),
    techs TEXT[] DEFAULT '{}',
    images TEXT[] DEFAULT '{}',
    background TEXT,
    github_url TEXT,
    brief TEXT,
    dev_id UUID REFERENCES devs(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create newsletters table
CREATE TABLE IF NOT EXISTS newsletters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_challenges_dev_id ON challenges(dev_id);
CREATE INDEX IF NOT EXISTS idx_challenges_type ON challenges(type);
CREATE INDEX IF NOT EXISTS idx_challenges_level ON challenges(level);
CREATE INDEX IF NOT EXISTS idx_challenges_created_at ON challenges(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_devs_created_at ON devs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletters_email ON newsletters(email);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_devs_updated_at BEFORE UPDATE ON devs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_challenges_updated_at BEFORE UPDATE ON challenges
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE devs ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletters ENABLE ROW LEVEL SECURITY;

-- RLS Policies for devs (public read access)
CREATE POLICY "devs_select_policy" ON devs
    FOR SELECT
    USING (true);

-- RLS Policies for challenges (public read access)
CREATE POLICY "challenges_select_policy" ON challenges
    FOR SELECT
    USING (true);

-- RLS Policies for newsletters (public insert, authenticated users can read)
CREATE POLICY "newsletters_insert_policy" ON newsletters
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "newsletters_select_policy" ON newsletters
    FOR SELECT
    USING (auth.role() = 'authenticated');

