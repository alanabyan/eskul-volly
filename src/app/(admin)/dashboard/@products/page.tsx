"use client";

import { useState } from "react";

export default function AdminProductPage() {
    const [status, setStatus] = useState("");
    const revalidate = async () => {
        const res = await fetch("http://localhost:3000/api/revalidate?tag=products&secret=Alan12345", {
            method: "POST",
        });

        if (!res.ok) {
            setStatus("Failed to revalidate");
        } else {
            const response = await res.json();
    
            if( response.revalidate ) {
                setStatus("Revalidate Succes")
                
            }
        }
    }


    return (
        <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center mr-5">
            <h1>{status}</h1>
            <button onClick={() => revalidate()}>Revalidate</button>
        </div>
    )
}