export interface Property {
  type: 'HOUSE' | 'HOTEL' | 'VILLA' | 'APARTMENT' | 'CAMP';
  title: string;
  guests: number;
  bedrooms: number;
  price: number;
  rating: number;
  image: string;
}

// Category-specific gradients are handled in the PropertyCard component
export const properties: Property[] = [
  // Houses
  {
    type: 'HOUSE',
    title: 'Modern Family House with Garden',
    guests: 6,
    bedrooms: 3,
    price: 850,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOUSE',
    title: 'Luxury Waterfront House',
    guests: 8,
    bedrooms: 4,
    price: 1200,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOUSE',
    title: 'Contemporary Smart Home',
    guests: 5,
    bedrooms: 3,
    price: 920,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOUSE',
    title: 'Eco-Friendly Green House',
    guests: 4,
    bedrooms: 2,
    price: 780,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOUSE',
    title: 'Historic Townhouse',
    guests: 7,
    bedrooms: 4,
    price: 1100,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOUSE',
    title: 'Seaside Family Home',
    guests: 6,
    bedrooms: 3,
    price: 950,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOUSE',
    title: 'Mountain View Residence',
    guests: 8,
    bedrooms: 4,
    price: 1300,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOUSE',
    title: 'Urban Oasis House',
    guests: 5,
    bedrooms: 3,
    price: 890,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOUSE',
    title: 'Minimalist Design House',
    guests: 4,
    bedrooms: 2,
    price: 820,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOUSE',
    title: 'Garden Paradise House',
    guests: 6,
    bedrooms: 3,
    price: 980,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800&h=500'
  },

  // Hotels
  {
    type: 'HOTEL',
    title: 'Five Star Luxury Suite',
    guests: 2,
    bedrooms: 1,
    price: 450,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOTEL',
    title: 'Panoramic View Penthouse Suite',
    guests: 4,
    bedrooms: 2,
    price: 680,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOTEL',
    title: 'Executive Business Suite',
    guests: 2,
    bedrooms: 1,
    price: 520,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOTEL',
    title: 'Royal Presidential Suite',
    guests: 6,
    bedrooms: 3,
    price: 1200,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOTEL',
    title: 'Ocean View Deluxe Room',
    guests: 2,
    bedrooms: 1,
    price: 380,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOTEL',
    title: 'Family Suite with Pool Access',
    guests: 4,
    bedrooms: 2,
    price: 620,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOTEL',
    title: 'Skyline View Junior Suite',
    guests: 2,
    bedrooms: 1,
    price: 440,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOTEL',
    title: 'Wellness Spa Suite',
    guests: 2,
    bedrooms: 1,
    price: 490,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOTEL',
    title: 'Premium Corner Suite',
    guests: 3,
    bedrooms: 1,
    price: 550,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1587985064135-0366536eab42?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'HOTEL',
    title: 'Honeymoon Paradise Suite',
    guests: 2,
    bedrooms: 1,
    price: 580,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800&h=500'
  },

  // Villas
  {
    type: 'VILLA',
    title: 'Five Palm Jumeirah Beachfront Villa',
    guests: 8,
    bedrooms: 4,
    price: 1920,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'VILLA',
    title: 'Arabian Summerhouse Family Villa',
    guests: 6,
    bedrooms: 3,
    price: 890,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'VILLA',
    title: 'Palm Island Private Pool Villa',
    guests: 10,
    bedrooms: 5,
    price: 2200,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'VILLA',
    title: 'Luxury Desert Oasis Villa',
    guests: 12,
    bedrooms: 6,
    price: 2800,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'VILLA',
    title: 'Waterfront Family Villa',
    guests: 8,
    bedrooms: 4,
    price: 1750,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'VILLA',
    title: 'Royal Garden Villa',
    guests: 6,
    bedrooms: 3,
    price: 1500,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'VILLA',
    title: 'Marina View Luxury Villa',
    guests: 10,
    bedrooms: 5,
    price: 2100,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'VILLA',
    title: 'Palm Frond Private Villa',
    guests: 8,
    bedrooms: 4,
    price: 1850,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'VILLA',
    title: 'Beachside Retreat Villa',
    guests: 6,
    bedrooms: 3,
    price: 1600,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'VILLA',
    title: 'Sunset View Premium Villa',
    guests: 10,
    bedrooms: 5,
    price: 2300,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800&h=500'
  },

  // Apartments
  {
    type: 'APARTMENT',
    title: 'Modern Downtown Apartment',
    guests: 4,
    bedrooms: 2,
    price: 320,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'APARTMENT',
    title: 'Marina View Luxury Apartment',
    guests: 3,
    bedrooms: 1,
    price: 280,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'APARTMENT',
    title: 'Business District Studio',
    guests: 2,
    bedrooms: 1,
    price: 250,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'APARTMENT',
    title: 'Skyline View Penthouse',
    guests: 6,
    bedrooms: 3,
    price: 450,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'APARTMENT',
    title: 'Cozy Urban Loft',
    guests: 2,
    bedrooms: 1,
    price: 220,
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'APARTMENT',
    title: 'Executive Suite Apartment',
    guests: 4,
    bedrooms: 2,
    price: 380,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'APARTMENT',
    title: 'Designer City Apartment',
    guests: 3,
    bedrooms: 1,
    price: 290,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'APARTMENT',
    title: 'Luxury High-Rise Suite',
    guests: 4,
    bedrooms: 2,
    price: 420,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1551361415-69c87624334f?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'APARTMENT',
    title: 'Modern Urban Oasis',
    guests: 2,
    bedrooms: 1,
    price: 260,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'APARTMENT',
    title: 'Premium City View Suite',
    guests: 4,
    bedrooms: 2,
    price: 350,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800&h=500'
  },

  // Camp Houses
  {
    type: 'CAMP',
    title: 'Desert Luxury Camp Experience',
    guests: 4,
    bedrooms: 2,
    price: 420,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'CAMP',
    title: 'Stargazing Desert Camp',
    guests: 2,
    bedrooms: 1,
    price: 380,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'CAMP',
    title: 'Bedouin Luxury Tent',
    guests: 6,
    bedrooms: 3,
    price: 520,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1520824071669-892f70d8a23d?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'CAMP',
    title: 'Safari Desert Experience',
    guests: 4,
    bedrooms: 2,
    price: 450,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'CAMP',
    title: 'Eco Desert Retreat',
    guests: 2,
    bedrooms: 1,
    price: 350,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1595274459742-4a41d35784ee?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'CAMP',
    title: 'Glamping Desert Suite',
    guests: 4,
    bedrooms: 2,
    price: 480,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'CAMP',
    title: 'Arabian Nights Camp',
    guests: 6,
    bedrooms: 3,
    price: 550,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1533619043865-1c2e2f32ff2f?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'CAMP',
    title: 'Desert Oasis Camp',
    guests: 4,
    bedrooms: 2,
    price: 420,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'CAMP',
    title: 'Sunset Desert Lodge',
    guests: 2,
    bedrooms: 1,
    price: 390,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    type: 'CAMP',
    title: 'Premium Desert Camp',
    guests: 4,
    bedrooms: 2,
    price: 480,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&q=80&w=800&h=500'
  }
];