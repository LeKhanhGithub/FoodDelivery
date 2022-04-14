import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material'
import React from 'react'
import MenuContainer from './MenuContainer'


const BottomMenu = () => {
  return (
    <div className = "bottomMenu">
        <ul id = "menu">
          {/* prettier ognore */}
          <MenuContainer link = {'#'} icon = {<HomeRounded />} isHome />
          <MenuContainer link = {'#'} icon = {<Chat />} />
          <MenuContainer link = {'#'} icon = {<AccountBalanceWalletRounded />} />
          <MenuContainer link = {'#'} icon = {<Favorite />} />
          <MenuContainer link = {'#'} icon = {<SummarizeRounded />} />
          <MenuContainer link = {'#'} icon = {<Settings />} />

          <div className = "indicator"></div>
        </ul>
      </div>
  )
}

export default BottomMenu