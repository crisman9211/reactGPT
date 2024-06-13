import { NavLink } from '@redwoodjs/router'

interface SidebarMenuItemProps {
  to: string
  icon: string
  title: string
  description: string
}

const SidebarMenuItem = ({
  to,
  icon,
  title,
  description,
}: SidebarMenuItemProps) => {
  return (
    <NavLink
      to={to}
      className="flex items-center justify-center rounded-md p-2 transition-colors hover:bg-gray-800"
      activeClassName="bg-gray-800"
    >
      {/* icon */}
      <i className={`${icon} mr-4 text-2xl text-indigo-400`}></i>
      <div className="flex flex-grow flex-col">
        <span className="text-lg font-semibold text-white">{title}</span>
        <span className="text-sm text-gray-400">{description}</span>
      </div>
    </NavLink>
  )
}

export default SidebarMenuItem
