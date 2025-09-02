import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { ImageWithLoading } from "@/components/ImageWithLoading"
import { X, Mail, Phone, Download, ArrowUpRight, ArrowUp, Menu } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '@/config/emailjs'


const projects = {
  pamperedByYuni: {
    title: 'Pampered by Yuni',
    image: '/images/Pampered by Yuni Hero.jpg',
    tags: ['Front-end', 'Beauty Brand', 'Wellness'],
    desc: 'Pampered By Yuni is a self-care beauty brand focused on healing through intentional, personalized wellness.',
    link: 'https://pamperedbyyuni.com'
  },
  vitech: {
    title: 'ViTech Accessories',
    image: '/images/ViTech Landing Page.jpg',
    tags: ['Front-end', 'E-commerce', 'Responsive'],
    desc: 'Explore ViTech\'s assortment of tools and products designed to simplify everyday tech tasks.',
    link: 'https://victamu.github.io/ViTech/'
  },
  calculator: {
    title: 'Simple & Scientific Calculator',
    image: '/images/Scientific Calculator.jpg',
    tags: ['Front-end', 'Background Animation', 'JavaScript'],
    desc: 'Perform simple and complex mathematical and scientific operations. Click the link to explore!',
    link: 'https://victamu.github.io/Calculator/index.html'
  }
}

