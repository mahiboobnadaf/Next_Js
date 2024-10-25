import Link from "next/link";

export default function Home(){
    return (
        <>
            <div className="font-extrabold underline text-3xl h-96 flex items-center justify-center text-red-700">
                <p>Welcome to Home Page!</p> 
            </div>
            <div className="flex flex-col items-center bg-black text-blue-500 underline ">
                <Link href="/about"> About </Link>
                <Link href="/blogs"> Blogs </Link>
                <Link href="/docs"> Docs </Link>
                <Link href="/products"> Products </Link>
                <Link href="/profile"> Profile </Link>
            </div>
            

        </>
    )
}