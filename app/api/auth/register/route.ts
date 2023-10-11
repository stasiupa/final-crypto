import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { Client } from "pg";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    //validate email and pass here :P

    console.log("Added user to DB: ", { email, password })
    const hashedPassword = await hash(password, 10)

    const client = new Client({
      user: "postgres",
      host: "localhost",
      database: "postgres",
      password: "testpass123",
      port: 5432,
    });

    await client.connect();

    const query = {
      text: "INSERT INTO core_user(email, password, is_superuser, name, is_active, is_staff) VALUES ($1, $2, $3, $4, $5, $6)",
      values: [email, hashedPassword, false, false, false, false],
    };

    const response = await client.query(query);

    await client.end();

  } catch (e) {
    console.log({ e })
  }
  return NextResponse.json({ message: "success" })
}