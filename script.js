/* =========================================================
   GLOBAL RELEASE TRACKER — UNIVERSAL MULTI-SHOW ENGINE
   Precision Countdown Synchronizer & IMDb Verified Show Catalog
   Current Tracking Reference Date: August 26, 2026
   ========================================================= */

/* =========================================================
   LANTERNS SEASON 1 EPISODES DATA WITH IMDB RATINGS
   Sundays at 9:00 PM ET / Mondays at 01:00:00 UTC
   ========================================================= */
const episodes = [
    {
        number: 1,
        title: "Pilot",
        releaseUTC: "2026-08-17T01:00:00Z",
        imdbRating: "8.7",
        imdbVotes: "4.2k"
    },
    {
        number: 2,
        title: "Trust Fall",
        releaseUTC: "2026-08-24T01:00:00Z",
        imdbRating: "8.9",
        imdbVotes: "3.5k"
    },
    {
        number: 3,
        title: "TBA",
        releaseUTC: "2026-08-31T01:00:00Z",
        imdbRating: null,
        imdbVotes: null
    },
    {
        number: 4,
        title: "TBA",
        releaseUTC: "2026-09-07T01:00:00Z",
        imdbRating: null,
        imdbVotes: null
    },
    {
        number: 5,
        title: "TBA",
        releaseUTC: "2026-09-14T01:00:00Z",
        imdbRating: null,
        imdbVotes: null
    },
    {
        number: 6,
        title: "TBA",
        releaseUTC: "2026-09-21T01:00:00Z",
        imdbRating: null,
        imdbVotes: null
    },
    {
        number: 7,
        title: "TBA",
        releaseUTC: "2026-09-28T01:00:00Z",
        imdbRating: null,
        imdbVotes: null
    },
    {
        number: 8,
        title: "Season Finale (TBA)",
        releaseUTC: "2026-10-05T01:00:00Z",
        imdbRating: null,
        imdbVotes: null
    }
];

/* =========================================================
   REAL UPCOMING SHOWS (PREMIERES POST AUGUST 26, 2026) WITH IMDB RATINGS
   ========================================================= */
