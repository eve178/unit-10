const websiteIndex = [
    {
        title: "Home",
        url: "index.html",
        keywords: ["home", "main", "welcome", "amap", "start"]
    },
    {
        title: "Shopping",
        url: "shopping.html",
        keywords: ["shopping", "shops", "primark", "next", "waterstones", "hmv", "hollister", "zara", "brandy melville", "marks and spencers", "clothing", "clothes", "stores"]
    },
    {
        title: "Food and Restaurants",
        url: "food.html",
        keywords: ["food", "restaurants", "eat", "kfc", "wagamamas", "pizza express", "bella italia", "the cosmo", "mcdonalds", "nandos", "cuisine", "take-away", "riverside terrace"]
    },
    {
        title: "Banks",
        url: "bank.html",
        keywords: ["banks", "finance", "money", "santander", "barclays", "hsbc", "atm"]
    },
    {
        title: "Facilities and Accessibility",
        url: "facilities.html",
        keywords: ["facilities", "disabled", "accessible parking", "changing places", "toilets", "lift access", "escalator", "mens", "womens"]
    },
    {
        title: "Parking",
        url: "parking.html",
        keywords: ["parking", "prices", "tariffs", "car park", "spaces", "contactless", "payment", "weekday", "weekend", "parent-child"]
    },
    {
        title: "Special Offers and Discounts",
        url: "offers.html",
        keywords: ["offers", "discounts", "special offers", "half price", "student savings", "free arts and crafts", "summer sales", "kids eat free", "2 for 1", "electronics"]
    },
    {
        title: "Centre Information",
        url: "info.html",
        keywords: ["information", "centre info", "contact us", "telephone", "email", "address", "post", "faqs", "opening times", "hours", "location", "travel", "map", "bus", "train"]
    },
    {
        title: "Help and Interface Navigation",
        url: "help.html",
        keywords: ["help", "navigation", "interface", "guide", "search bar", "icons", "improvements", "feedback"]
    }
];

function executeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const query = searchInput.value.trim().toLowerCase();

    if (query === "") {
        alert("Please enter something to search for.");
        return;
    }

    const match = websiteIndex.find(page => {
        return page.title.toLowerCase().includes(query) || 
               page.url.toLowerCase().includes(query) || 
               page.keywords.some(keyword => keyword.includes(query));
    });

    if (match) {
        window.location.href = match.url;
    } else {
        alert("No results found for '" + searchInput.value + "'. Try searching for 'parking', 'food', 'primark', or 'hours'.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            executeSearch();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                executeSearch();
            }
        });
    }
});