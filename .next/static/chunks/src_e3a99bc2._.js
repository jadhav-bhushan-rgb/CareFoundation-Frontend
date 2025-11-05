(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/campaignService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "campaignService",
    ()=>campaignService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/api.js [app-client] (ecmascript)");
;
const campaignService = {
    // Get all campaigns
    getCampaigns: async function() {
        let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/campaigns', {
                params
            });
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Get single campaign
    getCampaign: async (id)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/campaigns/".concat(id));
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Create campaign
    createCampaign: async (campaignData)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/campaigns', campaignData);
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Update campaign
    updateCampaign: async (id, campaignData)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("/campaigns/".concat(id), campaignData);
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Delete campaign
    deleteCampaign: async (id)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("/campaigns/".concat(id));
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Get campaign donations
    getCampaignDonations: async function(id) {
        let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/campaigns/".concat(id, "/donations"), {
                params
            });
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Add campaign update
    addCampaignUpdate: async (id, updateData)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/campaigns/".concat(id, "/updates"), updateData);
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Get campaign analytics
    getCampaignAnalytics: async (id)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/campaigns/".concat(id, "/analytics"));
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Get featured campaigns
    getFeaturedCampaigns: async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/campaigns', {
                params: {
                    featured: true,
                    limit: 6
                }
            });
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Get trending campaigns
    getTrendingCampaigns: async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/campaigns', {
                params: {
                    sortBy: 'popularity',
                    limit: 9,
                    status: 'active'
                }
            });
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Search campaigns
    searchCampaigns: async function(query) {
        let filters = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/campaigns', {
                params: {
                    q: query,
                    ...filters
                }
            });
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/campaignStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$campaignService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/campaignService.js [app-client] (ecmascript)");
;
;
const useCampaignStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])((set, get)=>({
        // State
        campaigns: [],
        featuredCampaigns: [],
        trendingCampaigns: [],
        currentCampaign: null,
        userCampaigns: [],
        isLoading: false,
        error: null,
        pagination: {
            page: 1,
            limit: 12,
            total: 0,
            totalPages: 0
        },
        // Actions
        getCampaigns: async function() {
            let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$campaignService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].getCampaigns(params);
                set({
                    campaigns: response.data || response.campaigns || [],
                    pagination: response.pagination || get().pagination,
                    isLoading: false,
                    error: null
                });
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to fetch campaigns'
                });
                throw error;
            }
        },
        getCampaign: async (id)=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$campaignService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].getCampaign(id);
                set({
                    currentCampaign: response.data || response.campaign,
                    isLoading: false,
                    error: null
                });
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to fetch campaign'
                });
                throw error;
            }
        },
        createCampaign: async (campaignData)=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$campaignService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].createCampaign(campaignData);
                set({
                    isLoading: false,
                    error: null
                });
                // Refresh user campaigns
                get().getUserCampaigns();
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to create campaign'
                });
                throw error;
            }
        },
        updateCampaign: async (id, campaignData)=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$campaignService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].updateCampaign(id, campaignData);
                set({
                    isLoading: false,
                    error: null
                });
                // Refresh campaigns
                get().getUserCampaigns();
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to update campaign'
                });
                throw error;
            }
        },
        deleteCampaign: async (id)=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$campaignService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].deleteCampaign(id);
                set({
                    isLoading: false,
                    error: null
                });
                // Refresh user campaigns
                get().getUserCampaigns();
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to delete campaign'
                });
                throw error;
            }
        },
        getFeaturedCampaigns: async ()=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$campaignService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].getFeaturedCampaigns();
                set({
                    featuredCampaigns: response.data || response.campaigns || [],
                    isLoading: false,
                    error: null
                });
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to fetch featured campaigns'
                });
                throw error;
            }
        },
        getTrendingCampaigns: async ()=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$campaignService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].getTrendingCampaigns();
                set({
                    trendingCampaigns: response.data || response.campaigns || [],
                    isLoading: false,
                    error: null
                });
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to fetch trending campaigns'
                });
                throw error;
            }
        },
        getUserCampaigns: async function() {
            let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$campaignService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].getCampaigns({
                    ...params,
                    myCampaigns: true
                });
                set({
                    userCampaigns: response.data || response.campaigns || [],
                    isLoading: false,
                    error: null
                });
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to fetch user campaigns'
                });
                throw error;
            }
        },
        searchCampaigns: async function(query) {
            let filters = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$campaignService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].searchCampaigns(query, filters);
                set({
                    campaigns: response.data || response.campaigns || [],
                    pagination: response.pagination || get().pagination,
                    isLoading: false,
                    error: null
                });
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Search failed'
                });
                throw error;
            }
        },
        addCampaignUpdate: async (id, updateData)=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$campaignService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].addCampaignUpdate(id, updateData);
                set({
                    isLoading: false,
                    error: null
                });
                // Refresh current campaign
                get().getCampaign(id);
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to add update'
                });
                throw error;
            }
        },
        getCampaignAnalytics: async (id)=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$campaignService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].getCampaignAnalytics(id);
                set({
                    isLoading: false,
                    error: null
                });
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to fetch analytics'
                });
                throw error;
            }
        },
        clearError: ()=>set({
                error: null
            }),
        clearCurrentCampaign: ()=>set({
                currentCampaign: null
            }),
        setPagination: (pagination)=>set({
                pagination
            })
    }));
