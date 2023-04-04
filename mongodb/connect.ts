import mongoose, { ConnectOptions, Mongoose } from "mongoose";
import { DB_NAME, MONGODB_URI, NODE_ENV } from "@/lib/env";

// models

declare global {
    var mongo: {
        promise: Promise<Mongoose> | null;
        conn: Mongoose | null;
    };
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo;

if (!cached) {
    cached = global.mongo = { conn: null, promise: null };
}

async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts: ConnectOptions = {
            dbName: DB_NAME,
            bufferCommands: false,
            retryWrites: true,
            autoCreate: false,
            autoIndex: NODE_ENV === "production" ? false : true,
            maxIdleTimeMS: 20000,
            serverSelectionTimeoutMS: 20000,
            socketTimeoutMS: 20000,
        };

        cached.promise = mongoose.connect(MONGODB_URI!, opts).then(mongoose => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default connectToDatabase;
