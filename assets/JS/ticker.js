document.addEventListener("DOMContentLoaded", () => {

    const ticker = document.getElementById("global-ticker");
    if (!ticker) return;

    const announcements = [
        '🎒 <strong>2026 Backpack Giveaway:</strong> Friday, August 7th at 11:30 AM in memory of Helen J. Stanfill!',
        '💦 <strong>Youth Ministry Event Scheduled:</strong> Water Balloon Fight, Aug 1st 2-4pm :)',      
        '📦 <strong>Food Pantry:</strong> Elisha\'s Closet and Food distribution 3rd Friday @ 9:00am!',
        '👔 <strong>Men\'s Ministry:</strong> Saturday, August 1st @ 09:00 AM!',
        '🍎 <strong>Feeding America:</strong> Kentucky Based food distribution is the 2nd Tuesday of the month, Oak Grove Community Center!',
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
