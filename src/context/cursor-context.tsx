
import { createContext, useContext, useState, type ReactNode } from "react"

interface CursorContextType {
  isEmailHover: boolean
  setIsEmailHover: (value: boolean) => void
}

const CursorContext = createContext<CursorContextType | undefined>(undefined)

export function CursorProvider({ children }: { children: ReactNode }) {
  const [isEmailHover, setIsEmailHover] = useState(false)

  return <CursorContext.Provider value={{ isEmailHover, setIsEmailHover }}>{children}</CursorContext.Provider>
}

export function useCursor() {
  const context = useContext(CursorContext)
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider")
  }
  return context
}

