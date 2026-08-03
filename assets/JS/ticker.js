document.addEventListener("DOMContentLoaded", () => {

    const ticker = document.getElementById("global-ticker");
    if (!ticker) return;

    const announcements = [
        '🎒 <strong>2026 Backpack Giveaway:</strong> Friday, August 7th at 11:30 AM in memory of Helen J. Stanfill!',
        '💦 <strong>Ministry Event Scheduled:</strong> Womens Ministry, Aug 10 & 24 @ 5:30pm :)',
        '🍎 <strong>Feeding America:</strong> Kentucky Based food distribution Tuesday 11 Aug 9-12pm, Oak Grove Community Center!',
        '🎂 <strong>Birthday:</strong> 19 Aug, 1st Ladies Birthday!',
        '📖 <strong>Awanas:</strong> Training Wednesday, August 19th & 26th @ 6pm!',
        '📦 <strong>Food Pantry:</strong> Elisha\'s Closet and Food distribution Friday 21st @ 9:00am!',
        '👔 <strong>Childrens Ministry  Qtr Meeting:</strong> Saturday, August 22 @ 10:00 AM!',
        '🕊️ <strong>Baptism:</strong> Baptism Sunday August 23rd!',
        '👔 <strong>Singles Ministry:</strong> Saturday, August 29th @ 19:00 AM!',
        '🎉 <strong>Pastors 6th Anniversary:</strong> Sunday Service',
        '👔 <strong>Men\'s Ministry:</strong> Saturday, September 1st @ 09:00 AM!',
        '📱 <strong>RightNow Media:</strong> Free access to 25,000+ Bible study videos! Text LWKY to 49775 to join.'
    ];

    function buildTrack() {
        return announcements
            .map(item => `<div class="ticker-item">${item}</div>`)
            .join("");
    }

    ticker.innerHTML = `
        <div class="ticker-wrap">
            <div class="ticker-content">
                ${buildTrack()}
                ${buildTrack()}
            </div>
        </div>
    `;

});
