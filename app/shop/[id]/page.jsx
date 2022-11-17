import { use } from "react";
import CardBox from "../../../components/CardBox";

export default function page({params}) {
    const product = use(getProductById(params.id))
  return (
    <div>
        <CardBox product = {product}/>
    </div>
  )
}

async function getProductById(id){
    return await (await fetch(`https://fakestoreapi.com/products/${id}`)).json()
}
