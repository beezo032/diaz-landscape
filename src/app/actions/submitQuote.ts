"use server";

import { z } from "zod";
import { quoteSchema, QuoteFormData } from "@/lib/schemas";

export async function submitQuoteAction(data: QuoteFormData) {
  try {
    // Validate the incoming payload securely against the Zod schema
    const parsedData = quoteSchema.parse(data);

    // Format the payload for webhook or email service
    const formattedPayload = {
      event: "NEW_QUOTE_REQUEST",
      timestamp: new Date().toISOString(),
      lead: {
        name: parsedData.name,
        phone: parsedData.phone,
        address: parsedData.address,
        service: parsedData.service,
      },
      source: "Website Lead Form",
    };

    // Note: In production, you would fetch() to Zapier/Make or use Resend here.
    // For now, we simulate network latency and a successful submission.
    console.log("Simulating Dispatch to Webhook/Email...", formattedPayload);
    
    await new Promise((resolve) => setTimeout(resolve, 1200));

    return { 
      success: true, 
      message: "Your quote request has been successfully received. We'll be in touch shortly!" 
    };
  } catch (error) {
    console.error("Form validation failed:", error);
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors };
    }
    return { success: false, message: "An unexpected error occurred." };
  }
}
