/* =========================================================
   GLOBAL RELEASE TRACKER
   Lanterns
   ========================================================= */


/* =========================================================
   EPISODE DATA
   ========================================================= */

const episodes = [

    {
        number: 1,
        title: "",
        releaseUTC: "2026-08-17T01:00:00Z"
    },

    {
        number: 2,
        title: "",
        releaseUTC: "2026-08-24T01:00:00Z"
    },

    {
        number: 3,
        title: "",
        releaseUTC: "2026-08-31T01:00:00Z"
    },

    {
        number: 4,
        title: "",
        releaseUTC: "2026-09-07T01:00:00Z"
    },

    {
        number: 5,
        title: "",
        releaseUTC: "2026-09-14T01:00:00Z"
    },

    {
        number: 6,
        title: "",
        releaseUTC: "2026-09-21T01:00:00Z"
    },

    {
        number: 7,
        title: "",
        releaseUTC: "2026-09-28T01:00:00Z"
    },

    {
        number: 8,
        title: "",
        releaseUTC: "2026-10-05T01:00:00Z"
    }

];


/* =========================================================
   TIMEZONE NAMES
   ========================================================= */

const timezoneNames = {

    "Asia/Karachi":
        "Pakistan — Karachi",

    "Asia/Dubai":
        "UAE — Dubai",

    "America/New_York":
        "US — New York",

    "America/Los_Angeles":
        "US — Los Angeles",

    "Europe/London":
        "UK — London",

    "Asia/Kolkata":
        "India — Kolkata",

    "America/Sao_Paulo":
        "Brazil — São Paulo",

    "Asia/Tokyo":
        "Japan — Tokyo",

    "Australia/Sydney":
        "Australia — Sydney",

    "Asia/Singapore":
        "Singapore"

};


/* =========================================================
   DOM
   ========================================================= */

const episodeSelect =
    document.getElementById(
        "episodeSelect"
    );

const timezoneSelect =
    document.getElementById(
        "timezoneSelect"
    );

const resetTimezone =
    document.getElementById(
        "resetTimezone"
    );

const episodeTitle =
    document.getElementById(
        "episodeTitle"
    );

const officialEpisodeTitle =
    document.getElementById(
        "officialEpisodeTitle"
    );

const episodeNumber =
    document.getElementById(
        "episodeNumber"
    );

const releaseDate =
    document.getElementById(
        "releaseDate"
    );

const releaseTime =
    document.getElementById(
        "releaseTime"
    );

const timezoneLabel =
    document.getElementById(
        "timezoneLabel"
    );

const utcRelease =
    document.getElementById(
        "utcRelease"
    );

const detectedTimezone =
    document.getElementById(
        "detectedTimezone"
    );

const weeksElement =
    document.getElementById(
        "weeks"
    );

const daysElement =
    document.getElementById(
        "days"
    );

const hoursElement =
    document.getElementById(
        "hours"
    );

const minutesElement =
    document.getElementById(
        "minutes"
    );

const secondsElement =
    document.getElementById(
        "seconds"
    );

const availableMessage =
    document.getElementById(
        "availableMessage"
    );


/* =========================================================
   CHECK WHETHER THIS IS THE LANTERNS PAGE
   ========================================================= */

if (
    episodeSelect &&
    timezoneSelect
) {

    initializeLanterns();

}


/* =========================================================
   DETECT BROWSER TIMEZONE
   ========================================================= */

function getBrowserTimezone() {

    let timezone =
        Intl.DateTimeFormat()
            .resolvedOptions()
            .timeZone;

    if (!timezone) {

        timezone = "UTC";

    }

    return timezone;

}


/* =========================================================
   POPULATE EPISODES
   ========================================================= */

function populateEpisodes() {

    episodeSelect.innerHTML = "";

    episodes.forEach(
        (episode) => {

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                episode.number;

            option.textContent =
                `Episode ${episode.number}`;

            episodeSelect.appendChild(
                option
            );

        }
    );

}


/* =========================================================
   GET TIMEZONE DISPLAY NAME
   ========================================================= */

function getTimezoneDisplayName(
    timezone
) {

    if (
        timezoneNames[timezone]
    ) {

        return timezoneNames[
            timezone
        ];

    }

    return timezone.replace(
        /_/g,
        " "
    );

}


/* =========================================================
   GET SELECTED TIMEZONE
   ========================================================= */

function getSelectedTimezone() {

    if (
        timezoneSelect.value ===
        "auto"
    ) {

        return getBrowserTimezone();

    }

    return timezoneSelect.value;

}


/* =========================================================
   GET CURRENT EPISODE
   ========================================================= */

function getCurrentEpisode() {

    const selectedNumber =
        Number(
            episodeSelect.value
        );

    return episodes.find(
        (episode) =>
            episode.number ===
            selectedNumber
    );

}


/* =========================================================
   FORMAT DATE
   ========================================================= */

function formatReleaseDate(
    date,
    timezone
) {

    return new Intl.DateTimeFormat(
        "en-US",
        {

            timeZone:
                timezone,

            weekday:
                "long",

            month:
                "long",

            day:
                "numeric",

            year:
                "numeric"

        }
    ).format(date);

}


/* =========================================================
   FORMAT TIME
   ========================================================= */

