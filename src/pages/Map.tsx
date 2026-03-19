import { useMemo, useState } from 'react'
import districtsData from '../config/data/districts.json'
import mapImage from '../assets/images/Mapa.png'

interface District {
    name: string
    median_consumption_m3: number
    description: string
    position: {
        top: number
        left: number
        width: number
        height: number
    }
}

export default function MapPage() {
    const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(
        null
    )
    const [debugMode] = useState(false)
    const [selectedDistrict, setSelectedDistrict] = useState<District | null>(
        null
    )

    const updatePosition = (
        index: number,
        key: keyof District['position'],
        value: number
    ) => {
        const newDistricts = [...districtsData.districts]
        newDistricts[index].position[key] = value
        console.log('Posición actualizada:', newDistricts[index])
    }

    // Demo mode: promedios derivados de datos locales.
    const averagesRaw = useMemo(() => {
        return districtsData.districts.reduce<Record<string, number>>(
            (acc, district) => {
                acc[district.name] = Number(district.median_consumption_m3)
                return acc
            },
            {}
        )
    }, [])

    // 2) Normalización de nombres para cruzar API <-> JSON local
    const normalize = (s: string) =>
        s
            .toLowerCase()
            .replace(/st\.?/g, 'sant') // "St." -> "Sant"
            .replace(/-/g, ' ')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // quitar acentos
            .replace(/\s+/g, ' ')
            .trim()

    const averagesIndex = useMemo(() => {
        const idx: Record<string, number> = {}
        if (averagesRaw && typeof averagesRaw === 'object') {
            Object.entries(averagesRaw as Record<string, number>).forEach(
                ([k, v]) => {
                    idx[normalize(k)] = Number(v)
                }
            )
        }
        return idx
    }, [averagesRaw])

    // Sin color por intensidad. Conservamos solo datos para tooltip.

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-cyan-800 text-white p-4 md:p-8">
            <div className="mb-8 text-center">
                <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
                    🗺️ Mapa de Consumo de Agua por Distrito (Promedios)
                </h1>
                <p className="text-sm md:text-base opacity-90 mt-1">
                    Pasa el ratón sobre cada distrito para ver el promedio de
                    consumo. Base: datos demo locales
                </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                <img
                    src={mapImage}
                    alt="Mapa de Barcelona"
                    className="w-full h-auto rounded-xl shadow-lg"
                    style={{ maxWidth: '100%', maxHeight: '80vh' }}
                />

                {districtsData.districts.map((district, index) => (
                    <div
                        key={index}
                        className={`absolute cursor-pointer transition-all duration-200 ${
                            debugMode
                                ? 'border-2 border-yellow-400 bg-yellow-200/30'
                                : 'hover:bg-[#00E0D0]/30'
                        }`}
                        style={{
                            top: `${district.position.top}px`,
                            left: `${district.position.left}px`,
                            width: `${district.position.width}px`,
                            height: `${district.position.height}px`,
                            backgroundColor: debugMode
                                ? 'rgba(255, 255, 0, 0.2)'
                                : 'transparent',
                            borderRadius: '4px',
                            zIndex: 10,
                        }}
                        onMouseEnter={() => setHoveredDistrict(district)}
                        onMouseLeave={() => setHoveredDistrict(null)}
                        onClick={() => {
                            if (debugMode) setSelectedDistrict(district)
                        }}
                    />
                ))}

                {debugMode && selectedDistrict && (
                    <div className="absolute top-4 right-4 bg-white text-black p-4 rounded-lg shadow-lg z-50 max-w-xs">
                        <h3 className="font-bold mb-2">
                            Ajustando: {selectedDistrict.name}
                        </h3>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                            <label className="text-xs">Top:</label>
                            <input
                                type="number"
                                value={selectedDistrict.position.top}
                                onChange={(e) =>
                                    updatePosition(
                                        districtsData.districts.indexOf(
                                            selectedDistrict
                                        ),
                                        'top',
                                        parseInt(e.target.value)
                                    )
                                }
                                className="border p-1 text-sm"
                            />
                            <label className="text-xs">Left:</label>
                            <input
                                type="number"
                                value={selectedDistrict.position.left}
                                onChange={(e) =>
                                    updatePosition(
                                        districtsData.districts.indexOf(
                                            selectedDistrict
                                        ),
                                        'left',
                                        parseInt(e.target.value)
                                    )
                                }
                                className="border p-1 text-sm"
                            />
                            <label className="text-xs">Width:</label>
                            <input
                                type="number"
                                value={selectedDistrict.position.width}
                                onChange={(e) =>
                                    updatePosition(
                                        districtsData.districts.indexOf(
                                            selectedDistrict
                                        ),
                                        'width',
                                        parseInt(e.target.value)
                                    )
                                }
                                className="border p-1 text-sm"
                            />
                            <label className="text-xs">Height:</label>
                            <input
                                type="number"
                                value={selectedDistrict.position.height}
                                onChange={(e) =>
                                    updatePosition(
                                        districtsData.districts.indexOf(
                                            selectedDistrict
                                        ),
                                        'height',
                                        parseInt(e.target.value)
                                    )
                                }
                                className="border p-1 text-sm"
                            />
                        </div>
                        <button
                            onClick={() => setSelectedDistrict(null)}
                            className="w-full px-3 py-1 bg-gray-500 text-white rounded text-sm"
                        >
                            Cerrar
                        </button>
                    </div>
                )}

                {hoveredDistrict && (
                    <div
                        className="absolute bg-white text-black p-4 rounded-lg shadow-lg border border-gray-200 max-w-xs z-50"
                        style={{
                            top: '20px',
                            right: '20px',
                            transform: 'translateX(-50%)',
                        }}
                    >
                        <h3 className="font-bold text-lg mb-1">
                            {hoveredDistrict.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-blue-600 font-bold text-xl">
                                💧
                            </span>
                            <span className="font-medium">
                                Promedio:{' '}
                                {(
                                    averagesIndex[
                                        normalize(hoveredDistrict.name)
                                    ] ?? 0
                                ).toLocaleString(undefined, {
                                    maximumFractionDigits: 2,
                                })}{' '}
                                m³
                            </span>
                        </div>
                        <p className="text-xs opacity-70">Fuente: datos demo</p>
                    </div>
                )}
            </div>

            <footer className="mt-12 text-center text-sm opacity-80">
                <p>
                    Projecte alineat amb l’
                    <strong>ODS 6 (Aigua neta i sanejament)</strong> i{' '}
                    <strong>ODS 13 (Acció pel clima)</strong>
                </p>
                <p className="mt-1">
                    Dades: Agència Catalana de l’Aigua | Aigües de Barcelona |
                    2015
                </p>
            </footer>
        </div>
    )
}
