module.exports = [
"[project]/src/services/campaignService.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "campaignService",
    ()=>campaignService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/api.js [app-ssr] (ecmascript)");
;
const campaignService = {
    // Get all campaigns
    getCampaigns: async (params = {})=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/campaigns', {
                params
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },
    // Get single campaign
    getCampaign: async (id)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/campaigns/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },
    // Create campaign
    createCampaign: async (campaignData)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/campaigns', campaignData);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },
    // Update campaign
    updateCampaign: async (id, campaignData)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/campaigns/${id}`, campaignData);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },
    // Delete campaign
    deleteCampaign: async (id)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/campaigns/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },
    // Get campaign donations
    getCampaignDonations: async (id, params = {})=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/campaigns/${id}/donations`, {
                params
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },
    // Add campaign update
    addCampaignUpdate: async (id, updateData)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`/campaigns/${id}/updates`, updateData);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },
    // Get campaign analytics
    getCampaignAnalytics: async (id)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/campaigns/${id}/analytics`);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },
    // Get featured campaigns
    getFeaturedCampaigns: async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/campaigns', {
                params: {
                    featured: true,
                    limit: 6
                }
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },
    // Get trending campaigns
    getTrendingCampaigns: async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/campaigns', {
                params: {
                    sortBy: 'popularity',
                    limit: 9,
                    status: 'active'
                }
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },
    // Search campaigns
    searchCampaigns: async (query, filters = {})=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/campaigns', {
                params: {
                    q: query,
                    ...filters
                }
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    }
};
}),
];

//# sourceMappingURL=src_services_campaignService_e3ff39a9.js.map