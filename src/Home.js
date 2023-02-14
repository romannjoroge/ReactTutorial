function Home(){

    function clickEvent(){
        console.log("I'm ticklish stop clicking me");
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={clickEvent}>Don't Click Me</button>
        </div>
    );
}

export default Home;