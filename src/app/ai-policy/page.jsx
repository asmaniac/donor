import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AIPolicyPage() {
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
        <h1 className="text-4xl font-bold mb-8">AI Policy & Safeguards</h1>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>How We Use AI Responsibly</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                DonorConnect uses AI to enhance donor management capabilities while maintaining ethical 
                standards and data privacy. Our AI integration is designed to support nonprofit staff 
                in making informed decisions, not to replace human judgment or relationships.
              </p>
              <div>
                <h3 className="font-semibold text-lg mb-2">Key Principles:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Transparency:</strong> All AI-generated content is clearly labeled and can be reviewed by staff</li>
                  <li><strong>Human Oversight:</strong> AI suggestions are recommendations that require human approval</li>
                  <li><strong>Data Privacy:</strong> Donor data is never shared with AI services without explicit consent</li>
                  <li><strong>Accuracy:</strong> AI outputs are verified against source data and can be corrected</li>
                  <li><strong>Purpose Limitation:</strong> AI is only used for specific, documented use cases</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI APIs and Models Used</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">OpenAI GPT-4</h3>
                <p>
                  We use OpenAI's GPT-4 API for generating donor activity summaries and providing 
                  planning recommendations. This model was chosen for its strong performance in 
                  understanding context and generating coherent, useful summaries.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Use Cases:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Donor Activity Summaries:</strong> AI analyzes a donor's giving history, interactions, 
                  and engagement patterns to generate a concise summary highlighting key insights</li>
                  <li><strong>Planning Support:</strong> AI provides recommendations for donor outreach strategies 
                  based on retention risk and giving patterns</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Safeguards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Data Protection:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Only anonymized or aggregated data is sent to AI APIs when possible</li>
                  <li>Donor names and contact information are never included in AI prompts</li>
                  <li>All API communications use encrypted connections</li>
                  <li>API keys are stored securely in environment variables, never in code</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Output Validation:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>All AI-generated content is reviewed by staff before use</li>
                  <li>Users can edit or reject AI suggestions</li>
                  <li>Source data is always available for verification</li>
                  <li>AI outputs are clearly marked as "AI-generated" in the interface</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Error Handling:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>If AI API calls fail, the system gracefully falls back to manual processes</li>
                  <li>Users are notified of any AI service interruptions</li>
                  <li>All AI features are optional - core functionality works without AI</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prompt Engineering</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We carefully craft prompts to ensure AI generates useful, accurate, and appropriate outputs. 
                Our prompts follow these principles:
              </p>
              <div>
                <h3 className="font-semibold text-lg mb-2">Prompt Structure:</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>Context:</strong> Provide clear context about the task (e.g., "Summarize donor activity")</li>
                  <li><strong>Data:</strong> Include relevant, anonymized data (e.g., giving patterns, dates, amounts)</li>
                  <li><strong>Format:</strong> Specify desired output format (e.g., "3-4 bullet points")</li>
                  <li><strong>Constraints:</strong> Set boundaries (e.g., "Do not include personal contact information")</li>
                  <li><strong>Tone:</strong> Define appropriate tone (e.g., "Professional and concise")</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Example Prompt:</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`You are analyzing donor activity for a nonprofit organization. 
Given the following anonymized donor data:
- Total gifts: 3
- Total amount: $450
- First gift date: 6 months ago
- Last gift date: 1 month ago
- Retention risk: LOW

Generate a 3-4 sentence summary highlighting:
1. Giving pattern and consistency
2. Engagement level
3. Recommended next steps

Do not include any personal information. Use professional, concise language.`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How AI Improves Our Solution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Efficiency:</h3>
                <p>
                  AI quickly analyzes donor data that would take staff hours to review manually, 
                  allowing them to focus on relationship-building rather than data analysis.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Insights:</h3>
                <p>
                  AI identifies patterns and trends that might be missed in manual review, such as 
                  optimal timing for follow-up or giving pattern changes that indicate engagement shifts.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Consistency:</h3>
                <p>
                  AI provides consistent analysis across all donors, ensuring no one is overlooked 
                  and all staff have access to the same quality of insights.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Scalability:</h3>
                <p>
                  As organizations grow, AI can handle increasing volumes of donor data without 
                  proportional increases in staff time, making the platform scalable.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center pt-8">
            <Link href="/login">
              <Button size="lg">Explore DonorConnect</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
