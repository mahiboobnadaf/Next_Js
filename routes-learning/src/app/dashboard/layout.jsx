import Card from "../components/card"

export default function Layout({ children ,user,revenue, notifications}) {
  return (
    <>
        <div> {children} </div>
        <Card> {user} </Card>   
        <Card> {revenue} </Card>        
        <Card> {notifications} </Card>
    </>
  )
}