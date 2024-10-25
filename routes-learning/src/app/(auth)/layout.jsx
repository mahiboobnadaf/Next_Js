import Link from "next/link";

export default function Authentication({children}){
    const navLinks = [
            {name:"Register",href:"/register"},
            {name:"Login",href:"/login"},
            {name:"Forgot-Password",href:"/forgot-password"},
    ];

    return (
        <div className="font-semibold">
            {children}
            <h1 className="text-red-800 flex justify-center font-extrabold text-2xl">Authentication</h1>
            {navLinks.map((link)=>{
                return (
                   <Link href={link.href} key={link.name} className="text-blue-800 underline"> <h2>{link.name}</h2></Link>
                )
            })}
        </div>
    )

    
            
}