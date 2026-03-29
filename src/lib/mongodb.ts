import mongoose, { Mongoose } from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable in .env.local"
  );
}

// ── Cached connection (critical for Next.js App Router / hot reload) ────────

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: MongooseCache | undefined;
}

const cache: MongooseCache = global._mongooseCache ?? {
  conn: null,
  promise: null,
};

global._mongooseCache = cache;

// ── Connect ─────────────────────────────────────────────────────────────────

export async function connectDB(): Promise<Mongoose> {
  // Return existing connection immediately
  if (cache.conn) return cache.conn;

  // Await an in-flight connection promise (prevents multiple simultaneous connections)
  if (!cache.promise) {
    cache.promise = mongoose.connect(MONGO_URI, {
      bufferCommands: false,
      dbName: "victor_leads", // explicit DB name; overrides anything in the URI
    });
  }

  try {
    cache.conn = await cache.promise;
  } catch (error) {
    // Reset promise so the next call retries cleanly
    cache.promise = null;
    throw error;
  }

  return cache.conn;
}