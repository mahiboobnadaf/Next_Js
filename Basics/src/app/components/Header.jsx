// import "../styles/globals.css";
import Image from "next/image";
import redbus_logo from "../public/static/redbus_logo.jpg"
import help_img from "../public/static/help_img.png"
import chat_img from "../public/static/chat_img.png"
import profile_img from "../public/static/profile_img.png"

function Header(){
    return (
        <div>
            <header className='w-screen overflow-x-hidden flex items-center relative p-5 border-4 font-bold text-rose-800'> 
                <div className='flex gap-5 justify-center '>
                    <div className='bg-slate-500'>  <Image src={redbus_logo} alt='logo' height={"40"} />
                    </div>
                    <div className='text-3xl absolute left-1/3 translate-x-1/2 '>Bus Ticket Booking</div>
                </div>

                <div className='flex gap-4 ml-auto'>
                    <div className="flex gap-1"> <Image src={help_img} height={20} width={20} alt='help image' /> Help </div>
                    <div className="flex gap-1"> <Image src={chat_img} height={20} width={20} alt='chat image'/> English</div>
                    <div className="flex gap-1"> <Image src={profile_img} width={24} alt='user profile icon'/> Account</div>
                </div>
            </header>
        </div>
    )
}

export default Header;