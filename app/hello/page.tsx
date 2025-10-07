import Link from "next/link";

export default function Hello() {
  return (
    <main style={{ textAlign: "center", padding: "40px", fontFamily: "system-ui" }}>
      <h1>👋 Hello There!</h1>
      <p>Welcome to the Hello page. Thank You! </p>
      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        ← Back to Home
      </Link>
    </main>
  );
}
