import Modal from "@/components/core/Modal/page";
import { getData } from "@/services/products";

export default async function DetailProductPage(props: any) {
    const { params }  = props;
    const products = await getData('http://localhost:3000/api/product/?id=' + params.id,)

    console.log(products);

    return (
        <Modal>
            <img src={products.data.image} alt="" className="w-full object-cover aspect-square col-span-2" />
                <div className="bg-white p-4 px-6">
                    <h3>{products.data.title}</h3>
                    <p>price : $ {products.data.price}</p>
                </div>
        </Modal>
    )
}