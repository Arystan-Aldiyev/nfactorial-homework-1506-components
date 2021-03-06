//импортируем .svg картинки как компоненты Реакт
import { ReactComponent as StarWarsLogoSVG } from "../../assets/star-wars.svg";
import { ReactComponent as IconSearchSVG } from "../../assets/icon-search.svg";
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";

import { SearchBox } from "../searchBar";

//массив данных ссылок
const swLinks = [
  {
    url: "https://www.facebook.com/StarWars",
    name: "facebook_logo",
    component: <FacebookLogoSVG />,
  },
  {
    url: "https://www.instagram.com/starwars/",
    name: "instagram_logo",
    component: <InstagramLogoSVG />,
  },
  {
    url: "https://twitter.com/starwars",
    name: "twitter_logo",
    component: <TwitterLogoSVG />,
  },
  {
    url: "https://www.youtube.com/user/starwars",
    name: "youtube_logo",
    component: <YoutubeLogoSVG />,
  },
];

export const Header = ({ fan }) => {

  return (
    <header>
      <div className="links-layout">
        {swLinks.map((item) => (
          <a
            key={item.name}
            className="link"
            href={item.url}
            target="_blank"
            alt={item.name}
            rel="noreferrer"
          >
            {item.component}
          </a>
        ))}
      </div>
      <StarWarsLogoSVG />
      <div className="search-layout">
        <SearchBox />
        <div style={{ color: "white", paddingTop: "1rem" }}>I am fan of: {fan}</div>
      </div>
      <label className="switch">
        <input type="checkbox" id="switcher" />
        <span className="slider round"></span>
      </label>
    </header>
  )
};