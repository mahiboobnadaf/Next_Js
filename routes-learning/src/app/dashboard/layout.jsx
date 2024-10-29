import Card from "../components/Card"

export default function Layout({ children ,user,revenue, notifications, login}) {
  const isLogin = false
  return isLogin ? ( 
    <>
        <div className="p-10"> {children} </div>
        <div className="h-[600px] items-center flex justify-center font-extrabold bg-slate-400"> 
            <div className="flex-col ">
                <div> {user}   </div>    
                <div> {revenue}  </div>        
            </div>
            <div className=" flex overflow-x-hidden">
                <div > {notifications} </div>
            </div>
        </div>    
    </>
  ) : (login)
}