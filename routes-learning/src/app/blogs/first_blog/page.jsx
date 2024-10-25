import Link from "next/link";

export default function First_Blog(){
    return (
        <div>
            <h1>1st Blog Page</h1>
            <Link href='/blogs/second_blog' replace>blogs</Link>
        </div>
    )
}