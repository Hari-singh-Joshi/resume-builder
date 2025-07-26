"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Plus, X } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface FormData {
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
}

const roleSpecificFields = {
  "software-developer": {
    title: "Software Developer",
    skillCategories: ["Programming Languages", "Frameworks", "Databases", "Tools & Technologies"],
    projectFocus: "Software applications and systems you've built",
    summaryPlaceholder: "Passionate software developer with experience in full-stack development...",
  },
  "web-developer": {
    title: "Web Developer",
    skillCategories: ["Frontend Technologies", "Backend Technologies", "Databases", "Tools"],
    projectFocus: "Web applications and websites you've developed",
    summaryPlaceholder: "Creative web developer specializing in responsive and user-friendly websites...",
  },
  "data-analyst": {
    title: "Data Analyst",
    skillCategories: ["Programming Languages", "Data Analysis Tools", "Databases", "Visualization"],
    projectFocus: "Data analysis projects and insights you've generated",
    summaryPlaceholder: "Detail-oriented data analyst with expertise in extracting insights from complex datasets...",
  },
  "frontend-developer": {
    title: "Frontend Developer",
    skillCategories: ["JavaScript Frameworks", "CSS Frameworks", "Build Tools", "Design Tools"],
    projectFocus: "User interfaces and frontend applications you've created",
    summaryPlaceholder: "Frontend developer passionate about creating intuitive user experiences...",
  },
  "backend-developer": {
    title: "Backend Developer",
    skillCategories: ["Server Languages", "Databases", "Cloud Services", "APIs"],
    projectFocus: "Backend systems and APIs you've developed",
    summaryPlaceholder: "Backend developer experienced in building scalable server-side applications...",
  },
  "android-developer": {
    title: "Android Developer",
    skillCategories: ["Programming Languages", "Android Technologies", "Databases", "Tools"],
    projectFocus: "Mobile applications you've developed for Android",
    summaryPlaceholder: "Android developer with experience in creating user-friendly mobile applications...",
  },
  "networking-engineer": {
    title: "Networking Engineer",
    skillCategories: ["Network Protocols", "Hardware", "Security", "Monitoring Tools"],
    projectFocus: "Network infrastructure projects and implementations",
    summaryPlaceholder: "Networking engineer with expertise in designing and maintaining network infrastructure...",
  },
  "ai-ml-engineer": {
    title: "AI/ML Engineer",
    skillCategories: ["Programming Languages", "ML Frameworks", "Data Processing", "Cloud Platforms"],
    projectFocus: "AI/ML models and systems you've developed",
    summaryPlaceholder: "AI/ML engineer passionate about developing intelligent systems and solutions...",
  },
}

