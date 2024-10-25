import Link from "next/link";

export default function Blog(){
    return (
        <>
            <div>
                <h1>Blog Page</h1>
            </div>
            <Link href='/' className="flex flex-col items-center bg-black text-blue-500 underline "> Home </Link>
        </>

    )
}