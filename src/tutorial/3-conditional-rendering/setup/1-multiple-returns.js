import React, { useState, useEffect } from "react"
const url = "https://api.github.com/users/QuincyLarson"
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState("default user")

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.stauts <= 299) {
          return resp.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(resp.stautsText)
        }
      })
      .then((user) => {
        const { login } = user
        setUser(login)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  if (isLoading) {
    return <h2>loading....</h2>
  }
  if (isError) {
    return (
      <div>
        <h1>ERROR</h1>
      </div>
    )
  }

  return (
    <div>
      <h2>{user}</h2>
    </div>
  )
}

export default MultipleReturns
