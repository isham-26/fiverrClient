import React from 'react'
import "./home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import { cards ,projects} from "../../Data";
import CatCard from "../../components/catCard/CatCard";
import { Features } from '../../components/features/Features'
import Explore from '../../components/explore/Explore'
import FeaturesDark from '../../components/featuresDark/FeaturesDark'
import ProjectCard from '../../components/projectCard/ProjectCard'
const Home = () => {
  return (
    <div className="home">
       <Featured/>
       <TrustedBy/>
       <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} items={card} />
        ))}
      </Slide>
      <Features/>
      <Explore/>
      <FeaturesDark/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  )
}

export default Home