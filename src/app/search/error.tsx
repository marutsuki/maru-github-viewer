"use client"
 
import Button from "@/components/common/Button"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="h-full w-full text-white place-items-center grid">
        <div className="flex flex-col items-center">
            <h2 className="text-2xl m-4">Something went wrong!</h2>
            <Button onClick={reset} text="Try again"/>
        </div>
    </div>
  )
}