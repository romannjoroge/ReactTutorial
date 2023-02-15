import { useState } from "react";
import Blogs from "./Blogs";

function Home(){
    const [meal, setMeal] = useState('Choose A Meal');
    const [blogs, setBlogs] = useState(
        [
            {title: 'My New Website', body: 'lorem ipsum...', author: 'Roman', id: 1},
            {title: 'My Formulations Guide', body: 'lorem ipsum...', author: 'Caroline', id: 2},
            {title: 'Dancing Salsa In the Stars', body: 'lorem ipsum...', author: 'Patrick', id: 3},
            {title: 'Getting The Kill: God of War Edition', body: 'lorem ipsum...', author: 'Rico', id: 4},
        ]
    );

    function deleteBlog(id) {
        let newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

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
            <Blogs blogs={blogs} title="All Blogs" deleteBlog={deleteBlog}/>
        </div>
    );
}

export default Home;