"use client";
import { useRouter } from "next/navigation";
export default function Products(){
    const router = useRouter();
    return (
       <>
        <h1>Products are:</h1>
        <h3>
            <ul>
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
            </ul>
            
        </h3>
        <button className="w-fit bg-slate-500 rounded-lg font-semibold" onClick={()=>{
                console.log("placing order");
                router.replace('/blogs/first_blog')
            }}> Place Order</button>
       </> 
    )

}