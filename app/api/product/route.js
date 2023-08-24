import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
require('dotenv').config();


export async function GET(request) {
  
  const uri = process.env.MONGODB_URI;
  
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const database = client.db("Stock");
    const inventory = database.collection("inventory");
    const query = {};
    const products = await inventory.find().toArray();
    

    return NextResponse.json({ success:true, products});
  } finally {
    await client.close();
  }
}

export async function POST(request) {

  let body = await request.json()
  console.log(body)
  const uri ="mongodb+srv://Xrishabh:5LDTkaA3gaj70N7l@cluster0.eijacrx.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    const database = client.db("Stock");
    const inventory = database.collection("inventory");
    const product = await inventory.insertOne(body)

    return NextResponse.json({ product });
  } finally {
    await client.close();
  }
}
