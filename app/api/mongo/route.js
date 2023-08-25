import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
require('dotenv').config();


export async function GET(request) {
  
  const uri = process.env.MONGODB_URI
  
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const database = client.db("Stock");
    const inventory = database.collection("inventory");
    const query = {};
    const products = await inventory.find().toArray();
    

    return NextResponse.json({products});
  } finally {
    await client.close();
  }
}
