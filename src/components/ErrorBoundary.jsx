import { Component } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw } from 'lucide-react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#181a1b] text-white flex items-center justify-center px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-6">
              <AlertTriangle className="h-16 w-16 text-orange-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h1>
              <p className="text-gray-400 mb-6">
                We encountered an unexpected error. Don't worry, this has been logged and we're working on it.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button 
                onClick={this.handleReset}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 w-full"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
              
              <Button 
                onClick={() => window.location.reload()}
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black w-full"
              >
                Reload Page
              </Button>
            </div>

            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-orange-500 hover:text-orange-400 mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-[#232526] p-4 rounded-lg text-sm overflow-auto max-h-40">
                  <pre className="text-red-400 whitespace-pre-wrap">
                    {this.state.error && this.state.error.toString()}
                    {this.state.errorInfo.componentStack}
                  </pre>
                </div>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
