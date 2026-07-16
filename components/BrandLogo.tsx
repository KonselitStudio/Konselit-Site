import Image from "next/image";
import { brandLogoSrc } from "@/lib/assets";

export function BrandLogo() {
  return (
    <Image
      src={brandLogoSrc}
      alt="Konselit"
      className="h-10 w-auto transition duration-300 hover:scale-[1.02]"
      width={220}
      height={56}
    />
  );
}
