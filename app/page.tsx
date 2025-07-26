"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, Globe, Smartphone, Network, Brain, Server, Monitor } from "lucide-react"
import { useRouter } from "next/navigation"

const jobRoles = [
  {
    id: "software-developer",
    title: "Software Developer",
    description: "Full-stack development with multiple programming languages",
    icon: Code,
    color: "bg-blue-500",
    skills: ["Programming Languages", "Frameworks", "Databases", "Version Control"],
  },
  {
    id: "web-developer",
    title: "Web Developer",
    description: "Frontend and backend web development",
    icon: Globe,
    color: "bg-green-500",
    skills: ["HTML/CSS", "JavaScript", "React/Vue", "Node.js"],
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description: "Data analysis, visualization, and insights",
    icon: Database,
    color: "bg-purple-500",
    skills: ["Python/R", "SQL", "Data Visualization", "Statistics"],
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    description: "User interface and user experience development",
    icon: Monitor,
    color: "bg-pink-500",
    skills: ["React/Angular", "CSS/SASS", "JavaScript", "UI/UX"],
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    description: "Server-side development and API design",
    icon: Server,
    color: "bg-orange-500",
    skills: ["APIs", "Databases", "Cloud Services", "System Design"],
  },
  {
    id: "android-developer",
    title: "Android Developer",
    description: "Mobile application development for Android",
    icon: Smartphone,
    color: "bg-emerald-500",
    skills: ["Kotlin/Java", "Android SDK", "Firebase", "Material Design"],
  },
  {
    id: "networking-engineer",
    title: "Networking Engineer",
    description: "Network infrastructure and security",
    icon: Network,
    color: "bg-cyan-500",
    skills: ["Network Protocols", "Security", "Cisco/Juniper", "Troubleshooting"],
  },
  {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    description: "Artificial Intelligence and Machine Learning",
    icon: Brain,
    color: "bg-indigo-500",
    skills: ["Python", "TensorFlow/PyTorch", "Deep Learning", "MLOps"],
  },
]

export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const router = useRouter()

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId)
    setTimeout(() => {
      router.push(`/form/${roleId}`)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Hari Resume Builder Pro
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create professional resumes tailored to your specific job role with our intelligent form system
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Choose Your Job Role</h2>
          <p className="text-gray-600">Select your target position to get a customized resume form</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {jobRoles.map((role, index) => {
            const IconComponent = role.icon
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                    selectedRole === role.id ? "border-blue-500 shadow-lg" : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleRoleSelect(role.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${role.color}`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-lg">{role.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {role.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full group" variant={selectedRole === role.id ? "default" : "outline"}>
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Resume Builder Pro?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Role-Specific Forms</h4>
                <p className="text-gray-600 text-sm">Customized forms based on your job role</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Monitor className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">5 Professional Templates</h4>
                <p className="text-gray-600 text-sm">Choose from multiple resume designs</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ArrowRight className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Instant Download</h4>
                <p className="text-gray-600 text-sm">Download your resume immediately</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
