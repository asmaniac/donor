import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, Brain, Lightbulb } from 'lucide-react'
import { getSessionUser } from '@/lib/session'
import { LogoutButton } from '@/components/logout-button'

export default async function ReflectionPage() {
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
            <Link href="/ai-policy">
              <Button variant="ghost" size="sm" className="h-8 px-3 text-xs text-gray-300 hover:text-white hover:bg-purple-500/30 border border-transparent hover:border-purple-500/30">AI Policy</Button>
            </Link>
            <Link href="/evidence">
              <Button variant="ghost" size="sm" className="h-8 px-3 text-xs text-gray-300 hover:text-white hover:bg-purple-500/30 border border-transparent hover:border-purple-500/30">Evidence</Button>
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
                  The biggest challenge was choosing between AI platforms (Cursor, VS Code AI, ChatGPT, Claude) and managing rate limits by creating multiple accounts. More seriously, AI often misunderstood instructions, requiring multiple iterations and manual fixes, which sometimes took longer than writing code from scratch. Database transactions and session-based authentication also required careful implementation to ensure data consistency and security.
                </p>
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
                  If I had more time, I'd add email automation for thank-you messages, advanced donor segmentation tools, PDF report generation, and CSV export functionality. Technically, I'd add comprehensive testing, better error handling, and improved mobile responsiveness. I'd also streamline the AI integration workflow to reduce the time spent switching between platforms.
                </p>
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
                <p className="text-gray-300 leading-relaxed">
                  I learned that data modeling matters—spending time on the database schema upfront saved time later. User experience is critical—small details like success messages make a big difference. Security can't be an afterthought—implementing authentication and validation from the start is essential. Most importantly, understanding the code you write is crucial, even when using AI assistance.
                </p>
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
                <p className="text-gray-300 leading-relaxed mb-4">
                  AI helped with code generation, learning new concepts, and debugging syntax errors. However, it often misunderstood instructions, requiring multiple iterations. Choosing between platforms and managing rate limits was frustrating. AI couldn't handle project-specific business logic or test the code—manual testing was always necessary. The key takeaway: AI is a useful tool for learning and boilerplate, but building real products requires solid fundamentals and understanding your code.
                </p>
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