const __TURBOPACK__default__export__ = useCampaignStore;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/donationService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "donationService",
    ()=>donationService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/api.js [app-client] (ecmascript)");
;
const donationService = {
    // Get all donations
    getDonations: async function() {
        let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/donations', {
                params
            });
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Get single donation
    getDonation: async (id)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/donations/".concat(id));
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Create donation
    createDonation: async (donationData)=>{
        try {
            // Convert campaignId to campaign if needed (backend expects 'campaign' field)
            const data = {
                ...donationData,
                campaign: donationData.campaign || donationData.campaignId
            };
            // Remove campaignId if campaign is set
            if (data.campaign) {
                delete data.campaignId;
            }
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/donations', data);
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Create test donation (without payment gateway)
    createTestDonation: async (donationData)=>{
        try {
            // Convert campaignId to campaign if needed (backend expects 'campaign' field)
            const data = {
                ...donationData,
                campaign: donationData.campaign || donationData.campaignId
            };
            // Remove campaignId if campaign is set
            if (data.campaign) {
                delete data.campaignId;
            }
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/donations/test', data);
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Get donation receipt
    getDonationReceipt: async (id)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/donations/".concat(id, "/receipt"));
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Request donation refund
    requestRefund: async (id, reason)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/donations/".concat(id, "/refund"), {
                reason
            });
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Get donation statistics
    getDonationStats: async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/donations/stats/overview');
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    },
    // Get user donations
    getUserDonations: async function() {
        let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/users/donations', {
                params
            });
            return response.data;
        } catch (error) {
            var _error_response;
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/donationStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$donationService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/donationService.js [app-client] (ecmascript)");
;
;
const useDonationStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])((set, get)=>({
        // State
        donations: [],
        userDonations: [],
        currentDonation: null,
        donationStats: null,
        isLoading: false,
        error: null,
        pagination: {
            page: 1,
            limit: 12,
            total: 0,
            totalPages: 0
        },
        // Actions
        getDonations: async function() {
            let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$donationService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["donationService"].getDonations(params);
                set({
                    donations: response.data || response.donations || [],
                    pagination: response.pagination || get().pagination,
                    isLoading: false,
                    error: null
                });
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to fetch donations'
                });
                throw error;
            }
        },
        getDonation: async (id)=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$donationService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["donationService"].getDonation(id);
                set({
                    currentDonation: response.data || response.donation,
                    isLoading: false,
                    error: null
                });
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to fetch donation'
                });
                throw error;
            }
        },
        createDonation: async (donationData)=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$donationService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["donationService"].createDonation(donationData);
                set({
                    isLoading: false,
                    error: null
                });
                // Refresh user donations
                get().getUserDonations();
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to create donation'
                });
                throw error;
            }
        },
        getUserDonations: async function() {
            let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$donationService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["donationService"].getUserDonations(params);
                set({
                    userDonations: response.data || response.donations || [],
                    isLoading: false,
                    error: null
                });
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to fetch user donations'
                });
                throw error;
            }
        },
        getDonationReceipt: async (id)=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$donationService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["donationService"].getDonationReceipt(id);
                set({
                    isLoading: false,
                    error: null
                });
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to fetch receipt'
                });
                throw error;
            }
        },
        requestRefund: async (id, reason)=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$donationService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["donationService"].requestRefund(id, reason);
                set({
                    isLoading: false,
                    error: null
                });
                // Refresh user donations
                get().getUserDonations();
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to request refund'
                });
                throw error;
            }
        },
        getDonationStats: async ()=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$donationService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["donationService"].getDonationStats();
                set({
                    donationStats: response.data || response.stats,
                    isLoading: false,
                    error: null
                });
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.message || 'Failed to fetch donation statistics'
                });
                throw error;
            }
        },
        clearError: ()=>set({
                error: null
            }),
        clearCurrentDonation: ()=>set({
                currentDonation: null
            }),
        setPagination: (pagination)=>set({
                pagination
            })
    }));
