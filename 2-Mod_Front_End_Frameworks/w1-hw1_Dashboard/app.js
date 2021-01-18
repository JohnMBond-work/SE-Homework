console.log('Hello World');
//import Sidebar from './components/Sidebar.js';
//import WebsiteVisitors from './components/WebsiteVisitors.js';
//import Reviews from './components/Reviews.js';
//import AverageRating from './components/AverageRating.js';
//import SentimentAnalysis from './components/SentimentAnalysis.js';

// ReactDOM.render( <h1>Commence Dashboard Creation!</h1>, document.querySelector('main') );

class App extends React.Component {
    render() {
        return (
            <div id='app'>
              <Sidebar name="Dashboard" age="51" />
              <Reviews />
              <AverageRating />
              <SentimentAnalysis />
              <WebsiteVisitors />
            </div>
        )
    }
}

class Sidebar extends React.Component {
  render() {console.log(this.props)
      return (
          <div className='sidebar'>
            <ul>
              <li class="sidebar">{this.props.name} Hardcoded Dashboard</li>
              <li class="sidebar">Widget</li>
              <li class="sidebar">Reviews</li>
              <li class="sidebar">Customers</li>
              <li class="sidebar">Online Analysis</li>
              <li class="sidebar">Settings</li>
            </ul>
            {/* <ul>
              <li>Dashboard</li>
              <li>Widget</li>
              <li>Reviews</li>
              <li>Customers</li>
              <li>Online Analysis</li>
              <li>Settings</li>
            </ul> */}
          </div>
      )
  }
}

class Reviews extends React.Component {
  render() {
      return (
          <div className='reviews'>
            Reviews<br></br>
            <h2>1,281</h2>
          </div>
      )
  }
}

class AverageRating extends React.Component {
  render() {
      return (
          <div className='ratings'>
            Average Rating<br></br>
            <h2>4.6</h2>
          </div>
      )
  }
}

class SentimentAnalysis extends React.Component {
  render() {
      return (
          <div className='sentiment'>
            Sentiment Analysis<br></br>
             <h3>
              <ul>
                <li>960</li>
                <li>122</li>
                <li>321</li>
              </ul>
            </h3>
          </div>
      )
  }
}

class WebsiteVisitors extends React.Component {
  render() {
      return (
            <div className='website'>
              Website Visitors<br></br>
              <h2>821</h2>
              <BottomBlockInside />
            </div>
      )
  }
}

class BottomBlockInside extends React.Component {
  render() {
      return (
          <div class='bottom-inside'>
          </div>
      )
  }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)
