import React from 'react'
import Nav from '../Components/Nav/nav'
import Search from '../Components/Search/Search'
import Trending from '../Components/Trending/Trending'
import Veggie from '../Components/Veggie/Veggie'
import Cuisine from '../Components/Cuisine/Cuisine'

function Home() {
    return (
        <div>

            <Nav/>
            <Search/>
            <Cuisine/>
            <Trending/>
            <Veggie/>

        </div>

    )
}

export default Home