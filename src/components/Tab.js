import React, { useState } from "react"

const Tab = () => {
  const [tabList, setTabList] = useState([
    { id: 1, text: "감자", isSelected: true },
    { id: 2, text: "고구마", isSelected: false },
    { id: 3, text: "카레라이스", isSelected: false },
  ])

  const $bar = React.createRef()

  const changeTab = (id) => {
    const nextTabList = tabList.map((tab) => {
      if (tab.id === id) {
        tab.isSelected = true
      } else {
        tab.isSelected = false
      }
      return tab
    })
    setTabList(nextTabList)
    $bar.current.style = `transform: translateX(${(getActiveTab() - 1) * 100}%)`
  }

  const getActiveTab = () => {
    return tabList.filter((tab) => tab.isSelected)[0].id
  }

  return (
    <div className="tab-menu w-1/2 h-16 bg-white-400 border-2 border-black rounded-lg flex">
      <ul className="tab-list relative flex w-full h-full">
        {tabList.map((tab) => (
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
          className={`absolute w-1/3 h-1 bg-blue-400 bottom-px transition duration-700`}
        ></div>
        <div className="absolute w-full h-1 -z-10 bg-slate-400 bottom-px"></div>
      </ul>
    </div>
  )
}

export default Tab
