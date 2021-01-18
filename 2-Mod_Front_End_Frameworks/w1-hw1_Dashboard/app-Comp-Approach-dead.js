console.log('Hello World');
import Sidebar from './components/Sidebar.js';
import WebsiteVisitors from './components/WebsiteVisitors.js';
import Reviews from './components/Reviews.js';
import AverageRating from './components/AverageRating.js';
import SentimentAnalysis from './components/SentimentAnalysis.js';

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )

ReactDOM.render( <h1>Commence Dashboard Creation!</h1>, document.querySelector('main') );

class App extends React.Component {
    render() {
        return (
            <div>
              Hello from App.js
              <Sidebar />
              <Reviews />
              <AverageRating />
              <SentimentAnalysis />
              <WebsiteVisitors />
            </div>
        )
    }
}
