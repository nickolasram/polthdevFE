'use server'

import { MongoClient } from "mongodb";
import {NextResponse} from "next/server";

export async function GET() {
    const connectionString: string = process.env.NEXT_PUBLIC_ATLAS_URI as string;
    const dbName: string = process.env.NEXT_PUBLIC_DB_NAME as string;
    const collectionName: string = process.env.NEXT_PUBLIC_COLLECTION_NAME as string;
    const client = new MongoClient(connectionString);

    try {
        await client.connect();

        // Choose a name for your database
        const database = client.db(dbName);

        // Choose a name for your collection
        const collection = database.collection(collectionName);
        // const allData = await collection.find({}).project({ _id: 1, meta: 1 }).toArray();
        const allData = await collection.find({}).project().toArray();

        return NextResponse.json(
            { data: allData },
            {
                status: 200,
            }
        );
    } catch (error) {
        return NextResponse.json(
            { key: error },
            {
                status: 500,
            }
        );
    } finally {
        await client.close();
    }
}