export default function FormPage({ params }: { params: { role: string } }) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      portfolio: "",
    },
    summary: "",
    skills: [],
    experience: [{ company: "", position: "", duration: "", description: "" }],
    education: [{ institution: "", degree: "", year: "", gpa: "" }],
    projects: [{ name: "", description: "", technologies: "", link: "" }],
    certifications: [],
    achievements: [],
  })

  const roleConfig = roleSpecificFields[params.role as keyof typeof roleSpecificFields]
  const [newSkill, setNewSkill] = useState("")
  const [newCertification, setNewCertification] = useState("")
  const [newAchievement, setNewAchievement] = useState("")

  const steps = [
    "Personal Information",
    "Professional Summary",
    "Skills",
    "Experience",
    "Education",
    "Projects",
    "Certifications & Achievements",
  ]

  const addSkill = () => {
    if (newSkill.trim()) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }))
      setNewSkill("")
    }
  }

  const removeSkill = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }))
  }

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [...prev.experience, { company: "", position: "", duration: "", description: "" }],
    }))
  }

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, { institution: "", degree: "", year: "", gpa: "" }],
    }))
  }

  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [...prev.projects, { name: "", description: "", technologies: "", link: "" }],
    }))
  }

  const addCertification = () => {
    if (newCertification.trim()) {
      setFormData((prev) => ({
        ...prev,
        certifications: [...prev.certifications, newCertification.trim()],
      }))
      setNewCertification("")
    }
  }

  const addAchievement = () => {
    if (newAchievement.trim()) {
      setFormData((prev) => ({
        ...prev,
        achievements: [...prev.achievements, newAchievement.trim()],
      }))
      setNewAchievement("")
    }
  }

  const handleSubmit = () => {
    localStorage.setItem("resumeData", JSON.stringify({ ...formData, role: params.role }))
    router.push("/templates")
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.personalInfo.fullName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, fullName: e.target.value },
                    }))
                  }
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.personalInfo.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, email: e.target.value },
                    }))
                  }
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  value={formData.personalInfo.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, phone: e.target.value },
                    }))
                  }
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  value={formData.personalInfo.location}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, location: e.target.value },
                    }))
                  }
                  placeholder="City, State"
                />
              </div>
              <div>
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input
                  id="linkedin"
                  value={formData.personalInfo.linkedin}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, linkedin: e.target.value },
                    }))
                  }
                  placeholder="linkedin.com/in/johndoe"
                />
              </div>
              <div>
                <Label htmlFor="github">GitHub Profile</Label>
                <Input
                  id="github"
                  value={formData.personalInfo.github}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, github: e.target.value },
                    }))
                  }
                  placeholder="github.com/johndoe"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="portfolio">Portfolio Website</Label>
              <Input
                id="portfolio"
                value={formData.personalInfo.portfolio}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, portfolio: e.target.value },
                  }))
                }
                placeholder="www.johndoe.com"
              />
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="summary">Professional Summary *</Label>
              <Textarea
                id="summary"
                value={formData.summary}
                onChange={(e) => setFormData((prev) => ({ ...prev, summary: e.target.value }))}
                placeholder={roleConfig?.summaryPlaceholder}
                rows={6}
                className="resize-none"
              />
              <p className="text-sm text-gray-500 mt-1">
                Write a compelling 3-4 sentence summary highlighting your experience and goals.
              </p>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <Label>Technical Skills *</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a skill..."
                  onKeyPress={(e) => e.key === "Enter" && addSkill()}
                />
                <Button onClick={addSkill} type="button">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {skill}
                    <X className="w-3 h-3 cursor-pointer hover:text-red-500" onClick={() => removeSkill(index)} />
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">Add skills relevant to {roleConfig?.title.toLowerCase()}</p>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label>Work Experience</Label>
              <p className="text-sm text-gray-500 mb-4">Add your work experience (most recent first)</p>
            </div>
            {formData.experience.map((exp, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Company *</Label>
                      <Input
                        value={exp.company}
                        onChange={(e) => {
                          const newExp = [...formData.experience]
                          newExp[index].company = e.target.value
                          setFormData((prev) => ({ ...prev, experience: newExp }))
                        }}
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <Label>Position *</Label>
                      <Input
                        value={exp.position}
                        onChange={(e) => {
                          const newExp = [...formData.experience]
                          newExp[index].position = e.target.value
                          setFormData((prev) => ({ ...prev, experience: newExp }))
                        }}
                        placeholder="Job Title"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Duration *</Label>
                      <Input
                        value={exp.duration}
                        onChange={(e) => {
                          const newExp = [...formData.experience]
                          newExp[index].duration = e.target.value
                          setFormData((prev) => ({ ...prev, experience: newExp }))
                        }}
                        placeholder="Jan 2023 - Present"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Description *</Label>
                      <Textarea
                        value={exp.description}
                        onChange={(e) => {
                          const newExp = [...formData.experience]
                          newExp[index].description = e.target.value
                          setFormData((prev) => ({ ...prev, experience: newExp }))
                        }}
                        placeholder="Describe your responsibilities and achievements..."
                        rows={3}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button onClick={addExperience} variant="outline" className="w-full bg-transparent">
              <Plus className="w-4 h-4 mr-2" />
              Add Experience
            </Button>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <Label>Education</Label>
              <p className="text-sm text-gray-500 mb-4">Add your educational background</p>
            </div>
            {formData.education.map((edu, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Institution *</Label>
                      <Input
                        value={edu.institution}
                        onChange={(e) => {
                          const newEdu = [...formData.education]
                          newEdu[index].institution = e.target.value
                          setFormData((prev) => ({ ...prev, education: newEdu }))
                        }}
                        placeholder="University Name"
                      />
                    </div>
                    <div>
                      <Label>Degree *</Label>
                      <Input
                        value={edu.degree}
                        onChange={(e) => {
                          const newEdu = [...formData.education]
                          newEdu[index].degree = e.target.value
                          setFormData((prev) => ({ ...prev, education: newEdu }))
                        }}
                        placeholder="Bachelor of Science in Computer Science"
                      />
                    </div>
                    <div>
                      <Label>Year *</Label>
                      <Input
                        value={edu.year}
                        onChange={(e) => {
                          const newEdu = [...formData.education]
                          newEdu[index].year = e.target.value
                          setFormData((prev) => ({ ...prev, education: newEdu }))
                        }}
                        placeholder="2020-2024"
                      />
                    </div>
                    <div>
                      <Label>GPA (Optional)</Label>
                      <Input
                        value={edu.gpa}
                        onChange={(e) => {
                          const newEdu = [...formData.education]
                          newEdu[index].gpa = e.target.value
                          setFormData((prev) => ({ ...prev, education: newEdu }))
                        }}
                        placeholder="3.8/4.0"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button onClick={addEducation} variant="outline" className="w-full bg-transparent">
              <Plus className="w-4 h-4 mr-2" />
              Add Education
            </Button>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <Label>Projects</Label>
              <p className="text-sm text-gray-500 mb-4">{roleConfig?.projectFocus}</p>
            </div>
            {formData.projects.map((project, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Project Name *</Label>
                        <Input
                          value={project.name}
                          onChange={(e) => {
                            const newProjects = [...formData.projects]
                            newProjects[index].name = e.target.value
                            setFormData((prev) => ({ ...prev, projects: newProjects }))
                          }}
                          placeholder="Project Name"
                        />
                      </div>
                      <div>
                        <Label>Technologies Used *</Label>
                        <Input
                          value={project.technologies}
                          onChange={(e) => {
                            const newProjects = [...formData.projects]
                            newProjects[index].technologies = e.target.value
                            setFormData((prev) => ({ ...prev, projects: newProjects }))
                          }}
                          placeholder="React, Node.js, MongoDB"
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Description *</Label>
                      <Textarea
                        value={project.description}
                        onChange={(e) => {
                          const newProjects = [...formData.projects]
                          newProjects[index].description = e.target.value
                          setFormData((prev) => ({ ...prev, projects: newProjects }))
                        }}
                        placeholder="Describe what the project does and your role..."
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label>Project Link (Optional)</Label>
                      <Input
                        value={project.link}
                        onChange={(e) => {
                          const newProjects = [...formData.projects]
                          newProjects[index].link = e.target.value
                          setFormData((prev) => ({ ...prev, projects: newProjects }))
                        }}
                        placeholder="https://github.com/username/project"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button onClick={addProject} variant="outline" className="w-full bg-transparent">
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div>
              <Label>Certifications</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  value={newCertification}
                  onChange={(e) => setNewCertification(e.target.value)}
                  placeholder="Add a certification..."
                  onKeyPress={(e) => e.key === "Enter" && addCertification()}
                />
                <Button onClick={addCertification} type="button">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {cert}
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-red-500"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          certifications: prev.certifications.filter((_, i) => i !== index),
                        }))
                      }}
                    />
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <Label>Achievements</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  value={newAchievement}
                  onChange={(e) => setNewAchievement(e.target.value)}
                  placeholder="Add an achievement..."
                  onKeyPress={(e) => e.key === "Enter" && addAchievement()}
                />
                <Button onClick={addAchievement} type="button">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.achievements.map((achievement, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {achievement}
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-red-500"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          achievements: prev.achievements.filter((_, i) => i !== index),
                        }))
                      }}
                    />
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Job Roles
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{roleConfig?.title} Resume Form</h1>
          <p className="text-gray-600">Fill out the form to create your professional resume</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Step {currentStep + 1} of {steps.length}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-blue-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex justify-between mt-2">
              {steps.map((step, index) => (
                <span
                  key={step}
                  className={`text-xs ${index <= currentStep ? "text-blue-600 font-medium" : "text-gray-400"}`}
                >
                  {step}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{steps[currentStep]}</CardTitle>
              </CardHeader>
              <CardContent>{renderStep()}</CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                Generate Resume
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}>
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