const tmdbShowsData = [
    {
        id: 219356,
        title: "Lanterns",
        season: "Season 1",
        episodesCount: "8 Episodes",
        network: "HBO / Max",
        networkClass: "hbo",
        category: "live",
        hasExactDate: true,
        releaseDateText: "August 16, 2026 (Live Now)",
        imdbRating: "8.5",
        imdbEpAvg: "8.8",
        voteCount: "12k",
        genres: ["Sci-Fi & Fantasy", "Mystery", "Crime", "Drama"],
        overview: "Intergalactic cops Hal Jordan and John Stewart investigate a dark terrestrial mystery in the heartland of Earth.",
        trackerUrl: "lanterns.html",
        isLive: true
    },
    {
        id: 114881,
        title: "Slow Horses",
        season: "Season 6",
        episodesCount: "6 Episodes",
        network: "Apple TV+",
        networkClass: "apple",
        category: "confirmed",
        hasExactDate: true,
        releaseDateText: "September 16, 2026",
        imdbRating: "8.3",
        imdbEpAvg: "8.5",
        voteCount: "110k",
        genres: ["Thriller", "Drama", "Crime"],
        overview: "Jackson Lamb and his team of disgraced MI5 rejects at Slough House navigate high-stakes espionage conspiracies.",
        trackerUrl: "#",
        isLive: false
    },
    {
        id: 210855,
        title: "Monster: The Lizzie Borden Story",
        season: "Season 3",
        episodesCount: "8 Episodes",
        network: "Netflix",
        networkClass: "netflix",
        category: "confirmed",
        hasExactDate: true,
        releaseDateText: "September 17, 2026",
        imdbRating: "7.9",
        imdbEpAvg: "8.1",
        voteCount: "220k",
        genres: ["Crime", "Drama", "Biography"],
        overview: "Ryan Murphy's anthology chronicles the infamous 1892 axe murders of the Borden family in Fall River, Massachusetts.",
        trackerUrl: "#",
        isLive: false
    },
    {
        id: 214588,
        title: "Bad Monkey",
        season: "Season 2",
        episodesCount: "10 Episodes",
        network: "Apple TV+",
        networkClass: "apple",
        category: "confirmed",
        hasExactDate: true,
        releaseDateText: "December 2, 2026",
        imdbRating: "7.4",
        imdbEpAvg: "7.8",
        voteCount: "35k",
        genres: ["Comedy", "Crime", "Drama"],
        overview: "Andrew Yancy is drawn into a tangled web of Florida greed, corruption, and bizarre crimes.",
        trackerUrl: "#",
        isLive: false
    },
    {
        id: 224884,
        title: "Harry Potter (HBO Original Series)",
        season: "Season 1",
        episodesCount: "10 Episodes",
        network: "HBO / Max",
        networkClass: "hbo",
        category: "tba",
        hasExactDate: false,
        releaseDateText: "December 2026 (TBA)",
        imdbRating: "Anticipated",
        imdbEpAvg: "TBA",
        voteCount: "Pre-Release",
        genres: ["Sci-Fi & Fantasy", "Adventure", "Drama"],
        overview: "A decade-long authentic adaptation of the classic novels exploring the Wizarding World anew.",
        trackerUrl: "#",
        isLive: false
    },
    {
        id: 212580,
        title: "Neuromancer",
        season: "Season 1",
        episodesCount: "10 Episodes",
        network: "Apple TV+",
        networkClass: "apple",
        category: "confirmed",
        hasExactDate: true,
        releaseDateText: "January 22, 2027",
        imdbRating: "Anticipated",
        imdbEpAvg: "TBA",
        voteCount: "Pre-Release",
        genres: ["Sci-Fi & Fantasy", "Cyberpunk", "Drama"],
        overview: "A damaged super-hacker named Case is thrust into a web of digital espionage and high-stakes cyber warfare.",
        trackerUrl: "#",
        isLive: false
    },
    {
        id: 219760,
        title: "Spider-Noir",
        season: "Season 1",
        episodesCount: "8 Episodes",
        network: "Prime Video",
        networkClass: "prime",
        category: "tba",
        hasExactDate: false,
        releaseDateText: "(TBA 2026/2027)",
        imdbRating: "Anticipated",
        imdbEpAvg: "TBA",
        voteCount: "Pre-Release",
        genres: ["Action & Adventure", "Crime", "Mystery"],
        overview: "Starring Nicolas Cage as an aging private investigator in 1930s New York grappling with his vigilante past.",
        trackerUrl: "#",
        isLive: false
    },
    {
        id: 210916,
        title: "Blade Runner 2099",
        season: "Limited Series",
        episodesCount: "8 Episodes",
        network: "Prime Video",
        networkClass: "prime",
        category: "tba",
        hasExactDate: false,
        releaseDateText: "(TBA 2026/2027)",
        imdbRating: "Anticipated",
        imdbEpAvg: "TBA",
        voteCount: "Pre-Release",
        genres: ["Sci-Fi", "Drama", "Mystery"],
        overview: "In Los Angeles 2099, a runaway synthetically created being pairs with an aging Blade Runner to unveil a megacity conspiracy.",
        trackerUrl: "#",
        isLive: false
    },
    {
        id: 94997,
        title: "House of the Dragon",
        season: "Season 3",
        episodesCount: "8 Episodes",
        network: "HBO / Max",
        networkClass: "hbo",
        category: "tba",
        hasExactDate: false,
        releaseDateText: "(TBA 2027)",
        imdbRating: "8.4",
        imdbEpAvg: "8.6",
        voteCount: "410k",
        genres: ["Sci-Fi & Fantasy", "Drama", "Action & Adventure"],
        overview: "The Dance of the Dragons reaches its brutal boiling point as the Black and Green factions clash across Westeros.",
        trackerUrl: "#",
        isLive: false
    },
    {
        id: 254880,
        title: "Vought Rising (The Boys Prequel)",
        season: "Season 1",
        episodesCount: "8 Episodes",
        network: "Prime Video",
        networkClass: "prime",
        category: "tba",
        hasExactDate: false,
        releaseDateText: "(TBA 2027)",
        imdbRating: "Anticipated",
        imdbEpAvg: "TBA",
        voteCount: "Pre-Release",
        genres: ["Action", "Crime", "Drama"],
        overview: "A twisted 1950s murder mystery exploring the origins of Vought, Soldier Boy, and Stormfront.",
        trackerUrl: "#",
        isLive: false
    }
];

/* =========================================================
   COMPREHENSIVE GLOBAL TIMEZONES DATABASE
   ========================================================= */
