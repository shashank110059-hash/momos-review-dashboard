import reviews from "../../../data/reviews.json";

export async function POST(req: Request) {
  try {
    const { rating } = await req.json();

    const list = reviews[String(rating) as keyof typeof reviews];

    if (!list) {
      return Response.json(
        { error: "Invalid Rating" },
        { status: 400 }
      );
    }

    // Shuffle reviews
    const shuffled = [...list].sort(() => Math.random() - 0.5);

    // Return first 5
    return Response.json({
      reviews: shuffled.slice(0, 5),
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}