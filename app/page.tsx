import Link from "next/link";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "40px", fontFamily: "system-ui" }}>
      <h1>👋 Welcome to My Next.js App</h1>
      <p>This is the main Welcome page.Thank You....</p>
      <Link href="/hello" style={{ color: "blue", textDecoration: "underline" }}>
        Go to Hello Page →
      </Link>
    </main>
  );
}
