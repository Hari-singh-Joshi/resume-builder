"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react"
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

const templateStyles = {
  modern: {
    primary: "text-blue-600",
    secondary: "text-blue-500",
    accent: "bg-blue-500",
    border: "border-blue-200",
    bg: "bg-blue-50",
  },
  classic: {
    primary: "text-gray-800",
    secondary: "text-gray-600",
    accent: "bg-gray-600",
    border: "border-gray-300",
    bg: "bg-gray-50",
  },
  creative: {
    primary: "text-purple-600",
    secondary: "text-purple-500",
    accent: "bg-purple-500",
    border: "border-purple-200",
    bg: "bg-purple-50",
  },
  minimal: {
    primary: "text-green-600",
    secondary: "text-green-500",
    accent: "bg-green-500",
    border: "border-green-200",
    bg: "bg-green-50",
  },
  tech: {
    primary: "text-orange-600",
    secondary: "text-orange-500",
    accent: "bg-orange-500",
    border: "border-orange-200",
    bg: "bg-orange-50",
  },
}

export default function PreviewPage({ params }: { params: { template: string } }) {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null)
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

  const generatePDF = async () => {
    setIsGenerating(true)

    try {
      const result = await generateAndDownloadPDF(resumeData, params.template)

      if (result.success) {
        // Show success message or toast
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

  if (!resumeData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Loading...</h2>
          <p className="text-gray-600">Please wait while we load your resume preview.</p>
        </div>
      </div>
    )
  }

  const style = templateStyles[params.template as keyof typeof templateStyles] || templateStyles.modern

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex justify-between items-center"
        >
          <div>
            <Link href="/templates" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Templates
            </Link>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Resume Preview</h1>
            <p className="text-gray-600">Preview your resume with the selected template</p>
          </div>
          <Button onClick={generatePDF} disabled={isGenerating} className="bg-green-600 hover:bg-green-700">
            {isGenerating ? (
              <>
                <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Generating PDF...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </>
            )}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white shadow-2xl">
            <CardContent className="p-8">
              {/* Header */}
              <div className="mb-8">
                <h1 className={`text-4xl font-bold ${style.primary} mb-2`}>{resumeData.personalInfo.fullName}</h1>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    {resumeData.personalInfo.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    {resumeData.personalInfo.phone}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {resumeData.personalInfo.location}
                  </div>
                  {resumeData.personalInfo.linkedin && (
                    <div className="flex items-center gap-1">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </div>
                  )}
                  {resumeData.personalInfo.github && (
                    <div className="flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      GitHub
                    </div>
                  )}
                  {resumeData.personalInfo.portfolio && (
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      Portfolio
                    </div>
                  )}
                </div>
              </div>

              {/* Professional Summary */}
              {resumeData.summary && (
                <div className="mb-8">
                  <h2 className={`text-xl font-bold ${style.primary} mb-3 pb-1 border-b-2 ${style.border}`}>
                    Professional Summary
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
                </div>
              )}

              {/* Skills */}
              {resumeData.skills.length > 0 && (
                <div className="mb-8">
                  <h2 className={`text-xl font-bold ${style.primary} mb-3 pb-1 border-b-2 ${style.border}`}>
                    Technical Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className={`${style.bg} ${style.secondary}`}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience */}
              {resumeData.experience.some((exp) => exp.company) && (
                <div className="mb-8">
                  <h2 className={`text-xl font-bold ${style.primary} mb-3 pb-1 border-b-2 ${style.border}`}>
                    Professional Experience
                  </h2>
                  <div className="space-y-6">
                    {resumeData.experience
                      .filter((exp) => exp.company)
                      .map((exp, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800">{exp.position}</h3>
                              <p className={`font-medium ${style.secondary}`}>{exp.company}</p>
                            </div>
                            <span className="text-sm text-gray-500 font-medium">{exp.duration}</span>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Projects */}
              {resumeData.projects.some((project) => project.name) && (
                <div className="mb-8">
                  <h2 className={`text-xl font-bold ${style.primary} mb-3 pb-1 border-b-2 ${style.border}`}>
                    Projects
                  </h2>
                  <div className="space-y-4">
                    {resumeData.projects
                      .filter((project) => project.name)
                      .map((project, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                            {project.link && <span className="text-sm text-blue-600">View Project</span>}
                          </div>
                          <p className={`text-sm font-medium ${style.secondary} mb-2`}>
                            Technologies: {project.technologies}
                          </p>
                          <p className="text-gray-700 leading-relaxed">{project.description}</p>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Education */}
              {resumeData.education.some((edu) => edu.institution) && (
                <div className="mb-8">
                  <h2 className={`text-xl font-bold ${style.primary} mb-3 pb-1 border-b-2 ${style.border}`}>
                    Education
                  </h2>
                  <div className="space-y-4">
                    {resumeData.education
                      .filter((edu) => edu.institution)
                      .map((edu, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                              <p className={`font-medium ${style.secondary}`}>{edu.institution}</p>
                              {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                            </div>
                            <span className="text-sm text-gray-500 font-medium">{edu.year}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {resumeData.certifications.length > 0 && (
                <div className="mb-8">
                  <h2 className={`text-xl font-bold ${style.primary} mb-3 pb-1 border-b-2 ${style.border}`}>
                    Certifications
                  </h2>
                  <ul className="list-disc list-inside space-y-1">
                    {resumeData.certifications.map((cert, index) => (
                      <li key={index} className="text-gray-700">
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Achievements */}
              {resumeData.achievements.length > 0 && (
                <div className="mb-8">
                  <h2 className={`text-xl font-bold ${style.primary} mb-3 pb-1 border-b-2 ${style.border}`}>
                    Achievements
                  </h2>
                  <ul className="list-disc list-inside space-y-1">
                    {resumeData.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-700">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