export function Portfolio({ onViewProjects }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)



  // Scroll detection for Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      const aboutHeading = document.querySelector('#about h2')
      if (aboutHeading) {
        const rect = aboutHeading.getBoundingClientRect()
        // Show button when "About Me" heading is scrolled past
        setShowBackToTop(rect.bottom < 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openProjectModal = (projectKey) => {
    setSelectedProject(projects[projectKey])
    setIsDialogOpen(true)
  }

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields before submitting.')
      return
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        },
        emailjsConfig.publicKey
      )
      
      console.log('Email sent successfully:', result)
      
      // Success - reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      
      // Show success message
      alert('Message sent successfully! Thank you for contacting me.')
      
    } catch (error) {
      console.error('Email send failed:', error)
      console.error('Error details:', {
        serviceId: emailjsConfig.serviceId,
        templateId: emailjsConfig.templateId,
        publicKey: emailjsConfig.publicKey,
        formData: formData,
        errorMessage: error.message,
        errorText: error.text
      })
      
      let errorMessage = 'Failed to send message. Please try again.'
      
      if (error.text) {
        errorMessage = `EmailJS Error: ${error.text}`
      }
      
      alert(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#181a1b] text-white relative overflow-x-hidden">
      {/* Animated background blobs */}
              <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-500"></div>
        </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#181a1b]/80 backdrop-blur-md border-b border-[#232526]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center -ml-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-2xl md:text-3xl font-bold hover:text-orange-500 transition-colors duration-200 cursor-pointer"
              >
                <span className="text-orange-500">V</span>ictor
              </button>
            </div>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8 lg:space-x-12">
              <li><button onClick={() => scrollToSection('home')} className={`hover:text-orange-500 transition-colors duration-200 text-sm lg:text-base font-medium ${activeSection === 'home' ? 'text-orange-500' : ''}`}>Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className={`hover:text-orange-500 transition-colors duration-200 text-sm lg:text-base font-medium ${activeSection === 'about' ? 'text-orange-500' : ''}`}>About</button></li>
              <li><button onClick={() => scrollToSection('services')} className={`hover:text-orange-500 transition-colors duration-200 text-sm lg:text-base font-medium ${activeSection === 'services' ? 'text-orange-500' : ''}`}>Services</button></li>
              <li><button onClick={() => scrollToSection('portfolio')} className={`hover:text-orange-500 transition-colors duration-200 text-sm lg:text-base font-medium ${activeSection === 'portfolio' ? 'text-orange-500' : ''}`}>Portfolio</button></li>
              <li><button onClick={() => scrollToSection('contact')} className={`hover:text-orange-500 transition-colors duration-200 text-sm lg:text-base font-medium ${activeSection === 'contact' ? 'text-orange-500' : ''}`}>Contact</button></li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-orange-500 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#232526]/50 bg-[#181a1b]/95 backdrop-blur-md">
            <ul className="py-4 space-y-2">
              <li><button onClick={() => { scrollToSection('home'); setIsMobileMenuOpen(false); }} className={`w-full text-left px-4 py-3 hover:text-orange-500 transition-colors duration-200 text-base font-medium ${activeSection === 'home' ? 'text-orange-500' : ''}`}>Home</button></li>
              <li><button onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }} className={`w-full text-left px-4 py-3 hover:text-orange-500 transition-colors duration-200 text-base font-medium ${activeSection === 'about' ? 'text-orange-500' : ''}`}>About</button></li>
              <li><button onClick={() => { scrollToSection('services'); setIsMobileMenuOpen(false); }} className={`w-full text-left px-4 py-3 hover:text-orange-500 transition-colors duration-200 text-base font-medium ${activeSection === 'services' ? 'text-orange-500' : ''}`}>Services</button></li>
              <li><button onClick={() => { scrollToSection('portfolio'); setIsMobileMenuOpen(false); }} className={`w-full text-left px-4 py-3 hover:text-orange-500 transition-colors duration-200 text-base font-medium ${activeSection === 'portfolio' ? 'text-orange-500' : ''}`}>Portfolio</button></li>
              <li><button onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }} className={`w-full text-left px-4 py-3 hover:text-orange-500 transition-colors duration-200 text-base font-medium ${activeSection === 'contact' ? 'text-orange-500' : ''}`}>Contact</button></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-0">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight">
            <span className="block">
              <span className="text-orange-500">I</span>
              <span className="text-white">deas</span>
              <span className="text-orange-500">.</span>
            </span>
            <span className="block">
              <span className="text-white">Buil</span>
              <span className="text-orange-500">t</span>
              <span className="text-orange-500">.</span>
            </span>
            <span className="block">
              <span className="text-white">B</span>
              <span className="text-orange-500">e</span>
              <span className="text-white">autifully</span>
              <span className="text-orange-500">.</span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            Your brand, where vision meets conversion.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                          <Button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto touch-manipulation"
              >
                View My Work
              </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black active:bg-orange-600 active:text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto touch-manipulation"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-left space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate web developer and designer based in Austin, Texas, with a love for creating digital experiences that not only look stunning but drive real results. My journey in web development started with curiosity and has evolved into a craft I'm truly passionate about.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in building clean, responsive, and conversion-focused websites that prioritize user experience while maintaining performance and cross-browser compatibility. Every project I take on is an opportunity to blend creativity with strategic thinking.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new design trends, experimenting with emerging technologies, or collaborating with clients to bring their unique visions to life. I believe great websites are built through understanding, creativity, and attention to detail.
                </p>
              </div>
              
              {/* Skills Section */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-orange-500 mb-4">Core Skills</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">Frontend Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">UI/UX Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">Landing Page Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">Cross-device Testing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">Performance Optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">Cross-browser Testing</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-6 sm:space-y-8 order-1 lg:order-2 mb-8 lg:mb-0">
              {/* Professional Portrait */}
              <div className="relative">
                <div className="w-48 h-48 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-orange-500/20 shadow-2xl">
                  <ImageWithLoading
                    src="/images/Moi.jpg"
                    alt="Victor Ekeke - Professional Portrait"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-500/30 rounded-full"></div>
              </div>
              
              {/* Personal Touch */}
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-400">Based in Austin, TX</p>
                <p className="text-sm text-gray-400">Available for remote work</p>
                <div className="flex justify-center items-center space-x-3 mt-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-orange-500">Open to new opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-orange-500">Experience</h3>
            <div className="space-y-6">
              <div className="bg-[#232526] p-6 rounded-lg border border-[#232526] hover:border-orange-500/30 transition-colors duration-300">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-bold text-white">Freelance Web Developer</h4>
                  <span className="text-sm text-orange-500 bg-gray-500/10 px-3 py-1 rounded-full">Current</span>
                </div>
                <p className="text-gray-400 mb-3">Upwork • 2025 - Present</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Building custom websites and landing pages for clients across various industries. Specializing in responsive design, e-commerce solutions, and performance optimization.
                </p>
              </div>
              <div className="bg-[#232526] p-6 rounded-lg border border-[#232526] hover:border-orange-500/30 transition-colors duration-300">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-bold text-white">Data Analysis Intern</h4>
                  <span className="text-sm text-gray-400 bg-gray-500/10 px-3 py-1 rounded-full">Past</span>
                </div>
                <p className="text-gray-400 mb-3">StartupList Africa • May - August 2025</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Analyzed startup data and market trends, contributing to strategic insights and business development initiatives.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-orange-500">Education</h3>
            <div className="bg-[#232526] p-6 rounded-lg border border-[#232526] hover:border-orange-500/30 transition-colors duration-300">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-bold text-white">Bachelor's Degree in Computer Science</h4>
                <span className="text-sm text-orange-500 bg-gray-500/10 px-3 py-1 rounded-full">In Progress</span>
              </div>
              <p className="text-gray-400 mb-3">Huston-Tillotson University • 2023 - 2026</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Relevant coursework: E-Commerce, Web Programming, Data Structures, Algorithms, Database Management
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-500/20 text-orange-500 px-2 py-1 rounded">Computer Science</span>
                <span className="text-xs bg-gray-500/20 text-orange-500 px-2 py-1 rounded">Web Development</span>
                <span className="text-xs bg-gray-500/20 text-orange-500 px-2 py-1 rounded">E-Commerce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">My Services</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
            From concept to deployment, I deliver comprehensive web solutions that drive results and exceed expectations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Landing Page Design */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <Card className="relative bg-gradient-to-br from-[#232526] to-[#2a2d2e] border-[#232526] hover:border-orange-500/30 transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-500"></div>
                <CardHeader className="relative pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">Landing Page Design</h3>
                  <p className="text-gray-400 text-sm">High-converting, purpose-driven pages</p>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Craft compelling landing pages that convert visitors into customers. I focus on strategic design, persuasive copy, and seamless user experience to maximize your conversion rates.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">Conversion-focused design</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">A/B testing ready</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">Mobile-first approach</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Full Website Development */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <Card className="relative bg-gradient-to-br from-[#232526] to-[#2a2d2e] border-[#232526] hover:border-orange-500/30 transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-500"></div>
                <CardHeader className="relative pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">Full Website Development</h3>
                  <p className="text-gray-400 text-sm">Complete web solutions & e-commerce</p>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Build comprehensive websites that grow with your business. From multi-page sites to e-commerce platforms, I create scalable solutions with modern technologies and best practices.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">Scalable architecture</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">E-commerce integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">Content management</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* UI/UX Design */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <Card className="relative bg-gradient-to-br from-[#232526] to-[#2a2d2e] border-[#232526] hover:border-orange-500/30 transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-500"></div>
                <CardHeader className="relative pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">UI/UX Design</h3>
                  <p className="text-gray-400 text-sm">User-centered interface design</p>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Design intuitive, engaging interfaces that delight users and drive engagement. I combine user research, wireframing, and prototyping to create seamless digital experiences.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">User research & testing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">Wireframing & prototyping</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">Accessibility focused</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Services Row */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#232526] to-[#2a2d2e] p-6 rounded-xl border border-[#232526] hover:border-orange-500/30 transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors duration-300">Performance Optimization</h4>
                  <p className="text-gray-400 text-sm">Speed up your website for better SEO and user experience</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#232526] to-[#2a2d2e] p-6 rounded-xl border border-[#232526] hover:border-orange-500/30 transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors duration-300">Mobile Optimization</h4>
                  <p className="text-gray-400 text-sm">Responsive design that works perfectly on all devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">My Work</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Some of the fun and interesting projects that I've developed.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Pampered by Yuni */}
          <Card 
            className="bg-[#232526] border-[#232526] hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group shadow-lg"
            onClick={() => openProjectModal('pamperedByYuni')}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <ImageWithLoading
                src={projects.pamperedByYuni.image}
                alt={projects.pamperedByYuni.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                containerClassName="w-full h-full"
              />
            </div>
            <CardHeader className="pb-3">
              <h3 className="text-xl font-bold text-white">
                {projects.pamperedByYuni.title}
              </h3>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-400 mb-4 leading-relaxed">
                {projects.pamperedByYuni.desc}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-orange-500 text-sm">↗</span>
              </div>
            </CardContent>
          </Card>

          {/* ViTech Accessories */}
          <Card 
            className="bg-[#232526] border-[#232526] hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group shadow-lg"
            onClick={() => openProjectModal('vitech')}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <ImageWithLoading
                src={projects.vitech.image}
                alt={projects.vitech.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                containerClassName="w-full h-full"
              />
            </div>
            <CardHeader className="pb-3">
              <h3 className="text-xl font-bold text-white">
                {projects.vitech.title}
              </h3>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-400 mb-4 leading-relaxed">
                {projects.vitech.desc}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-orange-500 text-sm">↗</span>
              </div>
            </CardContent>
          </Card>

          {/* Calculator */}
          <Card 
            className="bg-[#232526] border-[#232526] hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group shadow-lg"
            onClick={() => openProjectModal('calculator')}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <ImageWithLoading
                src={projects.calculator.image}
                alt={projects.calculator.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                containerClassName="w-full h-full"
              />
            </div>
            <CardHeader className="pb-3">
              <h3 className="text-xl font-bold text-white">
                {projects.calculator.title}
              </h3>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-400 mb-4 leading-relaxed">
                {projects.calculator.desc}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-orange-500 text-sm">↗</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={onViewProjects}
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-semibold px-8 py-4 text-lg"
          >
            View All Projects
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">Contact Me</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6 text-orange-500" />
              <span className="text-lg">vitecollabs@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6 text-orange-500" />
              <span className="text-lg">512-887-1825</span>
            </div>
          </div>

          {/* Professional Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
                         <a 
               href="https://www.upwork.com/freelancers/~010b907b38ab4e3efc?mp_source=share" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center justify-center space-x-3 p-4 bg-[#232526] rounded-lg hover:bg-[#2a2d2e] transition-colors duration-200 group"
             >
              <img 
                src="/images/upworklogo.svg" 
                alt="Upwork Logo" 
                className="h-8 w-8"
              />
              <span className="text-lg group-hover:text-orange-500 transition-colors duration-200">Upwork Profile</span>
            </a>
                         <a 
               href="https://www.linkedin.com/in/victor-ekeke-06b80915b/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center justify-center space-x-3 p-4 bg-[#232526] rounded-lg hover:bg-[#2a2d2e] transition-colors duration-200 group"
             >
              <img 
                src="/images/linkedin-svgrepo-com.svg" 
                alt="LinkedIn Logo" 
                className="h-8 w-8"
              />
              <span className="text-lg group-hover:text-orange-500 transition-colors duration-200">LinkedIn Profile</span>
            </a>
          </div>

          <div className="mb-8">
            <Button 
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-semibold px-8 py-4 text-lg"
              asChild
            >
              <a href="/VE_Resume.pdf" download="Victor_Ekeke_Resume.pdf">
                <Download className="h-5 w-5 mr-2" />
                Download CV
              </a>
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
                className="w-full px-4 py-3 bg-[#232526] border border-[#232526] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-[#232526] border border-[#232526] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows="6"
              required
              className="w-full px-4 py-3 bg-[#232526] border border-[#232526] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 resize-none"
            ></textarea>
                         <Button 
               type="submit"
               disabled={isSubmitting}
               className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
             >
               {isSubmitting ? 'Sending...' : 'Submit'}
             </Button>
          </form>
        </div>
      </section>

      {/* Project Modal Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl bg-[#181a1b] border-[#232526] text-white p-0 overflow-hidden">
          {selectedProject && (
            <>
              <div className="flex justify-between items-start p-6 pb-0">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-white">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className="lg:w-2/5 flex justify-center mb-4 lg:mb-0">
                  <ImageWithLoading
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 sm:h-64 lg:h-full object-cover rounded-lg"
                    containerClassName="w-full h-48 sm:h-64 lg:h-full"
                  />
                </div>
                <div className="lg:w-3/5 p-4 sm:p-6 text-center lg:text-left">
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
                      {selectedProject.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-[#232526] text-orange-500 border-[#232526]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {selectedProject.desc}
                    </p>
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    {selectedProject.link ? (
                      <Button 
                        asChild
                        className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 transition-all duration-200"
                      >
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                          Visit Live Project
                          <ArrowUpRight className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    ) : (
                      <Button 
                        disabled
                        className="bg-gray-500 text-gray-300 font-semibold px-6 py-3 cursor-not-allowed"
                      >
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={() => scrollToSection('home')}
          className="fixed bottom-8 right-8 z-50 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-white/30 animate-in fade-in duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
