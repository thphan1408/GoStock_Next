import SideNavbar from '@/components/side-navbar'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="min-h-screen w-full flex border">
        <SideNavbar />
        <div className="p-8 w-full">{children}</div>
      </div>
    </>
  )
}
