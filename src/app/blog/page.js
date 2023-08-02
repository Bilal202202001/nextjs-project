async function getData() {
    const endpoint = "http://localhost:3000/api/posts";
    const res = await fetch(endpoint);

    if (!res.ok) {
        throw new Error("Failed to Fetch Data from Endpoint");
    }
    return res.json();
}


export default async function BlogPageDetails() {
    
    const data = await getData()
    console.log(data);
    const items = data && data.item ? [...data.item] : []

    return <main>
        <div>
            <h1>
                Hello World From Dynamic Page
            </h1>
            <h3>
                <h3>Object</h3>
                {data && JSON.stringify(data)}
                <h3>Lists</h3>
                {items && items.map((item, idx) => {
                    return <li key={`post-${idx}`}>
                        {item.title}
                    </li>
                })}
            </h3>
        </div>
    </main>;

}