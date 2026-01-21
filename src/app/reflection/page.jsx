import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, Brain, Lightbulb } from 'lucide-react'

export default function ReflectionPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="relative z-20 border-b border-purple-500/20 bg-slate-900/40 backdrop-blur-xl shadow-2xl">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-400 to-blue-500 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              DonorConnect
            </h1>
          </Link>
          <div className="flex gap-3">
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-purple-500/20">Home</Button>
            </Link>
            <Link href="/login">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium">Login</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-5xl font-black bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent mb-4">
            Reflection
          </h1>
          <p className="text-gray-400 text-lg">Learning, challenges, and growth through building DonorConnect</p>
        </div>

        <div className="space-y-8">
          <div className="group relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
            <Card className="relative border-purple-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                    <Brain className="h-5 w-5 text-purple-400" />
                  </div>
                  What Challenged Me the Most
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-gray-300 leading-relaxed">
                  Building DonorConnect presented several significant challenges that pushed my skills and 
                  understanding of full-stack development.
                </p>
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="text-lg">🗄️</span> Database Transactions and Data Consistency
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    The most challenging aspect was ensuring that when a donation is created, the donor's 
                    metrics are automatically updated correctly. I learned to use Prisma transactions to 
                    ensure atomicity—either all updates succeed or none do.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="text-lg">🔐</span> Session-Based Authentication
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Implementing secure session management with HTTP-only cookies and database-backed sessions 
                    was more complex than expected. Understanding proper session validation, expiration, and 
                    cookie security required careful research and testing.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="text-lg">⚙️</span> Next.js App Router Patterns
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Learning the differences between server and client components, when to use each, and how 
                    to properly handle data fetching was a learning curve. Understanding async server components 
                    and API route structuring took time to master.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="text-lg">🤖</span> AI Integration
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Integrating AI responsibly while maintaining data privacy required careful prompt engineering 
                    and understanding API limitations. Balancing AI benefits with ethical considerations was an 
                    important learning experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="group relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
            <Card className="relative border-blue-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                    <Lightbulb className="h-5 w-5 text-blue-400" />
                  </div>
                  What I Would Change or Add
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-gray-300 leading-relaxed">
                  If I had more time, there are several features and improvements I would add:
                </p>
                <div>
                  <h3 className="font-bold text-white mb-3 text-lg">✨ Enhanced Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Email integration for automated thank-you emails</li>
                    <li>Advanced donor segmentation tools</li>
                    <li>Detailed campaign tracking with progress analytics</li>
                    <li>PDF reports for board meetings</li>
                    <li>Export to CSV/Excel functionality</li>
                    <li>Donor notes and interaction tracking</li>
                    <li>Recurring donation management</li>
                    <li>Advanced search and filtering</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3 text-lg">🔧 Technical Improvements</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Comprehensive unit and integration tests</li>
                    <li>Caching for frequently accessed data</li>
                    <li>Real-time updates via WebSockets</li>
                    <li>Enhanced mobile responsiveness</li>
                    <li>Improved accessibility with ARIA labels</li>
                    <li>Better error messages and recovery</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="group relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
            <Card className="relative border-cyan-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-green-500/20 border border-cyan-500/30">
                    <Sparkles className="h-5 w-5 text-cyan-400" />
                  </div>
                  What I Learned About Building Real Products
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/20">
                  <h3 className="font-bold text-white mb-2">📊 Data Modeling Matters</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Spending time upfront on database schema design pays off significantly. Getting relationships right 
                    between donors, donations, and campaigns made everything easier. Understanding how to calculate derived 
                    fields and when to store vs. calculate them was crucial.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/20">
                  <h3 className="font-bold text-white mb-2">🎯 User Experience is Critical</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Building features that work is only half the battle. Making them intuitive and providing clear feedback 
                    makes the difference between functional and usable. Small details like success messages significantly 
                    impact user experience.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/20">
                  <h3 className="font-bold text-white mb-2">🔒 Security Can't Be an Afterthought</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Implementing authentication and validation from the start is essential. I learned the importance of 
                    validating inputs, checking permissions, and never trusting client-side data. Security is foundational.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/20">
                  <h3 className="font-bold text-white mb-2">🔌 API Design Affects Everything</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Well-designed APIs make frontend development much easier. Consistent error handling, clear formats, 
                    and proper HTTP status codes create predictable interfaces. I learned to think about API design from 
                    both server and client perspectives.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/20">
                  <h3 className="font-bold text-white mb-2">💾 Real Data Makes a Difference</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Using seed data with realistic scenarios helped me build and test features more effectively. Having 
                    actual data to work with made development smoother and helped identify issues earlier.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="group relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-purple-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
            <Card className="relative border-green-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-green-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-purple-500/20 border border-green-500/30">
                    <Brain className="h-5 w-5 text-green-400" />
                  </div>
                  How AI Helped (and Where It Didn't)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <h3 className="font-bold text-white mb-3 text-lg">✅ Where AI Helped</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li><strong className="text-gray-300">Code Generation:</strong> Generated boilerplate for components and API routes</li>
                    <li><strong className="text-gray-300">Debugging:</strong> Explained errors and suggested fixes, especially for framework issues</li>
                    <li><strong className="text-gray-300">Architecture:</strong> Provided insights on best practices for structuring apps</li>
                    <li><strong className="text-gray-300">Documentation:</strong> Helped draft clear explanations for complex concepts</li>
                    <li><strong className="text-gray-300">Learning:</strong> Provided explanations and examples that accelerated learning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3 text-lg">❌ Where AI Didn't Help</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li><strong className="text-gray-300">Project-Specific Logic:</strong> Business logic required my own understanding</li>
                    <li><strong className="text-gray-300">Integration Issues:</strong> AI sometimes provided outdated information</li>
                    <li><strong className="text-gray-300">Testing:</strong> AI couldn't test—manual testing was essential</li>
                    <li><strong className="text-gray-300">Design Decisions:</strong> Prioritization required domain understanding</li>
                    <li><strong className="text-gray-300">Database Queries:</strong> Complex queries needed careful testing</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-purple-500/10 border border-green-500/20">
                  <h3 className="font-bold text-white mb-2">💡 Key Takeaway</h3>
                  <p className="text-gray-400 leading-relaxed">
                    AI is excellent for learning, generating boilerplate, and getting unstuck, but building real products 
                    requires deep understanding, careful testing, and thoughtful decision-making. AI accelerates development 
                    but doesn't replace solid fundamentals and problem-solving skills.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center pt-12">
            <Link href="/login">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold text-lg px-8 py-6 shadow-lg shadow-purple-500/50 rounded-full">
                Explore DonorConnect
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
