//w1-hw3_pt2 jService & Dr. Who's Police Box (Jeopardy)

//construct of "state"
class App extends React.Component{
    state = {
        score: '',
        cataglory: '',
        points: 100, 
        clue: '',
        answer:'',
        reveal: false
    }

   //get random question (answer) here
    getQuestion = () => {
        fetch ("http://jservice.io/api/random")
        .then ((response) => {
            return response.json();
        })

        .then((json)=> {
            const data = json[0];
            this.setState({
                category: data.category.title,
                points: data.value, 
                clue: data.question, 
                answer: data.answer,
                reveal: false
            })
        })
    }

    //button functions
    decreaseScore = () =>{
        this.setState({
            score: this.state.score - this.state.points,
        })
    }

    increaseScore = () => {
        this.setState({
            score: this.state.score + this.state.points,
        })
    }

    resetScore = () => {
        this.setState({
            score: 0,
        })
    }

    //get relative answer (question) here
    getAnswer = () =>{
        this.setState({
         reveal: !this.state.reveal,   
        })
    }

    //html injection via jsx within return
    render() {
        return(
        <div className="frame">
                 <h1> Welecome to Jeopardy</h1>
                 <h2><span> Score: </span>{this.state.score}</h2>
                {/* buttons for score */}
                <div className="points">
                    <button className= "decrease" onClick = {this.decreaseScore}> Decrease</button>
                    <button className= "increase" onClick = {this.increaseScore}> Increase</button>
                    <button className= "reset" onClick = {this.resetScore}> Reset </button>
                </div>

                 <h2> Let's Play</h2>
                {/* button for question (answer) */}
                <button  className= "question" onClick = {this.getQuestion}> Get Answer</button>

                 <h2><span>Category: </span>{this.state.category}</h2> 
                 <h2><span>Points:</span> {this.state.points}</h2>
                 <h2><span>Clue:</span> {this.state.clue}</h2>
                {/* button for answer (question) */}
                <button className = "answer" onClick= {this.getAnswer}>Click to Reveal Question </button>
                {this.state.reveal }?
                <h3>Question: {this.state.answer}</h3>:''
                
         </div>
            )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('.container')
)