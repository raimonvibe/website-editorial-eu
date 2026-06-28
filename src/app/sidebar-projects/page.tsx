import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import SidebarProjects from '@/components/SidebarProjects'
import Footer from '@/components/Footer'

export default function SidebarProjectsPage() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header />
          <SidebarProjects />
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
