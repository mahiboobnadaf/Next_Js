export default function Layout({ children ,user,revenue, notifications}) {
  return (
    <>
        <div> {children} </div>
        <div> {user} </div>
        <div> {revenue} </div>
        <div> {notifications} </div>
    </>
  )
}