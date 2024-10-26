"use client"
function RandomNumber(num){
    return Math.floor(Math.random()*num)
}

export default function Reviews_Details({params}){
    // console.log(params)
    let randomNum = RandomNumber(2);

    if(randomNum == 1){
        throw new Error("Error in ReviewID page")
    }
    return (
        <>
            <h1> Review Details {params.reviewsId},
                 For Product detail Id {params.productId} </h1>
            <p>{randomNum}</p>
        </>
    )
}