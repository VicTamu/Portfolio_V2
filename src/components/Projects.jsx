import { useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ImageWithLoading } from "@/components/ImageWithLoading"
import { X, ArrowUpRight } from 'lucide-react'

const projects = {
  pamperedByYuni: {
    title: 'Pampered by Yuni',
    image: './images/Pampered by Yuni Hero.jpg',
    tags: ['Front-end', 'Beauty Brand', 'Wellness'],
    desc: 'Pampered By Yuni is a self-care beauty brand focused on healing through intentional, personalized wellness.',
    link: 'https://pamperedbyyuni.com'
  },
  vitech: {
    title: 'ViTech Accessories',
    image: './images/ViTech Landing Page.jpg',
    tags: ['Front-end', 'E-commerce', 'Responsive'],
    desc: 'A modern e-commerce landing page showcasing tech accessories. Features responsive design and interactive elements.',
    link: 'https://victamu.github.io/ViTech/'
  },
  calculator: {
    title: 'Simple & Scientific Calculator',
    image: './images/Scientific Calculator.jpg',
    tags: ['Front-end', 'Background Animation', 'JavaScript'],
    desc: 'A feature-rich calculator that handles both basic arithmetic and complex scientific calculations. Built with HTML, CSS, and JavaScript.',
    link: 'https://victamu.github.io/Calculator/index.html'
  }
}

export function Projects({ onBack }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const openProjectModal = (projectKey) => {
    setSelectedProject(projects[projectKey])
    setIsDialogOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#181a1b] text-white relative overflow-x-hidden" role="main" aria-label="Victor Ekeke Projects">
      {/* Skip to main content link */}
      <a 
        href="#projects-heading" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-500 text-black px-4 py-2 rounded-md font-semibold z-50"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('projects-heading')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        Skip to main content
      </a>
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-500"></div>
      </div>

      <nav className="fixed top-0 left-0 w-full z-50 bg-[#181a1b]/90 backdrop-blur-md border-b border-[#232526]/50" role="navigation" aria-label="Projects navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center">
              <button 
                onClick={onBack}
                className="text-2xl font-bold hover:text-orange-500 transition-colors duration-200 cursor-pointer"
                aria-label="Victor Ekeke - Back to portfolio"
              >
                <span className="text-orange-500">V</span>ictor
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={onBack}
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
                aria-label="Return to main portfolio page"
              >
                ← Back to Portfolio
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24" aria-labelledby="projects-heading">
        <div className="text-center mb-12 sm:mb-16">
          <h1 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Web Projects and Development Work</h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Some of the fun and interesting projects that I've developed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          <Card 
            className="bg-[#232526] border-[#232526] hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group shadow-lg min-h-[420px]"
            onClick={() => openProjectModal('pamperedByYuni')}
            role="button"
            tabIndex={0}
            aria-label="View Pampered by Yuni project details"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                openProjectModal('pamperedByYuni')
              }
            }}
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

          <Card 
            className="bg-[#232526] border-[#232526] hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group shadow-lg min-h-[420px]"
            onClick={() => openProjectModal('vitech')}
            role="button"
            tabIndex={0}
            aria-label="View ViTech Accessories project details"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                openProjectModal('vitech')
              }
            }}
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

          <Card 
            className="bg-[#232526] border-[#232526] hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group shadow-lg min-h-[420px]"
            onClick={() => openProjectModal('calculator')}
            role="button"
            tabIndex={0}
            aria-label="View Calculator project details"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                openProjectModal('calculator')
              }
            }}
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
      </main>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl bg-[#181a1b] border-[#232526] text-white p-0 overflow-hidden" aria-labelledby="project-dialog-title">
          {selectedProject && (
            <>
              <div className="flex justify-between items-start p-6 pb-0">
                <DialogHeader>
                  <DialogTitle id="project-dialog-title" className="text-3xl font-bold text-white">
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
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${selectedProject.title} live project (opens in new tab)`}>
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
    </div>
  )
}
