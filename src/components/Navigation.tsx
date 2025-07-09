'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function Navigation() {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = "transition-colors duration-200 relative group";
    const activeClasses = "text-yellow-400 font-medium";
    const inactiveClasses = "text-green-100 hover:text-white";

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav className="bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg fixed top-0 left-0 right-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Wanderlust Voyages Logo"
              width={120}
              height={36}
              className="h-[10rem] w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={getLinkClasses('/')}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ease-out ${isActive('/') ? 'w-full scale-x-100' : 'w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100'}`}></span>
            </Link>
            <Link
              href="/about"
              className={getLinkClasses('/about')}
            >
              About
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ease-out ${isActive('/about') ? 'w-full scale-x-100' : 'w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100'}`}></span>
            </Link>
            <Link
              href="/contact"
              className={getLinkClasses('/contact')}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ease-out ${isActive('/contact') ? 'w-full scale-x-100' : 'w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100'}`}></span>
            </Link>
            {user && (
              <Link
                href="/dashboard"
                className={getLinkClasses('/dashboard')}
              >
                Dashboard
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ease-out ${isActive('/dashboard') ? 'w-full scale-x-100' : 'w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100'}`}></span>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-green-100 hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-green-100">Welcome, {user.name}</span>
                <Link
                  href="/logout"
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                  }}
                  className="text-yellow-400 px-4 py-2 rounded-md hover:text-yellow-500 transition-colors duration-200"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <Link
                href="/auth"
                className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-30 transition-colors duration-200"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-green-500 to-emerald-600 border-t border-green-400">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2 transition-colors duration-200 relative ${isActive('/') ? 'text-white font-medium bg-white bg-opacity-20' : 'text-green-100 hover:text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
                <span className={`absolute bottom-2 left-3 right-3 h-0.5 bg-white transition-all duration-300 ease-out ${isActive('/') ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 transition-colors duration-200 relative ${isActive('/about') ? 'text-white font-medium bg-white bg-opacity-20' : 'text-green-100 hover:text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
                <span className={`absolute bottom-2 left-3 right-3 h-0.5 bg-white transition-all duration-300 ease-out ${isActive('/about') ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 transition-colors duration-200 relative ${isActive('/contact') ? 'text-white font-medium bg-white bg-opacity-20' : 'text-green-100 hover:text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
                <span className={`absolute bottom-2 left-3 right-3 h-0.5 bg-white transition-all duration-300 ease-out ${isActive('/contact') ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </Link>
              {user && (
                <Link
                  href="/dashboard"
                  className={`block px-3 py-2 transition-colors duration-200 relative ${isActive('/dashboard') ? 'text-white font-medium bg-white bg-opacity-20' : 'text-green-100 hover:text-white'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                  <span className={`absolute bottom-2 left-3 right-3 h-0.5 bg-white transition-all duration-300 ease-out ${isActive('/dashboard') ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </Link>
              )}
              {user ? (
                <div className="px-3 py-2">
                  <span className="text-green-100 text-sm">Welcome, {user.name}</span>
                  <Link
                    href="/logout"
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full mt-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-200"
                  >
                    Logout
                  </Link>
                </div>
              ) : (
                <Link
                  href="/auth"
                  className="block px-3 py-2 rounded-md transition-colors duration-200 bg-white bg-opacity-20 text-white hover:bg-white hover:bg-opacity-30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 