import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Media from 'react-media'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay, virtualize } from 'react-swipeable-views-utils'
import { mod } from 'react-swipeable-views-core'

const SwipeableView = autoPlay(virtualize(SwipeableViews))

export default class Slider extends Component {
  static propTypes = {
    slides: PropTypes.array.isRequired,
    slideRenderer: PropTypes.func.isRequired,
    dotComponent: PropTypes.func,
    buttonComponent: PropTypes.func,
    interval: PropTypes.number,
    className: PropTypes.string
  }

  static defaultProps = {
    interval: 5000
  }

  state = {
    auto: true,
    activeIndex: 0,
    infiniteIndex: 0
  }

  onChangeIndex = (index, indexLatest, meta) => {
    const { slides } = this.props
    this.setState({
      activeIndex: mod(index, slides.length),
      infiniteIndex: index
    })
  }

  onMouseEnter = () => this.setState({ auto: false })

  onMouseLeave = () => this.setState({ auto: true })

  _moveLeft = () => {
    const { activeIndex, infiniteIndex } = this.state
    const { slides } = this.props
    this.setState({
      infiniteIndex: infiniteIndex - 1,
      activeIndex: mod(infiniteIndex - 1, slides.length)
    })
  }

  _moveRight = () => {
    const { activeIndex, infiniteIndex } = this.state
    const { slides } = this.props
    this.setState({
      infiniteIndex: infiniteIndex + 1,
      activeIndex: mod(infiniteIndex + 1, slides.length)
    })
  }

  _slideToIndex = index => {
    const { activeIndex, infiniteIndex } = this.state
    this.setState({
      infiniteIndex: infiniteIndex + (index - activeIndex),
      activeIndex: index
    })
  }

  _renderSlides = ({ index, key }) => {
    const { slideRenderer, slides, className } = this.props
    const slideData = slides[mod(index, slides.length)]
    return (
      <div key={key} className={className}>
        {slideRenderer(slideData)}
      </div>
    )
  }

  render() {
    const { auto, activeIndex, infiniteIndex } = this.state
    const {
      slides,
      interval,
      slideRenderer,
      dotComponent: Dot,
      buttonComponent: Button
    } = this.props
    return (
      <Media query="(max-width: 950px)">
        {matches => (
          <CarouselContainer>
            <SwipeableView
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
              onChangeIndex={this.onChangeIndex}
              index={infiniteIndex}
              autoplay={auto && slides.length > 1}
              interval={interval}
              springConfig={{
                duration: `${matches ? 0.35 : 1.5}s`,
                easeFunction: 'cubic-bezier(0.15, 0.3, 0.25, 1)',
                delay: '0s'
              }}
              slideRenderer={this._renderSlides}
            />
            {!matches &&
              Button && (
                <ButtonContainer>
                  <Button onClick={this._moveLeft} left />
                </ButtonContainer>
              )}
            {!matches &&
              Button && (
                <ButtonContainer>
                  <Button onClick={this._moveRight} right />
                </ButtonContainer>
              )}
            {Dot &&
              slides.length > 1 && (
                <DotsContainer>
                  {slides.map((slide, i) => {
                    let isActive = i === activeIndex
                    return (
                      <Dot
                        key={i}
                        isActive={isActive}
                        onClick={() => this._slideToIndex(i)}
                      />
                    )
                  })}
                </DotsContainer>
              )}
          </CarouselContainer>
        )}
      </Media>
    )
  }
}

const CarouselContainer = styled.div`
  box-sizing: border-box;
  ${'' /* position: relative; */}
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 950px) {
    width: 98%;
  }
`
const DotsContainer = styled.ul`
  position: absolute;
  display: inline-block;
  margin: 0 auto;
  padding: 0;
`
const ButtonContainer = styled.div`
  position: absolute;
  left: 73px;
  right: 0;
  top: 40%;
`
