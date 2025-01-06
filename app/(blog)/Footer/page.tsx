import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-2">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          {/* Logo or Branding */}
          <div className="text-lg font-semibold">TOURISM BLOGS</div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm">
            <Link href="/" className="hover:text-cyan-500">
              Home
            </Link>
            <Link href="/about" className="hover:text-cyan-500">
              About
            </Link>
            <Link href="/contact" className="hover:text-cyan-500">
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Tourism Blogs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
