
import Link from "next/link";
import Card from "../../components/Card";


export default function DefaultNotifications(){
    return (
     <Card h='350px'>
        <div>  Notifications   </div>
        <Link href="./dashboard/archived" className="text-blue-600 underline flex justify-end mr-3 mt-[250px]"> Archived </Link>
      </Card>   
    )
}