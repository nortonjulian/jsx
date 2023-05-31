const App = () => {
    return (
        <div>
            <Tweet
                name="Julian"
                username="jules"
                date={new Date().toString()}
                message="Almost Done!"
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
