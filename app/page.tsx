import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Award, BookOpen, BriefcaseIcon, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container px-4 py-12 md:py-24">
      {/* Hero Section with Image */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-12 mb-16">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Project Management Professional
          </h1>
          <p className="text-xl text-muted-foreground max-w-[700px] mb-8">
            Certified Scrum Master (CSM) with 5+ years of experience in Product & Project Management,
            specializing in Agile methodologies and team leadership.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button asChild size="lg">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-8 border-muted">
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
            alt="Professional Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Key Areas Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Areas of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
            <BriefcaseIcon className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Project Management</h3>
            <p className="text-muted-foreground">
              Expert in planning, scheduling, and delivering complex projects on time and within budget.
            </p>
          </Card>
          <Card className="p-6">
            <Users className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Team Leadership</h3>
            <p className="text-muted-foreground">
              Skilled in team building, mentoring, and fostering a collaborative work environment.
            </p>
          </Card>
          <Card className="p-6">
            <Award className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Agile & Scrum</h3>
            <p className="text-muted-foreground">
              Certified Scrum Master with extensive experience in Agile methodologies and practices.
            </p>
          </Card>
          <Card className="p-6">
            <BookOpen className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Strategic Planning</h3>
            <p className="text-muted-foreground">
              Expertise in developing and executing strategic initiatives aligned with business goals.
            </p>
          </Card>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Button asChild variant="ghost">
            <Link href="/projects">View All Projects →</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Enterprise Digital Transformation</h3>
            <p className="text-muted-foreground mb-4">
              Led a team of 15 in implementing a company-wide digital transformation initiative,
              resulting in 40% improved operational efficiency.
            </p>
            <Button asChild variant="outline">
              <Link href="/projects/digital-transformation">Learn More</Link>
            </Button>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Agile Implementation Program</h3>
            <p className="text-muted-foreground mb-4">
              Successfully introduced Agile methodologies across 5 departments, reducing project
              delivery time by 30%.
            </p>
            <Button asChild variant="outline">
              <Link href="/projects/agile-implementation">Learn More</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  )
}