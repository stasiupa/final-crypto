import { redirect } from "next/navigation";
import Form from "./form";
import { getServerSession } from "next-auth/next";

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return <Form />;
}
