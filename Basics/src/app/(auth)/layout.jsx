"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Authentication({children}){
    const navLinks = [
            {name:"Register",href:"/register"},
            {name:"Login",href:"/login"},
            {name:"Forgot-Password",href:"/forgot-password"},
    ];
    const pathName = usePathname(); 

    return (
        <div className="font-semibold">
            {children}
            <h1 className="text-red-800 flex justify-center font-extrabold text-2xl">Authentication</h1>
            {navLinks.map((link)=>{
                let isActive = pathName.startsWith(link.href)
                return (
                        <Link href={link.href} key={link.name} 
                            className= {isActive ? "font- text-black bg-slate-500":"text-blue-800 underline"}> 
                            <div className={isActive ? "bg-slate-400 w-fit underline":"font-normal"} > {link.name}</div> </Link>
                )
            })}
        </div>
    )

    
            
}