import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Kishan Fast Food & Restaurant. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span>Need technical support?</span>
          <span>
            Developed by{' '}
            <a
              href="https://www.visiontechx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff7b2b] font-bold hover:underline"
            >
              Vision TechX
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
