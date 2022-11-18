import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Movies />
  );
}

function Movies(){
  return(
    <div className='container'>
      <div className='row'>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='movie-1'>
            <div className='img-class'>
              <img className="love-today" src="http://static.moviecrow.com/gallery/20221025/207417-Love%20Today%20Appa%20Lock%20Short%20Film.jpg" alt="Love Today"></img>
            </div>
            <div className='title'>
              <span>Love Today</span>
              <span><i class="fa fa-star" aria-hidden="true"></i>9.1</span>
            </div><br></br>
            <p>Two young lovers, who are made to exchange their phones for a day and what happens due to that. Two young lovers, who are made to exchange their phones for a day and what happens due to that.</p>
          </div>
        </div>

        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='movie-1'>
            <div className='img-class'>
              <img className="love-today" src="https://m.media-amazon.com/images/M/MV5BZTViNTY5YTUtYzczOC00ZDA2LTk0NzItMjkzMDcyNjJkMDJhXkEyXkFqcGdeQXVyMTUwMDg3OTQy._V1_FMjpg_UX1000_.jpg" alt="Beast"></img>
            </div>
            <div className='title'>
              <span>Beast</span>
              <span><i class="fa fa-star" aria-hidden="true"></i>5.2</span>
            </div><br></br>
            <p>Former RAW agent Veera must face his fears when a terrorist organisation holds him hostage in a mall along with other visitors and demands the release of their leader, who was captured by Veera.</p>
          </div>
        </div>

        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='movie-1'>
            <div className='img-class'>
              <img className="love-today" src="https://pbs.twimg.com/media/Fd2AzsfVUAUhAa6.jpg:large" alt="Ponniyin Selvan"></img>
            </div>
            <div className='title'>
              <span>PS-1</span>
              <span><i class="fa fa-star" aria-hidden="true"></i>8.0</span>
            </div><br></br>
            <p>Vandiyathevan sets out to cross the Chola land to deliver a message from the crown prince Aditha Karikalan. Meanwhile, Kundavai attempts to establish political peace as vassals and petty chieftains plot against the throne.</p>
          </div>
        </div>


        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='movie-1'>
            <div className='img-class'>
              <img className="love-today" src="https://moviegalleri.net/wp-content/gallery/sardar-posters/Sardar-Movie-Posters-00055ef.jpg" alt="Sardar"></img>
            </div>
            <div className='title'>
              <span>Sardar</span>
              <span><i class="fa fa-star" aria-hidden="true"></i>7.8</span>
            </div><br></br>
            <p>This film is a depiction of contrast between father and son's beliefs. The son, a police officer, believes that any deed of his should be broadcasted whereas the father, an intelligence officer, spent thirty two years in a prison for the greater good.</p>
          </div>
        </div>


      </div>
    </div>
  )
}
export default App;
