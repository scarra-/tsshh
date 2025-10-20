import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

import Slider from '@material-ui/core/Slider';
import IconButton from '@mui/material/IconButton';
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

import { Wind, Fire, Forest, Keyboard, Noise, Rain, Storm, Waves, Fan, Neighbourhood, Coffee } from '../../components/core/Icons'
import { effects } from './sounds'


const Wrapper = styled.div`
  display: flex;
  position: relative;
  min-height: 100vh;
  background: rgb(21, 22, 24);
`
const EffectsContainer = styled.div`
  position: relative;
  text-align: left;
  padding: 50px 30px 0 30px;
`
const EffectBlock = styled.div`
  height: 140px;
  box-sizing: border-box;
  display: inline-block;
  margin: 30px 70px 40px 0px;
  text-align: center;
  position: relative;
`
const CategoryBlock = styled.div`
  margin-bottom: 30px;
`
const EmojiContainer = styled.div`
  border: 0px solid transparent;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  background: transparent;

  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Emoji = styled.div`
  font-size: 30px;
`
const EffectText = styled.div`
  font-size: 10px;
  color: white;
`
const CategoryTitle = styled.h4`
  font-weight: 500;
  color: white;
`

const MainContainer = styled.div`
  width: 1100px;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1441px) {
    width: 930px;
    margin-bottom: 100px;
  }

  @media (min-width: 1841px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
  }
`
const OnIndicator = styled.div`
  display: inline-block;
  position: relative;
  float: right;
  color: rgba(184, 184, 184, 1);
  line-height: 40px;
  font-size: 24px;
  font-weight: 500;
  margin-right: 20px;
`
const EditorPicksContainer = styled.div`
  margin-bottom: 50px;
`
const EditorPicksTitle = styled.h3`
  display: inline-block;
  color: white;
`
const VolumeOffButton = styled(IconButton)`
  display: inline-block;
  position: relative;
  float: right;
`
const PauseButton = styled(IconButton)`
  display: inline-block;
  position: relative;
  float: right;
`
const PlayerControlsTitle = styled.h4`
  display: inline-block;
  position: relative;
  float: right;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 40px;
  font-weight: 500;
  margin-right: 20px;
  color: white;
`
const VolumeOff = styled(RefreshRoundedIcon)`
  color: white;
`
const Effect = styled.div`
  background-color: transparent;
  height: 102px;
  width: 102px;
  // border: 1px solid #909091;
  border-radius: 50%;
  font-size: 26pt;
  position: relative;
  z-index: 1;

  &:hover {
    cursor: pointer;
    border-color: #bbbbc5;
  }

  &:focus {
    cursor: pointer;
    border-color: #494979;
  }
`
const EffectSlider = styled(Slider)`
  color: white !important;
