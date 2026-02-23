import Hero from '../components/Hero'
import GiftHampersCategory from '../components/GiftHampersCategory'
import hero_icon from '../assets/images/hero_icon.webp'
import CorporateGiftHero2 from '../components/CorporateGiftHero2'
import HeroVideo from '../components/HeroVideo'

const Home = () => {
  return (
    <div>
      <Hero image={hero_icon} alt={"Home banner"} link={"/gifthampers"}/>
      <GiftHampersCategory/>
      <CorporateGiftHero2/>
      <HeroVideo/>
    </div>
  )
}

export default Home;
