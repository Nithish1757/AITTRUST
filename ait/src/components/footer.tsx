import { ReactNode } from "react";
import { Mail, MapPin, Phone, Hexagon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Newsletter & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 border-b border-slate-800 pb-12">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4 text-white">
              <Hexagon className="h-8 w-8 text-indigo-500 fill-indigo-500/20" />
              <span className="text-2xl font-bold tracking-tight">
                AcmeCorp
              </span>
            </a>
            <p className="text-slate-400 max-w-md mb-6">
              Empowering developers to build incredible digital experiences.
              Join our community and start creating something amazing today.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<TwitterIcon />} label="Twitter" />
              <SocialLink href="#" icon={<GithubIcon />} label="GitHub" />
              <SocialLink href="#" icon={<LinkedinIcon />} label="LinkedIn" />
              <SocialLink href="#" icon={<FacebookIcon />} label="Facebook" />
              <SocialLink href="#" icon={<InstagramIcon />} label="Instagram" />
            </div>
          </div>

          <div className="lg:pl-12">
            <h3 className="text-white text-lg font-semibold mb-2">
              Subscribe to our newsletter
            </h3>
            <p className="text-slate-400 mb-4 text-sm">
              Get the latest news, articles, and resources delivered directly to
              your inbox.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <FooterLink href="#">Features</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Integrations</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Pricing</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Changelog</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Documentation</FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <FooterLink href="#">About Us</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Careers</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Blog</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Contact</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Partners</FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <FooterLink href="#">Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Terms of Service</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Cookie Policy</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Security</FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} className="mt-0.5 text-slate-500 shrink-0" />
                <span>
                  123 Innovation Drive
                  <br />
                  Tech City, TC 90210
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone size={18} className="text-slate-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail size={18} className="text-slate-500 shrink-0" />
                <a
                  href="mailto:hello@acmecorp.com"
                  className="hover:text-indigo-400 transition-colors"
                >
                  hello@acmecorp.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 text-sm text-slate-500">
          <p>&copy; {currentYear} AcmeCorp Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <select className="bg-slate-900 border border-slate-800 text-slate-400 text-sm rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option value="en">English (US)</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Subcomponents for cleaner code
function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="text-slate-400 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-200"
    >
      {icon}
    </a>
  );
}

// Brand Icons
function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
