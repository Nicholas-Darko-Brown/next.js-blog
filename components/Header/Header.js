import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-zinc-700 text-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                <input type="text" placeholder="Search..." className="mt-1 block w-60 px-3 py-2 border border-slate-300 rounded text-sm shadow-sm placeholder-slate-200" />
            </div>
            <div className="shrink w-80 sm:order-2">
                <Link href={"/"}>
                    <a className="font-bold uppercase text-3xl">Design</a>
                </Link>
            </div>
            <div className="w-96 order-3 flex justify-center">
            <div className="flex gap-5">
                <Link href={"/"}><a>Facebook</a></Link>
                <Link href={"/"}><a>Twitter</a></Link>
                <Link href={"/"}><a>Youtube</a></Link>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Header