const TableHead = ({ head }: { head: Array<string> }) => {
    if(!head.find((n) => n === "Acciones"))
        head.push("Acciones")

    return (
        <thead className={"bg-gray-50"}>
            <tr>
                {
                    head.map((item, i) => (
                        <th key={i}>{item}</th>
                    ))
                }
            </tr>
        </thead>
    )
}

export default TableHead