import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { id, category } = useParams();

  // Sample blog content data
  const blogPosts = {
    technology: {
      "1": {
        title: "The Future of Artificial Intelligence in Business",
        author: "Feliceon Team",
        date: "2024-03-15",
        readTime: "5 min read",
        category: "AI & Machine Learning",
        image: "/lovable-uploads/7a0069e8-fdb0-4b47-b070-827d649fbff0.png",
        content: `
          <p>Artificial Intelligence (AI) is no longer a futuristic concept—it's here, and it's transforming the way businesses operate across every industry. From automating routine tasks to providing deep insights through data analysis, AI is becoming an essential tool for companies looking to stay competitive in today's digital landscape.</p>
          
          <h2>The Current State of AI in Business</h2>
          <p>Today's businesses are leveraging AI in various ways:</p>
          <ul>
            <li><strong>Customer Service:</strong> AI-powered chatbots and virtual assistants are handling customer inquiries 24/7, improving response times and customer satisfaction.</li>
            <li><strong>Data Analysis:</strong> Machine learning algorithms are processing vast amounts of data to identify patterns and trends that humans might miss.</li>
            <li><strong>Process Automation:</strong> Repetitive tasks are being automated, freeing up employees to focus on more strategic work.</li>
            <li><strong>Personalization:</strong> AI is enabling businesses to deliver personalized experiences to customers at scale.</li>
          </ul>
          
          <h2>Emerging AI Trends</h2>
          <p>Several exciting trends are shaping the future of AI in business:</p>
          
          <h3>1. Generative AI</h3>
          <p>Tools like GPT and DALL-E are revolutionizing content creation, allowing businesses to generate text, images, and even code automatically.</p>
          
          <h3>2. Edge AI</h3>
          <p>AI processing is moving closer to the data source, reducing latency and improving real-time decision-making capabilities.</p>
          
          <h3>3. Explainable AI</h3>
          <p>As AI becomes more prevalent, there's a growing need for transparent and interpretable AI systems that can explain their decision-making processes.</p>
          
          <h2>Implementation Strategies</h2>
          <p>To successfully implement AI in your business:</p>
          <ol>
            <li><strong>Start Small:</strong> Begin with pilot projects in specific areas before scaling up.</li>
            <li><strong>Invest in Data Quality:</strong> AI is only as good as the data it's trained on.</li>
            <li><strong>Upskill Your Team:</strong> Provide training to help employees work effectively with AI tools.</li>
            <li><strong>Choose the Right Partners:</strong> Work with experienced AI solution providers like Feliceon Digital Solusi.</li>
          </ol>
          
          <h2>The Road Ahead</h2>
          <p>As we look to the future, AI will continue to evolve and become more sophisticated. Businesses that embrace AI today will be better positioned to take advantage of tomorrow's innovations. The key is to start now, learn continuously, and adapt as the technology evolves.</p>
          
          <p>At Feliceon Digital Solusi, we're committed to helping businesses navigate their AI journey. Our team of experts can help you identify opportunities, develop strategies, and implement AI solutions that drive real business value.</p>
        `
      },
      "2": {
        title: "Cloud Computing Trends for 2024",
        author: "Tech Analyst",
        date: "2024-03-12",
        readTime: "7 min read",
        category: "Cloud Technology",
        image: "/lovable-uploads/7a0069e8-fdb0-4b47-b070-827d649fbff0.png",
        content: `
          <p>Cloud computing continues to be a driving force behind digital transformation initiatives worldwide. As we progress through 2024, several key trends are shaping how organizations approach cloud adoption and optimization.</p>
          
          <h2>Multi-Cloud and Hybrid Strategies</h2>
          <p>Organizations are increasingly adopting multi-cloud strategies to avoid vendor lock-in and optimize costs. This approach allows businesses to:</p>
          <ul>
            <li>Leverage the best services from multiple cloud providers</li>
            <li>Improve redundancy and disaster recovery capabilities</li>
            <li>Negotiate better pricing through competitive positioning</li>
            <li>Meet specific compliance and data sovereignty requirements</li>
          </ul>
          
          <h2>Edge Computing Integration</h2>
          <p>The convergence of cloud and edge computing is creating new opportunities for real-time processing and reduced latency. Key benefits include:</p>
          <ul>
            <li>Faster response times for critical applications</li>
            <li>Reduced bandwidth costs</li>
            <li>Improved data privacy and security</li>
            <li>Enhanced user experiences</li>
          </ul>
          
          <h2>Serverless Computing Growth</h2>
          <p>Serverless architectures are gaining momentum as organizations seek to reduce infrastructure management overhead while improving scalability and cost efficiency.</p>
          
          <h2>Cloud Security Evolution</h2>
          <p>Security remains a top priority, with new approaches like Zero Trust Architecture becoming standard practice. Organizations are implementing:</p>
          <ul>
            <li>Identity and access management (IAM) solutions</li>
            <li>Cloud security posture management (CSPM)</li>
            <li>Cloud workload protection platforms (CWPP)</li>
            <li>Automated security monitoring and response</li>
          </ul>
          
          <h2>Sustainability Focus</h2>
          <p>Environmental considerations are driving cloud adoption decisions, with organizations prioritizing providers that offer carbon-neutral or carbon-negative services.</p>
          
          <h2>Getting Started</h2>
          <p>To capitalize on these cloud trends, organizations should focus on developing a comprehensive cloud strategy that aligns with business objectives while addressing security, compliance, and cost optimization requirements.</p>
        `
      }
    },
    cybersecurity: {
      "1": {
        title: "Zero Trust Security: A Complete Guide",
        author: "Security Expert",
        date: "2024-03-14",
        readTime: "8 min read",
        category: "Security Strategy",
        image: "/lovable-uploads/7a0069e8-fdb0-4b47-b070-827d649fbff0.png",
        content: `
          <p>In today's threat landscape, the traditional security perimeter has dissolved. Remote work, cloud adoption, and mobile devices have created a security environment where trust can no longer be assumed based on network location. Enter Zero Trust Security—a paradigm that assumes breach and requires verification from everyone and everything.</p>
          
          <h2>What is Zero Trust?</h2>
          <p>Zero Trust is a security framework that requires all users and devices to be authenticated and authorized before accessing applications and data, regardless of their location. The core principle is "never trust, always verify."</p>
          
          <h2>Core Principles of Zero Trust</h2>
          <h3>1. Verify Explicitly</h3>
          <p>Always authenticate and authorize based on all available data points, including user identity, location, device health, service or workload, data classification, and anomalies.</p>
          
          <h3>2. Use Least Privilege Access</h3>
          <p>Limit user access with just-in-time and just-enough-access (JIT/JEA), risk-based adaptive policies, and data protection.</p>
          
          <h3>3. Assume Breach</h3>
          <p>Minimize blast radius and segment access. Verify end-to-end encryption and use analytics to get visibility, drive threat detection, and improve defenses.</p>
          
          <h2>Implementation Strategy</h2>
          <h3>Phase 1: Identity and Access Management</h3>
          <ul>
            <li>Implement multi-factor authentication (MFA)</li>
            <li>Deploy single sign-on (SSO) solutions</li>
            <li>Establish identity governance processes</li>
          </ul>
          
          <h3>Phase 2: Device Security</h3>
          <ul>
            <li>Implement device compliance policies</li>
            <li>Deploy endpoint detection and response (EDR)</li>
            <li>Establish device trust verification</li>
          </ul>
          
          <h3>Phase 3: Network Segmentation</h3>
          <ul>
            <li>Implement micro-segmentation</li>
            <li>Deploy software-defined perimeters</li>
            <li>Establish secure remote access</li>
          </ul>
          
          <h3>Phase 4: Application Security</h3>
          <ul>
            <li>Implement application-level controls</li>
            <li>Deploy cloud access security brokers (CASB)</li>
            <li>Establish API security</li>
          </ul>
          
          <h2>Benefits of Zero Trust</h2>
          <ul>
            <li><strong>Reduced Risk:</strong> Minimizes the impact of security breaches</li>
            <li><strong>Improved Compliance:</strong> Supports regulatory requirements</li>
            <li><strong>Better Visibility:</strong> Provides comprehensive security monitoring</li>
            <li><strong>Flexibility:</strong> Supports remote work and cloud adoption</li>
          </ul>
          
          <h2>Common Challenges</h2>
          <ul>
            <li>Legacy system integration</li>
            <li>User experience considerations</li>
            <li>Change management</li>
            <li>Technology complexity</li>
          </ul>
          
          <h2>Getting Started with Zero Trust</h2>
          <p>Begin by assessing your current security posture, identifying critical assets, and developing a phased implementation plan. Partner with experienced security providers to ensure successful deployment and ongoing management.</p>
        `
      }
    },
    products: {
      "1": {
        title: "Maximizing ROI with Feliceon's ERP Solutions",
        author: "Product Manager",
        date: "2024-03-13",
        readTime: "7 min read",
        category: "ERP Systems",
        image: "/lovable-uploads/7a0069e8-fdb0-4b47-b070-827d649fbff0.png",
        content: `
          <p>Enterprise Resource Planning (ERP) systems are the backbone of modern business operations, integrating various business processes into a unified system. At Feliceon Digital Solusi, our ERP solutions are designed to maximize return on investment (ROI) while streamlining operations across your organization.</p>
          
          <h2>Understanding ERP ROI</h2>
          <p>ROI from ERP implementation comes from several key areas:</p>
          <ul>
            <li>Operational efficiency improvements</li>
            <li>Reduced manual processes and errors</li>
            <li>Better decision-making through real-time data</li>
            <li>Improved customer service</li>
            <li>Reduced IT costs</li>
            <li>Enhanced compliance and reporting</li>
          </ul>
          
          <h2>Feliceon's ERP Advantages</h2>
          <h3>Customizable Modules</h3>
          <p>Our ERP solutions feature modular architecture that allows you to implement only the functionality you need, reducing costs and complexity while ensuring scalability for future growth.</p>
          
          <h3>Industry-Specific Features</h3>
          <p>We understand that different industries have unique requirements. Our ERP solutions include industry-specific modules for:</p>
          <ul>
            <li>Manufacturing and production</li>
            <li>Retail and e-commerce</li>
            <li>Healthcare and pharmaceuticals</li>
            <li>Financial services</li>
            <li>Government and public sector</li>
          </ul>
          
          <h3>Cloud-Native Architecture</h3>
          <p>Our cloud-native ERP solutions offer:</p>
          <ul>
            <li>Lower total cost of ownership</li>
            <li>Automatic updates and security patches</li>
            <li>Scalability and flexibility</li>
            <li>Improved disaster recovery</li>
            <li>Remote accessibility</li>
          </ul>
          
          <h2>Implementation Best Practices</h2>
          <h3>1. Define Clear Objectives</h3>
          <p>Establish specific, measurable goals for your ERP implementation, including expected ROI timelines and key performance indicators.</p>
          
          <h3>2. Ensure Data Quality</h3>
          <p>Clean and standardize your data before migration to ensure accurate reporting and decision-making capabilities.</p>
          
          <h3>3. Invest in Training</h3>
          <p>Comprehensive user training is essential for adoption and realizing the full benefits of your ERP investment.</p>
          
          <h3>4. Plan for Change Management</h3>
          <p>Prepare your organization for process changes and ensure stakeholder buy-in throughout the implementation.</p>
          
          <h2>Measuring Success</h2>
          <p>Track key metrics to measure the success of your ERP implementation:</p>
          <ul>
            <li>Process efficiency improvements</li>
            <li>Reduction in manual tasks</li>
            <li>Improved data accuracy</li>
            <li>Faster reporting and decision-making</li>
            <li>Cost savings and productivity gains</li>
          </ul>
          
          <h2>Long-Term Value</h2>
          <p>The true value of an ERP system extends beyond initial implementation. With proper maintenance, regular updates, and continuous optimization, your ERP system will continue to deliver value and adapt to changing business needs.</p>
          
          <p>Partner with Feliceon Digital Solusi to unlock the full potential of ERP technology and achieve measurable business results.</p>
        `
      }
    },
    howto: {
      "1": {
        title: "How to Choose the Right Technology Stack",
        author: "Technical Architect",
        date: "2024-03-12",
        readTime: "12 min read",
        category: "Development Guide",
        image: "/lovable-uploads/7a0069e8-fdb0-4b47-b070-827d649fbff0.png",
        content: `
          <p>Choosing the right technology stack is one of the most critical decisions in any software development project. The technology stack you select will impact your project's scalability, maintainability, performance, and long-term success. This comprehensive guide will help you make informed decisions when selecting technologies for your next project.</p>
          
          <h2>Understanding Technology Stacks</h2>
          <p>A technology stack is a combination of programming languages, frameworks, libraries, databases, and tools used to build and run an application. It typically includes:</p>
          <ul>
            <li><strong>Frontend:</strong> Client-side technologies (HTML, CSS, JavaScript, frameworks)</li>
            <li><strong>Backend:</strong> Server-side technologies (programming languages, frameworks)</li>
            <li><strong>Database:</strong> Data storage and management systems</li>
            <li><strong>Infrastructure:</strong> Hosting, cloud services, and deployment tools</li>
          </ul>
          
          <h2>Key Factors to Consider</h2>
          
          <h3>1. Project Requirements</h3>
          <p>Start by clearly defining your project requirements:</p>
          <ul>
            <li>Application type (web, mobile, desktop)</li>
            <li>Expected user base and traffic</li>
            <li>Performance requirements</li>
            <li>Security needs</li>
            <li>Integration requirements</li>
            <li>Budget constraints</li>
            <li>Timeline expectations</li>
          </ul>
          
          <h3>2. Team Expertise</h3>
          <p>Consider your team's existing skills and experience:</p>
          <ul>
            <li>Current programming language proficiency</li>
            <li>Framework experience</li>
            <li>Learning curve for new technologies</li>
            <li>Availability of skilled developers</li>
            <li>Training requirements and costs</li>
          </ul>
          
          <h3>3. Scalability Requirements</h3>
          <p>Plan for future growth:</p>
          <ul>
            <li>Expected user growth</li>
            <li>Data volume projections</li>
            <li>Geographic expansion plans</li>
            <li>Feature development roadmap</li>
            <li>Performance scaling needs</li>
          </ul>
          
          <h2>Popular Technology Stack Options</h2>
          
          <h3>MEAN Stack (MongoDB, Express.js, Angular, Node.js)</h3>
          <p><strong>Best for:</strong> Real-time applications, single-page applications</p>
          <p><strong>Pros:</strong> JavaScript everywhere, large community, good for rapid prototyping</p>
          <p><strong>Cons:</strong> Not ideal for CPU-intensive tasks, frequent updates</p>
          
          <h3>MERN Stack (MongoDB, Express.js, React, Node.js)</h3>
          <p><strong>Best for:</strong> Dynamic web applications, social media platforms</p>
          <p><strong>Pros:</strong> Flexible, reusable components, strong community support</p>
          <p><strong>Cons:</strong> SEO challenges, learning curve for beginners</p>
          
          <h3>LAMP Stack (Linux, Apache, MySQL, PHP)</h3>
          <p><strong>Best for:</strong> Content management systems, e-commerce sites</p>
          <p><strong>Pros:</strong> Mature, stable, cost-effective, large talent pool</p>
          <p><strong>Cons:</strong> Less suitable for modern applications, performance limitations</p>
          
          <h3>Django + React (Python, Django, React, PostgreSQL)</h3>
          <p><strong>Best for:</strong> Data-driven applications, machine learning integration</p>
          <p><strong>Pros:</strong> Rapid development, strong security features, excellent for MVP</p>
          <p><strong>Cons:</strong> Monolithic structure, can be overkill for simple applications</p>
          
          <h2>Decision-Making Process</h2>
          
          <h3>Step 1: Define Requirements</h3>
          <p>Create a detailed requirements document covering functional and non-functional requirements.</p>
          
          <h3>Step 2: Research Options</h3>
          <p>Investigate different technology options and create a comparison matrix.</p>
          
          <h3>Step 3: Prototype</h3>
          <p>Build small prototypes with your top choices to validate assumptions.</p>
          
          <h3>Step 4: Evaluate Trade-offs</h3>
          <p>Consider the pros and cons of each option in the context of your specific requirements.</p>
          
          <h3>Step 5: Make the Decision</h3>
          <p>Choose the stack that best balances your requirements, constraints, and long-term goals.</p>
          
          <h2>Common Mistakes to Avoid</h2>
          <ul>
            <li>Choosing technology based on trends rather than requirements</li>
            <li>Ignoring team expertise and learning curves</li>
            <li>Overlooking long-term maintenance and support</li>
            <li>Failing to consider integration requirements</li>
            <li>Underestimating performance and scalability needs</li>
          </ul>
          
          <h2>Future-Proofing Your Choice</h2>
          <p>To ensure your technology stack remains viable:</p>
          <ul>
            <li>Choose technologies with active communities</li>
            <li>Prioritize standards-based solutions</li>
            <li>Consider vendor lock-in implications</li>
            <li>Plan for regular technology reviews and updates</li>
            <li>Maintain flexibility through modular architecture</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>Selecting the right technology stack requires careful consideration of multiple factors including project requirements, team capabilities, scalability needs, and long-term goals. Take time to research, prototype, and evaluate your options thoroughly. Remember that there's no one-size-fits-all solution—the best technology stack is the one that meets your specific needs and constraints.</p>
          
          <p>Need help choosing the right technology stack for your project? Contact Feliceon Digital Solusi for expert guidance and consultation.</p>
        `
      }
    }
  };

  const post = blogPosts[category as keyof typeof blogPosts]?.[id as string];

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
              <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
              <Button asChild>
                <Link to="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <article className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back Button */}
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            {/* Article Header */}
            <header className="mb-8">
              <Badge variant="secondary" className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </div>
              </div>

              {/* Featured Image */}
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              />
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Published by <span className="font-medium">{post.author}</span>
                </div>
                <Button asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </footer>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;