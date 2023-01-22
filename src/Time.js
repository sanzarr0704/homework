export default function Time(){
    const time = setInterval(() => {
        const data = new Date()
        return data.toLocaleTimeString();
    }, 1000)
    // объектно ориентировачное программирование - ооп
    return(
        <div>
            <h2>Hello world!</h2>
            <h2>{time}</h2>
        </div>
    )
}