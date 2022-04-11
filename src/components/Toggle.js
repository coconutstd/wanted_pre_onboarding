import React, { useState } from "react"

const Toggle = () => {
  const [isDefault, setIsDefault] = useState(true)

  const onClickDefault = (e) => {
    setIsDefault(true)
  }

  const onClickDetail = (e) => {
    setIsDefault(false)
  }

  return (
    <div className="toggle box-border border-2 border-black relative overflow-hidden rounded-lg w-1/2 h-16 bg-white-400 flex">
      <button
        onClick={onClickDefault}
        className={`default-tab relative z-20 w-1/2 text-center font-bold ${
          isDefault ? "text-black" : "text-slate-400"
        }`}
      >
        기본
        <div
          className={`absolute rounded-lg bg-blue-400 -z-10 w-full h-full left-0 top-0 transition duration-700 ${
            isDefault ? "" : "translate-x-full"
          }`}
        ></div>
      </button>
      <button
        onClick={onClickDetail}
        className={`detail-tab relative z-20 w-1/2 text-center font-bold ${
          !isDefault ? "text-black" : "text-slate-400"
        }`}
      >
        상세
      </button>
    </div>
  )
}

export default Toggle
