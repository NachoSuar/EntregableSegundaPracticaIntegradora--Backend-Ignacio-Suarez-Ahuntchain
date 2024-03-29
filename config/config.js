import dotenv from 'dotenv';

dotenv.config();

const config = {
  github: {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  },
  mongoDB: {
    url: process.env.MONGODB_URL,
  },
  session: {
    secret: process.env.SESSION_SECRET,
    ttl: parseInt(process.env.SESSION_TTL),
  },
};

export default config;

