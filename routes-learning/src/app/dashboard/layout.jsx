import Card from "../components/Card"

export default function Layout({ children ,user,revenue, notifications}) {
  return (
    <>
        <div className="p-10"> {children} </div>
        <div className="h-[500px] items-center flex justify-center font-extrabold bg-slate-400"> 
            <div className="flex-col ">
                <div> {user}   </div>    
                <div> {revenue}  </div>        
            </div>
            <div className=" flex overflow-x-hidden">
                <div > {notifications} </div>
            </div>
        </div>    
    </>
  )
}