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
"[project]/src/components/FundraiserForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FundraiserForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campaignStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/campaignStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/authStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function FundraiserForm() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { createCampaign, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campaignStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        shortDescription: "",
        category: "medical",
        goalAmount: "",
        beneficiaryName: "",
        beneficiaryRelationship: "",
        beneficiaryContact: "",
        city: "",
        state: "",
        address: "",
        startDate: "",
        endDate: "",
        story: ""
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Check authentication
        if (!isAuthenticated) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Please login to start a fundraiser");
            router.push("/login");
            return;
        }
        try {
            // Validate required fields
            if (!formData.story || formData.story.trim().length < 50) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Description must be at least 50 characters long");
                return;
            }
            if (!formData.beneficiaryRelationship || formData.beneficiaryRelationship.trim().length < 2) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Please specify your relationship with the beneficiary (e.g., Self, Son, Daughter, Friend)");
                return;
            }
            const campaignData = {
                title: formData.title.trim(),
                shortDescription: formData.shortDescription.trim(),
                description: formData.story.trim(),
                category: formData.category,
                goalAmount: parseFloat(formData.goalAmount),
                beneficiary: {
                    name: formData.beneficiaryName.trim(),
                    relationship: formData.beneficiaryRelationship.trim(),
                    // Contact should be an object with phone and/or email, not a string
                    contact: (()=>{
                        const contactValue = formData.beneficiaryContact.trim();
                        const isEmail = contactValue.includes('@');
                        return {
                            ...isEmail ? {
                                email: contactValue
                            } : {
                                phone: contactValue
                            }
                        };
                    })()
                },
                location: {
                    city: formData.city.trim(),
                    state: formData.state.trim(),
                    address: formData.address.trim()
                },
                timeline: {
                    // Ensure dates are in ISO format
                    startDate: formData.startDate ? new Date(formData.startDate).toISOString() : new Date().toISOString(),
                    endDate: formData.endDate ? new Date(formData.endDate).toISOString() : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
                    // Calculate duration in days
                    duration: formData.endDate && formData.startDate ? Math.ceil((new Date(formData.endDate) - new Date(formData.startDate || new Date())) / (1000 * 60 * 60 * 24)) : 30
                }
            };
            // Debug: Log campaign data before submission
            console.log("Submitting campaign data:", campaignData);
            console.log("Title length:", campaignData.title.length);
            console.log("Description length:", campaignData.description.length);
            console.log("Short description length:", campaignData.shortDescription.length);
            console.log("Category:", campaignData.category);
            console.log("Beneficiary relationship:", campaignData.beneficiary.relationship);
            const response = await createCampaign(campaignData);
            console.log("Campaign created successfully:", response);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Fundraiser created successfully! Waiting for admin approval.");
            // Reset form
            setFormData({
                title: "",
                shortDescription: "",
                category: "medical",
                goalAmount: "",
                beneficiaryName: "",
                beneficiaryRelationship: "",
                beneficiaryContact: "",
                city: "",
                state: "",
                address: "",
                startDate: "",
                endDate: "",
                story: ""
            });
            // Redirect to dashboard immediately
            router.push("/dashboard");
        } catch (error) {
            var _error_response, _error_response1;
            console.error("Campaign creation error:", error);
            console.error("Error response:", (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
            // Show detailed error message
            const errorData = ((_error_response1 = error.response) === null || _error_response1 === void 0 ? void 0 : _error_response1.data) || error;
            const errorMessage = (errorData === null || errorData === void 0 ? void 0 : errorData.message) || error.message || "Failed to create fundraiser";
            const errorDetails = errorData === null || errorData === void 0 ? void 0 : errorData.errors;
            if (errorDetails && Array.isArray(errorDetails) && errorDetails.length > 0) {
                // Show all validation errors
                const errorMessages = errorDetails.map((err)=>{
                    if (typeof err === 'string') return err;
                    if (err.msg) return err.msg;
                    if (err.message) return err.message;
                    return JSON.stringify(err);
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(errorMessages.join(", "), {
                    duration: 5000
                });
                console.error("Validation errors:", errorMessages);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(errorMessage, {
                    duration: 5000
                });
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-gray-50 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative min-h-[60vh] flex flex-col items-center justify-center p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/main-slider/123.jpg",
                                alt: "Fundraiser background",
                                className: "object-cover w-full h-full scale-105 opacity-60 animate-slow-zoom"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FundraiserForm.jsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FundraiserForm.jsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FundraiserForm.jsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1
                        },
                        className: "relative z-10 text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg",
                        children: "Start your fundraiser and make a difference today!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FundraiserForm.jsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.5,
                            duration: 1
                        },
                        className: "relative z-10 mt-4 text-lg text-gray-200 max-w-2xl",
                        children: "Empower change — raise funds for causes that matter. Let’s bring your story to life."
                    }, void 0, false, {
                        fileName: "[project]/src/components/FundraiserForm.jsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FundraiserForm.jsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-6 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
                    onSubmit: handleSubmit,
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8
                    },
                    viewport: {
                        once: true
                    },
                    className: "bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-200 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            name: "title",
                            placeholder: "Fundraiser Title",
                            value: formData.title,
                            onChange: handleChange,
                            required: true,
                            className: "border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FundraiserForm.jsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            name: "shortDescription",
                            placeholder: "Short Description (max 200 characters)",
                            value: formData.shortDescription,
                            onChange: handleChange,
                            maxLength: "200",
                            required: true,
                            rows: "2",
                            className: "border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FundraiserForm.jsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    name: "category",
                                    value: formData.category,
                                    onChange: handleChange,
                                    required: true,
                                    className: "border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "medical",
                                            children: "Medical"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "education",
                                            children: "Education"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "disaster",
                                            children: "Disaster"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "animal",
                                            children: "Animal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "environment",
                                            children: "Environment"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "sports",
                                            children: "Sports"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "technology",
                                            children: "Technology"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "other",
                                            children: "Other"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    name: "goalAmount",
                                    placeholder: "Goal Amount (INR)",
                                    value: formData.goalAmount,
                                    onChange: handleChange,
                                    required: true,
                                    min: "1000",
                                    className: "border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FundraiserForm.jsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-medium mb-2 text-gray-700",
                                    children: "Upload Pictures"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-3",
                                    children: [
                                        1,
                                        2,
                                        3
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            className: "border p-2 rounded-lg w-full text-gray-600 hover:border-green-400 cursor-pointer transition"
                                        }, i, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FundraiserForm.jsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "beneficiaryName",
                                    placeholder: "Beneficiary Name",
                                    value: formData.beneficiaryName,
                                    onChange: handleChange,
                                    required: true,
                                    className: "border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "beneficiaryRelationship",
                                    placeholder: "Your Relationship (e.g., Self, Son, Daughter, Friend)",
                                    value: formData.beneficiaryRelationship,
                                    onChange: handleChange,
                                    required: true,
                                    minLength: 2,
                                    maxLength: 50,
                                    className: "border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FundraiserForm.jsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            name: "beneficiaryContact",
                            placeholder: "Beneficiary Contact (Phone/Email)",
                            value: formData.beneficiaryContact,
                            onChange: handleChange,
                            required: true,
                            className: "border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FundraiserForm.jsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "city",
                                    placeholder: "City",
                                    value: formData.city,
                                    onChange: handleChange,
                                    required: true,
                                    className: "border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "state",
                                    placeholder: "State",
                                    value: formData.state,
                                    onChange: handleChange,
                                    required: true,
                                    className: "border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FundraiserForm.jsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            name: "address",
                            placeholder: "Full Address",
                            rows: 2,
                            value: formData.address,
                            onChange: handleChange,
                            required: true,
                            className: "border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FundraiserForm.jsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-medium mb-1 text-gray-700",
                                            children: "Aadhar Card"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 328,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            className: "border p-2 rounded-lg w-full text-gray-600 hover:border-green-400 cursor-pointer transition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-medium mb-1 text-gray-700",
                                            children: "PAN Card"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            className: "border p-2 rounded-lg w-full text-gray-600 hover:border-green-400 cursor-pointer transition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FundraiserForm.jsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-medium mb-1 text-gray-700",
                                            children: "Start Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            name: "startDate",
                                            value: formData.startDate,
                                            onChange: handleChange,
                                            required: true,
                                            className: "border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 346,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-medium mb-1 text-gray-700",
                                            children: "End Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            name: "endDate",
                                            value: formData.endDate,
                                            onChange: handleChange,
                                            required: true,
                                            className: "border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 357,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 355,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FundraiserForm.jsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-medium mb-2 text-gray-700",
                                    children: "Upload Supporting Documents"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 369,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-3",
                                    children: [
                                        1,
                                        2
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            className: "border p-2 rounded-lg w-full text-gray-600 hover:border-green-400 cursor-pointer transition"
                                        }, i, false, {
                                            fileName: "[project]/src/components/FundraiserForm.jsx",
                                            lineNumber: 372,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FundraiserForm.jsx",
                            lineNumber: 368,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-medium mb-2 text-gray-700",
                                    children: "Upload Video"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    className: "border p-2 rounded-lg w-full text-gray-600 hover:border-green-400 cursor-pointer transition"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FundraiserForm.jsx",
                            lineNumber: 381,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            name: "story",
                            placeholder: "Full Story - Explain why you need funds and how they will be used (Minimum 50 characters)",
                            rows: 6,
                            value: formData.story,
                            onChange: handleChange,
                            required: true,
                            minLength: 50,
                            maxLength: 5000,
                            className: "border rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-green-400 outline-none transition"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FundraiserForm.jsx",
                            lineNumber: 389,
                            columnNumber: 11
                        }, this),
                        formData.story && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500",
                            children: [
                                formData.story.length,
                                "/5000 characters",
                                formData.story.length < 50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-red-500",
                                    children: " (Minimum 50 characters required)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FundraiserForm.jsx",
                                    lineNumber: 404,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FundraiserForm.jsx",
                            lineNumber: 401,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center pt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                type: "submit",
                                disabled: isLoading,
                                whileHover: {
                                    scale: isLoading ? 1 : 1.05
                                },
                                whileTap: {
                                    scale: isLoading ? 1 : 0.98
                                },
                                className: "px-8 py-3 rounded-lg font-medium transition shadow-lg ".concat(isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'),
                                children: isLoading ? 'Submitting...' : 'Submit Fundraiser'
                            }, void 0, false, {
                                fileName: "[project]/src/components/FundraiserForm.jsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/FundraiserForm.jsx",
                            lineNumber: 409,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FundraiserForm.jsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FundraiserForm.jsx",
                lineNumber: 188,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FundraiserForm.jsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
_s(FundraiserForm, "dKY5Lt9yA59lixZ3I9QHrtN/Yok=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campaignStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = FundraiserForm;
var _c;
__turbopack_context__.k.register(_c, "FundraiserForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/create-fundraiser/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateFundraiserPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FundraiserForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FundraiserForm.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/authStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CreateFundraiserPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isAuthenticated, user, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateFundraiserPage.useEffect": ()=>{
            // Check if user is authenticated
            if (!isLoading && !isAuthenticated) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Please login to create a fundraiser");
                router.push("/login?redirect=/create-fundraiser");
            }
        }
    }["CreateFundraiserPage.useEffect"], [
        isAuthenticated,
        isLoading,
        router
    ]);
    // Show loading while checking auth
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/create-fundraiser/page.jsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-lg",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/create-fundraiser/page.jsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/create-fundraiser/page.jsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/create-fundraiser/page.jsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    // Don't render form if not authenticated
    if (!isAuthenticated) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gradient-to-r from-green-600 to-emerald-500 text-white py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl font-extrabold mb-4",
                            children: "Create Your Fundraiser"
                        }, void 0, false, {
                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg md:text-xl text-green-50 max-w-3xl mx-auto",
                            children: "Start raising funds for your cause today. We'll help you every step of the way."
                        }, void 0, false, {
                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 w-32 h-1 bg-white mx-auto rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/create-fundraiser/page.jsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/create-fundraiser/page.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    "Welcome, ",
                                    (user === null || user === void 0 ? void 0 : user.name) || 'User',
                                    "!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            " Fill out the form below to create your fundraiser. Our team will review it and publish once approved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/create-fundraiser/page.jsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/create-fundraiser/page.jsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/create-fundraiser/page.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FundraiserForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/create-fundraiser/page.jsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/create-fundraiser/page.jsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-6 py-8 mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-lg p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-gray-800 mb-6",
                            children: "💡 Tips for a Successful Fundraiser"
                        }, void 0, false, {
                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl",
                                            children: "✍️"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800",
                                            children: "Tell Your Story"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-sm",
                                            children: "Share why you're raising funds and how it will help. Be honest and detailed."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl",
                                            children: "📸"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800",
                                            children: "Add Photos/Videos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-sm",
                                            children: "Visual content helps donors connect with your cause emotionally."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl",
                                            children: "🎯"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800",
                                            children: "Set Realistic Goals"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-sm",
                                            children: "Set an achievable funding goal that covers your actual needs."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl",
                                            children: "📢"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800",
                                            children: "Share Widely"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-sm",
                                            children: "Share your fundraiser on social media, WhatsApp, and with friends."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl",
                                            children: "🔄"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800",
                                            children: "Post Updates"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-sm",
                                            children: "Keep donors informed about your progress and how funds are being used."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl",
                                            children: "🙏"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800",
                                            children: "Thank Donors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-sm",
                                            children: "Show gratitude to every donor, no matter the amount."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/create-fundraiser/page.jsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/create-fundraiser/page.jsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/create-fundraiser/page.jsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/create-fundraiser/page.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/create-fundraiser/page.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(CreateFundraiserPage, "LHS8B0Bdt4ALlwb31r4wyZj426Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = CreateFundraiserPage;
var _c;
__turbopack_context__.k.register(_c, "CreateFundraiserPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d5315f4f._.js.map