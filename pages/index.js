// /pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Sten Studio</h1>
      <nav>
        <h2>Directory</h2>
        <ul>
          <li><Link href="/cms">Portfolio & Archive</Link></li>
          {/* Add other links as needed */}
        </ul>
      </nav>
    </div>
  );