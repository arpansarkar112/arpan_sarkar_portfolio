import { createServerFn } from "@tanstack/react-start";
import { prisma } from "@/lib/prisma";

export const submitContactFormAction = createServerFn({ method: "POST" })
  .validator((data: { name: string; email: string; subject: string; message: string }) => data)
  .handler(async ({ data }) => {
    try {
      const message = await prisma.message.create({
        data: {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
      });
      return { success: true, messageId: message.id };
    } catch (error) {
      console.error("Failed to save contact message:", error);
      throw new Error("Failed to save your message. Please try again later.");
    }
  });
