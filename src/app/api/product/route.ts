import { RetrieveData, RetrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id");
    const data = [
        {
            id: 1,
            title: "Nike Pegasus 41",
            price: 2099000,
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/63c4596a-ca9a-4a56-82f3-0387903ed5f1/pegasus-41-road-running-shoes-RZm89S.png"
        },
        {
            id: 2,
            title: "Nike P-6000 Premium",
            price: 1909000,
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/96c29062-7014-4abc-a11b-1c6c09a2b1f0/p-6000-shoes-sbwFpl.png"
        },
        {
            id: 3,
            title: "Nike Zoom Vomero 5",
            price: 2489000,
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b95b8842-6390-423f-a177-acd377cb2ff2/zoom-vomero-5-shoes-KxjTbk.png"
        },
        {
            id: 4,
            title: "Nike Zoom Vomero 5",
            price: 2489000,
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b95b8842-6390-423f-a177-acd377cb2ff2/zoom-vomero-5-shoes-KxjTbk.png"
        }
    ]
    if (id) {
        const detailProduct = await RetrieveDataById("products", id);
        if (detailProduct) {
            return NextResponse.json({
                status : 200, 
                message : "succes", 
                data: detailProduct
            });
        }
        return NextResponse.json({
            status : 404, 
            message : "Not Found", 
            data: {}
        });
    }

    const products = await RetrieveData("products");
    
    return NextResponse.json({status : 200, message : "succes", data: products})
}