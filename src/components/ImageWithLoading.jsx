import { useState } from 'react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

export function ImageWithLoading({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "",
  showSpinner = true 
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {isLoading && showSpinner && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#232526]">
          <LoadingSpinner size="lg" />
        </div>
      )}
      
      {hasError ? (
        <div className="flex items-center justify-center bg-[#232526] text-gray-400 p-8">
          <div className="text-center">
            <div className="text-4xl mb-2">📷</div>
            <p className="text-sm">Image not available</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  )
}
