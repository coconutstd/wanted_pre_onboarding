import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons"

const data = [
  { id: 1, text: "BTCUSD.PERP" },
  { id: 2, text: "ETHUSD.PERP" },
  { id: 3, text: "BCHUSD.PERP" },
  { id: 4, text: "LTCUSD.PERP" },
]

const Dropdown = () => {
  const [currentKeyword, setCurrentKeyword] = useState("All Symbols")
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [searchWord, setSearchWord] = useState("")
  const [filteredList, setFilteredList] = useState([...data])

  const dropDownList = React.createRef()

  const toggleDropdown = () => {
    isDropDownOpen ? closeDropDown() : openDropDown()
  }

  const openDropDown = () => {
    setIsDropDownOpen(true)
    dropDownList.current.classList.remove("hidden")
    dropDownList.current.classList.add("flex")
  }

  const closeDropDown = () => {
    setIsDropDownOpen(false)
    dropDownList.current.classList.remove("flex")
    dropDownList.current.classList.add("hidden")
  }

  const selectKeyword = (keyword) => {
    setCurrentKeyword(keyword)
    closeDropDown()
  }

  const keywordFilter = (e) => {
    const nextSearchWord = e.target.value
    setSearchWord(nextSearchWord)

    const filterdData = data.filter((item) =>
      item.text.toLowerCase().includes(nextSearchWord.toLowerCase())
    )

    if (nextSearchWord.length === 0) {
      setFilteredList([...data])
    } else {
      setFilteredList(filterdData)
    }
  }

  return (
    <div className="dropdown-component min-w-[350px] max-w-[500px] box-border border-2 border-black relative rounded-lg w-1/2 h-auto bg-white-400 flex mt-3">
      <button
        onClick={toggleDropdown}
        className="dropdown-button w-full h-6 cursor-pointer relative"
      >
        <div className="bg-slate-100 overflow-hidden rounded-lg text-left">
          <span className="ml-5 text-slate-700 font-medium">
            {currentKeyword}
          </span>
        </div>
        <span className="w-full h-full text-right text-slate-400 absolute right-2 top-0">
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </span>
      </button>
      <div
        ref={dropDownList}
        className="dropdown-list hidden absolute shadow-lg min-w-[350px] max-w-[500px] box-border border-2 border-black rounded-lg w-full h-auto top-4 right-[-2px] flex-col mt-3"
      >
        <div className="search-box flex p-2 border-b-2">
          <span className="w-[16px] h-[16px]">
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </span>
          <input
            className="w-full ml-3 outline-none"
            type="text"
            placeholder="Search Symbol"
            value={searchWord}
            onChange={keywordFilter}
          ></input>
        </div>
        <ul className="symbol-list p-2 mx-7 text-slate-400">
          <li
            onClick={() => selectKeyword("All Symbols")}
            className="mt-2 w-full cursor-pointer"
          >
            <button>All Symbols</button>
          </li>
          {filteredList.map((item) => (
            <li
              key={item.id}
              onClick={() => selectKeyword(item.text)}
              className="mt-2 w-full cursor-pointer"
            >
              <button>{item.text}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
