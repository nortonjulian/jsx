const Tweet = (props) => {
    return (
        <div>
            <span>{props.username}</span>
            <span>Name: {props.name}</span>
            <span>Date: {props.date}</span>
            <p>Message: {props.message}</p>
        </div>
    )
}
