import React,{Component} from 'react';
import playlists from './data.js';
console.log(playlists);

class App extends Component{
  constructor(){
    super()
    this.state={
      playlists:playlists
    }
  }
  render(){
    return(
      <div className = "tunr_container">
        <div className="playlist">
          <header>
            <h1>
              {this.state.playlists.title}
            </h1>
              <div className="songs">
                {this.state.playlists.songs.map (song => {
                  return(
                    <div className="song">
                      <h1>{song.title}</h1>
                      <h2>{song.artist}</h2>
                      <h3>{song.time}</h3>
                    </div>
                  )
                })}
                  <div clasName="song">
                    <h1>{this.state.playlists.songs[0].title}</h1>
                    <h1>{this.state.playlists.songs[0].artist}</h1>
                    <h1>{this.state.playlists.songs[0].time}</h1>
                  </div>
              </div>
          </header>
 
        </div>
      </div>

      
    )
  }
}
export default App;
