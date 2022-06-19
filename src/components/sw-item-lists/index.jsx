import { ItemSpisok } from '../sw-item-spisok';
import { useContext } from 'react';
import { DefaultContext } from '../../Context';

export const ItemLists = ({ item, children, type }) => {

  const { handleFavCharacter } = useContext(DefaultContext)
  return (
    <div key={item.name} className="item-list-layout">
      <div>
        <ItemSpisok>Name: {item.name}</ItemSpisok>
        {children}
      </div>
      <div className="item-image-layout">
        {type === "character" && (
          <button className="favorite-button" onClick={() => handleFavCharacter(item)}>I'm your fan!</button>
        )}
        <img
          className="item-image"
          src={item.url}
          alt="asd"
        />
      </div>
    </div>
  )
}