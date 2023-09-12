export default function Menu({title, isOpen}) {
    return(
        <aside className={"w-1/3 min-h-screen bg-black absolute transition all right-0 top-0" + isOpen ? " w-1/3 min-h-screen absolute transition all right-16 top-0 bg-blue-500" : "w-1/3 min-h-screen absolute transition all -right-0 top-0 bg-red-400"}>
            <div>
                <h1>{title}</h1>
            </div>
        </aside>
    )
}