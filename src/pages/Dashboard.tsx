import {
    Activity,
    AlertTriangle,
    ArrowDownRight,
    ArrowUpRight,
    Clock3,
    Droplets,
    Gauge,
    MapPinned,
    Sparkles,
} from 'lucide-react'

type Kpi = {
    label: string
    value: string
    delta: string
    positive: boolean
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const kpis: Kpi[] = [
    {
        label: 'Consumo hoy',
        value: '12.430 m3',
        delta: '+2.4% vs ayer',
        positive: false,
        icon: Droplets,
    },
    {
        label: 'Eficiencia de red',
        value: '93.8%',
        delta: '+1.1% semanal',
        positive: true,
        icon: Gauge,
    },
    {
        label: 'Eventos detectados',
        value: '7',
        delta: '-3 en 24h',
        positive: true,
        icon: Activity,
    },
]

const trendBars = [58, 64, 49, 71, 66, 74, 61]

const incidents = [
    {
        zone: 'Eixample Nord',
        type: 'Pico atipico',
        level: 'Media',
        time: 'Hace 12 min',
    },
    {
        zone: 'Sants-Badal',
        type: 'Caida de presion',
        level: 'Alta',
        time: 'Hace 23 min',
    },
    {
        zone: 'Sant Marti',
        type: 'Consumo nocturno',
        level: 'Baja',
        time: 'Hace 41 min',
    },
]

const levelStyle: Record<string, string> = {
    Alta: 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200',
    Media: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200',
    Baja: 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
}

const Dashboard = () => {
    return (
        <section className="relative min-h-screen overflow-hidden p-4 sm:p-6 lg:p-8">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-16 left-1/3 h-52 w-52 rounded-full bg-blue-300/35 blur-3xl dark:bg-blue-700/30" />
                <div className="absolute top-44 -left-20 h-64 w-64 rounded-full bg-orange-200/45 blur-3xl dark:bg-orange-700/20" />
                <div className="absolute right-0 bottom-0 h-72 w-72 translate-x-1/4 translate-y-1/4 rounded-full bg-indigo-200/45 blur-3xl dark:bg-indigo-700/20" />
            </div>

            <div className="mx-auto grid w-full max-w-7xl gap-4 sm:gap-6 lg:grid-cols-12">
                <article className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur-xl dark:border-gray-800/80 dark:bg-gray-950/70 sm:p-8 lg:col-span-8">
                    <div className="mb-5 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950/70 dark:text-blue-200">
                            <Sparkles className="size-3.5" />
                            Centro de control urbano
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200">
                            <Clock3 className="size-3.5" />
                            Actualizado hace 2 min
                        </span>
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                        Dashboard de consumo y deteccion temprana
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                        Vista operativa para monitorizar la red hidrica por barrios, identificar patrones y anticipar incidencias antes de que escalen.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {kpis.map((kpi) => {
                            const Icon = kpi.icon
                            return (
                                <div
                                    key={kpi.label}
                                    className="rounded-2xl border border-gray-200 bg-white/85 p-4 dark:border-gray-800 dark:bg-gray-900/70"
                                >
                                    <div className="flex items-start justify-between">
                                        <span className="text-sm text-gray-600 dark:text-gray-300">{kpi.label}</span>
                                        <span className="rounded-lg bg-gray-100 p-2 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                                            <Icon className="size-4" />
                                        </span>
                                    </div>
                                    <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-gray-50">{kpi.value}</p>
                                    <p
                                        className={`mt-1 inline-flex items-center gap-1 text-xs font-semibold ${
                                            kpi.positive ? 'text-emerald-600 dark:text-emerald-300' : 'text-orange-600 dark:text-orange-300'
                                        }`}
                                    >
                                        {kpi.positive ? <ArrowUpRight className="size-3.5" /> : <ArrowDownRight className="size-3.5" />}
                                        {kpi.delta}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </article>

                <article className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur-xl dark:border-gray-800/80 dark:bg-gray-950/70 lg:col-span-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-200">Tendencia semanal</h2>
                        <MapPinned className="size-4 text-gray-500 dark:text-gray-300" />
                    </div>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Indice de comportamiento por distrito</p>

                    <div className="mt-5 flex h-40 items-end gap-2 rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 p-3 dark:border-gray-800 dark:bg-gray-900/55">
                        {trendBars.map((value, index) => (
                            <div
                                key={`${value}-${index}`}
                                className="relative flex-1 rounded-full bg-gradient-to-t from-blue-400 to-blue-200 dark:from-blue-700 dark:to-blue-500"
                                style={{ height: `${value}%` }}
                            >
                                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-medium text-gray-500 dark:text-gray-300">
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 rounded-2xl border border-orange-200/70 bg-orange-50/70 p-4 text-sm dark:border-orange-900/70 dark:bg-orange-950/40">
                        <p className="font-semibold text-orange-800 dark:text-orange-200">Zona con mayor variacion</p>
                        <p className="mt-1 text-orange-700/90 dark:text-orange-200/90">Ciutat Vella: +8.7% en el ultimo tramo horario.</p>
                    </div>
                </article>

                <article className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur-xl dark:border-gray-800/80 dark:bg-gray-950/70 lg:col-span-7">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Incidencias recientes</h2>
                        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                            3 activas
                        </span>
                    </div>

                    <ul className="space-y-3">
                        {incidents.map((incident) => (
                            <li
                                key={incident.zone}
                                className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="rounded-xl bg-orange-100 p-2 text-orange-700 dark:bg-orange-950 dark:text-orange-200">
                                        <AlertTriangle className="size-4" />
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{incident.zone}</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">{incident.type}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-xs">
                                    <span className={`rounded-full px-2.5 py-1 font-semibold ${levelStyle[incident.level]}`}>
                                        {incident.level}
                                    </span>
                                    <span className="text-gray-500 dark:text-gray-400">{incident.time}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="rounded-3xl border border-white/60 bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-lg lg:col-span-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">Resumen operativo</p>
                    <h2 className="mt-2 text-2xl font-bold">Respuesta media: 14m</h2>
                    <p className="mt-2 text-sm text-blue-100/95">
                        El tiempo de atencion ha mejorado un 9% respecto a la semana pasada. Mantener vigilancia en Sants y Ciutat Vella.
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-2xl bg-white/10 p-3">
                            <p className="text-blue-100/80">Alertas resueltas</p>
                            <p className="mt-1 text-xl font-semibold">26</p>
                        </div>
                        <div className="rounded-2xl bg-white/10 p-3">
                            <p className="text-blue-100/80">Equipos activos</p>
                            <p className="mt-1 text-xl font-semibold">12</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Dashboard
