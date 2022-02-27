import Games from "../components/games";
import Search from "../components/search";

function Home() {
    console.log('page home')
    return (
    <div className='home'>
        <Search/>
        <Games/>
    </div>
  );
}

export default Home;