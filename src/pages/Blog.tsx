import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Tag } from 'lucide-react';

export const blogPosts = [
  {
    slug: 'building-ai-agents-amazon-bedrock',
    title: 'Building AI Agents with Amazon Bedrock — A Practical Guide',
    excerpt:
      'Learn how to build production-ready AI agents using Amazon Bedrock, AgentCore, and AWS Lambda. A step-by-step walkthrough from concept to deployment.',
    tags: ['Amazon Bedrock', 'Agentic AI', 'AWS Lambda', 'Python'],
    date: '2026-06-01',
    readTime: '8 min read',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    slug: 'rag-amazon-bedrock-dynamodb',
    title: 'RAG Architecture with Amazon Bedrock and DynamoDB',
    excerpt:
      'Implement Retrieval-Augmented Generation (RAG) pipelines using Amazon Bedrock Knowledge Bases and DynamoDB for context-aware AI applications.',
    tags: ['RAG', 'Amazon Bedrock', 'DynamoDB', 'Generative AI'],
    date: '2026-06-10',
    readTime: '10 min read',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    slug: 'agentic-ai-aws',
    title: 'Agentic AI on AWS — From Architecture to Production',
    excerpt:
      'Deep dive into Agentic AI patterns on AWS. How to design multi-agent systems, orchestrate workflows, and build reliable AI pipelines using Amazon Bedrock AgentCore.',
    tags: ['Agentic AI', 'AWS', 'Amazon Bedrock', 'Architecture'],
    date: '2026-06-15',
    readTime: '12 min read',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    slug: 'serverless-ai-aws-lambda',
    title: 'Building Serverless AI Applications with AWS Lambda',
    excerpt:
      'How to build and deploy AI-powered serverless applications using AWS Lambda, API Gateway, Amazon Bedrock, and DynamoDB — production patterns and best practices.',
    tags: ['AWS Lambda', 'Serverless', 'API Gateway', 'AI'],
    date: '2026-06-20',
    readTime: '9 min read',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    slug: 'prompt-engineering-bedrock',
    title: 'Prompt Engineering with Amazon Bedrock — Best Practices',
    excerpt:
      'Master prompt engineering techniques for Amazon Bedrock foundation models. Zero-shot, few-shot, chain-of-thought prompting and optimization strategies.',
    tags: ['Prompt Engineering', 'Amazon Bedrock', 'LLMs', 'GenAI'],
    date: '2026-06-25',
    readTime: '7 min read',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    slug: 'generative-ai-python',
    title: 'Generative AI Projects in Python — Hands-On with AWS',
    excerpt:
      'Build real Generative AI projects in Python using Boto3, Amazon Bedrock, LangChain, and AWS services. Practical code examples and project architectures.',
    tags: ['Python', 'Generative AI', 'Boto3', 'LangChain'],
    date: '2026-07-01',
    readTime: '11 min read',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    slug: 'react-aws-fullstack',
    title: 'React + AWS Full Stack Architecture for AI Applications',
    excerpt:
      'Design and build full stack AI applications with React.js frontend, AWS Lambda backend, API Gateway, Cognito authentication, and Amazon Bedrock AI layer.',
    tags: ['React.js', 'AWS', 'Full Stack', 'Cognito'],
    date: '2026-07-05',
    readTime: '13 min read',
    gradient: 'from-cyan-500 to-blue-500',
  },
];

const Blog = () => {
  useEffect(() => {
    document.title =
      'R Balaji Blog | AI Engineering, Amazon Bedrock, Agentic AI, AWS, React, Python';
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        'content',
        'Technical blog by R Balaji covering Amazon Bedrock, Agentic AI, RAG, AWS Lambda, Prompt Engineering, Generative AI in Python, and React + AWS Full Stack architecture.'
      );
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://balaji.skillrouteai.com/blog');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Top bar */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Header */}
        <header className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            R Balaji — <span className="gradient-text">Technical Blog</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Writing about AI Engineering, Amazon Bedrock, Agentic AI, AWS architecture, and building
            production-ready software systems.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {['Amazon Bedrock', 'Agentic AI', 'RAG', 'Python', 'React', 'AWS Lambda'].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Blog grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800 hover:-translate-y-1 flex flex-col"
              aria-label={`Read: ${post.title}`}
            >
              {/* Gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${post.gradient}`} />

              <div className="p-5 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      <Tag className="h-2.5 w-2.5" />{tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1 mb-4">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 mt-auto">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />{post.readTime}
                  </span>
                  <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>

                <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                  Read article <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Internal links */}
        <div className="mt-12 bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Want to see the projects these articles are based on?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/#projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              <ArrowRight className="h-4 w-4" /> View My Projects
            </Link>
            <Link to="/resume" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              <ArrowRight className="h-4 w-4" /> View My Resume
            </Link>
            <Link to="/#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              <ArrowRight className="h-4 w-4" /> Contact Me
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
