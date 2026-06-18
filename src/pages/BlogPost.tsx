import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Tag, ExternalLink } from 'lucide-react';
import { blogPosts } from './Blog';

/* ── Full article content keyed by slug ── */
const articleContent: Record<string, { intro: string; sections: { heading: string; body: string }[]; codeSnippet?: string }> = {
  'building-ai-agents-amazon-bedrock': {
    intro:
      'Amazon Bedrock makes it easy to build AI agents that can reason, plan, and take actions using foundation models. In this guide I walk through how I built production AI agents — drawing from real experience building MeetLite, the Agentic AI Pharmacy System, and SkillRoute-AI.',
    sections: [
      { heading: 'What is an AI Agent?', body: 'An AI Agent is an autonomous system that uses an LLM as its reasoning engine, combined with tools (APIs, databases, code executors) to complete multi-step tasks. Amazon Bedrock Agents manages the orchestration loop for you — you define the action groups (Lambda functions) and the agent decides when to call them.' },
      { heading: 'Setting Up Amazon Bedrock Agent', body: 'In the AWS Console, navigate to Amazon Bedrock → Agents → Create Agent. Choose a foundation model (Claude 3 Sonnet or Nova Pro work well). Define action groups as Lambda functions. Add a Knowledge Base (S3 + OpenSearch Serverless) for RAG. Configure guardrails for responsible AI.' },
      { heading: 'Building Action Groups with Lambda', body: 'Each agent action is a Lambda function. Define the function schema in OpenAPI format and attach it to the agent. The agent will invoke the Lambda with structured JSON arguments extracted from user input. Best practice: keep each Lambda focused on one action (single responsibility).' },
      { heading: 'Deploying to Production', body: 'Use AWS CDK or Terraform to version your agent infrastructure. Set up CloudWatch alarms on Lambda errors and Bedrock invocation failures. Use DynamoDB to store conversation sessions. Front with API Gateway + Cognito for authenticated access.' },
    ],
  },
  'rag-amazon-bedrock-dynamodb': {
    intro:
      'Retrieval-Augmented Generation (RAG) improves LLM output quality by grounding responses in your own data. This post covers building a RAG pipeline with Amazon Bedrock Knowledge Bases and DynamoDB — a pattern I used in MeetLite\'s AI assistant.',
    sections: [
      { heading: 'RAG Architecture Overview', body: 'RAG works in two phases: Indexing (chunking documents → embedding → storing in vector DB) and Retrieval (embedding user query → similarity search → top-K chunks → LLM prompt). Amazon Bedrock Knowledge Bases automates the indexing pipeline — you just point it at an S3 bucket.' },
      { heading: 'Setting Up Knowledge Base', body: 'Create a Knowledge Base in Amazon Bedrock. Select S3 as the data source. Choose an embeddings model (Amazon Titan Text Embeddings v2). Select a vector store (OpenSearch Serverless or Aurora PostgreSQL with pgvector). Run a sync to index your documents.' },
      { heading: 'Using DynamoDB for Session Context', body: 'Store conversation history in DynamoDB with TTL for automatic expiry. Each session gets a partition key (session_id). When building the prompt, retrieve the last N turns from DynamoDB and prepend to the context window. This gives the agent memory across multiple turns.' },
      { heading: 'Optimizing Retrieval Quality', body: 'Use metadata filtering to restrict retrieval to relevant document subsets. Experiment with chunk sizes (512–1024 tokens typically works well). Use Bedrock\'s ReRanking feature (Nova Rerank) to improve top-K ordering. Monitor retrieval accuracy with custom CloudWatch metrics.' },
    ],
  },
  'agentic-ai-aws': {
    intro:
      'Agentic AI represents the shift from single LLM calls to autonomous systems that plan, use tools, and execute multi-step tasks. AWS re:Invent 2025 confirmed: agents are the future of enterprise automation. Here\'s everything I learned from building multi-agent systems and attending AWS workshops.',
    sections: [
      { heading: 'Core Components of an AI Agent', body: 'Every agent needs: (1) a Model — the LLM doing reasoning, (2) Memory — short-term (context window) and long-term (DynamoDB/Knowledge Base), (3) Tools — Lambda functions, API calls, code execution, (4) Orchestration — Amazon Bedrock AgentCore manages the reasoning loop.' },
      { heading: 'Multi-Agent Patterns', body: 'For complex tasks, use a Supervisor Agent that routes to Specialist Agents. Example: a customer service supervisor routes to a billing agent, a technical support agent, and a scheduling agent. Amazon Bedrock supports inline agents and multi-agent collaboration natively.' },
      { heading: 'Amazon Bedrock AgentCore', body: 'AgentCore (launched 2026) provides managed infrastructure for running agents at scale — compute, memory, tool execution, and tracing — without managing servers. I got hands-on with AgentCore at the AWS Kiro & AgentCore workshop at Amazon Orion, Bengaluru.' },
      { heading: 'Responsible AI in Agentic Systems', body: 'Always add Bedrock Guardrails to filter harmful content and PII. Implement human-in-the-loop checkpoints for high-stakes actions (payments, deletions). Log all agent traces in CloudWatch for auditability. Use IAM least-privilege for agent Lambda roles.' },
    ],
  },
  'serverless-ai-aws-lambda': {
    intro:
      'AWS Lambda + Amazon Bedrock is the fastest way to ship AI-powered APIs without managing servers. I\'ve used this pattern across MeetLite, SkillRoute-AI, and the Agentic Pharmacy System. Here\'s the production architecture.',
    sections: [
      { heading: 'Architecture Overview', body: 'Client (React.js) → API Gateway (REST/WebSocket) → Lambda (Python/Node) → Amazon Bedrock (LLM) + DynamoDB (storage) + S3 (files). Lambda handles authentication via Cognito JWT verification, calls Bedrock for AI, and persists results to DynamoDB.' },
      { heading: 'Lambda Cold Start Optimization', body: 'Use Lambda SnapStart for Java functions (10x cold start improvement). Keep Python Lambda packages lean — use Lambda Layers for heavy dependencies (boto3, numpy). Set provisioned concurrency for latency-sensitive AI endpoints. Keep handler code outside the Bedrock client initialization.' },
      { heading: 'Streaming AI Responses', body: 'For chat UIs, stream Bedrock responses back to the client via API Gateway WebSocket or Server-Sent Events. Use Bedrock\'s InvokeModelWithResponseStream API with the converse stream pattern. Lambda Streaming (response streaming) lets you flush tokens progressively for a ChatGPT-like UX.' },
      { heading: 'Cost Optimization', body: 'Use on-demand pricing for Bedrock (pay per token). Cache frequent prompts with ElastiCache or DynamoDB. Choose the right model size — Nova Micro for classification tasks, Claude 3 Haiku for short responses, Claude 3 Sonnet for complex reasoning. Monitor costs with Cost Explorer tags.' },
    ],
  },
  'prompt-engineering-bedrock': {
    intro:
      'Prompt engineering is the skill of communicating with LLMs effectively. For Amazon Bedrock, good prompts directly impact output quality, latency, and token costs. Here are the patterns I\'ve learned from building multiple production AI systems.',
    sections: [
      { heading: 'Zero-Shot vs Few-Shot Prompting', body: 'Zero-shot: give the task directly with no examples ("Classify this support ticket as billing/technical/general"). Few-shot: provide 2–5 examples before the task — significantly improves accuracy for classification and extraction tasks. With Bedrock, few-shot examples belong in the Human turn of the conversation.' },
      { heading: 'System Prompt Engineering', body: 'The system prompt defines the model\'s persona, constraints, and output format. Be explicit: specify the role, the task, the output format (JSON schema), what to do when information is missing, and what to never do. A well-structured system prompt reduces hallucination by 40–60% in my testing.' },
      { heading: 'Chain-of-Thought Prompting', body: 'Add "Think step by step" or "Let\'s work through this systematically" to trigger chain-of-thought reasoning. For Amazon Bedrock Claude models, extended thinking mode (when available) produces the most reliable multi-step reasoning. Use for math, logic, and planning tasks.' },
      { heading: 'Prompt Caching & Optimization', body: 'Amazon Bedrock supports prompt caching (Preview) — cache static system prompts to reduce latency by up to 85% and costs by up to 90%. Keep dynamic content at the end of prompts (after cached sections). Use Bedrock\'s token counting API to optimize prompt length before sending.' },
    ],
  },
  'generative-ai-python': {
    intro:
      'Python is the lingua franca of AI engineering. Combined with AWS Boto3 and Amazon Bedrock, you can build powerful Generative AI applications quickly. Here\'s how I structure Python AI projects based on 20+ projects built.',
    sections: [
      { heading: 'Project Setup with Boto3', body: 'Install: pip install boto3 botocore. Configure AWS credentials via environment variables or IAM roles (preferred in production). Create a Bedrock runtime client: client = boto3.client("bedrock-runtime", region_name="us-east-1"). Use converse() API — it\'s model-agnostic and works across Claude, Nova, Titan, Llama.' },
      { heading: 'Building a RAG Pipeline in Python', body: 'Use LangChain or LlamaIndex as orchestration layer. Connect to Bedrock for embeddings (Amazon Titan Embeddings) and generation (Claude/Nova). Use FAISS or ChromaDB for local vector search, or Bedrock Knowledge Bases for managed RAG. Always chunk documents at semantic boundaries (paragraphs, sections).' },
      { heading: 'Streaming with Python', body: 'Use invoke_model_with_response_stream() for streaming. Iterate over the event stream and decode each chunk. For Streamlit apps, use st.write_stream() to display tokens progressively. For FastAPI, use StreamingResponse with an async generator that yields SSE-formatted chunks.' },
      { heading: 'Production Patterns', body: 'Use Pydantic for LLM output validation. Implement retry logic with exponential backoff for Bedrock throttling errors. Store prompts in DynamoDB or Parameter Store for easy updates without redeployment. Use structured logging (JSON) to CloudWatch for AI response observability.' },
    ],
  },
  'react-aws-fullstack': {
    intro:
      'Building a production full stack AI application with React and AWS requires careful architecture decisions. Here\'s the architecture I use for MeetLite and SkillRoute-AI — battle-tested with real users.',
    sections: [
      { heading: 'Frontend: React.js + Next.js', body: 'Use Next.js App Router for SSR/SSG pages (blog, landing) and React for the authenticated app shell. Tailwind CSS for styling. React Query for server state management. AWS Amplify Gen 2 for authentication UI (Cognito). Deploy to S3 + CloudFront for global CDN delivery.' },
      { heading: 'Authentication with Cognito', body: 'Amazon Cognito User Pools handles registration, login, MFA, and social login. Use Amplify Auth library on the frontend. On the backend, validate Cognito JWT tokens in Lambda (use aws-jwt-verify package for Node or python-jose for Python). Store user metadata in DynamoDB with userId as partition key.' },
      { heading: 'API Layer with API Gateway + Lambda', body: 'REST API Gateway for CRUD operations. WebSocket API for real-time features (chat, live AI streaming). Each Lambda function handles one resource (single responsibility). Use Lambda Powertools for Python/Node — structured logging, tracing, and metrics with zero boilerplate. Return consistent error shapes (statusCode, message, requestId).' },
      { heading: 'CI/CD Pipeline', body: 'GitHub Actions for CI: lint → type-check → unit tests → build. AWS CDK for infrastructure-as-code. Deploy Lambda functions with CDK Pipelines. Use CloudFormation outputs to wire API Gateway URLs into React environment variables. Blue/green deployments with Lambda aliases and weighted routing for safe rollouts.' },
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const content = slug ? articleContent[slug] : undefined;

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | R Balaji Blog`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', post.excerpt);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://balaji.skillrouteai.com/blog/${post.slug}`);
  }, [post]);

  if (!post || !content) return <Navigate to="/blog" replace />;

  const postIdx = blogPosts.indexOf(post);
  const prevPost = postIdx > 0 ? blogPosts[postIdx - 1] : null;
  const nextPost = postIdx < blogPosts.length - 1 ? blogPosts[postIdx + 1] : null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Top bar */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Article header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Tag className="h-2.5 w-2.5" />{tag}
              </span>
            ))}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <span>By <strong className="text-gray-700 dark:text-gray-300">R Balaji</strong></span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
            <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
          <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${post.gradient}`} />
        </header>

        {/* Article body */}
        <article className="prose prose-gray dark:prose-invert max-w-none">
          {/* Intro */}
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-medium">
            {content.intro}
          </p>

          {/* Sections */}
          {content.sections.map((section, i) => (
            <section key={i} className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {section.heading}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}

          {/* Author CTA */}
          <div className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-bold text-lg mb-1">Written by R Balaji</p>
                <p className="text-sm text-white/80">AI Engineer · AWS Certified · Building SkillRoute-AI</p>
              </div>
              <div className="flex flex-wrap gap-2 shrink-0">
                <a href="https://linkedin.com/in/rrbalaji" target="_blank" rel="noopener noreferrer"
                   className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/Balaji5359" target="_blank" rel="noopener noreferrer"
                   className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                  GitHub
                </a>
                <Link to="/resume" className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Prev / Next navigation */}
        <nav className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="Blog post navigation">
          {prevPost ? (
            <Link to={`/blog/${prevPost.slug}`}
                  className="group flex flex-col p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-primary/40 hover:shadow-md transition-all">
              <span className="text-xs text-gray-400 mb-1 flex items-center gap-1"><ArrowLeft className="h-3 w-3" />Previous</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">{prevPost.title}</span>
            </Link>
          ) : <div />}
          {nextPost && (
            <Link to={`/blog/${nextPost.slug}`}
                  className="group flex flex-col p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-primary/40 hover:shadow-md transition-all text-right">
              <span className="text-xs text-gray-400 mb-1 flex items-center gap-1 justify-end">Next<ArrowRight className="h-3 w-3" /></span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">{nextPost.title}</span>
            </Link>
          )}
        </nav>

        {/* Internal links */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
          <Link to="/#projects" className="hover:text-primary transition-colors font-medium">Projects</Link>
          <span>·</span>
          <Link to="/resume" className="hover:text-primary transition-colors font-medium">Resume</Link>
          <span>·</span>
          <Link to="/#contact" className="hover:text-primary transition-colors font-medium">Contact</Link>
          <span>·</span>
          <Link to="/blog" className="hover:text-primary transition-colors font-medium">All Posts</Link>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
