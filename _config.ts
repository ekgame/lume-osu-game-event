import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import pug from "lume/plugins/pug.ts";
import windi from "lume/plugins/windi_css.ts";
import { AddComma as formatNumber } from "https://deno.land/x/numwizard@v1.2.1/mod.ts";



const site = lume({
    src: "./src",
});

site.globalData.formatNumber = formatNumber;
site.use(pug());
site.use(windi({
    preflight: true,
    cssFile: 'windi.css',
    config: {
        darkMode: 'class',
    }
}));
site.use(sass());
site.copy("assets");

export default site;