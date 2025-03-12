module.exports = {

"[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/use-merged-ref.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (e.g. via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/normalize-trailing-slash.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathTrailingSlash", {
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
});
const _removetrailingslash = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-ssr] (ecmascript)");
const _parsepath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-ssr] (ecmascript)");
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith('/') || process.env.__NEXT_MANUAL_TRAILING_SLASH) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/add-base-path.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addBasePath", {
    enumerable: true,
    get: function() {
        return addBasePath;
    }
});
const _addpathprefix = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-ssr] (ecmascript)");
const _normalizetrailingslash = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/normalize-trailing-slash.js [app-ssr] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/app-call-server.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    useServerActionDispatcher: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return callServer;
    },
    useServerActionDispatcher: function() {
        return useServerActionDispatcher;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _routerreducertypes = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)");
let globalServerActionDispatcher = null;
function useServerActionDispatcher(dispatch) {
    const serverActionDispatcher = (0, _react.useCallback)((actionPayload)=>{
        (0, _react.startTransition)(()=>{
            dispatch({
                ...actionPayload,
                type: _routerreducertypes.ACTION_SERVER_ACTION
            });
        });
    }, [
        dispatch
    ]);
    globalServerActionDispatcher = serverActionDispatcher;
}
async function callServer(actionId, actionArgs) {
    const actionDispatcher = globalServerActionDispatcher;
    if (!actionDispatcher) {
        throw Object.defineProperty(new Error('Invariant: missing action dispatcher.'), "__NEXT_ERROR_CODE", {
            value: "E507",
            enumerable: false
        });
    }
    return new Promise((resolve, reject)=>{
        actionDispatcher({
            actionId,
            actionArgs,
            resolve,
            reject
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/app-find-source-map-url.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findSourceMapURL", {
    enumerable: true,
    get: function() {
        return findSourceMapURL;
    }
});
const basePath = ("TURBOPACK compile-time value", "") || '';
const pathname = "" + basePath + "/__nextjs_source-map";
const findSourceMapURL = ("TURBOPACK compile-time truthy", 1) ? function findSourceMapURL(filename) {
    if (filename === '') {
        return null;
    }
    if (filename.startsWith(document.location.origin) && filename.includes('/_next/static')) {
        // This is a request for a client chunk. This can only happen when
        // using Turbopack. In this case, since we control how those source
        // maps are generated, we can safely assume that the sourceMappingURL
        // is relative to the filename, with an added `.map` extension. The
        // browser can just request this file, and it gets served through the
        // normal dev server, without the need to route this through
        // the `/__nextjs_source-map` dev middleware.
        return "" + filename + ".map";
    }
    const url = new URL(pathname, document.location.origin);
    url.searchParams.set('filename', filename);
    return url.href;
} : ("TURBOPACK unreachable", undefined);
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-find-source-map-url.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/flight-data-helpers.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getFlightDataPartsFromPath: null,
    getNextFlightSegmentPath: null,
    normalizeFlightData: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getFlightDataPartsFromPath: function() {
        return getFlightDataPartsFromPath;
    },
    getNextFlightSegmentPath: function() {
        return getNextFlightSegmentPath;
    },
    normalizeFlightData: function() {
        return normalizeFlightData;
    }
});
function getFlightDataPartsFromPath(flightDataPath) {
    // Pick the last 4 items from the `FlightDataPath` to get the [tree, seedData, viewport, isHeadPartial].
    const flightDataPathLength = 4;
    // tree, seedData, and head are *always* the last three items in the `FlightDataPath`.
    const [tree, seedData, head, isHeadPartial] = flightDataPath.slice(-flightDataPathLength);
    // The `FlightSegmentPath` is everything except the last three items. For a root render, it won't be present.
    const segmentPath = flightDataPath.slice(0, -flightDataPathLength);
    var _segmentPath_;
    return {
        // TODO: Unify these two segment path helpers. We are inconsistently pushing an empty segment ("")
        // to the start of the segment path in some places which makes it hard to use solely the segment path.
        // Look for "// TODO-APP: remove ''" in the codebase.
        pathToSegment: segmentPath.slice(0, -1),
        segmentPath,
        // if the `FlightDataPath` corresponds with the root, there'll be no segment path,
        // in which case we default to ''.
        segment: (_segmentPath_ = segmentPath[segmentPath.length - 1]) != null ? _segmentPath_ : '',
        tree,
        seedData,
        head,
        isHeadPartial,
        isRootRender: flightDataPath.length === flightDataPathLength
    };
}
function getNextFlightSegmentPath(flightSegmentPath) {
    // Since `FlightSegmentPath` is a repeated tuple of `Segment` and `ParallelRouteKey`, we slice off two items
    // to get the next segment path.
    return flightSegmentPath.slice(2);
}
function normalizeFlightData(flightData) {
    // FlightData can be a string when the server didn't respond with a proper flight response,
    // or when a redirect happens, to signal to the client that it needs to perform an MPA navigation.
    if (typeof flightData === 'string') {
        return flightData;
    }
    return flightData.map(getFlightDataPartsFromPath);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=flight-data-helpers.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/app-build-id.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// This gets assigned as a side-effect during app initialization. Because it
// represents the build used to create the JS bundle, it should never change
// after being set, so we store it in a global variable.
//
// When performing RSC requests, if the incoming data has a different build ID,
// we perform an MPA navigation/refresh to load the updated build and ensure
// that the client and server in sync.
// Starts as an empty string. In practice, because setAppBuildId is called
// during initialization before hydration starts, this will always get
// reassigned to the actual build ID before it's ever needed by a navigation.
// If for some reasons it didn't, due to a bug or race condition, then on
// navigation the build comparision would fail and trigger an MPA navigation.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getAppBuildId: null,
    setAppBuildId: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getAppBuildId: function() {
        return getAppBuildId;
    },
    setAppBuildId: function() {
        return setAppBuildId;
    }
});
let globalBuildId = '';
function setAppBuildId(buildId) {
    globalBuildId = buildId;
}
function getAppBuildId() {
    return globalBuildId;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-build-id.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/has-base-path.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasBasePath", {
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
});
const _pathhasprefix = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-ssr] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/remove-base-path.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeBasePath", {
    enumerable: true,
    get: function() {
        return removeBasePath;
    }
});
const _hasbasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/has-base-path.js [app-ssr] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function removeBasePath(path) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    // Can't trim the basePath if it has zero length!
    if (basePath.length === 0) return path;
    path = path.slice(basePath.length);
    if (!path.startsWith('/')) path = "/" + path;
    return path;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/dev/dev-build-indicator/internal/initialize-for-new-overlay.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/*
 * Singleton store to track whether the app is currently being built
 * Used by the dev tools indicator of the new overlay to show build status
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    initializeForNewOverlay: null,
    useIsDevBuilding: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    initializeForNewOverlay: function() {
        return initializeForNewOverlay;
    },
    useIsDevBuilding: function() {
        return useIsDevBuilding;
    }
});
const _devbuildindicator = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/dev/dev-build-indicator/internal/dev-build-indicator.js [app-ssr] (ecmascript)");
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
let isVisible = false;
let listeners = [];
const subscribe = (listener)=>{
    listeners.push(listener);
    return ()=>{
        listeners = listeners.filter((l)=>l !== listener);
    };
};
const getSnapshot = ()=>isVisible;
function useIsDevBuilding() {
    return (0, _react.useSyncExternalStore)(subscribe, getSnapshot);
}
function initializeForNewOverlay() {
    _devbuildindicator.devBuildIndicator.show = ()=>{
        isVisible = true;
        listeners.forEach((listener)=>listener());
    };
    _devbuildindicator.devBuildIndicator.hide = ()=>{
        isVisible = false;
        listeners.forEach((listener)=>listener());
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=initialize-for-new-overlay.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/dev/dev-build-indicator/internal/dev-build-indicator.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "devBuildIndicator", {
    enumerable: true,
    get: function() {
        return devBuildIndicator;
    }
});
const NOOP = ()=>{};
const devBuildIndicator = {
    /** Shows build indicator when Next.js is compiling. Requires initialize() first. */ show: NOOP,
    /** Hides build indicator when Next.js finishes compiling. Requires initialize() first. */ hide: NOOP,
    /** Sets up the build indicator UI component. Call this before using show/hide. */ initialize: ("TURBOPACK compile-time truthy", 1) ? __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/dev/dev-build-indicator/internal/initialize-for-new-overlay.js [app-ssr] (ecmascript)").initializeForNewOverlay : ("TURBOPACK unreachable", undefined)
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-build-indicator.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/dev/dev-build-indicator/internal/handle-dev-build-indicator-hmr-events.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleDevBuildIndicatorHmrEvents", {
    enumerable: true,
    get: function() {
        return handleDevBuildIndicatorHmrEvents;
    }
});
const _hotreloadertypes = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/dev/hot-reloader-types.js [app-ssr] (ecmascript)");
const _devbuildindicator = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/dev/dev-build-indicator/internal/dev-build-indicator.js [app-ssr] (ecmascript)");
const handleDevBuildIndicatorHmrEvents = (obj)=>{
    try {
        if (!('action' in obj)) {
            return;
        }
        // eslint-disable-next-line default-case
        switch(obj.action){
            case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILDING:
                _devbuildindicator.devBuildIndicator.show();
                break;
            case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILT:
            case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SYNC:
                _devbuildindicator.devBuildIndicator.hide();
                break;
        }
    } catch (e) {}
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-dev-build-indicator-hmr-events.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/lib/console.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "formatConsoleArgs", {
    enumerable: true,
    get: function() {
        return formatConsoleArgs;
    }
});
function formatObject(arg, depth) {
    switch(typeof arg){
        case 'object':
            if (arg === null) {
                return 'null';
            } else if (Array.isArray(arg)) {
                let result = '[';
                if (depth < 1) {
                    for(let i = 0; i < arg.length; i++){
                        if (result !== '[') {
                            result += ',';
                        }
                        if (Object.prototype.hasOwnProperty.call(arg, i)) {
                            result += formatObject(arg[i], depth + 1);
                        }
                    }
                } else {
                    result += arg.length > 0 ? '...' : '';
                }
                result += ']';
                return result;
            } else if (arg instanceof Error) {
                return arg + '';
            } else {
                const keys = Object.keys(arg);
                let result = '{';
                if (depth < 1) {
                    for(let i = 0; i < keys.length; i++){
                        const key = keys[i];
                        const desc = Object.getOwnPropertyDescriptor(arg, 'key');
                        if (desc && !desc.get && !desc.set) {
                            const jsonKey = JSON.stringify(key);
                            if (jsonKey !== '"' + key + '"') {
                                result += jsonKey + ': ';
                            } else {
                                result += key + ': ';
                            }
                            result += formatObject(desc.value, depth + 1);
                        }
                    }
                } else {
                    result += keys.length > 0 ? '...' : '';
                }
                result += '}';
                return result;
            }
        case 'string':
            return JSON.stringify(arg);
        default:
            return String(arg);
    }
}
function formatConsoleArgs(args) {
    let message;
    let idx;
    if (typeof args[0] === 'string') {
        message = args[0];
        idx = 1;
    } else {
        message = '';
        idx = 0;
    }
    let result = '';
    let startQuote = false;
    for(let i = 0; i < message.length; ++i){
        const char = message[i];
        if (char !== '%' || i === message.length - 1 || idx >= args.length) {
            result += char;
            continue;
        }
        const code = message[++i];
        switch(code){
            case 'c':
                {
                    // TODO: We should colorize with HTML instead of turning into a string.
                    // Ignore for now.
                    result = startQuote ? "" + result + "]" : "[" + result;
                    startQuote = !startQuote;
                    idx++;
                    break;
                }
            case 'O':
            case 'o':
                {
                    result += formatObject(args[idx++], 0);
                    break;
                }
            case 'd':
            case 'i':
                {
                    result += parseInt(args[idx++], 10);
                    break;
                }
            case 'f':
                {
                    result += parseFloat(args[idx++]);
                    break;
                }
            case 's':
                {
                    result += String(args[idx++]);
                    break;
                }
            default:
                result += '%' + code;
        }
    }
    for(; idx < args.length; idx++){
        result += (idx > 0 ? ' ' : '') + formatObject(args[idx], 0);
    }
    return result;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=console.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/lib/is-error-thrown-while-rendering-rsc.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "shouldRenderRootLevelErrorOverlay", {
    enumerable: true,
    get: function() {
        return shouldRenderRootLevelErrorOverlay;
    }
});
const shouldRenderRootLevelErrorOverlay = ()=>{
    var _window___next_root_layout_missing_tags;
    return !!((_window___next_root_layout_missing_tags = window.__next_root_layout_missing_tags) == null ? void 0 : _window___next_root_layout_missing_tags.length);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-error-thrown-while-rendering-rsc.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/assign-location.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "assignLocation", {
    enumerable: true,
    get: function() {
        return assignLocation;
    }
});
const _addbasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/add-base-path.js [app-ssr] (ecmascript)");
function assignLocation(location, url) {
    if (location.startsWith('.')) {
        const urlBase = url.origin + url.pathname;
        return new URL(// new URL('./relative', 'https://example.com/subdir').href -> 'https://example.com/relative'
        // new URL('./relative', 'https://example.com/subdir/').href -> 'https://example.com/subdir/relative'
        (urlBase.endsWith('/') ? urlBase : urlBase + '/') + location);
    }
    return new URL((0, _addbasepath.addBasePath)(location), url.href);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=assign-location.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    unmountLinkInstance: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    unmountLinkInstance: function() {
        return unmountLinkInstance;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _formaturl = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-ssr] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)");
