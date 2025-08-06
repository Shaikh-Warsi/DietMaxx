import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function SettingsPage() {
  return (
    <div className="relative max-w-4xl mx-auto space-y-6">
      <div className="absolute top-0 right-0 p-4">
        <ThemeToggle />
      </div>
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-gray-800">Settings</CardTitle>
          <CardDescription className="text-gray-600 text-lg">Customize your DietMaxxing experience</CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Profile Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Display Name</Label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <Button className="w-full">Update Profile</Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="daily-tips">Daily Tips</Label>
              <Switch id="daily-tips" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="meal-reminders">Meal Reminders</Label>
              <Switch id="meal-reminders" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="supplement-alerts">Supplement Alerts</Label>
              <Switch id="supplement-alerts" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="units">Measurement Units</Label>
              <select className="w-full p-2 border border-gray-200 rounded-md">
                <option>Metric (kg, cm)</option>
                <option>Imperial (lbs, ft)</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <select className="w-full p-2 border border-gray-200 rounded-md">
                <option>UTC</option>
                <option>EST</option>
                <option>PST</option>
              </select>
            </div>

          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Data & Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full bg-transparent">
              Export Data
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              Clear History
            </Button>
            <Button variant="destructive" className="w-full">
              Delete Account
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
