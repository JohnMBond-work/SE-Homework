class App extends React.Component {
//  This sets the default state of the page and the elements of the post query data displayed on the webpage.
    state = { //  sets the fields for this state...similar to a class
        baseURL: 'http://www.omdbapi.com/?',
        apikey: 'apikey=' + '53aa2cd6',
        query: '&t=',
        movieTitle: "hitchhiker's guide to the galaxy",
        searchURL: '',
        movie: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault() //  prevents rethe fresh of the page during query
        this.setState({ //  Builds the URL based on data in the state values
            searchURL: this.state.baseURL + this.state.apikey + this.state.query + this.state.movieTitle
        }, () => {
            
            fetch(this.state.searchURL) //  requests the data in search query from API
                .then(response => response.json()) //  this is like a Promis.  Also take API response and turns it into JSON file
                .then(json => {
                    console.log(json)
                    this.setState({ 
                        movie: json,
                        movieTitle: '' //  resets the Title input field on page to blank, pending next query string
                    }),
                    err => console.log(err) //  error incase query data is unavailable
                })
        })
    }
//  This is the layout in pre-query state.
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='movieTitle'>Title</label>
                    <input 
                        id='movieTitle'
                        type='text'
                        value={this.state.movieTitle}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='submit'
                        value='Engage Movie Trek'
                    />
                </form>
                {this.state.movie ? <MovieInfo movie={this.state.movie} /> : ''}
            </div>
        )
    }
}
//  This is what is displayed after query return.
class MovieInfo extends React.Component {
    render() {
        return (
            <div>
                <h1>Title: {this.props.movie.title}</h1>
                <h2>Year: {this.props.movie.Year}</h2>
                <img src={this.props.movie.Poster} alt={this.props.movie.Title} />
                <h3><u>Genre: </u></h3>
                <h4>{this.props.movie.Genre}</h4>
                <h3><u>Actors: </u></h3>
                <h4>{this.props.movie.Actors}</h4>
                <h3><u>Plot: </u></h3>
                <h4>{this.props.movie.Plot}</h4>
                <h3><u>Writer: </u></h3>
                <h4>{this.props.movie.Writer}</h4>
                <h3><u>Director: </u></h3>
                <h4>{this.props.movie.Director}</h4>
                <h3><u>Awards: </u></h3>
                <h4>{this.props.movie.Awards}</h4>
            </div>
        )
    }
}



ReactDOM.render(
    <App />, 
    document.querySelector('.container')
)



/*

{(this.state.movie) 
                        ? <MovieInfo movie={this.state.movie} /> 
                        : ''
                }

*/