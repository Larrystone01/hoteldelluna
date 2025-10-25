"use client";
import { usePathname } from "next/navigation";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";

export default function BreadCrumbs() {
  const pathName = usePathname();
  const paths = pathName.split("/").filter(Boolean);
  return (
    <>
      <nav>
        <ol className="flex text-[20px] text-purple-700 my-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          {paths.map((path, index) => {
            const fullPath = "/" + paths.slice(0, index + 1).join("/");
            const isLast = index === paths.length - 1;
            return (
              <li className="capitalize flex" key={index}>
                <span className="flex justify-center items-center">
                  <ChevronsRight size={20} />
                </span>
                {isLast ? (
                  <span>{path.replace("-", " ")}</span>
                ) : (
                  <Link href={fullPath}>{path.replace("-", " ")}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
