
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image

                src="/img/243708598_557871728756708_7831808492830874470_n-removebg-preview.png"
                alt="Abstract Object"
                height="100"
                width="100"
                className={className} // Use the className prop here
              />
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <Image

                src="/img/243708598_557871728756708_7831808492830874470_n-removebg-preview.png"
                alt="Abstract Object"
                height="100"
                width="100"
                className={className} // Use the className prop here
              />
    )
}