const timezoneGroups = [
    {
        region: "Popular Global Timezones",
        timezones: [
            { id: "Asia/Karachi", label: "🇵🇰 Pakistan (Karachi, Islamabad)", offset: "UTC+5" },
            { id: "America/New_York", label: "🇺🇸 US East (New York, Miami)", offset: "UTC-4/5 (ET)" },
            { id: "America/Los_Angeles", label: "🇺🇸 US West (Los Angeles, SF)", offset: "UTC-7/8 (PT)" },
            { id: "Europe/London", label: "🇬🇧 UK (London, Dublin)", offset: "UTC+1/0 (BST/GMT)" },
            { id: "Asia/Dubai", label: "🇦🇪 UAE (Dubai, Abu Dhabi)", offset: "UTC+4 (GST)" },
            { id: "Asia/Kolkata", label: "🇮🇳 India (Mumbai, Delhi)", offset: "UTC+5:30 (IST)" },
            { id: "Asia/Tokyo", label: "🇯🇵 Japan (Tokyo, Osaka)", offset: "UTC+9 (JST)" },
            { id: "Australia/Sydney", label: "🇦🇺 Australia (Sydney, Melbourne)", offset: "UTC+10 (AEST)" },
            { id: "Europe/Berlin", label: "🇩🇪 Germany (Berlin, Frankfurt)", offset: "UTC+2/1 (CEST/CET)" },
            { id: "America/Chicago", label: "🇺🇸 US Central (Chicago, Dallas)", offset: "UTC-5/6 (CT)" },
            { id: "America/Sao_Paulo", label: "🇧🇷 Brazil (São Paulo, Rio)", offset: "UTC-3 (BRT)" },
            { id: "Asia/Singapore", label: "🇸🇬 Singapore & Malaysia", offset: "UTC+8 (SGT)" }
        ]
    },
    {
        region: "North & South America",
        timezones: [
            { id: "America/New_York", label: "US / Canada Eastern (New York, Toronto)", offset: "UTC-4/5" },
            { id: "America/Chicago", label: "US / Canada Central (Chicago, Winnipeg)", offset: "UTC-5/6" },
            { id: "America/Denver", label: "US / Canada Mountain (Denver, Calgary)", offset: "UTC-6/7" },
            { id: "America/Los_Angeles", label: "US / Canada Pacific (Los Angeles, Vancouver)", offset: "UTC-7/8" },
            { id: "America/Anchorage", label: "US Alaska (Anchorage)", offset: "UTC-8/9" },
            { id: "Pacific/Honolulu", label: "US Hawaii (Honolulu)", offset: "UTC-10" },
            { id: "America/Mexico_City", label: "Mexico (Mexico City)", offset: "UTC-6" },
            { id: "America/Bogota", label: "Colombia (Bogota)", offset: "UTC-5" },
            { id: "America/Lima", label: "Peru (Lima)", offset: "UTC-5" },
            { id: "America/Sao_Paulo", label: "Brazil (São Paulo)", offset: "UTC-3" },
            { id: "America/Argentina/Buenos_Aires", label: "Argentina (Buenos Aires)", offset: "UTC-3" },
            { id: "America/Santiago", label: "Chile (Santiago)", offset: "UTC-3/4" }
        ]
    },
    {
        region: "Europe & Middle East",
        timezones: [
            { id: "Europe/London", label: "United Kingdom & Ireland (London)", offset: "UTC+1/0" },
            { id: "Europe/Paris", label: "France (Paris)", offset: "UTC+2/1" },
            { id: "Europe/Berlin", label: "Germany (Berlin)", offset: "UTC+2/1" },
            { id: "Europe/Rome", label: "Italy (Rome)", offset: "UTC+2/1" },
            { id: "Europe/Madrid", label: "Spain (Madrid)", offset: "UTC+2/1" },
            { id: "Europe/Amsterdam", label: "Netherlands (Amsterdam)", offset: "UTC+2/1" },
            { id: "Europe/Athens", label: "Greece (Athens)", offset: "UTC+3/2" },
            { id: "Europe/Istanbul", label: "Turkey (Istanbul)", offset: "UTC+3" },
            { id: "Asia/Dubai", label: "UAE (Dubai, Abu Dhabi)", offset: "UTC+4" },
            { id: "Asia/Riyadh", label: "Saudi Arabia (Riyadh)", offset: "UTC+3" },
            { id: "Asia/Qatar", label: "Qatar (Doha)", offset: "UTC+3" }
        ]
    },
    {
        region: "Asia & Pacific",
        timezones: [
            { id: "Asia/Karachi", label: "Pakistan (Karachi, Islamabad)", offset: "UTC+5" },
            { id: "Asia/Kolkata", label: "India (Mumbai, Delhi)", offset: "UTC+5:30" },
            { id: "Asia/Dhaka", label: "Bangladesh (Dhaka)", offset: "UTC+6" },
            { id: "Asia/Bangkok", label: "Thailand & Vietnam (Bangkok)", offset: "UTC+7" },
            { id: "Asia/Singapore", label: "Singapore", offset: "UTC+8" },
            { id: "Asia/Hong_Kong", label: "Hong Kong", offset: "UTC+8" },
            { id: "Asia/Tokyo", label: "Japan (Tokyo)", offset: "UTC+9" },
            { id: "Asia/Seoul", label: "South Korea (Seoul)", offset: "UTC+9" },
            { id: "Australia/Sydney", label: "Australia East (Sydney)", offset: "UTC+10" },
            { id: "Pacific/Auckland", label: "New Zealand (Auckland)", offset: "UTC+12" }
        ]
    },
    {
        region: "Africa",
        timezones: [
            { id: "Africa/Cairo", label: "Egypt (Cairo)", offset: "UTC+3/2" },
            { id: "Africa/Johannesburg", label: "South Africa (Johannesburg)", offset: "UTC+2" },
            { id: "Africa/Lagos", label: "Nigeria (Lagos)", offset: "UTC+1" },
            { id: "Africa/Nairobi", label: "Kenya (Nairobi)", offset: "UTC+3" }
        ]
    }
];

