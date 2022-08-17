import React from 'react';
import { PostCard } from '../PostCard/postcard';
function Home() {
    return (
        <div className="container">
            <PostCard 
                commentsAmount={13}
                upvotes={0}
                author='Indra'
                title='Minecraft Cliffside House'
            />
        </div>
    )

}

export default Home;