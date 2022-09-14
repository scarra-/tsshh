import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
    width: 200px;
    margin-top: 5%;
    padding-left: 5%;
    float: left;
`
const Title = styled.h4`
    padding-left: 40px;
    margin-bottom: 40px;
    margin-top: 0;
    font-weight: 600;
`
const MixesTitle = styled(Title)`
    margin-top: 100px;
`
const Menu = styled.ul`
    list-style-type: none;
`
const MixesMenu = styled(Menu)`
    a {
        cursor: not-allowed;
        opacity: 0.5;
        text-decoration: none;
        color: black;
    }
`
const MenuItem = styled.li`
    margin-bottom: 20px;

    a {
        color: black;
        &:hover {
          color: #2b2b33;
        }
    }
`

export const CategoriesSidebar = () => {

  return (
    <Wrapper>
        <Title>Categories</Title>
        <Menu>
            <MenuItem><a aria-label="go-to-nature-category" href='#nature'>🌲 Nature</a></MenuItem>
            <MenuItem><a aria-label="go-to-footsteps-category" href='#footsteps'>🥾 Footsteps</a></MenuItem>
            <MenuItem><a aria-label="go-to-animals-category" href='#animals'>🐴 Animals</a></MenuItem>
            <MenuItem><a aria-label="go-to-vehicle-category" href='#vehicle'>🚙 Vehicle</a></MenuItem>
            <MenuItem><a aria-label="go-to-public-category" href='#public'>🏘 Public</a></MenuItem>
            <MenuItem><a aria-label="go-to-alarm-category" href='#alarm'>⚠️ Alarm</a></MenuItem>
            <MenuItem><a aria-label="go-to-sports-category" href='#sports'>🚴‍♀️ Sports</a></MenuItem>
            <MenuItem><a aria-label="go-to-office-category" href='#office'>👨‍💼 Office</a></MenuItem>
            <MenuItem><a aria-label="go-to-instruments-category" href='#instruments'>🥁 Instruments</a></MenuItem>
            <MenuItem><a aria-label="go-to-other-category" href='#other'>📓 Other</a></MenuItem>
            <MenuItem><a aria-label="go-to-noise-category" href='#noise'>🔉 Noise</a></MenuItem>
        </Menu>

        <MixesTitle>Top mixes <br /> (Coming soon) </MixesTitle>
        <MixesMenu>
            <MenuItem><a aria-label="enable-jurmala-mix" href='#'>🌊 Jūrmala</a></MenuItem>
            <MenuItem><a aria-label="enable-carnikava-mix" href='#'>🌲 Carnikava</a></MenuItem>
            <MenuItem><a aria-label="enable-thunder-mix" href='#'>⛈ Thunder</a></MenuItem>
            <MenuItem><a aria-label="enable-office-mix" href='#'>👨‍💼 Office</a></MenuItem>
            <MenuItem><a aria-label="enable-loud-pc-mix" href='#'>💻 Loud PC</a></MenuItem>
            <MenuItem><a aria-label="enable-camping-mix" href='#'>🏕 Camping</a></MenuItem>
            <MenuItem><a aria-label="enable-bad-weather-mix" href='#'>🌧 Bad weather</a></MenuItem>
            <MenuItem><a aria-label="enable-cafe-mix" href='#'>🥘 Cafe</a></MenuItem>
        </MixesMenu>
    </Wrapper>
  )
}
