import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #06101d 0%, #04111b 45%, #071a2f 100%)",
        color: "#fff",
        padding: 64,
      }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 24, color: "#5eead4" }}>Prathamesh More</div>
        <div style={{ fontSize: 70, lineHeight: 1.02, fontWeight: 700, maxWidth: 920 }}>Building production-grade MVPs, AI systems, and scalable applications.</div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.72)", maxWidth: 920 }}>Full-stack engineer specializing in AI integrations, backend architecture, and startup-focused product development.</div>
      </div>
    ),
    size
  )
}
