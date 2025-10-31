// 'use server'
//
// import { MongoClient } from "mongodb";
//
// export default async function handler(req, res) {
//     const connectionString: string = process.env.NEXT_PUBLIC_ATLAS_URI as string;
//     const dbName: string = process.env.NEXT_PUBLIC_DB_NAME as string;
//     const collectionName: string = process.env.NEXT_PUBLIC_COLLECTION_NAME as string;
//
//     if (req.method === "POST") {
//         const { data } = req.body;
//
//         const client = new MongoClient(connectionString);
//
//         try {
//             await client.connect();
//
//             // Choose a name for your database
//             const database = client.db(dbName);
//
//             // Choose a name for your collection
//             const collection = database.collection(collectionName);
//
//             await collection.insertOne({ data });
//
//             res.status(201).json({ message: "Data saved successfully!" });
//         } catch (error) {
//             res.status(500).json(
//                 {
//                     message: "Something went wrong!",
//                     error: error
//                 });
//         } finally {
//             await client.close();
//         }
//     } else {
//         res.status(405).json({ message: "Method not allowed!" });
//     }
// }