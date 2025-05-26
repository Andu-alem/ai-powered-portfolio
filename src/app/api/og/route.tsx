import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // Get title from query params or use default
    const title = searchParams.get("title") || "Andualem Fereja"
    const subtitle = searchParams.get("subtitle") || "Full-Stack Developer"

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#7c3aed",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #9f7aea 2%, transparent 0%), radial-gradient(circle at 75px 75px, #9f7aea 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          color: "white",
          padding: "40px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "20px",
            padding: "40px",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          <h1
            style={{
              fontSize: "80px",
              fontWeight: "bold",
              margin: "0",
              textAlign: "center",
            }}
          >
            {title}
          </h1>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "normal",
              margin: "20px 0 0 0",
              textAlign: "center",
            }}
          >
            {subtitle}
          </h2>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e) {
    console.error(e)
    return new Response("Failed to generate OG image", { status: 500 })
  }
}

