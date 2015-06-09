Package.describe({
    name: 'risul:lightcase',
    summary: "Lightcase.js - The smart and flexible Lightbox Plugin",
    version: "2.1.0",
    git: "https://github.com/risul/meteor-lightcase"
});

Package.on_use(function (api) {
    api.versionsFrom("METEOR@1.0");
    api.use('jquery', 'client');

    api.addFiles([
        "lib/fonts/lightcase.eot",
        "lib/fonts/lightcase.svg",
        "lib/fonts/lightcase.ttf",
        "lib/fonts/lightcase.woff"
    ], "client", { isAsset: true });

    api.addFiles([
        "lib/css/font-lightcase.css",
        "lib/css/lightcase-max-640.css",
        "lib/css/lightcase-min-641.css",
        "lib/css/overrides.css",
        "lib/lightcase.js"
    ], "client");

});