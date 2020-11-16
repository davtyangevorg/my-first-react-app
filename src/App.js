import React from 'react';
import style from  './App.module.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './componenets/header/headerContainer.jsx'
import Homepage from './componenets/homepage/homepage.jsx'
import Phones from './componenets/phones/phonesContainer.jsx'
import MyCart from './componenets/myCart/myCartContainer.jsx'
import Details from './componenets/details/detailsContainer.jsx'
import GameInfo from './componenets/gameInfo/gameInfoContainer.jsx'
import VideoGames from './componenets/videoGames/videoGamesContainer.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className={style.app}>
          <div className={style.header}>
            <div className={style.container}>
              <Header />
            </div>
          </div>

          <div>
            <div className={style.sections}>
              <div className={style.container}>
                <Route exact path='/' component={Homepage} />
                <Route path='/phones' component={Phones} />
                <Route path='/cart' component={MyCart} />
                <Route path='/videogames' component={VideoGames} />
                <Route path='/details/:id' component={Details}/>
                <Route path='/gameInfo/:id' component={GameInfo}/>
              </div>
            </div>
          </div>

          <div>
            <div className={style.footer}>
              <div className={style.container}>
                  <div className={style.footer__text}>© 2020 shopforest.com lorem loremsddsdscdsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv© 2020 shopforest.com lorem loremsddsdscdsvvvvvvvvvvvvvvvv© 2020 shopforest.com lorem loremsddsdscdsvvvvvvvvvvvvvvvv© 2020 shopforest.com lorem loremsddsdscdsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv© 2020 shopforest.com lorem loremsddsdscdsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv© 2020 shopforest.com lorem loremsddsdscdsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv© 2020 shopforest.com lorem loremsddsdscdsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</div>
              </div>
            </div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
