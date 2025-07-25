const QureMainMenu = {
    init: function () {
        this.initMainMenu();
        this.setHeaderHeights(); 
        window.addEventListener("resize", this.setHeaderHeights.bind(this));
    },

    initMainMenu: function () {
        document.querySelectorAll(".nav-toggle").forEach((toggleBtn) => {
            toggleBtn.addEventListener("click", () => {
                document.documentElement.classList.toggle("nav-open");
            });
        });
    },

    setHeaderHeights: function () {
        const announcementBar = document.getElementById("announcement-bar");
        const pageHeader = document.getElementById("page-header");

        const d = announcementBar ? announcementBar.clientHeight : 0;
        const p = pageHeader ? pageHeader.clientHeight : 0;

        document.body.style.setProperty("--height-bar", `${d}px`);
        document.body.style.setProperty("--height-header", `${p}px`);
    }
};
document.addEventListener("DOMContentLoaded", function () {
    QureMainMenu.init();
});