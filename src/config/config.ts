const APIBASEURL = 'https://hackatorepte3.onrender.com/hydraulic/api/v1'
const SUPABASEURL = import.meta.env.VITE_SUPABASE_URL
const SUPABASEANONKEY = import.meta.env.VITE_SUPABASE_ANON_KEY
const USESTATICDATA = import.meta.env.VITE_USE_STATIC_DATA === 'true'

const HEADERSCONFIG = {
    Accept: 'application/json',
}

export {
    APIBASEURL,
    HEADERSCONFIG,
    SUPABASEURL,
    SUPABASEANONKEY,
    USESTATICDATA,
}
