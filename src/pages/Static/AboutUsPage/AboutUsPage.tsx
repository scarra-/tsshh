import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import { renderImg } from '../../../helpers/cloudinary'

const PageWrapper = styled.div`
  padding: 0 0 100px 0;
  text-align: center;
  position: relative;
  color: white;

  @media (min-width: 2048px) {
    padding: 0 0 15vh 0;
  }
`
const ImageBlock = styled.div`
  height: 50vh;
  line-height: 50vh;
  font-size: 40px;
  text-align: center;
  vertical-align: middle;
`
const OurStoryBlock = styled.div`
  padding: 100px 0 15vh 0;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
`
const StatsBlock = styled.div`
  padding: 100px 10vw 15vh 10vw;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;

  @media (min-width: 2048px) {
    padding: 100px 20vw 15vh 20vw;
  }
`
const VisionBlock = styled.div`
  padding: 100px 10vw 15vh 10vw;
  font-size: 20px;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  vertical-align: middle;
`
const TeamBlock = styled.div`
  padding: 100px 10vw 15vh 10vw;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;

  @media (min-width: 2048px) {
    padding: 100px 20vw 15vh 20vw;
  }
`
const BlockTitle = styled.h2`
  font-size: 30px;
  width: 100%;
  display: block;
  margin-bottom: 60px;
`
const InfoContainer = styled.div`
  width: 100%;
  text-align: center;
`
const InfoBlock = styled.div`
  display: inline-block;
  width: 250px;
  height: 100px;
  padding: 14px 16px;
  border: 1px solid white;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 20px;
  margin-right: 50px;
`
const InfoValue = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  color: white;
  display: flex;
  margin-top: 10px;
  margin-bottom: 15px;

  svg {
    margin-right: 15px;
  }
`
const InfoDescription = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 16px;
  color: white;
  text-align: left;
`

const OurStoryTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 100px;
`
const TeamMembers = styled.div`
  justify-content: center;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  grid-gap: 25px;
  place-items: center;
`
const TeamMember = styled.div``
const TeamMemberImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 30px;
`
const TeamMemberName = styled.div`
  font-size: 23px;
`
const TeamMemberTitle = styled.div`
  font-size: 18px;
`

export const AboutUsPage = () => {
  const { t } = useTranslation()

  // window.scrollTo(0, 0)

  return (
    <>
      <PageWrapper>
        <ImageBlock
        >
          Create a mix of your favourite ambient sounds
        </ImageBlock>
        <OurStoryBlock>
          <OurStoryTitle>What is tsshh?</OurStoryTitle>
          <p>
            Simple, light and minimalistic ambient sound mixer.
          </p>
          <br />
          <p>
            Use it to create unique ambient background for studies, focusing at work or meditations.
          </p>
          <br />
        </OurStoryBlock>
        <StatsBlock>
          <BlockTitle>Some stats</BlockTitle>
          <InfoContainer>
            <InfoBlock>
              <InfoValue>
                🔉 {'32'}
              </InfoValue>
              <InfoDescription>{t('breakdown.sounds_count')}</InfoDescription>
            </InfoBlock>
            <InfoBlock>
              <InfoValue>
              🎶 {'8'}
              </InfoValue>
              <InfoDescription>
                {t('breakdown.total_mixes')}
              </InfoDescription>
            </InfoBlock>
            <InfoBlock>
              <InfoValue>
              🤵 {'1'}
              </InfoValue>
              <InfoDescription>{t('breakdown.daily_users')}</InfoDescription>
            </InfoBlock>
          </InfoContainer>
        </StatsBlock>
        <VisionBlock>
          <BlockTitle>Why ambient sounds mixer instead of music?</BlockTitle>
          <p>
            You have complete, granular control over your background noise.
          </p>
          <br />
          <p>
            <b>You are the artist!</b> In your mind you can be wherever you want whether it be a 🌲 pine forest full of 🦜 birds
            or lonely Baltic 🌊 shore with a coming ⛈ thunderstorm.
          </p>
        </VisionBlock>
        <TeamBlock>
          <BlockTitle>Team</BlockTitle>
          <TeamMembers>
            <TeamMember>
              <TeamMemberImage
                style={{
                  background: `url(${renderImg(
                    'v1643589277/mediaview/AI_ansbt4.jpg'
                  )})`,
                  backgroundPositionY: '60%',
                  backgroundSize: 'cover',
                }}
              />
              <TeamMemberName>Artūrs Adejanovs</TeamMemberName>
              <TeamMemberTitle>Designer</TeamMemberTitle>
            </TeamMember>
            <TeamMember>
              <TeamMemberImage
                style={{
                  background: `url(/images/me.jpg)`,
                  backgroundPositionY: '60%',
                  backgroundSize: 'cover',
                }}
              />
              <TeamMemberName>Artūrs Adejanovs</TeamMemberName>
              <TeamMemberTitle>Developer</TeamMemberTitle>
            </TeamMember>
            <TeamMember>
              <TeamMemberImage
                style={{
                  background: `url(/images/redbull.webp)`,
                  backgroundPositionY: '60%',
                  backgroundSize: 'cover',
                }}
              />
              <TeamMemberName>Redbull</TeamMemberName>
              <TeamMemberTitle>Caffeine source</TeamMemberTitle>
            </TeamMember>
          </TeamMembers>
        </TeamBlock>
      </PageWrapper>
    </>
  )
}

export default AboutUsPage
