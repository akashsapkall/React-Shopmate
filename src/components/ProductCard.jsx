
export const ProductCard=({ product })=>{
    return (
        <>
            <div className="w-80 m-4 p-2 text-gray-700 bg-white border rounded border-slate-700 flex-col justify-center">
                <div className="w-72 h-48 my-5 mx-auto">
                <img src={product.image} alt="product img" className="w-72 h-48 rounded" />
                </div>
                <span className="mx-4 font-semibold">{product.name}</span>
                <div className="mx-4 py-1 flex justify-between items-center">
                    <span className="text-xl font-semibold">${product.price}</span>
                    <button className="px-2 py-1 rounded bg-blue-700 text-white hover:bg-blue-900">Add To Cart</button>
                </div>
                <span className={`mx-4 ${(product.in_stock)?"text-green-700":"text-red-700"}`}>{(product.in_stock)?"Available":"Not Availabel"}</span>
            </div>
        </>
    )
}