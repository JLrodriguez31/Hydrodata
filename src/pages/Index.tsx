import Main from '@layouts/authn/Main'
import Spline from '@splinetool/react-spline'
import { Link } from '@tanstack/react-router'
import logo from '../assets/images/logo-index.png'
import Button2 from '../components/ui/Button2'
import github from '../assets/images/github.svg'
const Index = () => {
    return (
        <Main>
            <main className="relative w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#0b1120] to-[#0f172a] md:h-screen md:overflow-hidden">
                {/* Header: Logo izquierda + botones derecha */}
                <header className="absolute top-0 left-0 right-0 z-40 px-3 sm:px-6">
                    <div className="flex items-center justify-between px-2 py-8 sm:px-20">
                        {/* Logo */}
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-10 w-auto md:h-18 cursor-pointer hover:scale-[1.1] transition-transform ease-in-out duration-500"
                        />

                        {/* Botones Auth */}
                        <a href='https://github.com/JLrodriguez31/Hydrodata ' target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center bg-gradient-to-b gap-3 cursor-pointer hover:scale-[1.1] transition-transform ease-in-out duration-500">
                            <img
                                className="h-12 w-12"
                                src={github}
                                alt="GitHub"
                                
                            />
                        </div>
                        </a>
                    </div>
                </header>

                {/* Spline arriba en móvil, a la derecha en md+ (fondo) */}
                <div
                    className="hidden h-[55vh] w-full transition-opacity duration-800 ease-out md:block md:h-full"
                    style={{ clipPath: 'inset(0 0 56px 0)' }}
                >
                    <Spline scene="https://prod.spline.design/jXRW7HLwo1u3g2LU/scene.splinecode" />
                </div>

                {/* Área de contenido a la izquierda: en móvil debajo, en md+ sobrepuesto a la izquierda */}
                <section className="relative z-30 w-full md:absolute md:inset-y-0 md:left-15 md:w-[52%] lg:w-[50%] md:flex md:items-center">
                    <div className="relative flex max-w-3xl flex-col items-start px-6 py-28 text-left sm:px-8 md:py-0 md:pl-14 lg:pl-16">
                        <p className="mb-3 rounded-full border border-[#38bdf8]/40 bg-[#0f172a]/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#7dd3fc]">
                            Smart Water Insights
                        </p>
                        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#818cf8] bg-clip-text text-transparent">
                            Hydrodata
                        </h1>
                        <p className="mt-4 md:mt-6 text-base md:text-2xl py-6 text-white md:text-black max-w-[60ch]">
                            With Hydrodata you can monitor your water
                            consumption and receive alerts. Also you can
                            visualize your data with beautiful graphs.
                        </p>
                        <div className="mt-6 md:mt-10 flex flex-wrap items-center gap-5">
                            <Link to="/sign-up">
                                <Button2
                                    size="lg"
                                    rounded="rounded-full"
                                    borderColor="border border-transparent"
                                    bgColor="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white"
                                    gradientHover="from-[#60A5FA] via-[#60A5FA] to-[#8B5CF6]"
                                >
                                    Register
                                </Button2>
                            </Link>
                            <Link to="/sign-in">
                                <Button2
                                    size="lg"
                                    rounded="rounded-full"
                                    borderColor="border border-[#60A5FA]"
                                    bgColor="bg-transparent text-[#60A5FA] hover:text-white"
                                    gradientHover="from-[#60A5FA] to-[#60A5FA]"
                                >
                                    Login
                                </Button2>
                            </Link>
                            <Link to="/guest">
                                <Button2
                                    size="lg"
                                    rounded="rounded-full"
                                    borderColor="border border-transparent"
                                    bgColor="bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-white"
                                    gradientHover="from-[#38bdf8] via-[#2dd4bf] to-[#34d399]"
                                >
                                    Enter without registering
                                </Button2>
                            </Link>
                        </div>
                    </div>
                </section>
                <div>
                    <p className="px-6 pb-6 text-xs text-white/90 sm:text-sm md:absolute md:right-10 md:bottom-4 md:px-0 md:pb-0">
                        Hackathon Grup 1 repte 3 - Antonio - Omar - Juan Luis -
                        Jesus - Isaac - David - Alfonso - Toni
                    </p>
                </div>
            </main>
        </Main>
    )
}

export default Index
