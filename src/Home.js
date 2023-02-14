function Home(){

    function clickEvent(){
        console.log("I'm ticklish stop clicking me");
    }

    function greetMe(name, e){
        console.log(`Hello ${name}! Hope you have a wonderful day`);
        console.log(e);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={clickEvent}>Don't Click Me</button>
            <button onClick={ (e) => {
                greetMe('Roman', e); 
            } }>Greet Me</button>
        </div>
    );
}

export default Home;