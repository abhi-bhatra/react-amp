import './App.css';
import { AzureMP } from "react-azure-mp";

function App() {
  return (
    <div className="App">
      <h1>Mini Player</h1>
      <div className='video-player'>
        <h3>Here's the list created with ❤️</h3>
        <hr />

        {/* Movie 1 */}
        <div className='movie-data'>
          <p><b>Rashmi Rocket</b></p>
          <p className='imdb'>IMDB: 7.7/10</p>
          <p>Rashmi, a small-town girl, overcomes societal barriers and goes on to become a national-level athlete. However, her career hits rock bottom when she is forced to undergo a gender test.</p>
        </div>
        <AzureMP 
          options={{controls: true, autoplay: false}}
          src={[{ src: "https://mediakashika-usct.streaming.media.azure.net/e0bc9e9a-872b-4962-882a-cb4f490cc0ea/Rashmi Rocket 2021 480p ZEE5 HDR.ism/manifest", type: "application/vnd.ms-sstr+xml" }]}
        />
        <br />
        <hr />

        {/* Movie 2 */}
        <div className='movie-data'>
          <p><b>Helmet</b></p>
          <p className='imdb'>IMDB: 7/10</p>
          <p>Helmet is a 2021 Indian Hindi-language comedy film with a strong message of contraceptive awareness directed by Satram Ramani and produced by Sony Pictures Films India and Dino Morea. It features Aparshakti Khurana, Pranutan Bahl, Abhishek Banerjee, Ashish Verma and Sharib Hashmi in lead roles.</p>
        </div>
        <AzureMP 
          options={{controls: true, autoplay: false}}
          src={[{ src: "https://mediakashika-usct.streaming.media.azure.net/549b18fb-00aa-4636-9c2b-eef15e1b8325/Helmet 2021 480p ZEE5 HDRip [Fil.ism/manifest", type: "application/vnd.ms-sstr+xml" }]}
        />

        {/* Movie 3 */}
        <div className='movie-data'>
          <p><b>Jungle Cruise</b></p>
          <p className='imdb'>IMDB: 7/10</p>
          <p>Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.</p>
        </div>
        <iframe
          title='Jungle Cruise'
          src="https://drive.google.com/file/d/1ent2vYUR_2yjQD0CenAojJFYM_HAgoII/preview"
          width="100%"
          height="auto"
        >
        </iframe>
      </div>
      <footer>Made with ❤️ <br />
      &copy; <a href="https://www.abhinav.engineer/">Abhinav Sharma</a>
      </footer>
    </div>
  );
}

export default App;
