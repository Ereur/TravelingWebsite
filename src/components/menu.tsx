"use client";

// import "./styles.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import Link from "next/link";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...(menuAnimations as any),
    ]);
  }, [isOpen]);

  return scope;
}

export default function App() {
  const [navItems, setNavItems] = useState([
    { label: "HOME", href: "/", hash: "#home" },
    { label: "TOUR", href: "/tours", hash: "#tours" },
    { label: "TopTrips", href: "/#popularTrips", hash: "#popularTrips" },
    { label: "CUSTOM TOURS", href: "/#customtours", hash: "#customtours" },
    { label: "TESTIMONIAL", href: "/#Testmonials", hash: "#Testmonials" },
    { label: "FAQ", href: "/#FAQ", hash: "#FAQ" },
  ]);
  const [activeHash, setActiveHash] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    if (typeof window !== "undefined") {
      setActiveHash(window.location.hash);

      window.addEventListener("hashchange", handleHashChange);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("hashchange", handleHashChange);
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  function changeHash(hash: string) {
    window.location.hash = hash;
  }

  return (
    <div ref={scope} className="xl:hidden sticky top-0 z-50">
      <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />

      <nav className="menu absolute bg-[#975C1F] h-screen w-[60%] backdrop-blur-xl bg-opacity-35">
        <ul className="flex flex-col h-full justify-start items-start  pt-[90px] ml-8 gap-4 ">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} onClick={() => changeHash(item.hash)}>
                <p
                  className={`${
                    activeHash == item.hash
                      ? "text-[#D9B99B] underline underline-offset-4"
                      : "text-white"
                  } text-xl font-montserrat font-extrabold`}
                >
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
