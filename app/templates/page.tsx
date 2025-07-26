"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Eye } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { generateAndDownloadPDF } from "@/components/pdf-generator"

interface ResumeData {
  personalInfo: {
    fullName: string
    email: string
    phone: string
    location: string
    linkedin: string
    github: string
    portfolio: string
  }
  summary: string
  skills: string[]
  experience: Array<{
    company: string
    position: string
    duration: string
    description: string
  }>
  education: Array<{
    institution: string
    degree: string
    year: string
    gpa: string
  }>
  projects: Array<{
    name: string
    description: string
    technologies: string
    link: string
  }>
  certifications: string[]
  achievements: string[]
  role: string
}

const templates = [
  {
    id: "modern",
    name: "Modern Professional",
    description: "Clean and contemporary design with accent colors",
    color: "bg-blue-500",
    preview: "A sleek design with blue accents and modern typography",
  },
  {
    id: "classic",
    name: "Classic Traditional",
    description: "Traditional layout perfect for conservative industries",
    color: "bg-gray-600",
    preview: "Professional black and white design with traditional formatting",
  },
  {
    id: "creative",
    name: "Creative Edge",
    description: "Bold design for creative and tech professionals",
    color: "bg-purple-500",
    preview: "Eye-catching design with purple accents and creative layout",
  },
  {
    id: "minimal",
    name: "Minimal Clean",
    description: "Minimalist approach focusing on content",
    color: "bg-green-500",
    preview: "Clean, minimal design with plenty of white space",
  },
  {
    id: "tech",
    name: "Tech Focused",
    description: "Perfect for software developers and engineers",
    color: "bg-orange-500",
    preview: "Tech-oriented design with orange accents and code-friendly fonts",
  },
]

export default function TemplatesPage() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null)
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const data = localStorage.getItem("resumeData")
    if (data) {
      setResumeData(JSON.parse(data))
    } else {
      router.push("/")
    }
  }, [router])

  const generateResume = async (templateId: string) => {
    setIsGenerating(true)
    setSelectedTemplate(templateId)

    try {
      const result = await generateAndDownloadPDF(resumeData, templateId)

      if (result.success) {
        // Show success message
        console.log(result.message)
      } else {
        // Show error message
        alert(result.message)
      }
    } catch (error) {
      console.error("PDF generation failed:", error)
      alert("Failed to generate PDF. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const previewTemplate = (templateId: string) => {
    localStorage.setItem("selectedTemplate", templateId)
    router.push(`/preview/${templateId}`)
  }

  if (!resumeData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Loading...</h2>
          <p className="text-gray-600">Please wait while we load your resume data.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Resume Template</h1>
          <p className="text-gray-600">
            Select from our professional templates designed for {resumeData.role.replace("-", " ")} roles
          </p>
        </motion.div>

        <div className="mb-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Resume Preview
                <Badge variant="secondary">{resumeData.personalInfo.fullName}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Contact</h4>
                  <p>{resumeData.personalInfo.email}</p>
                  <p>{resumeData.personalInfo.phone}</p>
                  <p>{resumeData.personalInfo.location}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {resumeData.skills.slice(0, 5).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {resumeData.skills.length > 5 && (
                      <Badge variant="outline" className="text-xs">
                        +{resumeData.skills.length - 5} more
                      </Badge>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Experience</h4>
                  <p>{resumeData.experience.length} positions</p>
                  <p>{resumeData.projects.length} projects</p>
                  <p>{resumeData.education.length} education entries</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-4 h-4 rounded-full ${template.color}`} />
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                  </div>
                  <p className="text-sm text-gray-600">{template.description}</p>
                </CardHeader>
                <CardContent>
                  <div className={`w-full h-32 ${template.color} rounded-lg mb-4 flex items-center justify-center`}>
                    <div className="text-white text-center p-4">
                      <div className="w-full h-2 bg-white/30 rounded mb-2" />
                      <div className="w-3/4 h-2 bg-white/30 rounded mb-2" />
                      <div className="w-1/2 h-2 bg-white/30 rounded" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">{template.preview}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => previewTemplate(template.id)} className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => generateResume(template.id)}
                      disabled={isGenerating && selectedTemplate === template.id}
                      className="flex-1"
                    >
                      {isGenerating && selectedTemplate === template.id ? (
                        <>
                          <div className="w-4 h-4 mr-1 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Need Help Choosing?</h3>
              <p className="text-gray-600 mb-4">
                Each template is optimized for different industries and career levels. Preview them to see which one
                best represents your professional brand.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">ATS-Friendly</Badge>
                <Badge variant="secondary">Professional Formatting</Badge>
                <Badge variant="secondary">Instant Download</Badge>
                <Badge variant="secondary">Multiple Formats</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
