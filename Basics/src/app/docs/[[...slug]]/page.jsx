export default function ({params}){

    for(let key in params){
        console.log(params)
        console.log(params[key].length)
    }

    if(params?.slug?.length == 1) {
        return ( <h1> you are in {params.slug[0]}</h1> )
     }
    else if(params?.slug?.length >1){
        return (<h1> you are in {params.slug[params.slug.length-2]} and  {params.slug[params.slug.length-1]}</h1>);
     }  


    return (
        <h1>Documents page</h1>
    )
}