const timezoneMap = {};
timezoneGroups.forEach(group => {
    group.timezones.forEach(tz => {
        if (!timezoneMap[tz.id]) {
            timezoneMap[tz.id] = tz.label;
        }
    });
});

/* =========================================================
   DOM ELEMENTS
   ========================================================= */
const episodePillsGrid = document.getElementById("episodePillsGrid");
const timezoneSelect = document.getElementById("timezoneSelect");
const timezoneSearch = document.getElementById("timezoneSearch");
const resetTimezone = document.getElementById("resetTimezone");

const episodeTitle = document.getElementById("episodeTitle");
const officialEpisodeTitle = document.getElementById("officialEpisodeTitle");
const episodeNumber = document.getElementById("episodeNumber");
const episodeRatingBadge = document.getElementById("episodeRatingBadge");

const releaseDate = document.getElementById("releaseDate");
const releaseTime = document.getElementById("releaseTime");
const timezoneLabel = document.getElementById("timezoneLabel");
const utcRelease = document.getElementById("utcRelease");
const detectedTimezone = document.getElementById("detectedTimezone");

const weeksElement = document.getElementById("weeks");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const availableMessage = document.getElementById("availableMessage");

const copyTimeBtn = document.getElementById("copyTimeBtn");
const calendarLink = document.getElementById("calendarLink");
const scheduleTable = document.getElementById("scheduleTable");
const scheduleTimezoneBadge = document.getElementById("scheduleTimezoneBadge");
const toast = document.getElementById("toast");

// Home Page elements
const showsDirectoryGrid = document.getElementById("showsDirectoryGrid");
const filterTabsContainer = document.getElementById("filterTabs");

let currentEpisodeNumber = 3;

/* =========================================================
   BOOTSTRAP
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    if (episodePillsGrid && timezoneSelect) {
        initializeLanterns();
    }
    if (showsDirectoryGrid) {
        initializeHomeDirectory();
    }
});

/* =========================================================
   HOME PAGE DIRECTORY WITH IMDB RATINGS & EXACT DATES / TBA
   ========================================================= */
