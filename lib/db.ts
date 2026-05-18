import { MongoClient, type Collection } from "mongodb"

export type ContactInquiryDocument = {
    name: string
    email: string
    company?: string
    category?: string
    budget?: string
    timeline?: string
    brief?: string
    createdAt: Date
    updatedAt: Date
}

type MongoGlobal = {
    mongoClientPromise?: Promise<MongoClient>
}

const globalForMongo = globalThis as typeof globalThis & MongoGlobal

const mongoUri = process.env.DATABASE_URL ?? "mongodb://127.0.0.1:27017/portfolio"

if (!process.env.DATABASE_URL) {
    process.env.DATABASE_URL = mongoUri
}

const mongoClientPromise = globalForMongo.mongoClientPromise ?? new MongoClient(mongoUri).connect()

if (process.env.NODE_ENV !== "production") {
    globalForMongo.mongoClientPromise = mongoClientPromise
}

export async function getContactInquiryCollection(): Promise<Collection<ContactInquiryDocument>> {
    const client = await mongoClientPromise
    return client.db().collection<ContactInquiryDocument>("ContactInquiry")
}
