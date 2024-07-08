import { Children } from "react";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>Tittle</h1>
            <div>{children}</div>
        </>
    )
}