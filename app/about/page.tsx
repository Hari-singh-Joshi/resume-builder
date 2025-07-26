"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Zap, Heart, Globe } from "lucide-react"

const stats = [
  { label: "Resumes Created", value: "50,000+", icon: Users },
  { label: "Job Roles Supported", value: "15+", icon: Target },
  { label: "Template Designs", value: "5", icon: Award },
  { label: "Success Rate", value: "94%", icon: Zap },
]

const values = [
  {
    icon: Heart,
    title: "User-Centric Design",
    description:
      "We prioritize user experience in every feature we build, ensuring our platform is intuitive and accessible.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We continuously innovate to provide cutting-edge resume building tools that adapt to modern hiring practices.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "Our platform is designed to be accessible to everyone, regardless of their technical background or experience level.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We maintain the highest standards in template design and ensure all resumes are ATS-friendly and professional.",
  },
]

const team = [
  {
    name: "Hari Singh Joshi",
    role: "CEO & Founder",
    bio: "I am a Software Developer with a passion for creating tools that empower job seekers.",
    image: "/bg_1.png",
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Hari Resume Builder Pro
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize professional resume creation, helping job seekers across all industries
            create compelling resumes that get noticed by employers and pass through ATS systems.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} className="text-center">
                <CardContent className="pt-6">
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Resume Builder Pro was born out of frustration with the traditional resume creation process. Our
                  founders, having worked in HR and recruitment for years, witnessed countless talented individuals
                  struggle to present their skills effectively on paper.
                </p>
                <p className="mb-4">
                  We realized that different job roles require different approaches to resume writing. A software
                  developer's resume should highlight technical skills and projects differently than a data analyst's
                  resume. This insight led us to create the first role-specific resume builder that adapts its form and
                  suggestions based on your target position.
                </p>
                <p>
                  Today, we're proud to have helped over 50,000 professionals create resumes that not only look great
                  but also perform well in applicant tracking systems (ATS) and catch the attention of hiring managers.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </motion.div>

        <div
  className={`${
    team.length === 1
      ? "flex justify-center"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
  }`}
>
  {team.map((member, index) => (
    <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
        <Badge variant="secondary" className="mb-3">
          {member.role}
        </Badge>
        <p className="text-sm text-gray-600">{member.bio}</p>
      </CardContent>
    </Card>
  ))}
</div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                To empower every job seeker with the tools and guidance they need to create professional, ATS-optimized
                resumes that showcase their unique value proposition and help them land their dream jobs.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
