export default function Product_Details({params}){
    
    for (const key in params) {
        console.log(key + "---------------")
    }

    return (
        <h1> Product Details {params.productId}  
        </h1>
    )
}