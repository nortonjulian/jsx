const App = () => {
    <div>
        <Person
         name="One"
         age={1}
         hobbies={["first"]}/>

        <Person
         name="Two"
         age={2}
         hobbies={["two"]}/>

        <Person
         name="Three"
         age={3}
         hobbies={["three"]}/>
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"))
