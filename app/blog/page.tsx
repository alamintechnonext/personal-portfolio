"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    title: "The Future of Project Management in the AI Era",
    excerpt: "Exploring how artificial intelligence is transforming project management methodologies and tools...",
    date: "2024-03-15",
    readTime: "5 min read",
    tags: ["AI", "Future Trends", "Project Management"]
  },
  {
    title: "Building High-Performance Agile Teams",
    excerpt: "Key strategies and practices for developing and maintaining high-performing agile development teams...",
    date: "2024-03-10",
    readTime: "7 min read",
    tags: ["Agile", "Team Building", "Leadership"]
  },
  {
    title: "Effective Stakeholder Management",
    excerpt: "Best practices for managing stakeholder expectations and maintaining strong relationships...",
    date: "2024-03-05",
    readTime: "6 min read",
    tags: ["Stakeholder Management", "Communication"]
  },
  {
    title: "Risk Management in Complex Projects",
    excerpt: "A comprehensive guide to identifying, assessing, and mitigating risks in large-scale projects...",
    date: "2024-02-28",
    readTime: "8 min read",
    tags: ["Risk Management", "Project Planning"]
  }
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="container py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-8">Blog & Insights</h1>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search posts..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-6">
        {filteredPosts.map((post, index) => (
          <Card key={index} className="p-6">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h2 className="text-2xl font-semibold mb-2 md:mb-0">
                <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </h2>
              <div className="text-sm text-muted-foreground">
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { 
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}</time>
                <span className="mx-2">·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <Badge key={i} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}