import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-xl font-bold text-emerald-600 mb-4">DietitianPro.</p>
        <div className="flex justify-center space-x-6 mb-8 text-sm font-medium text-gray-500">
          <Link href="/about" className="hover:text-emerald-600">About</Link>
          <Link href="/services" className="hover:text-emerald-600">Programs</Link>
          <Link href="/faq" className="hover:text-emerald-600">FAQ</Link>
        </div>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Dietitian Pro Consult. All rights reserved.
        </p>
      </div>
    </footer>
  );
}