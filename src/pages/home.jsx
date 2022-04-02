import React from 'react';
import Nav from '../Components/Nav/nav';
import Search from '../Components/Search/Search';
import Trending from '../Components/Trending/Trending';
import Veggie from '../Components/Veggie/Veggie';
import Cuisine from '../Components/Cuisine/Cuisine';
import {motion} from 'framer-motion';
import TopNavigateButton from '../Components/TopNavigateButton/TopNavigateButton';

function Home() {
    return (
        <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity:0}}        
            transition={{duration:0.5}}
        >

            <Nav/>
            <Search/>
            <Cuisine/>
            <Trending/>
            <Veggie/>
            <TopNavigateButton />

        </motion.div>

    )
}

export default Home