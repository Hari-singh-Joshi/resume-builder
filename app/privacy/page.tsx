"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, UserCheck, Database, Globe } from "lucide-react"

const sections = [
  {
    id: "information-collection",
    title: "Information We Collect",
    icon: Database,
    content: [
      {
        subtitle: "Personal Information",
        text: "When you use Resume Builder Pro, we collect personal information that you voluntarily provide, including your name, email address, phone number, work experience, education, skills, and other resume-related information.",
      },
      {
        subtitle: "Usage Data",
        text: "We automatically collect information about how you interact with our service, including your IP address, browser type, pages visited, time spent on pages, and other analytics data.",
      },
      {
        subtitle: "Device Information",
        text: "We may collect information about the device you use to access our service, including device type, operating system, and unique device identifiers.",
      },
    ],
  },
  {
    id: "information-use",
    title: "How We Use Your Information",
    icon: UserCheck,
    content: [
      {
        subtitle: "Service Provision",
        text: "We use your information to provide, maintain, and improve Resume Builder Pro, including generating your resume, saving your progress, and customizing your experience.",
      },
      {
        subtitle: "Communication",
        text: "We may use your contact information to send you service-related notifications, updates, and respond to your inquiries.",
      },
      {
        subtitle: "Analytics and Improvement",
        text: "We analyze usage patterns to understand how our service is used and to improve functionality, user experience, and develop new features.",
      },
    ],
  },
  {
    id: "information-sharing",
    title: "Information Sharing and Disclosure",
    icon: Globe,
    content: [
      {
        subtitle: "No Sale of Personal Data",
        text: "We do not sell, trade, or rent your personal information to third parties for marketing purposes.",
      },
      {
        subtitle: "Service Providers",
        text: "We may share your information with trusted third-party service providers who assist us in operating our service, such as hosting providers and analytics services.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information if required by law, court order, or to protect our rights, property, or safety, or that of our users or others.",
      },
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    icon: Lock,
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      },
      {
        subtitle: "Encryption",
        text: "All data transmission is encrypted using industry-standard SSL/TLS protocols. Your resume data is stored securely using encryption at rest.",
      },
      {
        subtitle: "Access Controls",
        text: "We maintain strict access controls and regularly review our security practices to ensure your data remains protected.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    icon: Eye,
    content: [
      {
        subtitle: "Retention Period",
        text: "We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy.",
      },
      {
        subtitle: "Account Deletion",
        text: "You may request deletion of your account and associated data at any time by contacting us. We will delete your information within 30 days of your request.",
      },
      {
        subtitle: "Legal Obligations",
        text: "We may retain certain information for longer periods if required by law or for legitimate business purposes such as fraud prevention.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights and Choices",
    icon: Shield,
    content: [
      {
        subtitle: "Access and Correction",
        text: "You have the right to access, update, or correct your personal information at any time through your account settings or by contacting us.",
      },
      {
        subtitle: "Data Portability",
        text: "You can request a copy of your personal data in a structured, machine-readable format.",
      },
      {
        subtitle: "Opt-Out",
        text: "You can opt out of non-essential communications by following the unsubscribe instructions in our emails or contacting us directly.",
      },
    ],
  },
]

export default function PrivacyPage() {
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
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Your privacy is important to us. This policy explains how Resume Builder Pro collects, uses, and protects
            your personal information.
          </p>
          <Badge variant="secondary" className="text-sm">
            Last updated: January 2024
          </Badge>
        </motion.div>

        {/* Quick Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Privacy at a Glance</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Lock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800 mb-1">Secure by Design</h3>
                  <p className="text-sm text-gray-600">
                    Your data is encrypted and protected with industry-standard security measures.
                  </p>
                </div>
                <div>
                  <UserCheck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800 mb-1">You're in Control</h3>
                  <p className="text-sm text-gray-600">
                    Access, update, or delete your personal information at any time.
                  </p>
                </div>
                <div>
                  <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800 mb-1">No Data Sales</h3>
                  <p className="text-sm text-gray-600">We never sell your personal information to third parties.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="mb-8"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-gray-800">
                      <Icon className="w-6 h-6 text-blue-600 mr-3" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.subtitle}</h3>
                          <p className="text-gray-700 leading-relaxed">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gray-50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions About Your Privacy?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                If you have any questions about this Privacy Policy or how we handle your personal information, please
                don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@resumebuilderpro.com"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Contact Privacy Team
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  General Contact
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
