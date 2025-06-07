## Daily Task — Setup Instructions

# 1. Clone the repository
git clone https://github.com/sagarpandey006/your-repo.git
cd your-repo

# 2. Go to https://neon.tech and create a project
# Copy your connection string that starts with "postgresql://"

# 3. Create a .env file in the root and paste the connection string
echo "DATABASE_URL=your_neon_connection_string" > .env

# 4. Install dependencies
npm install

# 5. Generate and push the schema to Neon
npm run db:generate
npm run db:push

# 6. Start the development server
npm run dev

# 7. Open in your browser
# Visit http://localhost:3000/
