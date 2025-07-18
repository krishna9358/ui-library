
import { Linkedin, Github as LucideGithub, TwitterIcon}  from "lucide-react";
import Link from "next/link";


// interface ProjectLink {
//   href: string | null;
//   text: string;
//   description: string;
//   icon: string;
//   iconDark?: string;
//   isNew?: boolean;
// }

export function Footer() {
  const socialLinks = [
    {
      href: "https://www.github.com/krishna9358",
      icon: <LucideGithub className="w-5 h-5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" />,
    },
    {
      href: "https://x.com/krshxxna",
      icon: <TwitterIcon className="w-5 h-5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" />,
    },
    {
      href: "https://www.linkedin.com/in/krishna-mohan-194124167/",
      icon: <Linkedin className="w-5 h-5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" />
    }
  ];

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col items-center space-y-6 text-center">
        {/* Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href || "#"} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </Link>
          ))}
        </div>

        {/* Copyright Notice */}
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} Krishna Mohan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}