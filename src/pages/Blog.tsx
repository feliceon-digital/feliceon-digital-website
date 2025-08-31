import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

const Blog = () => {
  const [activeTab, setActiveTab] = useState("technology");

  const technologyNews = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in Business",
      excerpt: "Explore how AI is transforming industries and creating new opportunities for businesses worldwide.",
      author: "Feliceon Team",
      date: "2024-03-15",
      readTime: "5 min read",
      category: "AI & Machine Learning"
    },
    {
      id: 2,
      title: "Cloud Computing Trends for 2024",
      excerpt: "Discover the latest trends in cloud computing and how they impact digital transformation strategies.",
      author: "Tech Analyst",
      date: "2024-03-12",
      readTime: "7 min read",
      category: "Cloud Technology"
    },
    {
      id: 3,
      title: "5G Technology and Its Impact on IoT",
      excerpt: "Understanding how 5G networks are revolutionizing Internet of Things applications.",
      author: "Network Specialist",
      date: "2024-03-10",
      readTime: "6 min read",
      category: "Network Technology"
    }
  ];

  const cybersecurityNews = [
    {
      id: 1,
      title: "Zero Trust Security: A Complete Guide",
      excerpt: "Learn about implementing zero trust security models to protect your organization from modern threats.",
      author: "Security Expert",
      date: "2024-03-14",
      readTime: "8 min read",
      category: "Security Strategy"
    },
    {
      id: 2,
      title: "Latest Cybersecurity Threats and Prevention",
      excerpt: "Stay updated on the most recent cybersecurity threats and how to protect your business.",
      author: "Cyber Analyst",
      date: "2024-03-11",
      readTime: "6 min read",
      category: "Threat Analysis"
    },
    {
      id: 3,
      title: "Data Privacy Regulations: What You Need to Know",
      excerpt: "Navigate the complex landscape of data privacy laws and compliance requirements.",
      author: "Legal Tech Advisor",
      date: "2024-03-08",
      readTime: "10 min read",
      category: "Compliance"
    }
  ];

  const productKnowledge = [
    {
      id: 1,
      title: "Maximizing ROI with Feliceon's ERP Solutions",
      excerpt: "Learn how our ERP systems can streamline your operations and increase profitability.",
      author: "Product Manager",
      date: "2024-03-13",
      readTime: "7 min read",
      category: "ERP Systems"
    },
    {
      id: 2,
      title: "Custom Software Development Best Practices",
      excerpt: "Discover our proven methodologies for delivering high-quality custom software solutions.",
      author: "Development Lead",
      date: "2024-03-09",
      readTime: "9 min read",
      category: "Software Development"
    },
    {
      id: 3,
      title: "Digital Transformation Success Stories",
      excerpt: "Real-world examples of how Feliceon has helped businesses transform digitally.",
      author: "Success Manager",
      date: "2024-03-06",
      readTime: "8 min read",
      category: "Case Studies"
    }
  ];

  const howToGuides = [
    {
      id: 1,
      title: "How to Choose the Right Technology Stack",
      excerpt: "A comprehensive guide to selecting the best technology stack for your project needs.",
      author: "Technical Architect",
      date: "2024-03-12",
      readTime: "12 min read",
      category: "Development Guide"
    },
    {
      id: 2,
      title: "How to Implement Agile Methodology",
      excerpt: "Step-by-step guide to successfully implementing agile practices in your organization.",
      author: "Agile Coach",
      date: "2024-03-07",
      readTime: "10 min read",
      category: "Project Management"
    },
    {
      id: 3,
      title: "How to Secure Your Business Data",
      excerpt: "Essential steps to protect your business data from cyber threats and breaches.",
      author: "Security Consultant",
      date: "2024-03-05",
      readTime: "8 min read",
      category: "Security Guide"
    }
  ];

  const renderArticles = (articles: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary">{article.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                {article.readTime}
              </div>
            </div>
            <CardTitle className="text-lg">{article.title}</CardTitle>
            <CardDescription>{article.excerpt}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(article.date).toLocaleDateString()}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Feliceon Digital Blog
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stay informed with the latest insights on technology, cybersecurity, 
                product knowledge, and practical guides from our expert team.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="technology">Technology News</TabsTrigger>
                <TabsTrigger value="cybersecurity">Cybersecurity</TabsTrigger>
                <TabsTrigger value="products">Product Knowledge</TabsTrigger>
                <TabsTrigger value="howto">How-To Guides</TabsTrigger>
              </TabsList>

              <TabsContent value="technology" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Technology News</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Stay updated with the latest technology trends, innovations, and industry insights 
                    that are shaping the digital landscape.
                  </p>
                </div>
                {renderArticles(technologyNews)}
              </TabsContent>

              <TabsContent value="cybersecurity" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Cybersecurity</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Learn about the latest cybersecurity threats, best practices, and strategies 
                    to protect your business from digital risks.
                  </p>
                </div>
                {renderArticles(cybersecurityNews)}
              </TabsContent>

              <TabsContent value="products" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Feliceon Product Knowledge</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Discover how to maximize the value of Feliceon's products and services 
                    with detailed guides and success stories.
                  </p>
                </div>
                {renderArticles(productKnowledge)}
              </TabsContent>

              <TabsContent value="howto" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">How-To Guides</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Step-by-step tutorials and practical guides to help you implement 
                    technology solutions and best practices in your organization.
                  </p>
                </div>
                {renderArticles(howToGuides)}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;