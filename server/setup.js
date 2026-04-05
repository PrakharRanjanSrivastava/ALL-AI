import { neon } from '@neondatabase/serverless';
import 'dotenv/config'; 

async function createTable() {
    console.log("🔍 Checking environment variables...");
    
    // 1. Check if the URL is missing
    if (!process.env.DATABASE_URL) {
        console.error("❌ ERROR: DATABASE_URL is missing or undefined!");
        console.log("👉 Fix: Make sure your server/.env file has DATABASE_URL=postgresql://...");
        process.exit(1);
    }

    console.log("✅ Database URL found! Attempting network connection...");
    
    const sql = neon(process.env.DATABASE_URL);

    try {
        // 2. Attempt the connection
        await sql`
            CREATE TABLE IF NOT EXISTS creations (
                id SERIAL PRIMARY KEY,
                user_id VARCHAR(255) NOT NULL,
                prompt TEXT NOT NULL,
                content TEXT NOT NULL,
                type VARCHAR(50) NOT NULL,
                publish BOOLEAN DEFAULT false,
                likes TEXT[] DEFAULT '{}',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        
        console.log("🎉 SUCCESS! The 'creations' table is ready.");
        process.exit(0);
    } catch (error) {
        console.error("❌ Network/Database Error:", error.message);
        process.exit(1);
    }
}

createTable();