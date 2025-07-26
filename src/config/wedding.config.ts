import { WeddingConfigType } from "@/interfaces/config"

const weddingConfig: WeddingConfigType = {
    people: {
        bride: { firstname: 'Sara', lastName: ''},
        groom: { firstname: 'Matteo', lastName: '' }
    },
    date: {
        date: '2026-06-13',
        time: '17:30' // Optional
    },
    location: {
        title: 'Villa Malaspina',
        address: 'Viale Cesare Battisti 17, Gualtieri (RE)',
        link: 'https://maps.app.goo.gl/1dkBq49uxjo46brw8,
        latLng: '44.910002, 10.598130'
    }
}

export default weddingConfig
