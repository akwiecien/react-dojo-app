import ButtonExample from './ButtonExample'
import HookStateExample1 from './HookStateExample1'
import { useState } from 'react'

const Home = () => {

    let [blogs, setBlogs] = useState([
        {title: "My new website", body: 'lorem ipusm ...', author: 'mario', id:1},
        {title: "My new job", body: 'lorem ipusm ...', author: 'lugin', id:2},
        {title: "My new project", body: 'lorem ipusm ...', author: 'yoshi', id:3},
    ])
    

    const title = "Welcome to dojo blog";
    return (
        <div className='home'>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Witten by: { blog.author }</p>
                </div>
            ))};
        </div>
        
        // <div>
        //     <h1>{title}</h1>
        //     <ButtonExample />
        //     <HookStateExample1 />
        // </div>
    );
}

export default Home;