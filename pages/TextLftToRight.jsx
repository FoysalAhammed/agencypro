import React from 'react'

const TextLftToRight = () => {
  return (
<>
<div class="clean_responsive_versatile">
        <div class="clean">
          <p>Clean</p>
        <div class="rounded_text">
            <img src="https://www.kirupa.com/icon/1f354.svg" alt=
            "" />
            <svg
              id="rotatingText"
              viewBox="0 0 200 200"
              width={200}
              height={200}
            >
              <defs>
                <path
                  id="circle"
                  d="M 100, 100 m -75, 0 a 75, 75 0 1, 0 150, 0 a 75, 75 0 1, 0 -150, 0"
                />
              </defs>
              <text width={400}>
                <textPath alignmentBaseline="bottom" xlinkHref="#circle" className="text">
                  {
                    "Foysal 2.0 Foysal 2.0 Foysal 2.0 Foysal 2.0 Foysal 2.0 TM"
                  }
                </textPath>
              </text>
            </svg>
          </div> 
        </div>
        <div class="responsive">
          <p>Responsive</p>
        </div>
        <div class="versatile">
          <img src="/svg/line_svg.svg" alt="" />
          <p>Versatile</p>
        </div>
      </div>
</>
  )
}

export default TextLftToRight