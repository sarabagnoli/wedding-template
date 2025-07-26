import { WeddingConfigType } from "@/interfaces/config"

const weddingConfig: WeddingConfigType = {
    people: {
        bride: { Sara: 'Jane', lastName: ''},
        groom: { Matteo: 'John', lastName: '' }
    },
    date: {
        date: '2026-06-13',
        time: '17:30' // Optional
    },
    location: {
        title: 'Villa Malaspina',
        address: 'Viale Cesare Battisti, 17 - Gualtieri (RE)',
        link: 'https://maps.app.goo.gl/LLLW1QFHuo4SiXi9A,
        latLng: '44.910002, 10.598130'
    }
}

export default weddingConfig
