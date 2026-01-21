import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, Shield, Code, Zap } from 'lucide-react'

export default function AIPolicyPage() {
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
            AI Policy & Safeguards
          </h1>
          <p className="text-gray-400 text-lg">How we use AI responsibly in DonorConnect</p>
        </div>

        <div className="space-y-8">
          <div className="group relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
            <Card className="relative border-purple-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                    <Shield className="h-5 w-5 text-purple-400" />
                  </div>
                  How We Use AI Responsibly
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  DonorConnect uses AI to enhance donor management capabilities while maintaining ethical 
                  standards and data privacy. Our AI integration is designed to support nonprofit staff 
                  in making informed decisions, not to replace human judgment or relationships.
                </p>
                <div>
                  <h3 className="font-bold text-white mb-3">Key Principles:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li><strong className="text-gray-300">Transparency:</strong> All AI-generated content is clearly labeled</li>
                    <li><strong className="text-gray-300">Human Oversight:</strong> AI suggestions require human approval</li>
                    <li><strong className="text-gray-300">Data Privacy:</strong> Donor data is never shared without consent</li>
                    <li><strong className="text-gray-300">Accuracy:</strong> AI outputs are verified against source data</li>
                    <li><strong className="text-gray-300">Purpose Limitation:</strong> AI is only used for specific documented use cases</li>
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
                    <Code className="h-5 w-5 text-blue-400" />
                  </div>
                  AI APIs and Models Used
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                  <h3 className="font-bold text-white mb-2">🤖 OpenAI GPT-4</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We use OpenAI's GPT-4 API for generating donor activity summaries and providing 
                    planning recommendations. This model was chosen for its strong performance in 
                    understanding context and generating coherent, useful summaries.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">📋 Use Cases</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li><strong className="text-gray-300">Donor Activity Summaries:</strong> AI analyzes giving history and patterns to generate insights</li>
                    <li><strong className="text-gray-300">Planning Support:</strong> AI provides outreach recommendations based on retention risk</li>
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
                    <Shield className="h-5 w-5 text-cyan-400" />
                  </div>
                  AI Safeguards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <h3 className="font-bold text-white mb-3">🔐 Data Protection</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Only anonymized data is sent to AI APIs when possible</li>
                    <li>Donor names and contact information are never included in prompts</li>
                    <li>All API communications use encrypted connections</li>
                    <li>API keys are stored securely in environment variables</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">✅ Output Validation</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>All AI-generated content is reviewed by staff before use</li>
                    <li>Users can edit or reject AI suggestions</li>
                    <li>Source data is always available for verification</li>
                    <li>AI outputs are clearly marked as "AI-generated"</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">⚠️ Error Handling</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>If AI calls fail, system gracefully falls back to manual processes</li>
                    <li>Users are notified of any service interruptions</li>
                    <li>All AI features are optional - core functionality works without AI</li>
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
                    <Zap className="h-5 w-5 text-green-400" />
                  </div>
                  Prompt Engineering
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-gray-300 leading-relaxed">
                  We carefully craft prompts to ensure AI generates useful, accurate, and appropriate outputs.
                </p>
                <div>
                  <h3 className="font-bold text-white mb-3">📝 Prompt Structure</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-400">
                    <li><strong className="text-gray-300">Context:</strong> Clear task description</li>
                    <li><strong className="text-gray-300">Data:</strong> Relevant anonymized data</li>
                    <li><strong className="text-gray-300">Format:</strong> Desired output format</li>
                    <li><strong className="text-gray-300">Constraints:</strong> Privacy and content boundaries</li>
                    <li><strong className="text-gray-300">Tone:</strong> Professional and appropriate voice</li>
                  </ol>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-purple-500/10 border border-green-500/20">
                  <h3 className="font-bold text-white mb-3">💡 Example</h3>
                  <pre className="text-xs text-gray-400 overflow-x-auto font-mono">
{`Analyze donor activity for nonprofits.
Data: Total gifts: 3, Total: $450,
First gift: 6 mo ago, Last gift: 1 mo ago

Generate 3-4 sentences highlighting:
1. Giving pattern
2. Engagement level  
3. Next steps

Professional tone. No personal info.`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="group relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
            <Card className="relative border-purple-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                    <Sparkles className="h-5 w-5 text-purple-400" />
                  </div>
                  How AI Improves Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                  <h3 className="font-bold text-white mb-2">⚡ Efficiency</h3>
                  <p className="text-gray-400 leading-relaxed">
                    AI quickly analyzes donor data that would take hours to review manually, allowing staff to 
                    focus on relationship-building rather than data analysis.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                  <h3 className="font-bold text-white mb-2">🔍 Insights</h3>
                  <p className="text-gray-400 leading-relaxed">
                    AI identifies patterns and trends that might be missed in manual review, such as optimal 
                    timing for follow-up or engagement shifts.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                  <h3 className="font-bold text-white mb-2">🎯 Consistency</h3>
                  <p className="text-gray-400 leading-relaxed">
                    AI provides consistent analysis across all donors, ensuring no one is overlooked and all 
                    staff have access to the same quality of insights.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                  <h3 className="font-bold text-white mb-2">📈 Scalability</h3>
                  <p className="text-gray-400 leading-relaxed">
                    As organizations grow, AI can handle increasing donor data volumes without proportional 
                    increases in staff time.
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
