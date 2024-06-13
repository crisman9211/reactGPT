type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <>
  <h1>DashboardLayout</h1>
  {children}
  </>
}

export default DashboardLayout
