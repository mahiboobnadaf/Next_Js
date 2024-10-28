import Card from "../../../components/Card";

import Link from "next/link";

export default function ArchivedNotification(){
    return (
        
        <div>
            <Card h='350px'><div>This is Archived</div> 
                <Link href="/dashboard" className="text-blue-600 underline flex justify-end mr-3 mt-[250px]"> Default </Link>
            </Card>
        </div>
    )
}