const _routerreducertypes = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)");
const _usemergedref = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/use-merged-ref.js [app-ssr] (ecmascript)");
const _utils = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/utils.js [app-ssr] (ecmascript)");
const _addbasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/add-base-path.js [app-ssr] (ecmascript)");
const _warnonce = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/utils/warn-once.js [app-ssr] (ecmascript)");
const _scheduler = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-ssr] (ecmascript)");
const _actionqueue = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/action-queue.js [app-ssr] (ecmascript)");
const _cachekey = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-ssr] (ecmascript)");
const _approuter = __turbopack_require__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/app-router.js [app-ssr] (ecmascript)");
// TODO: This is currently a WeakMap because it doesn't need to be enumerable,
// but eventually we'll want to be able to re-prefetch all the currently
// visible links, e.g. after a revalidation or refresh.
const links = typeof WeakMap === 'function' ? new WeakMap() : new Map();
// A single IntersectionObserver instance shared by all <Link> components.
const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver(handleIntersect, {
    rootMargin: '200px'
}) : null;
function mountLinkInstance(element, href, router, kind) {
    let prefetchUrl = null;
    try {
        prefetchUrl = (0, _approuter.createPrefetchURL)(href);
        if (prefetchUrl === null) {
            // We only track the link if it's prefetchable. For example, this excludes
            // links to external URLs.
            return;
        }
    } catch (e) {
        // createPrefetchURL sometimes throws an error if an invalid URL is
        // provided, though I'm not sure if it's actually necessary.
        // TODO: Consider removing the throw from the inner function, or change it
        // to reportError. Or maybe the error isn't even necessary for automatic
        // prefetches, just navigations.
        const reportErrorFn = typeof reportError === 'function' ? reportError : console.error;
        reportErrorFn("Cannot prefetch '" + href + "' because it cannot be converted to a URL.");
        return;
    }
    const instance = {
        prefetchHref: prefetchUrl.href,
        router,
        kind,
        isVisible: false,
        wasHoveredOrTouched: false,
        prefetchTask: null
    };
    const existingInstance = links.get(element);
    if (existingInstance !== undefined) {
        // This shouldn't happen because each <Link> component should have its own
        // anchor tag instance, but it's defensive coding to avoid a memory leak in
        // case there's a logical error somewhere else.
        unmountLinkInstance(element);
    }
    links.set(element, instance);
    if (observer !== null) {
        observer.observe(element);
    }
}
function unmountLinkInstance(element) {
    const instance = links.get(element);
    if (instance !== undefined) {
        links.delete(element);
        const prefetchTask = instance.prefetchTask;
        if (prefetchTask !== null) {
            (0, _scheduler.cancelPrefetchTask)(prefetchTask);
        }
    }
    if (observer !== null) {
        observer.unobserve(element);
    }
}
function handleIntersect(entries) {
    for (const entry of entries){
        // Some extremely old browsers or polyfills don't reliably support
        // isIntersecting so we check intersectionRatio instead. (Do we care? Not
        // really. But whatever this is fine.)
        const isVisible = entry.intersectionRatio > 0;
        onLinkVisibilityChanged(entry.target, isVisible);
    }
}
function onLinkVisibilityChanged(element, isVisible) {
    if ("TURBOPACK compile-time truthy", 1) {
        // Prefetching on viewport is disabled in development for performance
        // reasons, because it requires compiling the target page.
        // TODO: Investigate re-enabling this.
        return;
    }
    "TURBOPACK unreachable";
    const instance = undefined;
}
function onNavigationIntent(element) {
    const instance = links.get(element);
    if (instance === undefined) {
        return;
    }
    // Prefetch the link on hover/touchstart.
    if (instance !== undefined) {
        instance.wasHoveredOrTouched = true;
        rescheduleLinkPrefetch(instance);
    }
}
function rescheduleLinkPrefetch(instance) {
    const existingPrefetchTask = instance.prefetchTask;
    if (!instance.isVisible) {
        // Cancel any in-progress prefetch task. (If it already finished then this
        // is a no-op.)
        if (existingPrefetchTask !== null) {
            (0, _scheduler.cancelPrefetchTask)(existingPrefetchTask);
        }
        // We don't need to reset the prefetchTask to null upon cancellation; an
        // old task object can be rescheduled with bumpPrefetchTask. This is a
        // micro-optimization but also makes the code simpler (don't need to
        // worry about whether an old task object is stale).
        return;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // The old prefetch implementation does not have different priority levels.
        // Just schedule a new prefetch task.
        prefetchWithOldCacheImplementation(instance);
        return;
    }
    "TURBOPACK unreachable";
    // In the Segment Cache implementation, we assign a higher priority level to
    // links that were at one point hovered or touched. Since the queue is last-
    // in-first-out, the highest priority Link is whichever one was hovered last.
    //
    // We also increase the relative priority of links whenever they re-enter the
    // viewport, as if they were being scheduled for the first time.
    const priority = undefined;
}
function prefetchWithOldCacheImplementation(instance) {
    // This is the path used when the Segment Cache is not enabled.
    if (typeof window === 'undefined') {
        return;
    }
    const doPrefetch = async ()=>{
        // note that `appRouter.prefetch()` is currently sync,
        // so we have to wrap this call in an async function to be able to catch() errors below.
        return instance.router.prefetch(instance.prefetchHref, {
            kind: instance.kind
        });
    };
    // Prefetch the page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    doPrefetch().catch((err)=>{
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            // rethrow to show invalid URL errors
            throw err;
        }
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && isModifiedEvent(e)) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        const routerScroll = scroll != null ? scroll : true;
        if ('beforePopState' in router) {
            router[replace ? 'replace' : 'push'](href, as, {
                shallow,
                scroll: routerScroll
            });
        } else {
            router[replace ? 'replace' : 'push'](as || href, {
                scroll: routerScroll
            });
        }
    };
    _react.default.startTransition(navigate);
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * A React component that extends the HTML `<a>` element to provide [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation between routes.
 *
 * It is the primary way to navigate between routes in Next.js.
 *
 * Read more: [Next.js docs: `<Link>`](https://nextjs.org/docs/app/api-reference/components/link)
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    let children;
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    /**
     * The possible states for prefetch are:
     * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
     * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
     * - false: we will not prefetch if in the viewport at all
     */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch' || key === 'legacyBehavior') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error("Dynamic href `" + href + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href"), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo(()=>{
        const resolvedHref = formatStringOrUrl(hrefProp);
        return {
            href: resolvedHref,
            as: asProp ? formatStringOrUrl(asProp) : resolvedHref
        };
    }, [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
            }
            if (onMouseEnterProp) {
                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false
                    });
                }
                throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false
                });
            }
        } else {
            "TURBOPACK unreachable";
        }
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((children == null ? void 0 : children.type) === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback((element)=>{
        if (prefetchEnabled && router !== null) {
            mountLinkInstance(element, href, router, appPrefetchKind);
        }
        return ()=>{
            unmountLinkInstance(element);
        };
    }, [
        prefetchEnabled,
        href,
        router,
        appPrefetchKind
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            "TURBOPACK unreachable";
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            onNavigationIntent(e.currentTarget);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
        ...restProps,
        ...childProps,
        children: children
    });
});
const _default = Link;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}}),

};

//# sourceMappingURL=c1b3e_next_dist_client_add54e._.js.map