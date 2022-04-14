import React, { useState, useRef } from "react"

const Tab = () => {
  const [tabMenus, setTabMenus] = useState([
    { id: 1, text: "감자", isSelected: true },
    { id: 2, text: "고구마", isSelected: false },
    { id: 3, text: "카레라이스", isSelected: false },
  ])

  const $bar = useRef(null)

  const changeTab = (id) => {
    const nextTabList = tabMenus.map((tab) => {
      tab.id === id ? (tab.isSelected = true) : (tab.isSelected = false)
      return tab
    })
    setTabMenus(nextTabList)
    barMove()
  }

  const barMove = () => {
    $bar.current.style = `transform: translateX(${(getActiveTab() - 1) * 100}%)`
  }

  const getActiveTab = () => {
    return tabMenus.filter((tab) => tab.isSelected)[0].id
  }

  return (
    <div className="tab-menu min-w-[350px] max-w-[500px] w-1/2 h-16 bg-white-400 border-2 border-black rounded-lg flex mt-3">
      <ul className="tab-list relative flex w-full h-full">
        {tabMenus.map((tab) => (
          <li
            key={tab.id}
            className={`tab-item ${
              tab.isSelected ? "text-black" : "text-slate-400"
            } font-bold transition duration-500 w-1/3 mx-auto flex justify-center items-center cursor-pointer`}
            onClick={() => changeTab(tab.id)}
          >
            {tab.text}
          </li>
        ))}
        <div
          ref={$bar}
          className="absolute w-1/3 h-2 bg-blue-400 rounded-lg overflow-hidden bottom-px transition duration-700"
        ></div>
        <div className="absolute w-full h-2 -z-10 bg-slate-400 bottom-px"></div>
      </ul>
    </div>
  )
}

export default Tab