`

export const HeaderSection = () => {

  interface AudiosStateInterface {
    [key: string]: {on: boolean; level: number, paused: boolean, audio: HTMLAudioElement}
  }

  const initialStructure: AudiosStateInterface = {}

  effects.forEach(function (value: {id: string}) {
    initialStructure[value.id] = {
      on: false,
      level: 0.2,
      paused: false,
      audio: new Audio(),
    }
  })

  const categories: any = {}
  effects.forEach(function (value: any) {
    if (typeof categories[value.category] == 'undefined') {
      categories[value.category] = []
      categories[value.category].push(value)
    } else {
      categories[value.category].push(value)
    }
  })

  const [audios, setAudiosState] = useState<AudiosStateInterface>(initialStructure)
  const [pause, setPause] = useState(false)
  const [on, setOn] = useState(false)

  useEffect(() => {
    if (pause) {
      setOn(false)
      return
    }

    let enabledEffects = 0
    Object.keys(audios).map(key => {
      if (audios[key].on) {
        enabledEffects++
      }
    })

    setOn(enabledEffects > 0)
    
  }, [audios, pause])

  const toggleAudio = (event: any, id: keyof typeof audios, url: string) => {
    let audioObj = audios[id].audio
    let isPaused = false

    if (!audios[id].on) {
      audioObj = new Audio(url)
      audioObj.loop = true
      audioObj.volume = audios[id].level

      if (!pause) {
        audioObj.play()
      } else {
        isPaused = true
      }
    } else {
      audioObj.pause()
    }

    setAudiosState({
      ...audios,
      [id]: {
        ...audios[id],
        on: !audios[id].on,
        audio: audioObj,
        paused: isPaused
      }
    })
  }

  const handleVolumeChange = (event: any, newValue: any, id: keyof typeof audios) => {
    setAudiosState({
      ...audios,
      [id]: {
        ...audios[id],
        level: newValue as number,
      }
    })

    audios[id].audio.volume = newValue
  };

  const resetAudio = function() {
    effects.forEach(function (value: {id: string}) {
      audios[value.id].audio.pause()
    })
    setAudiosState(initialStructure)
  }

  const pauseAudio = function() {
    const newAudios = audios

    effects.forEach(function (value: {id: string}) {
      if (newAudios[value.id].on) {
        newAudios[value.id].audio.pause()
        newAudios[value.id].paused = true
      }
    })
    
    setAudiosState(newAudios)
    setPause(true)
  }

  const resumeAudio = function() {
    const newAudios = audios

    effects.forEach(function (value: {id: string}) {
      if (newAudios[value.id].paused) {
        newAudios[value.id].audio.play()
        newAudios[value.id].paused = false
      }
    })
    
    setAudiosState(newAudios)
    setPause(false)
  }

  const renderIcon = function(type: string) {
    switch (type) {
      case 'forest':
        return <Forest />
      case 'waves':
          return <Waves />
      case 'wind':
        return <Wind />
      case 'bonfire':
        return <Fire />
      case 'white_noise':
        return <Noise />
      case 'keyboard':
        return <Keyboard />
      case 'thunder':
        return <Storm />
      case 'rain':
        return <Rain />
      case 'fan':
        return <Fan />
      case 'coffee':
        return <Coffee />
      case 'neighbourhood':
        return <Neighbourhood />
      default: 
        return <Waves />
    } 
  }

  const effectBlock = function(id: any, emoji: string, title: string, url: string) {
    return <EffectBlock key={id}>
    <Effect 
      aria-label="toggle-sound"
      // className={audios[id].on ? 'MovingEffectBorder' : ''}
      style={audios[id].on ? {borderColor: 'white'}: {}}
      onClick={(e) => toggleAudio(e, id, url)}>
        <EmojiContainer>
          {renderIcon(id)}
        </EmojiContainer>
      
    </Effect>
    <EffectSlider 
      style={audios[id].on ? {} : { visibility: 'hidden' }}
      value={audios[id].level}
      min={0}
      step={0.01}
      max={1}
      // @ts-ignore
      onChange={(e, value) => handleVolumeChange(e, value, id)}
      aria-labelledby="sound-volume" />
  </EffectBlock>
  }

  return (
    <Wrapper>
      <MainContainer>

        <EditorPicksContainer>
          <EditorPicksTitle>
            Press to enable sound
          </EditorPicksTitle>

          <PauseButton aria-label="pause-mixer" onClick={resetAudio}>
            <VolumeOff />
          </PauseButton>
          
          <VolumeOffButton aria-label="volume-off" onClick={() => pause ? resumeAudio() : pauseAudio()}>
            <PauseCircleOutlineRoundedIcon style={ pause ? { color: '#ff4a11' } : { color: 'white' }}/>
          </VolumeOffButton>

          <PlayerControlsTitle>
            Player controls
          </PlayerControlsTitle>

          <OnIndicator style={on ? { color: '#3ebc4b' } : {}}>●</OnIndicator>
        </EditorPicksContainer>

        <EffectsContainer>
          {Object.keys(categories).map(key => {
            return (
              <CategoryBlock key={key} id={key}>
                <CategoryTitle>
                  {/* {key.charAt(0).toUpperCase() + key.slice(1)} */}
                </CategoryTitle>
                <div>
                  {categories[key].map((effect: any) => {
                    return (
                      effectBlock(effect.id, effect.emoji, effect.title, effect.url)
                    )
                  })}
                </div>
              </CategoryBlock>
            )
          })}
        </EffectsContainer>

      </MainContainer>
    </Wrapper>
  )
}