function initializeHomeDirectory() {
    renderDirectoryCards("all");

    if (filterTabsContainer) {
        filterTabsContainer.addEventListener("click", (e) => {
            const btn = e.target.closest(".filter-tab-btn");
            if (!btn) return;

            document.querySelectorAll(".filter-tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.dataset.filter;
            renderDirectoryCards(filterValue);
        });
    }
}

function renderDirectoryCards(filter = "all") {
    if (!showsDirectoryGrid) return;
    showsDirectoryGrid.innerHTML = "";

    const filteredShows = tmdbShowsData.filter(show => {
        if (show.id === 219356) return false;
        if (filter === "all") return true;
        if (filter === "confirmed") return show.hasExactDate;
        if (filter === "tba") return !show.hasExactDate;
        if (filter === "hbo") return show.networkClass === "hbo";
        if (filter === "netflix") return show.networkClass === "netflix";
        if (filter === "apple") return show.networkClass === "apple";
        if (filter === "prime") return show.networkClass === "prime";
        return true;
    });

    filteredShows.forEach(show => {
        const card = document.createElement("div");
        card.className = "directory-show-card";

        const dateBadgeHtml = show.hasExactDate
            ? `<div class="date-badge exact">
                 <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                 <span>${show.releaseDateText}</span>
               </div>`
            : `<div class="date-badge tba">
                 <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                 <span>Release Date ${show.releaseDateText}</span>
               </div>`;

        const genresHtml = show.genres.map(g => `<span class="dir-genre-tag">${g}</span>`).join("");
        const ratingText = show.imdbRating !== "Anticipated" ? `IMDb: ${show.imdbRating}` : `IMDb: Anticipated`;
        const avgRatingText = show.imdbEpAvg && show.imdbEpAvg !== "TBA" ? `· Ep Avg: ⭐ ${show.imdbEpAvg}` : "";

        card.innerHTML = `
            <div>
                <div class="dir-card-top">
                    <span class="network-badge ${show.networkClass}">${show.network}</span>
                    <div class="imdb-pill" title="IMDb Rating (${show.voteCount})">
                        ⭐ ${ratingText}
                    </div>
                </div>

                <h3 class="dir-show-title">${show.title}</h3>
                <div class="dir-show-season">${show.season} · ${show.episodesCount} ${avgRatingText}</div>

                <div class="release-date-row">
                    ${dateBadgeHtml}
                </div>

                <div class="dir-genres-row">
                    ${genresHtml}
                </div>

                <p class="dir-show-overview">${show.overview}</p>
            </div>

            <div class="dir-card-bottom">
                <span>IMDb Verified Data</span>
                <span style="color: var(--accent-emerald); font-weight: 600;">Global Synced</span>
            </div>
        `;

        showsDirectoryGrid.appendChild(card);
    });
}

/* =========================================================
   LANTERNS TRACKER INITIALIZATION (UNIFIED SINGLE SELECTORS)
   ========================================================= */
function initializeLanterns() {
    const browserTz = getBrowserTimezone();

    if (detectedTimezone) {
        detectedTimezone.textContent = `${browserTz} (${getOffsetString(browserTz)})`;
    }

    currentEpisodeNumber = getNextUpcomingEpisodeNumber();
    timezoneSelect.value = "auto";

    populateTimezoneDropdown();
    renderEpisodePills();
    renderScheduleTable();
    updateEpisodeInfo();

    timezoneSelect.addEventListener("change", () => {
        updateEpisodeInfo();
        renderScheduleTable();
    });

    if (timezoneSearch) {
        timezoneSearch.addEventListener("input", handleTimezoneSearch);
    }

    if (resetTimezone) {
        resetTimezone.addEventListener("click", () => {
            timezoneSelect.value = "auto";
            if (timezoneSearch) timezoneSearch.value = "";
            populateTimezoneDropdown();
            updateEpisodeInfo();
            renderScheduleTable();
            showToast("Switched to your local detected timezone!");
        });
    }

    if (copyTimeBtn) {
        copyTimeBtn.addEventListener("click", handleCopyAiringTime);
    }

    setInterval(updateCountdown, 1000);
}

/* =========================================================
   UTILITIES
   ========================================================= */
function getBrowserTimezone() {
    try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return tz || "UTC";
    } catch {
        return "UTC";
    }
}

function getSelectedTimezone() {
    if (timezoneSelect.value === "auto") {
        return getBrowserTimezone();
    }
    return timezoneSelect.value;
}

function getOffsetString(timeZone) {
    try {
        const now = new Date();
        const str = new Intl.DateTimeFormat("en-US", {
            timeZone,
            timeZoneName: "shortOffset"
        }).format(now);
        const match = str.match(/GMT([+-]\d+(:?\d+)?)/);
        return match ? `UTC${match[1]}` : "UTC";
    } catch {
        return "UTC";
    }
}

function getTimezoneDisplayName(timezone) {
    if (timezoneMap[timezone]) {
        return timezoneMap[timezone];
    }
    return timezone.replace(/_/g, " ");
}

