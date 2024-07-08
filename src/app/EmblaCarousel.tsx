"use client";

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container">
            <div className="embla__slide embla__class-names">
              <img
                className="embla__slide__img bg-slate-400/5"
                src={`https://i.postimg.cc/QtcnXfLp/Raden-removebg-preview.png`}
                alt="Your alt text"
              />
              <h1 className='text-slate-400 flex justify-center items-center text-[3vh] font-bold'>Ketua Volly</h1>
            </div>
            <div className="embla__slide embla__class-names">
              <img
                className="embla__slide__img bg-slate-400/5"
                src={`https://i.postimg.cc/Z5CmTzwp/Fathoni-removebg-preview.png`}
                alt="Your alt text"
              />
              <h1 className='text-slate-400 flex justify-center items-center text-[3vh] font-bold'>Wakil Ketua</h1>
            </div>
            <div className="embla__slide embla__class-names">
              <img
                className="embla__slide__img bg-slate-400/5"
                src={`https://i.postimg.cc/c1FLXMCJ/Avril-removebg-preview.png`}
                alt="Your alt text"
              />
              <h1 className='text-slate-400 flex justify-center items-center text-[3vh] font-bold'>Sekretaris</h1>
            </div>
            <div className="embla__slide embla__class-names">
              <img
                className="embla__slide__img bg-slate-400/5"
                src={`https://i.postimg.cc/DzQ2s1Rn/Devina-removebg-preview.png`}
                alt="Your alt text"
              />
              <h1 className='text-slate-400 flex justify-center items-center text-[3vh] font-bold'>Bendahara</h1>
            </div>
            <div className="embla__slide embla__class-names">
              <img
                className="embla__slide__img bg-slate-400/5"
                src={`https://i.postimg.cc/J0VcgVPb/Rafi-removebg-preview-2-1.png`}
                alt="Your alt text"
              />
              <h1 className='text-slate-400 flex justify-center items-center text-[3vh] font-bold'>Seksi Alat</h1>
            </div>
            <div className="embla__slide embla__class-names">
              <img
                className="embla__slide__img bg-slate-400/5"
                src={`https://i.postimg.cc/gJSbqssF/Galva-removebg-preview.png`}
                alt="Your alt text"
              />
              <h1 className='text-slate-400 flex justify-center items-center text-[3vh] font-bold'>Seksi Alat</h1>
            </div>
            <div className="embla__slide embla__class-names">
              <img
                className="embla__slide__img bg-slate-400/5"
                src={`https://i.postimg.cc/WzGRH2bc/Vanessa-removebg-preview.png`}
                alt="Your alt text"
              />
              <h1 className='text-slate-400 flex justify-center items-center text-[3vh] font-bold'>Seksi Alat</h1>
            </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
