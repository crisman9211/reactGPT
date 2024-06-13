import { NavLink, Link, routes } from '@redwoodjs/router'
import { menuRoutes } from 'src/router/router'

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="mt-7 flex flex-row">
      <nav className="ml-5 hidden min-h-[calc(100vh-3.0rem)] w-[370px] flex-col rounded-3xl bg-white bg-opacity-10 p-5 sm:flex">
        <h1 className="bg-gradient-to-br from-white via-white/50 bg-clip-text text-lg font-bold text-transparent lg:text-3xl">
          ReactGPT<span className="text-indigo-500">.</span>
        </h1>
        <span className="text-xl">Bienvenido</span>

        <div className="my-3 border border-gray-700" />

        {/* Opciones del menú */}
        {menuRoutes.map((option) => (
          <NavLink
            key={option.to}
            to={option.to}
            className="flex items-center justify-center rounded-md p-2 transition-colors hover:bg-gray-800"
            activeClassName="bg-gray-800"
          >
            {/* icon */}
            <i className={`${option.icon} mr-4 text-2xl text-indigo-400`}></i>
            <div className="flex flex-grow flex-col">
              <span className="text-lg font-semibold text-white">
                {option.title}
              </span>
              <span className="text-sm text-gray-400">
                {option.description}
              </span>
            </div>
          </NavLink>
        ))}
      </nav>

      <section className="mx-3 flex h-[calc(100vh-50px)] w-full flex-col rounded-3xl  bg-white bg-opacity-10 p-5 sm:mx-20">
        <div className="flex h-full flex-row">
          <div className="flex h-full flex-auto flex-col p-1">{children}</div>
        </div>
      </section>
    </main>
  )
}

export default DashboardLayout
