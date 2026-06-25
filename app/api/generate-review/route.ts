import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { rating } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are helping customers write Google Reviews.

Restaurant Name: Momos Nation Cafe

Rating: ${rating} stars

Write exactly 5 different Google reviews.

Rules:
- Natural
- Human sounding
- 20-40 words each
- No emojis
- No numbering
- No quotation marks
- Return each review on a new line.
`;

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    const reviews = text
      .split("\n")
      .filter((line) => line.trim() !== "");

    return Response.json({
      reviews,
    });

  } catch (error: any) {
    console.error("========== GEMINI ERROR ==========");
    console.error(error);
    console.error("==================================");

    return Response.json(
      {
        success: false,
        error: error?.message || "Unknown error",
        details: String(error),
      },
      { status: 500 }
    );
  }
}