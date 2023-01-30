import Link from "next/link";

export default function HomeScreen() {
  return (
    <div>
      <h1>Página Inicial (Nova alteração)</h1>
      <Link href="/about">Ir para sobre</Link>
    </div>
  );
}
