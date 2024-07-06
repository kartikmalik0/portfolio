import { ReactNode } from "react"

const MaxWidthWrapper = ({children}:{children:ReactNode}) => {
  return (
    <div className="w-16 mx-auto">
      {children}
    </div>
  )
}

export default MaxWidthWrapper
