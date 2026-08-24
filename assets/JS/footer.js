document.addEventListener("DOMContentLoaded", () => {

    const footer = document.getElementById("global-footer");
    if (!footer) return;

    footer.innerHTML = `
        <footer class="global-footer">
            <div class="footer-grid">

                <div class="footer-col">
                    <h4>Living Waters</h4>
                    <p>Serving God, Loving People, Changing Lives.</p>
                </div>

                <div class="footer-col">
                    <h4>Gathering Times</h4>
                    <p>Sunday School: 9:00 AM</p>
                    <p>Sunday Worship: 10:30 AM</p>
                    <p>Tuesday Bible Study: 5:00 PM</p>
                </div>

                <div class="footer-col">
                    <h4>Mailing Address</h4>
                    <p>
                        285 Hugh Hunter Rd.<br>
                        PO Box 1125<br>
                        Oak Grove, KY 42262
                    </p>
                    <p style="margin-top: 10px;">
                        📞 <a href="tel:2706406100" style="color: inherit; text-decoration: none;">(270) 640-6100</a><br>
                        ✉️ <a href="mailto:info@livingwaters-ky.org" style="color: inherit; text-decoration: none;">info@livingwaters-ky.org</a>
                    </p>
                </div>

            </div>

            <!-- Social Media Circular Icons Row -->
            <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; margin: 25px 0 15px 0;">
                <a href="https://www.facebook.com/share/19EPaesQRj/" target="_blank" title="Facebook" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: rgba(255,255,255,0.05); border: 1px solid #FFD700; border-radius: 50%; color: #FFD700; text-decoration: none; font-size: 1.1em;">f</a>
                <a href="YOUR_TWITTER_URL" target="_blank" title="Twitter / X" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: rgba(255,255,255,0.05); border: 1px solid #FFD700; border-radius: 50%; color: #FFD700; text-decoration: none; font-size: 1.1em;">𝕏</a>
                <a href="YOUR_INSTAGRAM_URL" target="_blank" title="Instagram" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: rgba(255,255,255,0.05); border: 1px solid #FFD700; border-radius: 50%; color: #FFD700; text-decoration: none; font-size: 1.1em;">📷</a>
                <a href="YOUR_LINKEDIN_URL" target="_blank" title="LinkedIn" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: rgba(255,255,255,0.05); border: 1px solid #FFD700; border-radius: 50%; color: #FFD700; text-decoration: none; font-size: 1.1em;">in</a>
                <a href="YOUR_PINTEREST_URL" target="_blank" title="Pinterest" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: rgba(255,255,255,0.05); border: 1px solid #FFD700; border-radius: 50%; color: #FFD700; text-decoration: none; font-size: 1.1em;">P</a>
                <a href="YOUR_YOUTUBE_URL" target="_blank" title="YouTube" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: rgba(255,255,255,0.05); border: 1px solid #FFD700; border-radius: 50%; color: #FFD700; text-decoration: none; font-size: 1.1em;">▶</a>
                <a href="YOUR_VIMEO_URL" target="_blank" title="Vimeo" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: rgba(255,255,255,0.05); border: 1px solid #FFD700; border-radius: 50%; color: #FFD700; text-decoration: none; font-size: 1.1em;">v</a>
            </div>

            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Living Waters Community Church. All rights reserved.</p>
            </div>
        </footer>
    `;

});