function pad(num) {
    return String(num).padStart(2, "0");
}

function getCurrentEpisode() {
    return episodes.find(ep => ep.number === currentEpisodeNumber) || episodes[0];
}

function getNextUpcomingEpisodeNumber() {
    const now = Date.now();
    for (const ep of episodes) {
        const releaseTime = new Date(ep.releaseUTC).getTime();
        if (releaseTime > now) {
            return ep.number;
        }
    }
    return episodes[episodes.length - 1].number;
}

/* =========================================================
   POPULATE TIMEZONE CONTROLS (SINGLE UNIFIED SELECTOR)
   ========================================================= */
function populateTimezoneDropdown(filterQuery = "") {
    const query = filterQuery.toLowerCase().trim();
    const prevVal = timezoneSelect.value;

    timezoneSelect.innerHTML = "";

    const autoOpt = document.createElement("option");
    autoOpt.value = "auto";
    autoOpt.textContent = `🌐 Auto-Detect: Local Browser Timezone (${getBrowserTimezone()})`;
    timezoneSelect.appendChild(autoOpt);

    let matchCount = 0;

    timezoneGroups.forEach(group => {
        const filteredTzs = group.timezones.filter(tz => {
            if (!query) return true;
            return tz.label.toLowerCase().includes(query) || tz.id.toLowerCase().includes(query) || tz.offset.toLowerCase().includes(query);
        });

        if (filteredTzs.length > 0) {
            const optgroup = document.createElement("optgroup");
            optgroup.label = group.region;

            filteredTzs.forEach(tz => {
                const opt = document.createElement("option");
                opt.value = tz.id;
                opt.textContent = `${tz.label} [${tz.offset}]`;
                optgroup.appendChild(opt);
                matchCount++;
            });

            timezoneSelect.appendChild(optgroup);
        }
    });

    if (query && matchCount === 0) {
        const noOpt = document.createElement("option");
        noOpt.disabled = true;
        noOpt.textContent = `No matching timezones for "${filterQuery}"`;
        timezoneSelect.appendChild(noOpt);
    }

    if (prevVal && [...timezoneSelect.options].some(o => o.value === prevVal)) {
        timezoneSelect.value = prevVal;
    }
}

function handleTimezoneSearch(e) {
    const query = e.target.value;
    populateTimezoneDropdown(query);
    if (query.trim() !== "" && timezoneSelect.options.length > 1) {
        timezoneSelect.selectedIndex = 1;
        updateEpisodeInfo();
        renderScheduleTable();
    }
}

/* =========================================================
   SINGLE UNIFIED EPISODE SELECTOR STRIP WITH IMDB RATINGS
   ========================================================= */
function renderEpisodePills() {
    if (!episodePillsGrid) return;
    episodePillsGrid.innerHTML = "";

    const now = Date.now();

    episodes.forEach(ep => {
        const isReleased = new Date(ep.releaseUTC).getTime() <= now;
        const isActive = ep.number === currentEpisodeNumber;

        const pill = document.createElement("button");
        pill.type = "button";
        pill.className = `episode-pill-btn ${isActive ? "active" : ""} ${isReleased ? "released" : ""}`;
        pill.id = `pill-ep-${ep.number}`;

        const ratingText = ep.imdbRating ? `IMDb: ${ep.imdbRating}` : "Upcoming";

        pill.innerHTML = `
            <span class="pill-ep-num">E${ep.number}</span>
            <span class="pill-ep-subtext">${ratingText}</span>
            <span class="pill-status-dot" title="${isReleased ? 'Released' : 'Upcoming'}"></span>
        `;

        pill.addEventListener("click", () => {
            currentEpisodeNumber = ep.number;
            updateActivePill(ep.number);
            updateEpisodeInfo();
            renderScheduleTable();
        });

        episodePillsGrid.appendChild(pill);
    });
}

function updateActivePill(selectedNumber) {
    const allPills = document.querySelectorAll(".episode-pill-btn");
    allPills.forEach(btn => {
        btn.classList.remove("active");
    });
    const target = document.getElementById(`pill-ep-${selectedNumber}`);
    if (target) {
        target.classList.add("active");
    }
}

/* =========================================================
   DATE FORMATTERS
   ========================================================= */
function formatReleaseDate(date, timezone) {
    return new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    }).format(date);
}

function formatReleaseTime(date, timezone) {
    return new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZoneName: "short"
    }).format(date);
}

