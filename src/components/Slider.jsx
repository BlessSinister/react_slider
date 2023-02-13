import React, { useState } from 'react'
import slide1 from '../components/slide1.jpg'
import slide2 from '../components/slide2.jpg'
import slide3 from '../components/slide3.jpg'
import slide4 from '../components/slide4.jpg'
import slide5 from '../components/slide5.jpg'

const arr = [
  { slide: slide2, title: 'Lamborghini' },
  { slide: slide3, title: 'Camaro' },
  { slide: slide4, title: 'Aston' },
  { slide: slide5, title: 'Tesla' },
]
//В целом полностью повторяети логику, но есть проблема с багом, насколько я понимаю это связано с динамическим созданием элементов
//Приходится несколько раз нажимать первый раз на элемент, что бы было создано DOM дерево и оно могло передать своё значение в NodeList
//Подумать, как можно сразу создать элементы, что бы нод коллеция не была пустой
function Slider() {
  const [active, setActive] = useState('')
  const slides = document.querySelectorAll('.slide')
  const addClass = (e) => {
    slides.forEach((item) => item.classList.remove(active))
    setActive('active')
    e.target.classList.add(active)
  }
  document.addEventListener('DOMContentLoaded', addClass)
  return (
    <div className="container">
      <div
        className="slide active"
        style={{
          backgroundImage: `url(${slide1})`,
        }}
        onClick={addClass}
      >
        <h3>Ferrari</h3>
      </div>
      {arr.map((item, i) => {
        return (
          <div
            className="slide"
            style={{
              backgroundImage: `url(${item.slide})`,
            }}
            key={i}
            onClick={addClass}
          >
            <h3>{item.title}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Slider
