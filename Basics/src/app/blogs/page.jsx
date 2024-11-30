import Link from "next/link";

export default function Blog(){
    return (
        <>
            <div>
                <h1>Blog Page</h1>
            </div>
            <div className="flex flex-col items-center bg-black text-blue-500 underline ">
                <Link href="/blogs/first_blog"> 1st blog </Link>
                <Link href="/blogs/second_blog" replace>  2nd blog  </Link>
                <Link href='/' className="flex flex-col items-center bg-black text-blue-500 underline "> Home </Link>
            </div>
        </>

    )
}