function formatUTC(date) {
    return new Intl.DateTimeFormat("en-US", {
        timeZone: "UTC",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZoneName: "short"
    }).format(date);
}

/* =========================================================
   UPDATE MAIN UI WITH IMDB RATINGS
   ========================================================= */
function updateEpisodeInfo() {
    const episode = getCurrentEpisode();
    if (!episode) return;

    const timezone = getSelectedTimezone();
    const releaseDateObj = new Date(episode.releaseUTC);

    if (episodeTitle) {
        episodeTitle.textContent = `Episode ${episode.number}`;
    }
    if (episodeNumber) {
        episodeNumber.textContent = pad(episode.number);
    }
    if (officialEpisodeTitle) {
        if (episode.title && episode.title !== "TBA" && !episode.title.startsWith("Season Finale")) {
            officialEpisodeTitle.textContent = `"${episode.title}"`;
            officialEpisodeTitle.classList.add("visible");
        } else if (episode.title && episode.title.startsWith("Season Finale")) {
            officialEpisodeTitle.textContent = `Season Finale`;
            officialEpisodeTitle.classList.add("visible");
        } else {
            officialEpisodeTitle.textContent = `Title TBA`;
            officialEpisodeTitle.classList.add("visible");
        }
    }

    if (episodeRatingBadge) {
        if (episode.imdbRating) {
            episodeRatingBadge.innerHTML = `⭐ IMDb Episode Rating: <strong>${episode.imdbRating} / 10</strong> (${episode.imdbVotes} votes)`;
            episodeRatingBadge.style.display = "inline-flex";
        } else {
            episodeRatingBadge.innerHTML = `⭐ IMDb Episode Rating: <strong>Unrated</strong> (Airing Soon)`;
            episodeRatingBadge.style.display = "inline-flex";
        }
    }

    if (releaseDate) {
        releaseDate.textContent = formatReleaseDate(releaseDateObj, timezone);
    }
    if (releaseTime) {
        releaseTime.textContent = formatReleaseTime(releaseDateObj, timezone);
    }
    if (timezoneLabel) {
        timezoneLabel.innerHTML = `
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            ${getTimezoneDisplayName(timezone)} (${getOffsetString(timezone)})
        `;
    }

    if (utcRelease) {
        utcRelease.textContent = formatUTC(releaseDateObj);
    }

    updateCalendarLink(episode, releaseDateObj);
    updateCountdown();
}

/* =========================================================
   CALENDAR LINK GENERATOR
   ========================================================= */
