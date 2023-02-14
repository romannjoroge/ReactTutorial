import { useState } from "react";

function Home(){
    const [meal, setMeal] = useState('Choose A Meal');

    function clickEvent(){
        console.log("I'm ticklish stop clicking me");
    }

    function greetMe(name, e){
        console.log(`Hello ${name}! Hope you have a wonderful day`);
        console.log(e);
    }

    function changeMeal(){
        setMeal('Ugali');
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={clickEvent}>Don't Click Me</button>
            <button onClick={ (e) => {
                greetMe('Roman', e); 
            } }>Greet Me</button>
            <h2>Get a New Meal</h2>
            <p>{ meal }</p>
            <button onClick={ changeMeal }>Get Meal</button>
        </div>
    );
}

export default Home;