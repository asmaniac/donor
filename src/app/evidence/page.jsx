import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, CheckCircle, Zap, FileText } from 'lucide-react'

export default function EvidencePage() {
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
            Evidence & Rubric
          </h1>
          <p className="text-gray-400 text-lg">Project requirements and implementation evidence</p>
        </div>

        <div className="space-y-8">
          <div className="group relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
            <Card className="relative border-purple-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                  </div>
                  CCC.1.3 Evidence
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-gray-300 font-semibold">
                  Requirement: Build a working MVP with multiple pages
                </p>
                <div>
                  <h3 className="font-bold text-white mb-3">✅ Evidence</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Multiple Pages: Home, About, Why DonorConnect, Dashboard, Donors, Donations, AI Policy, Evidence, Reflection</li>
                    <li>Working MVP: All pages are functional and connected to a real database</li>
                    <li>Data Persistence: Donors and donations stored in PostgreSQL via Prisma ORM</li>
                    <li>API Integration: All data comes from API endpoints querying the database</li>
                    <li>Forms: Add Donor and Add Donation forms successfully save data</li>
                    <li>Confirmation: Forms show success messages and redirect</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">🎯 Key Features Demonstrated</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Dashboard shows real-time metrics from database</li>
                    <li>Donors page lists all donors with search functionality</li>
                    <li>Donations page shows donations linked to donors</li>
                    <li>Add Donor form creates donors that persist</li>
                    <li>Add Donation form creates donations and updates metrics</li>
                  </ul>
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
                    <Zap className="h-5 w-5 text-blue-400" />
                  </div>
                  TS.6.2 Evidence
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-gray-300 font-semibold">
                  Requirement: Use AI responsibly
                </p>
                <div>
                  <h3 className="font-bold text-white mb-3">✅ Evidence</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>AI Policy Page with comprehensive documentation</li>
                    <li>Data Privacy: Donor info never sent to AI APIs</li>
                    <li>Transparency: All AI usage clearly documented</li>
                    <li>Human Oversight: AI outputs reviewed before use</li>
                    <li>Error Handling: System gracefully handles API failures</li>
                    <li>Purpose Limitation: AI used only for documented use cases</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">🔒 Safeguards Implemented</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>API keys stored securely in environment variables</li>
                    <li>Encrypted connections for API communications</li>
                    <li>Anonymized data sent to AI when possible</li>
                    <li>Clear labeling of AI-generated content</li>
                    <li>Ability to edit or reject AI suggestions</li>
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
                  TS.6.3 Evidence
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-gray-300 font-semibold">
                  Requirement: Integrate AI tools into your workflow or product
                </p>
                <div>
                  <h3 className="font-bold text-white mb-3">✅ Evidence</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>AI Integration: OpenAI GPT-4 for donor activity summaries</li>
                    <li>API Implementation: AI calls in backend API routes</li>
                    <li>Use Cases: Donor summaries and planning recommendations</li>
                    <li>Prompt Engineering: Carefully crafted prompts for accuracy</li>
                    <li>Documentation: AI Policy page explains usage and prompts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">🤖 AI Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Donor activity summary generation using OpenAI</li>
                    <li>Planning support recommendations based on data</li>
                    <li>Integration with donor management workflow</li>
                  </ul>
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
                    <FileText className="h-5 w-5 text-green-400" />
                  </div>
                  Project Links
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-purple-500/10 border border-green-500/20">
                  <h3 className="font-bold text-white mb-2">🔗 Vercel Deployment</h3>
                  <p className="text-cyan-400 hover:text-cyan-300 transition">
                    <a href="https://donor-connect.vercel.app" target="_blank" rel="noopener noreferrer" className="underline">
                      https://donor-connect.vercel.app
                    </a>
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-purple-500/10 border border-green-500/20">
                  <h3 className="font-bold text-white mb-2">📚 GitHub Repository</h3>
                  <p className="text-gray-400">
                    (Add your GitHub repository URL here)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center pt-12">
            <Link href="/login">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold text-lg px-8 py-6 shadow-lg shadow-purple-500/50 rounded-full">
                Try DonorConnect
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
