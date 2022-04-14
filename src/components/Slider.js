import React, { useState } from "react"

const Slider = () => {
  const [percentage, setPercentage] = useState(1)
  const buttons = [
    { id: 1, percentage: 1 },
    { id: 2, percentage: 25 },
    { id: 3, percentage: 50 },
    { id: 4, percentage: 75 },
    { id: 5, percentage: 100 },
  ]

  const clickPercentButton = (id) => {
    const nextPercentage = buttons.find((button) => button.id === id).percentage
    setPercentage(nextPercentage)
  }

  const onChangePercentage = (e) => {
    setPercentage(e.target.value)
  }

  return (
    <div className="slider-component min-w-[350px] max-w-[500px] w-1/2 h-36 bg-white-400 border-2 border-black rounded-lg flex-row mt-3">
      <div className="gage-indicator m-1 bg-slate-100 p-2 border-2 border-gray-300 grow h-1/2 rounded-lg flex items-center justify-end">
        <div className="mr-4 text-blue-400 flex items-center">
          <span className="mr-4 font-bold text-black text-2xl">
            {percentage}
          </span>
          %
        </div>
      </div>
      <div className="contorl-pane flex flex-col grow h-1/2 mt-3 p-2">
        <input
          type="range"
          min={1}
          max={100}
          value={percentage}
          step={1}
          onChange={onChangePercentage}
          className="slider w-full h-2 rounded-lg cursor-pointer"
        ></input>

        <ul className="percentage-buttons flex justify-between mt-2">
          {buttons.map((button) => (
            <li
              key={button.id}
              onClick={() => clickPercentButton(button.id)}
              className="flex text-slate-300"
            >
              <button className="w-10 bg-slate-400 rounded-full text-xs hover:bg-blue-400">
                {button.percentage}%
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Slider
