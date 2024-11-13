import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const projects = [
  {
    title: "Enterprise Digital Transformation",
    description: "Led a comprehensive digital transformation initiative across multiple departments, implementing new technologies and processes to improve operational efficiency.",
    duration: "18 months",
    impact: ["40% efficiency improvement", "Cost reduction of $2M annually", "Successfully trained 200+ employees"],
    tags: ["Digital Transformation", "Change Management", "Enterprise Solutions"]
  },
  {
    title: "Agile Implementation Program",
    description: "Spearheaded the adoption of Agile methodologies across the organization, including training, process development, and team restructuring.",
    duration: "12 months",
    impact: ["30% faster project delivery", "Improved team satisfaction by 45%", "Established 8 high-performing Scrum teams"],
    tags: ["Agile", "Scrum", "Team Development"]
  },
  {
    title: "Global Product Launch",
    description: "Managed the successful launch of a new product line across 12 international markets, coordinating with multiple stakeholders and teams.",
    duration: "9 months",
    impact: ["$10M in first-year revenue", "Successful launch in all target markets", "95% positive customer feedback"],
    tags: ["Product Launch", "International Markets", "Stakeholder Management"]
  },
  {
    title: "IT Infrastructure Upgrade",
    description: "Led a major infrastructure modernization project, including cloud migration and security enhancements.",
    duration: "15 months",
    impact: ["99.99% system uptime achieved", "50% reduction in IT incidents", "Enhanced security protocols"],
    tags: ["Infrastructure", "Cloud Migration", "Security"]
  }
]

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Project Portfolio</h1>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="p-6">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h2 className="text-2xl font-semibold mb-2 md:mb-0">{project.title}</h2>
              <span className="text-muted-foreground">Duration: {project.duration}</span>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Key Impacts:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {project.impact.map((impact, i) => (
                  <li key={i}>{impact}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}