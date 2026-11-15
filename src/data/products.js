export const CATEGORIES = ['Candles & scent', 'Ceramics', 'Textiles', 'Everyday']

export const PRODUCTS = [
  {
    slug: 'amber-cedar-soy-candle',
    name: 'Amber & Cedar soy candle',
    category: 'Candles & scent',
    price: 24,
    sku: 'NE-CN-101',
    image: 'candle-amber-cedar',
    short: 'Smoked amber, cedarwood and a little black pepper, poured in a reusable glass tumbler.',
    description:
      'Our signature scent for darker evenings. Hand-poured in small batches from natural soy wax with a cotton wick, it burns cleanly and evenly for around 45 hours. When it is finished, wash out the glass and use it for tea lights, pencils or cuttings.',
    details: ['220 g natural soy wax', 'Approx. 45 hour burn time', 'Cotton wick, no paraffin', 'Glass 8 cm × 9 cm'],
    featured: true,
  },
  {
    slug: 'fireside-twin-wick-candle',
    name: 'Fireside twin-wick candle',
    category: 'Candles & scent',
    price: 32,
    sku: 'NE-CN-102',
    image: 'candle-fireside',
    short: 'Birch smoke, tonka and clove. Two wicks for a wider, faster melt in larger rooms.',
    description:
      'Made for living rooms and open-plan spaces. The twin wicks create a full melt pool within the first hour, so the scent carries well without being overpowering. Trim wicks to 5 mm before each burn.',
    details: ['320 g natural soy wax', 'Approx. 55 hour burn time', 'Two cotton wicks', 'Glass 10 cm × 9 cm'],
  },
  {
    slug: 'room-and-linen-oil',
    name: 'Room & linen oil, Pine Hollow',
    category: 'Candles & scent',
    price: 18,
    sku: 'NE-SC-201',
    image: 'room-oil',
    short: 'A few drops on linen, a diffuser stone or a radiator dish. Pine needle, fir balsam and vetiver.',
    description:
      'A concentrated blend of essential and fragrance oils in an amber glass dropper bottle. Use 2 to 3 drops on pillows, a reed diffuser stone or a warm radiator dish. Not for use on skin.',
    details: ['30 ml amber glass with dropper', 'Vegan, not tested on animals', 'Keep away from children', 'Made in the UK'],
  },
  {
    slug: 'botanical-evening-set',
    name: 'Botanical evening set',
    category: 'Candles & scent',
    price: 46,
    sku: 'NE-SC-202',
    image: 'botanical-set',
    short: 'Pillow mist, bath oil and a travel candle, boxed together. Lavender, chamomile and sage.',
    description:
      'A boxed set for winding down: 50 ml pillow mist, 100 ml bath oil and a 90 g travel candle in a tin. Packed in recyclable card with no plastic fillers, ready to give as a gift.',
    details: ['50 ml pillow mist', '100 ml bath oil', '90 g travel candle', 'Gift box included'],
    featured: true,
  },
  {
    slug: 'stoneware-morning-mug',
    name: 'Stoneware morning mug',
    category: 'Ceramics',
    price: 16,
    sku: 'NE-CR-301',
    image: 'mug-stoneware',
    short: 'A generous 350 ml mug with a wide handle and a smooth satin glaze.',
    description:
      'Thrown in stoneware and finished in a soft white satin glaze. The wide handle fits three fingers and the thick walls keep tea hot for longer. Each one varies slightly in shape.',
    details: ['350 ml capacity', 'Dishwasher and microwave safe', 'Stoneware, satin glaze', 'Sold individually'],
  },
  {
    slug: 'speckled-tumbler-set',
    name: 'Speckled tumbler set of four',
    category: 'Ceramics',
    price: 38,
    sku: 'NE-CR-302',
    image: 'tumbler-set',
    short: 'Handle-free cups in oatmeal speckle. For espresso, water or a small sake pour.',
    description:
      'Four nesting tumblers in a speckled oatmeal glaze with an unglazed foot. They stack neatly in a cupboard and work for coffee, water or as small planters.',
    details: ['4 × 200 ml', 'Dishwasher safe', 'Speckled reactive glaze', 'Stackable'],
    featured: true,
  },
  {
    slug: 'terracotta-bud-vase-trio',
    name: 'Clay bud vase trio',
    category: 'Ceramics',
    price: 42,
    sku: 'NE-CR-303',
    image: 'vase-trio',
    short: 'Three small vases in sand, stone and blush, for single stems and dried grasses.',
    description:
      'A trio of matte clay vases in three heights, designed to be grouped on a shelf or windowsill. The interiors are glazed so they hold water for fresh stems.',
    details: ['Heights 12, 15 and 18 cm', 'Glazed interior, watertight', 'Matte exterior', 'Wipe clean only'],
    featured: true,
  },
  {
    slug: 'striped-linen-cushion',
    name: 'Striped linen cushion cover',
    category: 'Textiles',
    price: 28,
    sku: 'NE-TX-401',
    image: 'cushion-linen',
    short: 'Washed European linen in rust and natural stripe, with a hidden zip.',
    description:
      'Stone-washed linen that softens further with every wash. The cover has a concealed zip and fits a standard 45 × 45 cm inner. Inner sold separately.',
    details: ['100% European linen', '45 × 45 cm', 'Machine wash at 30°C', 'Concealed zip'],
  },
  {
    slug: 'insulated-everyday-bottle',
    name: 'Insulated everyday bottle',
    category: 'Everyday',
    price: 26,
    sku: 'NE-EV-501',
    image: 'bottle-insulated',
    short: 'Double-walled steel in moss green. Cold for 24 hours, hot for 12.',
    description:
      'A 500 ml vacuum-insulated bottle with a powder-coated finish that does not slip in the hand. The leak-proof lid has a steel interior so drinks never touch plastic.',
    details: ['500 ml', 'Cold 24 h / hot 12 h', '18/8 stainless steel', 'Hand wash only'],
  },
]

export const findProduct = (slug) => PRODUCTS.find((p) => p.slug === slug)