const __TURBOPACK__default__export__ = useDonationStore;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/authStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campaignStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/campaignStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$donationStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/donationStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Dashboard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, isAuthenticated, isLoading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { getUserCampaigns, userCampaigns, isLoading: campaignLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campaignStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { getUserDonations, userDonations, isLoading: donationLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$donationStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            if (!authLoading && !isAuthenticated) {
                router.push("/login");
            }
        }
    }["Dashboard.useEffect"], [
        isAuthenticated,
        authLoading,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            if (isAuthenticated && user) {
                // Load user's campaigns and donations
                getUserCampaigns();
                getUserDonations();
            }
        }
    }["Dashboard.useEffect"], [
        isAuthenticated,
        user,
        getUserCampaigns,
        getUserDonations
    ]);
    if (authLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.jsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/page.jsx",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    if (!isAuthenticated) {
        return null;
    }
    const stats = [
        {
            title: "My Campaigns",
            value: userCampaigns.length,
            icon: "📊",
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Total Donations",
            value: userDonations.length,
            icon: "💝",
            color: "from-green-500 to-green-600"
        },
        {
            title: "Amount Raised",
            value: "₹".concat(userCampaigns.reduce((sum, campaign)=>sum + (campaign.currentAmount || 0), 0).toLocaleString()),
            icon: "💰",
            color: "from-purple-500 to-purple-600"
        },
        {
            title: "Amount Donated",
            value: "₹".concat(userDonations.reduce((sum, donation)=>sum + (donation.amount || 0), 0).toLocaleString()),
            icon: "🎯",
            color: "from-pink-500 to-pink-600"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white shadow-sm border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center py-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold text-gray-900",
                                        children: [
                                            "Welcome back, ",
                                            user === null || user === void 0 ? void 0 : user.name,
                                            "!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mt-1",
                                        children: "Here's what's happening with your campaigns and donations"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.jsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    (user === null || user === void 0 ? void 0 : user.role) === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/admin"),
                                        className: "bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-semibold",
                                        children: "Admin Panel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/create-fundraiser"),
                                        className: "bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors",
                                        children: "Create Campaign"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/profile"),
                                        className: "bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors",
                                        children: "Profile & KYC"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/withdrawals"),
                                        className: "bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors",
                                        children: "Withdrawals"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.jsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/page.jsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/page.jsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                        children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: index * 0.1
                                },
                                className: "bg-gradient-to-r ".concat(stat.color, " p-6 rounded-xl text-white shadow-lg"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/80 text-sm font-medium",
                                                    children: stat.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold",
                                                    children: stat.value
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.jsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl",
                                            children: stat.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.jsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this)
                            }, stat.title, false, {
                                fileName: "[project]/src/app/dashboard/page.jsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.jsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: 0.2
                                },
                                className: "bg-white rounded-xl shadow-sm border p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-gray-900",
                                                children: "My Campaigns"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>router.push("/campaigns/my-campaigns"),
                                                className: "text-green-600 hover:text-green-700 text-sm font-medium",
                                                children: "View All"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    campaignLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            1,
                                            2,
                                            3
                                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-pulse",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 bg-gray-200 rounded w-3/4 mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                                        lineNumber: 158,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-3 bg-gray-200 rounded w-1/2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                                        lineNumber: 159,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this) : userCampaigns.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: userCampaigns.slice(0, 3).map((campaign)=>{
                                            var _campaign_currentAmount;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border rounded-lg p-4 hover:bg-gray-50 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-medium text-gray-900 mb-1",
                                                        children: campaign.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                                        lineNumber: 167,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm text-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "₹",
                                                                    ((_campaign_currentAmount = campaign.currentAmount) === null || _campaign_currentAmount === void 0 ? void 0 : _campaign_currentAmount.toLocaleString()) || 0,
                                                                    " raised"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                                lineNumber: 169,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2 py-1 rounded-full text-xs ".concat(campaign.status === 'active' ? 'bg-green-100 text-green-800' : campaign.status === 'completed' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'),
                                                                children: campaign.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                                lineNumber: 170,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                                        lineNumber: 168,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, campaign._id, true, {
                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 mb-4",
                                                children: "No campaigns yet"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>router.push("/campaigns/create"),
                                                className: "bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors",
                                                children: "Create Your First Campaign"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.jsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: 20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: 0.3
                                },
                                className: "bg-white rounded-xl shadow-sm border p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-gray-900",
                                                children: "Recent Donations"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>router.push("/donations/my-donations"),
                                                className: "text-green-600 hover:text-green-700 text-sm font-medium",
                                                children: "View All"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this),
                                    donationLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            1,
                                            2,
                                            3
                                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-pulse",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 bg-gray-200 rounded w-3/4 mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                                        lineNumber: 215,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-3 bg-gray-200 rounded w-1/2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this) : userDonations.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: userDonations.slice(0, 3).map((donation)=>{
                                            var _donation_campaign, _donation_amount;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border rounded-lg p-4 hover:bg-gray-50 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-medium text-gray-900 mb-1",
                                                        children: ((_donation_campaign = donation.campaign) === null || _donation_campaign === void 0 ? void 0 : _donation_campaign.title) || 'Campaign'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                                        lineNumber: 224,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm text-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "₹",
                                                                    ((_donation_amount = donation.amount) === null || _donation_amount === void 0 ? void 0 : _donation_amount.toLocaleString()) || 0
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                                lineNumber: 228,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2 py-1 rounded-full text-xs ".concat(donation.status === 'completed' ? 'bg-green-100 text-green-800' : donation.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'),
                                                                children: donation.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                                lineNumber: 229,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                                        lineNumber: 227,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, donation._id, true, {
                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                lineNumber: 223,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 mb-4",
                                                children: "No donations yet"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                lineNumber: 242,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>router.push("/donate"),
                                                className: "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors",
                                                children: "Make Your First Donation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                lineNumber: 243,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.jsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/page.jsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/page.jsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/page.jsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "R8Icw91rWC+qN09xjzcM3Dq7ysA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campaignStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$donationStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e3a99bc2._.js.map