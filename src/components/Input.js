import React, { useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleCheck,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-solid-svg-icons"

const Input = () => {
  const [formValue, setFormValue] = useState({ email: "", password: "" })
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [formValueIsOk, setFormValueIsOk] = useState({ email: false })

  const $password = useRef(null)
  const $errorMessage = useRef(null)

  const onChangeInput = (e) => {
    const nextFormValue = {
      ...formValue,
      [e.target.id]: e.target.value,
    }
    setFormValue(nextFormValue)
    emailValidation(e.target.id, e.target.value)
  }

  const emailValidation = (type, email) => {
    if (type !== "email") return
    const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    const isOk = emailRegex.test(email)
    setFormValueIsOk({ ...formValueIsOk, email: isOk })
  }

  const togglePasswordVisibility = (e) => {
    $password.current.type =
      $password.current.type === "password" ? "text" : "password"
    setIsPasswordVisible($password.current.type === "password" ? false : true)
  }

  const showOrHideErrorMessage = () => {
    if (formValue.email.length === 0 || formValueIsOk.email === true) {
      $errorMessage.current.classList.add("hidden")
    } else {
      $errorMessage.current.classList.remove("hidden")
    }
  }

  return (
    <div className="input-component min-w-[350px] max-w-[500px] w-1/2 h-36 bg-white-400 border-2 border-black rounded-lg flex-row mt-3 bg-slate-100">
      <form className="p-3 w-full h-full">
        <div className="email-box flex flex-col h-1/2 relative">
          <div
            ref={$errorMessage}
            className={`hidden absolute left-20 -top-1 text-sm text-red-700`}
          >
            invalid email
          </div>
          <label htmlFor="email" className="text-sm text-slate-500">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            value={formValue.email}
            onChange={onChangeInput}
            onBlur={showOrHideErrorMessage}
            placeholder="E-mail"
            className={`outline rounded-sm mt-1 p-1 focus:outline-slate-400 focus:outline-2 text-sm px-2`}
          ></input>
          <span
            className={`absolute right-2 ${
              formValueIsOk.email ? "text-green-500" : null
            }`}
            style={{ top: "1.6rem" }}
          >
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
        </div>

        <div className="password-box flex flex-col h-1/2 relative">
          <label htmlFor="password" className="text-sm text-slate-500">
            Password
          </label>
          <input
            ref={$password}
            id="password"
            type="password"
            value={formValue.password}
            onChange={onChangeInput}
            placeholder="Password"
            className="outline rounded-sm mt-1 p-1 focus:outline-slate-400 focus:outline-2 text-sm px-2"
          ></input>
          <button
            type="button"
            className={`absolute`}
            style={{ top: "1.6rem", right: "0.4rem" }}
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Input
