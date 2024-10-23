export default function Reviews_Details({params}){
    console.log(params)
    return (
        <>
            <h1> Review Details {params.reviewsId},
                 For Product detail Id {params.productId} </h1>
        </>
    )
}