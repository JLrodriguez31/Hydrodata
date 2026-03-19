import { apiData } from '@/db/axiosConfig'
import { ConnectionError } from '@/lib/errorsHandlers'
import { AxiosError } from 'axios'
import metricsData from '@/config/data/metrics.json'
import districtsData from '@/config/data/districts.json'
import { USESTATICDATA } from '@/config/config'

const getStaticAverages = (): Record<string, number> => {
    return districtsData.districts.reduce<Record<string, number>>(
        (acc, district) => {
            acc[district.name] = Number(district.median_consumption_m3)
            return acc
        },
        {}
    )
}

// Neighborhoods
export const getNeighborhoods = async () => {
    if (USESTATICDATA) {
        return metricsData
    }

    try {
        const response = await apiData.get(`/data`)
        return response.data
    } catch {
        // Fallback keeps the UI working if API is down.
        return metricsData
    }
}

// Averages by district
export const getAverages = async () => {
    if (USESTATICDATA) {
        return getStaticAverages()
    }

    try {
        const response = await apiData.get(`/averages`)
        return response.data as Record<string, number>
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new ConnectionError(
                `${error.response?.status || 'Network Error'}`
            )
        }
        throw new ConnectionError('Network Error')
    }
}
