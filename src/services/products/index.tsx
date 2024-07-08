export const getData = async (url : string) => {
    // const response = await fetch("https://fakestoreapi.com/products");
    const response = await fetch(url, {
        cache: "force-cache",
        next: {
            tags: ['products'],
            // revalidate: 30,
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    return response.json();
}