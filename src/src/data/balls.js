// ═══════════════════════════════════════════════════════
// FOLEY'S FOOTBALLS — BALL INVENTORY
// This is the ONLY file you edit for inventory changes.
//
// To mark a ball sold:   change status: "active" → "sold"
// To add a new ball:     copy a block, paste at top, fill in fields
// To remove a ball:      delete the block entirely
//
// FIELDS:
//   id          unique slug for the URL  e.g. "jets-team-issued-001"
//   status      "active" or "sold"
//   title       display name
//   price       number, no $ sign
//   tag         short label for badge
//   tagType     "standard" | "special" | "logo" | "sold"
//   ebayId      eBay item number (leave "" if not on eBay)
//   stripeUrl   Stripe payment link (leave "" if not set up yet)
//   photos      array of filenames in /public/images/{id}/
//   notes       1-2 sentences about what makes this ball special
// ═══════════════════════════════════════════════════════

export const balls = [
  {
    id: "jets-team-issued-001",
    status: "active",
    title: "Jets Team Issued",
    price: 225,
    tag: "Team Issued",
    tagType: "special",
    ebayId: "236513442391",
    stripeUrl: "https://buy.stripe.com/3cIeVdcA039X6BA8dY0Jq08",
    photos: [],
    notes: "New York Jets team issued Wilson The Duke NFL game ball. Authenticated provenance, hand-conditioned to game-ready."
  },
  {
    id: "100th-season-duke-001",
    status: "active",
    title: "100th Season Duke",
    price: 225,
    tag: "100th Season",
    tagType: "special",
    ebayId: "236513742095",
    stripeUrl: "https://buy.stripe.com/28E7sL6bC8uh0dcfGq0Jq09",
    photos: [],
    notes: "Official NFL 100th season commemorative Wilson The Duke game ball. Rare centennial edition, hand-conditioned."
  },
  {
    id: "2x-rams-duke-001",
    status: "active",
    title: "2x Rams Duke",
    price: 389,
    tag: "Double Rams",
    tagType: "special",
    ebayId: "236513750225",
    stripeUrl: "https://buy.stripe.com/cNi14n2ZqbGt3po65Q0Jq0a",
    photos: [],
    notes: "Rare dual Rams logo stamp on a Wilson The Duke NFL game ball. Double-stamped, hand-conditioned to perfection."
  },
  {
    id: "rams-logo-duke-001",
    status: "active",
    title: "Rams Logo Duke",
    price: 196,
    tag: "Rams Logo",
    tagType: "logo",
    ebayId: "236568479439",
    stripeUrl: "https://buy.stripe.com/cNidR943ucKxcZYgKu0Jq05",
    photos: [],
    notes: "Wilson The Duke with official Rams logo stamp. NFL-sourced, PSA verified, hand-conditioned game-ready."
  },
  {
    id: "la-rams-duke-001",
    status: "active",
    title: "LA Rams Duke",
    price: 181,
    tag: "Rams Logo",
    tagType: "logo",
    ebayId: "236568493852",
    stripeUrl: "https://buy.stripe.com/9B66oHdE4fWJ2lkcue0Jq06",
    photos: [],
    notes: "Wilson The Duke with LA Rams logo stamp. Hand-conditioned with professional multi-step process."
  },
  {
    id: "rams-logo-duke-002",
    status: "active",
    title: "Rams Logo Duke",
    price: 181,
    tag: "Rams Logo",
    tagType: "logo",
    ebayId: "236568496267",
    stripeUrl: "https://buy.stripe.com/3cI4gzbvWeSF4tsdyi0Jq07",
    photos: [],
    notes: "Wilson The Duke with Rams logo stamp. NFL-sourced, PSA verified, hand-conditioned."
  },
  {
    id: "game-ready-duke-001",
    status: "active",
    title: "Game-Ready Duke",
    price: 175,
    tag: "Standard",
    tagType: "standard",
    ebayId: "236712073331",
    stripeUrl: "https://buy.stripe.com/3cIaEXgQg39X8JIcue0Jq00",
    photos: [],
    notes: "Authentic Wilson The Duke NFL game ball. Hand-conditioned through professional multi-step process. Game-ready from day one."
  },
  {
    id: "game-ready-duke-002",
    status: "active",
    title: "Game-Ready Duke",
    price: 175,
    tag: "Standard",
    tagType: "standard",
    ebayId: "236712078029",
    stripeUrl: "https://buy.stripe.com/9B63cv43ubGt3po8dY0Jq01",
    photos: [],
    notes: "Authentic Wilson The Duke NFL game ball. Hand-conditioned through professional multi-step process. Game-ready from day one."
  },
  {
    id: "game-ready-duke-003",
    status: "active",
    title: "Game-Ready Duke",
    price: 175,
    tag: "Standard",
    tagType: "standard",
    ebayId: "236712089570",
    stripeUrl: "https://buy.stripe.com/cNiaEX8jK8uhcZY51M0Jq02",
    photos: [],
    notes: "Authentic Wilson The Duke NFL game ball. Hand-conditioned through professional multi-step process. Game-ready from day one."
  },
  {
    id: "game-ready-duke-004",
    status: "active",
    title: "Game-Ready Duke",
    price: 175,
    tag: "Standard",
    tagType: "standard",
    ebayId: "236712095546",
    stripeUrl: "https://buy.stripe.com/aFa5kD9nObGt8JI2TE0Jq03",
    photos: [],
    notes: "Authentic Wilson The Duke NFL game ball. Hand-conditioned through professional multi-step process. Game-ready from day one."
  },
  // SOLD BALLS — keep these for the sold section
  {
    id: "game-ready-duke-sold-001",
    status: "sold",
    title: "Game-Ready Duke",
    price: 189,
    tag: "Standard",
    tagType: "standard",
    ebayId: "236608126994",
    stripeUrl: "",
    photos: [
      "https://i.ebayimg.com/images/g/j60AAeSw2BtpfCI4/s-l1600.jpg",
      "https://i.ebayimg.com/images/g/9CwAAeSwRFVpfCI4/s-l1600.jpg",
      "https://i.ebayimg.com/images/g/kHYAAeSwhf5pfCI4/s-l1600.jpg"
    ],
    notes: "Game-Ready Duke — sold."
  }
];

// Helper: get active balls only
export const activeBalls = balls.filter(b => b.status === "active");

// Helper: get sold balls only
export const soldBalls = balls.filter(b => b.status === "sold");

// Site stats
export const siteStats = {
  totalSold: 128,
  feedbackCount: 207,
  feedbackPositive: "100%",
  activeCount: activeBalls.length,
};
