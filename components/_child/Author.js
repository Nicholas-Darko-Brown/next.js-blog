import Image from "next/image"
import Link from "next/link"

const Author = () => {
  return (
    <div className="author flex py-5">
        <Image src={"/image/Characters/Character01.svg"} width={60} height={60} className="rounded-full" alt="" />
        
        <div className="flex flex-col justify-center px-4">
            <Link href={"/"}>
                <a className="text-md font-bold text-gray-400 hover:text-gray-600">
                    John Doe
                </a>
            </Link>

            <span className="text-sm text-gray-600"> CEO and Founder </span>
        </div>
    </div>
  )
}

export default Author