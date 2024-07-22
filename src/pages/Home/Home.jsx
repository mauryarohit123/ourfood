import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

function Home() {

  const [category,setCotegory] = useState("All");



  return (
    <div>
    <Header/>
    <ExploreMenu category={category} setCategory={setCotegory}/>
    <FoodDisplay category={category}/>
    <AppDownload/>
    
    </div>
  )
}

export default Home