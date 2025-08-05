import { Home, Pill, Brain, Heart, Moon, Settings, LogIn } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"

const menuItems = [
    {
      title: "Home",
      id: "home",
      icon: HomeIcon,
    },
    {
      title: "Vitamin Optimization",
      id: "vitamin",
      icon: PillIcon,
    },
    {
      title: "Neurochemical Optimization",
      id: "neurochemical",
      icon: BrainIcon,
    },
    {
      title: "Gut Health",
      id: "gut-health",
      icon: HeartIcon,
    },
    {
      title: "Sleep & Recovery",
      id: "sleep-recovery",
      icon: MoonIcon,
    },
    {
      title: "Settings",
      id: "settings",
      icon: SettingsIcon,
    },
    {
      title: "Login",
      id: "login",
      icon: LogInIcon,
    },
  ]

import { PageType } from "../app/ClientLayout";
import { Home as HomeIcon, Pill as PillIcon, Brain as BrainIcon, Heart as HeartIcon, Moon as MoonIcon, Settings as SettingsIcon, LogIn as LogInIcon, LogOut as LogOutIcon } from "lucide-react";

export function AppSidebar({ setCurrentPage, onLogout }: { setCurrentPage: (page: PageType) => void; onLogout: () => void }) {


  const handleNavigation = (pageId: PageType) => {
    setCurrentPage(pageId);
    // Dispatch a custom event for navigation
    window.dispatchEvent(new CustomEvent("navigate", { detail: pageId }));
  }

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          DietMaxxing
        </h2>
        <p className="text-xs text-gray-500">AI Dietary Analysis</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-600 text-xs uppercase tracking-wide">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => handleNavigation(item.id as PageType)}
                    className="flex items-center gap-3 hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel className="text-gray-600 text-xs uppercase tracking-wide">Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={onLogout}
                  className="flex items-center gap-3 hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  <LogOutIcon className="h-4 w-4" />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
