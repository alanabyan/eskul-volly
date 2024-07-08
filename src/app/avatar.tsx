"use client";

import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import './globals.css'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Avatar: React.FC = () => (
    <React.StrictMode>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </React.StrictMode>
  );
  
  export default Avatar;