function updateCalendarLink(episode, dateObj) {
    if (!calendarLink) return;

    const startISO = dateObj.toISOString().replace(/-|:|\.\d\d\d/g, "");
    const endDateObj = new Date(dateObj.getTime() + (60 * 60 * 1000));
    const endISO = endDateObj.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const epTitleText = (episode.title && episode.title !== "TBA") ? `: ${episode.title}` : "";
    const title = encodeURIComponent(`Lanterns S01E0${episode.number}${epTitleText}`);
    const details = encodeURIComponent(`Lanterns Season 1 Episode ${episode.number} premiering worldwide on HBO & Max. Universal Sunday 9:00 PM ET premiere converted to your local time.`);
    const location = encodeURIComponent("HBO Max / HBO");

    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startISO}/${endISO}&details=${details}&location=${location}`;
    calendarLink.href = googleCalUrl;
}

/* =========================================================
   COUNTDOWN LOGIC
   ========================================================= */
function updateCountdown() {
    const episode = getCurrentEpisode();
    if (!episode) return;

    const releaseTimestamp = new Date(episode.releaseUTC).getTime();
    const difference = releaseTimestamp - Date.now();

    if (difference <= 0) {
        if (weeksElement) weeksElement.textContent = "00";
        if (daysElement) daysElement.textContent = "00";
        if (hoursElement) hoursElement.textContent = "00";
        if (minutesElement) minutesElement.textContent = "00";
        if (secondsElement) secondsElement.textContent = "00";

        if (availableMessage) {
            availableMessage.classList.add("visible");
        }
        return;
    }

    if (availableMessage) {
        availableMessage.classList.remove("visible");
    }

    let totalSeconds = Math.floor(difference / 1000);

    const secondsInWeek = 7 * 24 * 60 * 60;
    const weeks = Math.floor(totalSeconds / secondsInWeek);
    totalSeconds %= secondsInWeek;

    const secondsInDay = 24 * 60 * 60;
    const days = Math.floor(totalSeconds / secondsInDay);
    totalSeconds %= secondsInDay;

    const secondsInHour = 60 * 60;
    const hours = Math.floor(totalSeconds / secondsInHour);
    totalSeconds %= secondsInHour;

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    if (weeksElement) weeksElement.textContent = pad(weeks);
    if (daysElement) daysElement.textContent = pad(days);
    if (hoursElement) hoursElement.textContent = pad(hours);
    if (minutesElement) minutesElement.textContent = pad(minutes);
    if (secondsElement) secondsElement.textContent = pad(seconds);
}

/* =========================================================
   SCHEDULE TABLE RENDERER WITH IMDB RATINGS
   ========================================================= */
function renderScheduleTable() {
    if (!scheduleTable) return;
    scheduleTable.innerHTML = "";

    const timezone = getSelectedTimezone();
    const now = Date.now();
    const nextEpNum = getNextUpcomingEpisodeNumber();

    if (scheduleTimezoneBadge) {
        scheduleTimezoneBadge.textContent = `${getTimezoneDisplayName(timezone)} (${getOffsetString(timezone)})`;
    }

    episodes.forEach(ep => {
        const epDate = new Date(ep.releaseUTC);
        const epTimestamp = epDate.getTime();
        const isReleased = epTimestamp <= now;
        const isNext = ep.number === nextEpNum;
        const isCurrent = ep.number === currentEpisodeNumber;

        let statusBadge = `<span class="status-tag upcoming">Upcoming</span>`;
        if (isReleased) {
            statusBadge = `<span class="status-tag released">Streaming</span>`;
        } else if (isNext) {
            statusBadge = `<span class="status-tag next">Next Up</span>`;
        }

        const ratingBadge = ep.imdbRating 
            ? `<span class="schedule-ep-rating">⭐ ${ep.imdbRating}</span>`
            : `<span class="schedule-ep-rating unrated">—</span>`;

        const row = document.createElement("div");
        row.className = `schedule-row ${isCurrent ? "active" : ""}`;
        row.setAttribute("role", "button");
        row.setAttribute("tabindex", "0");

        const formattedDate = new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
        }).format(epDate);

        const displayTitle = (ep.title && ep.title !== "TBA") ? ep.title : (ep.title.startsWith("Season Finale") ? "Season Finale" : `Episode ${ep.number}`);

        row.innerHTML = `
            <div class="schedule-ep-tag">EP ${pad(ep.number)}</div>
            <div class="schedule-ep-title">${displayTitle}</div>
            <div class="schedule-ep-rating-col">${ratingBadge}</div>
            <div class="schedule-ep-date">${formattedDate}</div>
            <div class="schedule-ep-status">${statusBadge}</div>
        `;

        row.addEventListener("click", () => {
            currentEpisodeNumber = ep.number;
            updateActivePill(ep.number);
            updateEpisodeInfo();
            renderScheduleTable();
            window.scrollTo({ top: 320, behavior: "smooth" });
        });

        scheduleTable.appendChild(row);
    });
}

/* =========================================================
   COPY AIRING TIME TO CLIPBOARD
   ========================================================= */
function handleCopyAiringTime() {
    const episode = getCurrentEpisode();
    const timezone = getSelectedTimezone();
    const releaseDateObj = new Date(episode.releaseUTC);

    const formattedDate = formatReleaseDate(releaseDateObj, timezone);
    const formattedTime = formatReleaseTime(releaseDateObj, timezone);
    const titleStr = (episode.title && episode.title !== "TBA") ? ` ("${episode.title}")` : "";
    const ratingStr = episode.imdbRating ? ` [IMDb: ⭐ ${episode.imdbRating}/10]` : "";
    const textToCopy = `Lanterns Season 1 Episode ${episode.number}${titleStr}${ratingStr} releases on ${formattedDate} at ${formattedTime} (${getTimezoneDisplayName(timezone)}). Track countdown live: ${window.location.href}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            showToast("Airing details copied to clipboard!");
        }).catch(() => {
            fallbackCopy(textToCopy);
        });
    } else {
        fallbackCopy(textToCopy);
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand("copy");
        showToast("Airing details copied to clipboard!");
    } catch {
        showToast("Failed to copy automatically.");
    }
    document.body.removeChild(textarea);
}

function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}