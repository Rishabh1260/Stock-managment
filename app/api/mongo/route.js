import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  
  const uri ="mongodb+srv://Xrishabh:jMekxKPNS4y81kkX@cluster0.eijacrx.mongodb.net/";
  
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
