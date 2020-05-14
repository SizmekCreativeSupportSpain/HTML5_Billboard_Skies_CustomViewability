define({
    "format": "expandableBanner",
    "defaultBanner": "Main_Banner",
    "defaultPanel": "Sky_Der",
    "polite": "instant",
    "banners": [
        {
            "name": "Main_Banner",
            "asset": "index.html",
            "width": "980",
            "height": "250",
            "defaultImage": "images/backup.jpg"
        }
    ],
    "panels": [
        {
            "name": "Sky_Der",
            "asset": "panels/Sky_Der.html",
            "width": "120",
            "height": "800",
            "autoCollapse": "never",
            "positionType": "bannerRelativePixels",
            "x": "1000",
            "y": "0"
        },
        {
            "name": "Sky_Izq",
            "asset": "panels/Sky_Izq.html",
            "width": "120",
            "height": "800",
            "autoCollapse": "never",
            "positionType": "bannerRelativePixels",
            "x": "-140",
            "y": "0"
        }
    ]
});