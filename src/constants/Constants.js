export const BASE_URI = "https://hotel-booking-application-backend.onrender.com";

export const cityIdMap = {
    "Agartala": "1",
    "Banglore": "2",
    "Gandhi Nagar": "3",
    "Noida": "4",
    "Shimla": "5"
}

export const roomTypeMap = {
    "STANDARD": {
        description: {
            size: "Standard rooms are typically the most basic accommodation option offered by hotels.",
            bedding: "They usually feature standard bedding options such as one or two double beds or a queen-size bed.",
            amenities: "Standard rooms typically include essential amenities like a TV, a telephone, a small desk or table, and a private bathroom with basic toiletries.",
            views: "Views from standard rooms can vary, but they may overlook the surrounding landscape, courtyard, or parking lot.",
            space: "Standard rooms are usually compact and designed for short-term stays, offering enough space for sleeping and basic activities."
        },
        price: 1000
    },
    "DELUXE": {
        description: {
            size: "Deluxe rooms are larger and more spacious compared to standard rooms, offering additional comfort and amenities.",
            bedding: "They often feature premium bedding options such as king-size or queen-size beds with high-quality linens",
            amenities: "Deluxe rooms come equipped with enhanced amenities such as a flat-screen TV with cable or satellite channels, a minibar, a coffee maker, and complimentary bottled water.",
            views: "Deluxe rooms may offer better views of the surrounding area, city skyline, or natural landscapes.",
            space: "They typically include a seating area or a separate living space in addition to the sleeping area, providing more room to relax and unwind."
        },
        price: 2000
    },
    "SUITE": {
        description: {
            size: "Suites are the most luxurious and spacious accommodation option available in many hotels.",
            bedding: "Suites often feature a separate bedroom with a king-size or queen-size bed, along with a spacious living room or lounge area.",
            amenities: "Suites boast upscale amenities such as multiple flat-screen TVs, a fully stocked minibar, a kitchenette or full kitchen, and a dining area.",
            views: "Suites usually offer some of the best views available in the hotel, with panoramic vistas of the city, ocean, or other scenic surroundings.",
            space: "Suites provide ample space for both relaxation and entertainment, making them ideal for longer stays or for guests who desire extra comfort and luxury during their visit."
        },
        price: 3000
    }
}