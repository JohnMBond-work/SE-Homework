class App extends React.component {

    state = {
        score: 0,
        catagory: "",
        points: 0,
        clue: "",
        answer: "",
        isRevieal: false
    }

    getQuestion = () => {
        fetch("http:..jservice.io/api/random")
        .then((pass) => {
            return pass.json();
        })
        .then((json) => {
            console.log(json[0]);
            const data = json[0];
            this.setState({
                catogory: data.catogory.title,
                points: data.value,
                clue: data.question,
                anwer: data.answer
            })
        })
    }
    render() {
        return(<div>
            <h1>Welcome to Jeopardy</h1>
            <h2> Score: 0</h2>
            <div>
                <button>Decrease</button>
                <button>Increase</button>
                <button>Reset</button>
            </div>
            <h2> Let's Play </div>
            <button> Get Question </button>
            <h2> Catogory: {this.state.Catogory} </h2>
            <h3> Points: {this.state.Points} </h3>
            <h3> Answer: {this.state.clue} </h3>
            <button onClick={this.GetQuestion}>Click to Reveal Question </button>
            {this.state.isReveal ? <h3>Questions: {this.state.answer} </h3>: ""}
        </div>)
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));