function formatReleaseTime(
    date,
    timezone
) {

    return new Intl.DateTimeFormat(
        "en-US",
        {

            timeZone:
                timezone,

            hour:
                "numeric",

            minute:
                "2-digit",

            hour12:
                true

        }
    ).format(date);

}


/* =========================================================
   FORMAT UTC
   ========================================================= */

function formatUTC(date) {

    return new Intl.DateTimeFormat(
        "en-US",
        {

            timeZone:
                "UTC",

            year:
                "numeric",

            month:
                "short",

            day:
                "numeric",

            hour:
                "2-digit",

            minute:
                "2-digit",

            second:
                "2-digit",

            hour12:
                false,

            timeZoneName:
                "short"

        }
    ).format(date);

}


/* =========================================================
   PAD NUMBER
   ========================================================= */

function pad(number) {

    return String(number)
        .padStart(2, "0");

}


/* =========================================================
   UPDATE EPISODE
   ========================================================= */

function updateEpisodeInfo() {

    const episode =
        getCurrentEpisode();

    if (!episode) {

        return;

    }


    const timezone =
        getSelectedTimezone();


    const releaseDateObject =
        new Date(
            episode.releaseUTC
        );


    /* Episode number */

    episodeTitle.textContent =
        `Episode ${episode.number}`;


    episodeNumber.textContent =
        pad(
            episode.number
        );


    /* Official title */

    if (
        episode.title &&
        episode.title.trim() !== ""
    ) {

        officialEpisodeTitle.textContent =
            episode.title;

        officialEpisodeTitle.classList.add(
            "visible"
        );

    } else {

        officialEpisodeTitle.textContent =
            "";

        officialEpisodeTitle.classList.remove(
            "visible"
        );

    }


    /* Local release date */

    releaseDate.textContent =
        formatReleaseDate(
            releaseDateObject,
            timezone
        );


    /* Local release time */

    releaseTime.textContent =
        formatReleaseTime(
            releaseDateObject,
            timezone
        );


    /* Timezone */

    timezoneLabel.textContent =
        getTimezoneDisplayName(
            timezone
        );


    /* UTC */

    utcRelease.textContent =
        formatUTC(
            releaseDateObject
        );


    updateCountdown();

}


/* =========================================================
   COUNTDOWN
   ========================================================= */

function updateCountdown() {

    const episode =
        getCurrentEpisode();

    if (!episode) {

        return;

    }


    const releaseTimestamp =
        new Date(
            episode.releaseUTC
        ).getTime();


    const difference =
        releaseTimestamp -
        Date.now();


    /* Already released */

    if (
        difference <= 0
    ) {

        weeksElement.textContent =
            "00";

        daysElement.textContent =
            "00";

        hoursElement.textContent =
            "00";

        minutesElement.textContent =
            "00";

        secondsElement.textContent =
            "00";

        availableMessage.classList.add(
            "visible"
        );

        return;

    }


    availableMessage.classList.remove(
        "visible"
    );


    let totalSeconds =
        Math.floor(
            difference / 1000
        );


    /* Weeks */

    const secondsInWeek =
        7 *
        24 *
        60 *
        60;


    const weeks =
        Math.floor(
            totalSeconds /
            secondsInWeek
        );


    totalSeconds %=
        secondsInWeek;


    /* Days */

    const secondsInDay =
        24 *
        60 *
        60;


    const days =
        Math.floor(
            totalSeconds /
            secondsInDay
        );


    totalSeconds %=
        secondsInDay;


    /* Hours */

    const secondsInHour =
        60 *
        60;


    const hours =
        Math.floor(
            totalSeconds /
            secondsInHour
        );


    totalSeconds %=
        secondsInHour;


    /* Minutes */

    const minutes =
        Math.floor(
            totalSeconds /
            60
        );


    /* Seconds */

    const seconds =
        totalSeconds %
        60;


    /* Display */

    weeksElement.textContent =
        pad(weeks);

    daysElement.textContent =
        pad(days);

    hoursElement.textContent =
        pad(hours);

    minutesElement.textContent =
        pad(minutes);

    secondsElement.textContent =
        pad(seconds);

}


/* =========================================================
   INITIALIZE LANTERNS
   ========================================================= */

function initializeLanterns() {

    const browserTimezone =
        getBrowserTimezone();


    /* Browser timezone */

    detectedTimezone.textContent =
        browserTimezone;


    /* Episodes */

    populateEpisodes();


    /*
        Episode 3 is the next upcoming episode
        based on the current project schedule.
    */

    episodeSelect.value =
        "3";


    /*
        Automatic timezone.
    */

    timezoneSelect.value =
        "auto";


    /*
        Initial UI.
    */

    updateEpisodeInfo();


    /*
        Episode selector.
    */

    episodeSelect.addEventListener(
        "change",
        updateEpisodeInfo
    );


    /*
        Timezone selector.
    */

    timezoneSelect.addEventListener(
        "change",
        updateEpisodeInfo
    );


    /*
        Reset timezone.
    */

    resetTimezone.addEventListener(
        "click",
        () => {

            timezoneSelect.value =
                "auto";

            updateEpisodeInfo();

        }
    );


    /*
        Live countdown.
    */

    setInterval(
        updateCountdown,
        1000
    );

}