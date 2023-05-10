import React from "react"

const Header = React.memo(({count}) => {
    console.log('rendered!')
    return (
      <div>
        About Header Page
      </div>
    )
}, (prev, next) => {
    if (prev.count === 9 && next.count === 10) return true
    return false
})

export default Header