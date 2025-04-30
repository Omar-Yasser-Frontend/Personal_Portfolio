"use server";
import sendEmail from "./mailer";

export async function sendMessage(data) {
  const { name, email, text } = data;

  if (!name || !email || !text) throw new Error("All Fields are required");
  console.log("got here");

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    throw new Error("Invalid email");
  console.log("got here and here");

  await sendEmail({ name, email, text });
  return { success: "Message must be sent or dollar" };
}
