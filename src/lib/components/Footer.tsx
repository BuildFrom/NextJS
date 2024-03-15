import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: "facebook" },
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "GitHub", href: "#", icon: "github" },
    { name: "YouTube", href: "#", icon: "youtube" },
  ],
};

function Footer() {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div
        className={cn(
          "mx-auto",
          "max-w-7xl",
          "px-6",
          "pb-8",
          "pt-16",
          "sm:pt-24",
          "lg:px-8",
          "lg:pt-32"
        )}
      >
        <div className={cn("xl:grid", "xl:grid-cols-3", "xl:gap-8")}>
          <div className="space-y-8">
            <Image
              src="/logo.svg"
              width={100}
              height={100}
              alt="Tailwind CSS"
              className="h-7"
            />
            <p className="text-sm leading-6">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn("text-gray-400", "hover:text-gray-500")}
                >
                  <span className="sr-only">{item.name}</span>
                  <i
                    className={cn("icon", `icon-${item.icon}`)}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className={cn("text-sm font-semibold leading-6 ")}>
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 ">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className={cn("text-sm font-semibold leading-6 ")}>
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 ">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 ">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 ">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 ">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 ">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 ">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
