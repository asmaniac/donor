import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function EvidencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-gray-900">DonorConnect</h1>
          </Link>
          <div className="flex gap-4">
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Evidence & Rubric</h1>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>CCC.1.3 Evidence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>Requirement:</strong> Build a working MVP with multiple pages
              </p>
              <div>
                <h3 className="font-semibold mb-2">Evidence:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Multiple Pages:</strong> Home, About, Why DonorConnect, Dashboard, Donors, Donations, AI Policy, Evidence, Reflection</li>
                  <li><strong>Working MVP:</strong> All pages are functional and connected to a real database</li>
                  <li><strong>Data Persistence:</strong> Donors and donations are stored in PostgreSQL database via Prisma ORM</li>
                  <li><strong>API Integration:</strong> All data displayed comes from API endpoints that query the database</li>
                  <li><strong>Forms:</strong> Add Donor and Add Donation forms successfully save data to the database</li>
                  <li><strong>Confirmation:</strong> Forms show success messages and redirect after successful submission</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Key Features Demonstrated:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Dashboard shows real-time metrics from database (total donors, donations, total raised, lapsed donors)</li>
                  <li>Donors page lists all donors with search functionality</li>
                  <li>Donations page shows all donations linked to donor information</li>
                  <li>Add Donor form creates new donors that persist in database</li>
                  <li>Add Donation form creates donations linked to donors and automatically updates donor metrics</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>TS.6.2 Evidence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>Requirement:</strong> Use AI responsibly
              </p>
              <div>
                <h3 className="font-semibold mb-2">Evidence:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>AI Policy Page:</strong> Comprehensive documentation of AI usage, safeguards, and responsible practices</li>
                  <li><strong>Data Privacy:</strong> Donor personal information is never sent to AI APIs</li>
                  <li><strong>Transparency:</strong> All AI usage is clearly documented and explained</li>
                  <li><strong>Human Oversight:</strong> AI outputs are reviewed by staff before use</li>
                  <li><strong>Error Handling:</strong> System gracefully handles AI API failures</li>
                  <li><strong>Purpose Limitation:</strong> AI is used only for specific, documented use cases (donor summaries, planning support)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Safeguards Implemented:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>API keys stored securely in environment variables</li>
                  <li>Encrypted connections for all API communications</li>
                  <li>Anonymized data sent to AI when possible</li>
                  <li>Clear labeling of AI-generated content</li>
                  <li>Ability to edit or reject AI suggestions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>TS.6.3 Evidence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>Requirement:</strong> Integrate AI tools into your workflow or product
              </p>
              <div>
                <h3 className="font-semibold mb-2">Evidence:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>AI Integration:</strong> OpenAI GPT-4 API integrated for donor activity summaries</li>
                  <li><strong>API Implementation:</strong> AI API calls implemented in backend API routes</li>
                  <li><strong>Use Cases:</strong> AI used to generate donor activity summaries and planning recommendations</li>
                  <li><strong>Prompt Engineering:</strong> Carefully crafted prompts to ensure useful, accurate outputs</li>
                  <li><strong>Documentation:</strong> AI Policy page explains how AI is used, what models are used, and how prompts are crafted</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">AI Features:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Donor activity summary generation using OpenAI API</li>
                  <li>Planning support recommendations based on donor data</li>
                  <li>Integration with existing donor management workflow</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">GitHub Repository:</h3>
                <p className="text-blue-600">
                  <a href="https://github.com/[your-username]/donorconnect" target="_blank" rel="noopener noreferrer">
                    https://github.com/[your-username]/donorconnect
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  (Update with your actual GitHub repository URL)
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Vercel Deployment:</h3>
                <p className="text-blue-600">
                  <a href="https://donorconnect.vercel.app" target="_blank" rel="noopener noreferrer">
                    https://donorconnect.vercel.app
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  (Update with your actual Vercel deployment URL)
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Wireframes:</h3>
                <p className="text-blue-600">
                  <a href="[wireframe-link]" target="_blank" rel="noopener noreferrer">
                    View Wireframes
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  (Link to your wireframe documentation)
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Project Management:</h3>
                <p className="text-blue-600">
                  <a href="[trello-link]" target="_blank" rel="noopener noreferrer">
                    View Trello Board
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  (Link to your project management board if applicable)
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center pt-8">
            <Link href="/login">
              <Button size="lg">Try DonorConnect</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
