"use client"

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

const templateColors = {
  modern: { primary: "#2563eb", secondary: "#3b82f6", accent: "#1e40af" },
  classic: { primary: "#374151", secondary: "#4b5563", accent: "#1f2937" },
  creative: { primary: "#7c3aed", secondary: "#8b5cf6", accent: "#6d28d9" },
  minimal: { primary: "#059669", secondary: "#10b981", accent: "#047857" },
  tech: { primary: "#ea580c", secondary: "#f97316", accent: "#c2410c" },
}

// HTML to PDF conversion using browser's print functionality
const generateHTMLContent = (data: ResumeData, template: string) => {
  const colors = templateColors[template as keyof typeof templateColors] || templateColors.modern

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${data.personalInfo.fullName} - Resume</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          line-height: 1.4;
          color: #374151;
          background: white;
          padding: 30px;
          max-width: 210mm;
          margin: 0 auto;
        }
        
        @media print {
          body {
            padding: 20px;
            font-size: 10px;
          }
          
          .page-break {
            page-break-before: always;
          }
          
          .no-break {
            page-break-inside: avoid;
          }
        }
        
        .header {
          border-bottom: 2px solid ${colors.primary};
          padding-bottom: 12px;
          margin-bottom: 20px;
        }
        
        .name {
          font-size: 28px;
          font-weight: 700;
          color: ${colors.primary};
          margin-bottom: 8px;
        }
        
        .contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 10px;
          color: #6b7280;
        }
        
        .section {
          margin-bottom: 18px;
        }
        
        .section-title {
          font-size: 14px;
          font-weight: 700;
          color: ${colors.primary};
          margin-bottom: 8px;
          padding-bottom: 3px;
          border-bottom: 1px solid ${colors.secondary};
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .summary {
          text-align: justify;
          line-height: 1.5;
        }
        
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        
        .skill {
          background-color: ${colors.secondary};
          color: white;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 9px;
          font-weight: 600;
        }
        
        .two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-top: 10px;
        }
        
        .experience-item, .project-item {
          margin-bottom: 12px;
          page-break-inside: avoid;
        }
        
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 4px;
        }
        
        .job-title {
          font-size: 12px;
          font-weight: 600;
          color: #1f2937;
        }
        
        .company {
          font-size: 11px;
          font-weight: 600;
          color: ${colors.secondary};
        }
        
        .duration {
          font-size: 9px;
          color: #6b7280;
          font-weight: 600;
          white-space: nowrap;
        }
        
        .description {
          font-size: 10px;
          line-height: 1.4;
          text-align: justify;
          margin-top: 3px;
        }
        
        .education-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
          page-break-inside: avoid;
        }
        
        .degree {
          font-size: 11px;
          font-weight: 600;
          color: #1f2937;
        }
        
        .institution {
          font-size: 10px;
          color: ${colors.secondary};
          font-weight: 600;
        }
        
        .year {
          font-size: 9px;
          color: #6b7280;
          font-weight: 600;
          white-space: nowrap;
        }
        
        .project-name {
          font-size: 11px;
          font-weight: 600;
          color: #1f2937;
        }
        
        .technologies {
          font-size: 9px;
          color: ${colors.secondary};
          font-weight: 600;
          margin: 2px 0;
        }
        
        .list-item {
          font-size: 10px;
          margin-bottom: 3px;
          padding-left: 12px;
          position: relative;
        }
        
        .list-item:before {
          content: "•";
          position: absolute;
          left: 0;
          color: ${colors.primary};
          font-weight: bold;
        }
        
        @media screen and (max-width: 768px) {
          .two-column {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .contact-info {
            flex-direction: column;
            gap: 8px;
          }
          
          .job-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .education-item {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      </style>
    </head>
    <body>
      <!-- Header -->
      <div class="header">
        <div class="name">${data.personalInfo.fullName}</div>
        <div class="contact-info">
          <span>${data.personalInfo.email}</span>
          <span>${data.personalInfo.phone}</span>
          <span>${data.personalInfo.location}</span>
          ${data.personalInfo.linkedin ? "<span>LinkedIn Profile</span>" : ""}
          ${data.personalInfo.github ? "<span>GitHub Profile</span>" : ""}
          ${data.personalInfo.portfolio ? "<span>Portfolio Website</span>" : ""}
        </div>
      </div>

      <!-- Professional Summary -->
      ${
        data.summary
          ? `
        <div class="section">
          <div class="section-title">Professional Summary</div>
          <div class="summary">${data.summary}</div>
        </div>
      `
          : ""
      }

      <!-- Skills -->
      ${
        data.skills.length > 0
          ? `
        <div class="section">
          <div class="section-title">Technical Skills</div>
          <div class="skills-container">
            ${data.skills.map((skill) => `<span class="skill">${skill}</span>`).join("")}
          </div>
        </div>
      `
          : ""
      }

      <!-- Two Column Layout -->
      <div class="two-column">
        <!-- Left Column -->
        <div class="left-column">
          <!-- Experience -->
          ${
            data.experience.some((exp) => exp.company)
              ? `
            <div class="section">
              <div class="section-title">Professional Experience</div>
              ${data.experience
                .filter((exp) => exp.company)
                .map(
                  (exp) => `
                <div class="experience-item no-break">
                  <div class="job-header">
                    <div>
                      <div class="job-title">${exp.position}</div>
                      <div class="company">${exp.company}</div>
                    </div>
                    <div class="duration">${exp.duration}</div>
                  </div>
                  <div class="description">${exp.description}</div>
                </div>
              `,
                )
                .join("")}
            </div>
          `
              : ""
          }

          <!-- Projects -->
          ${
            data.projects.some((project) => project.name)
              ? `
            <div class="section">
              <div class="section-title">Projects</div>
              ${data.projects
                .filter((project) => project.name)
                .slice(0, 3)
                .map(
                  (project) => `
                <div class="project-item no-break">
                  <div class="project-name">${project.name}</div>
                  <div class="technologies">Technologies: ${project.technologies}</div>
                  <div class="description">${project.description}</div>
                </div>
              `,
                )
                .join("")}
            </div>
          `
              : ""
          }
        </div>

        <!-- Right Column -->
        <div class="right-column">
          <!-- Education -->
          ${
            data.education.some((edu) => edu.institution)
              ? `
            <div class="section">
              <div class="section-title">Education</div>
              ${data.education
                .filter((edu) => edu.institution)
                .map(
                  (edu) => `
                <div class="education-item no-break">
                  <div>
                    <div class="degree">${edu.degree}</div>
                    <div class="institution">${edu.institution}</div>
                    ${edu.gpa ? `<div class="description">GPA: ${edu.gpa}</div>` : ""}
                  </div>
                  <div class="year">${edu.year}</div>
                </div>
              `,
                )
                .join("")}
            </div>
          `
              : ""
          }

          <!-- Certifications -->
          ${
            data.certifications.length > 0
              ? `
            <div class="section">
              <div class="section-title">Certifications</div>
              ${data.certifications
                .slice(0, 5)
                .map(
                  (cert) => `
                <div class="list-item">${cert}</div>
              `,
                )
                .join("")}
            </div>
          `
              : ""
          }

          <!-- Achievements -->
          ${
            data.achievements.length > 0
              ? `
            <div class="section">
              <div class="section-title">Achievements</div>
              ${data.achievements
                .slice(0, 4)
                .map(
                  (achievement) => `
                <div class="list-item">${achievement}</div>
              `,
                )
                .join("")}
            </div>
          `
              : ""
          }
        </div>
      </div>
    </body>
    </html>
  `
}

// Convert HTML to PDF using browser's print functionality
const htmlToPDF = async (htmlContent: string, filename: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      // Create a new window for printing
      const printWindow = window.open("", "_blank", "width=800,height=600")

      if (!printWindow) {
        reject(new Error("Unable to open print window. Please allow popups."))
        return
      }

      // Write HTML content to the new window
      printWindow.document.write(htmlContent)
      printWindow.document.close()

      // Wait for content to load
      printWindow.onload = () => {
        setTimeout(() => {
          // Trigger print dialog
          printWindow.print()

          // Close the window after a delay
          setTimeout(() => {
            printWindow.close()
            resolve()
          }, 1000)
        }, 500)
      }

      // Handle print dialog events
      printWindow.onafterprint = () => {
        printWindow.close()
        resolve()
      }

      printWindow.onbeforeunload = () => {
        resolve()
      }
    } catch (error) {
      reject(error)
    }
  })
}

export const generateAndDownloadPDF = async (data: ResumeData, template: string) => {
  try {
    const htmlContent = generateHTMLContent(data, template)
    const filename = `${data.personalInfo.fullName.replace(/\s+/g, "_")}_Resume.pdf`

    await htmlToPDF(htmlContent, filename)

    return {
      success: true,
      message: "Print dialog opened! Please select 'Save as PDF' or your preferred printer.",
    }
  } catch (error) {
    console.error("Error generating PDF:", error)
    return {
      success: false,
      message: "Failed to open print dialog. Please ensure popups are allowed and try again.",
    }
  }
}
