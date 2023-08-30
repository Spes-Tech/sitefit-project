import React, { FormEvent, useState } from 'react'

import Button from './button'
import Loading from './loading'

function Form() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)

  function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!validateEmail(email)) {
      setIsEmailValid(false)
      return
    }
    setIsEmailValid(true)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col items-center justify-evenly px-5 md:px-20"
    >
      {isLoading && <Loading />}

      <div className="w-full">
        <input
          type="email"
          className={`h-11 w-full rounded-lg px-5 placeholder:text-secondary ${
            !isEmailValid ? 'border-red-500' : ''
          }`}
          placeholder="exemplo@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isEmailValid && (
          <p className="text-red-500">Por favor, insira um e-mail válido.</p>
        )}
      </div>
      <p className="w-full text-start text-xl font-semibold">asdfsdafdf</p>
      <Button type="submit">Button</Button>
    </form>
  )
}

export default Form
