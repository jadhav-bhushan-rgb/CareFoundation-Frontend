module.exports = [
"[project]/src/services/campaignService.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/src_services_campaignService_e3ff39a9.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/services/campaignService.js [app-ssr] (ecmascript)");
    });
});
}),
"[project]/src/services/adminService.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[project]/src/services/adminService.js [app-ssr] (ecmascript)");
    });
});
}),
];