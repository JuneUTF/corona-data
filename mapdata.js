var simplemaps_countrymap_mapdata = simplemaps_countrymap_mapdata = {
    main_settings: {
        //General settings
        width: "400", //'700' or 'responsive'
        background_transparent: "no",
        border_color: "rgb(204, 204, 204)",
        text_align: "right",

        //State defaults
        state_description: "State description",
        state_color: "rgb(247, 247, 247)",
        state_hover_color: "#3B729F",
        state_url: "",
        border_size: 3,
        all_states_inactive: "no",
        all_states_zoomable: "no",

        //Location defaults
        location_description: "Location description",
        location_url: "",
        location_color: "#FF0067",
        location_opacity: 0.8,
        location_hover_opacity: 1,
        location_size: 25,
        location_type: "square",
        location_image_source: "frog.png",
        location_border_color: "#FFF",
        location_border: 2,
        location_hover_border: 2.5,
        all_locations_inactive: "no",
        all_locations_hidden: "no",

        //Label defaults
        label_color: "#d5ddec",
        label_hover_color: "#d5ddec",
        label_size: 22,
        label_font: "Arial",
        hide_labels: "no",
        hide_eastern_labels: "no",

        //Zoom settings
        zoom: "no",
        manual_zoom: "no",
        back_image: "no",
        initial_back: "no",
        initial_zoom: "-1",
        initial_zoom_solo: "no",
        region_opacity: 1,
        region_hover_opacity: 0.6,
        zoom_out_incrementally: "no",
        zoom_percentage: 0.99,
        zoom_time: 0.5,

        //Popup settings
        popup_color: "white",
        popup_opacity: 0.9,
        popup_shadow: 1,
        popup_corners: 5,
        popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
        popup_nocss: "no",

        //Advanced settings
        div: "map",
        auto_load: "yes",
        url_new_tab: "no",
        images_directory: "default",
        fade_time: 0.1,
        link_text: "View Website",
        popups: "detect",
        state_image_url: "",
        state_image_position: "",
        location_image_url: ""
    },
    state_specific,
    locations: {},
    labels: {},
    legend: {
        entries: [{
                name: "0???300",
                color: "rgb(255, 255, 255)",
                type: "location",
                shape: "square",
                ids: ""
            },
            {
                name: "301???1000",
                color: "rgb(247, 244, 74)",
                type: "location",
                shape: "square",
                ids: ""
            },
            {
                name: "1001???3000",
                color: "rgb(247, 188, 25)",
                type: "location",
                shape: "square",
                ids: ""
            },
            {
                name: "3001???10000",
                color: "rgb(255, 165, 0)",
                type: "location",
                shape: "square",
                ids: ""
            },
            {
                name: "10001???",
                color: "rgb(246, 81, 81)",
                type: "location",
                shape: "square",
                ids: ""
            }
        ]
    },
    regions: {}
};

async function ok() {
    await main();
    for (const property in state_specific) {
        if (state_specific[property].description) {

        } else {
            // state_specific[property].inactive = "yes";
        }
    }
    simplemaps_countrymap_mapdata.state_specific = state_specific;
    simplemaps_countrymap.refresh()
}

ok()

function resizeMap() {
    if (window.innerWidth < 520) {
        simplemaps_countrymap_mapdata.main_settings.width = 200;
        simplemaps_countrymap.refresh()
    } else {
        simplemaps_countrymap_mapdata.main_settings.width = 400;
        simplemaps_countrymap.refresh()
    }
}

window.onresize = resizeMap