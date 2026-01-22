import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, Shield, Code, Zap } from 'lucide-react'
import { getSessionUser } from '@/lib/session'
import { LogoutButton } from '@/components/logout-button'

export default async function AIPolicyPage() {
  const user = await getSessionUser()
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="relative z-20 border-b border-purple-500/20 bg-slate-900/40 backdrop-blur-xl shadow-2xl">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-400 to-blue-500 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              DonorConnect
            </h1>
          </Link>
          <div className="flex items-center gap-1 bg-slate-800/50 p-1 rounded-lg border border-purple-500/20">
            <Link href="/">
              <Button variant="ghost" size="sm" className="h-8 px-3 text-xs text-gray-300 hover:text-white hover:bg-purple-500/30 border border-transparent hover:border-purple-500/30">Home</Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" size="sm" className="h-8 px-3 text-xs text-gray-300 hover:text-white hover:bg-purple-500/30 border border-transparent hover:border-purple-500/30">About</Button>
            </Link>
            <Link href="/why-donorconnect">
              <Button variant="ghost" size="sm" className="h-8 px-3 text-xs text-gray-300 hover:text-white hover:bg-purple-500/30 border border-transparent hover:border-purple-500/30">Why</Button>
            </Link>
            <Link href="/evidence">
              <Button variant="ghost" size="sm" className="h-8 px-3 text-xs text-gray-300 hover:text-white hover:bg-purple-500/30 border border-transparent hover:border-purple-500/30">Evidence</Button>
            </Link>
            <Link href="/reflection">
              <Button variant="ghost" size="sm" className="h-8 px-3 text-xs text-gray-300 hover:text-white hover:bg-purple-500/30 border border-transparent hover:border-purple-500/30">Reflection</Button>
            </Link>
            {user ? (
              <>
                <span className="text-xs text-gray-400 font-medium bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent px-2">
                  {user.firstName} {user.lastName}
                </span>
                <LogoutButton />
              </>
            ) : (
              <Link href="/login">
                <Button size="sm" className="h-8 px-4 text-xs bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg shadow-purple-500/50 text-white font-medium ml-1">Login</Button>
              </Link>
            )}
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
                  DonorConnect uses AI to analyze donor giving patterns and generate activity summaries. The AI reads anonymized donor information (total gifts, amounts, dates, retention risk) to create concise summaries that help staff understand donor engagement and make informed decisions. All AI-generated content is clearly labeled, and staff can review and edit summaries before using them.
                </p>
                <div>
                  <h3 className="font-bold text-white mb-3">Key Principles:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li><strong className="text-gray-300">Transparency:</strong> All AI-generated content is clearly labeled</li>
                    <li><strong className="text-gray-300">Human Oversight:</strong> AI summaries are reviewed by staff before use</li>
                    <li><strong className="text-gray-300">Data Privacy:</strong> Only anonymized metrics are sent—no personal information</li>
                    <li><strong className="text-gray-300">Accuracy:</strong> AI outputs are verified against source data</li>
                    <li><strong className="text-gray-300">Purpose Limitation:</strong> AI is only used for donor activity summaries</li>
                    <li><strong className="text-gray-300">Honest Usage:</strong> We are transparent about AI's role—it assists but doesn't replace human judgment</li>
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
                    We use OpenAI's GPT-4 API to analyze donor giving history and generate activity summaries. The AI reads donor metrics like total gifts, total amount donated, first and last gift dates, retention risk level, and recent donation patterns. It then generates a 3-4 sentence summary analyzing giving patterns, engagement level, and providing actionable recommendations for donor retention.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">📋 What Data is Sent</h3>
                  <p className="text-gray-400 mb-2">Only anonymized metrics are sent to the AI—no donor names, emails, addresses, or any personally identifiable information. The AI receives only numerical data and dates about giving patterns.</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Total gifts count</li>
                    <li>Total amount donated</li>
                    <li>First and last gift dates</li>
                    <li>Retention risk level</li>
                    <li>Recent donation amounts and types</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">🚫 What Data is NOT Sent</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Donor names</li>
                    <li>Email addresses</li>
                    <li>Phone numbers</li>
                    <li>Physical addresses</li>
                    <li>Any other personal contact information</li>
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
                    <li>Only anonymized metrics (totalGifts, totalAmount, dates, retentionRisk) are sent to AI</li>
                    <li>Donor names and contact information are never included in prompts</li>
                    <li>All API communications use encrypted HTTPS connections</li>
                    <li>API keys are stored securely in environment variables, never in code</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">✅ Output Validation</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>All AI-generated summaries are reviewed by staff before use</li>
                    <li>Staff can regenerate summaries if needed</li>
                    <li>Source donor data is always available for verification</li>
                    <li>AI outputs are clearly marked as "AI-generated"</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">⚠️ Error Handling</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>If AI calls fail, the system shows an error message</li>
                    <li>Core functionality works without AI—summaries are optional</li>
                    <li>Users are notified if the AI service is unavailable</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">💯 Honest AI Usage</h3>
                  <p className="text-gray-400 mb-2">
                    We are transparent about our AI usage. The AI feature is clearly documented, and we don't claim it does more than it actually does. AI-generated summaries are optional and clearly labeled. We acknowledge that AI is a tool to assist staff, not replace human judgment or relationships with donors. All AI usage is honest, transparent, and serves a clear purpose: helping staff quickly understand donor giving patterns so they can focus on building relationships.
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
                    <Zap className="h-5 w-5 text-green-400" />
                  </div>
                  Prompt Engineering
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-gray-300 leading-relaxed">
                  We carefully craft prompts to ensure accurate, useful summaries. The prompt includes context about analyzing donor activity, anonymized metrics data, a specific format requirement (3-4 sentence summary), constraints to exclude personal information, and instructions for professional tone and actionable recommendations.
                </p>
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
