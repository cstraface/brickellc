(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__120ffc._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/lib/auth/session.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "comparePasswords": (()=>comparePasswords),
    "getSession": (()=>getSession),
    "hashPassword": (()=>hashPassword),
    "setSession": (()=>setSession),
    "signToken": (()=>signToken),
    "verifyToken": (()=>verifyToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$2$2e$4$2e$3$2f$node_modules$2f$bcryptjs$2f$dist$2f$bcrypt$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/bcryptjs@2.4.3/node_modules/bcryptjs/dist/bcrypt.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$33_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/api/headers.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$sign$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/jwt/sign.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$verify$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.9.6/node_modules/jose/dist/browser/jwt/verify.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$33_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/server/request/cookies.js [middleware] (ecmascript)");
;
;
;
const key = new TextEncoder().encode(process.env.AUTH_SECRET);
const SALT_ROUNDS = 10;
async function hashPassword(password) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$2$2e$4$2e$3$2f$node_modules$2f$bcryptjs$2f$dist$2f$bcrypt$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["hash"])(password, SALT_ROUNDS);
}
async function comparePasswords(plainTextPassword, hashedPassword) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$2$2e$4$2e$3$2f$node_modules$2f$bcryptjs$2f$dist$2f$bcrypt$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["compare"])(plainTextPassword, hashedPassword);
}
async function signToken(payload) {
    return await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$sign$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: 'HS256'
    }).setIssuedAt().setExpirationTime('1 day from now').sign(key);
}
async function verifyToken(input) {
    const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$9$2e$6$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$verify$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["jwtVerify"])(input, key, {
        algorithms: [
            'HS256'
        ]
    });
    return payload;
}
async function getSession() {
    const session = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$33_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])()).get('session')?.value;
    if (!session) return null;
    return await verifyToken(session);
}
async function setSession(user) {
    const expiresInOneDay = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const session = {
        user: {
            id: user.id
        },
        expires: expiresInOneDay.toISOString()
    };
    const encryptedSession = await signToken(session);
    (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$33_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])()).set('session', encryptedSession, {
        expires: expiresInOneDay,
        httpOnly: true,
        secure: true,
        sameSite: 'lax'
    });
}
}}),
"[project]/middleware.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$33_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$session$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/auth/session.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$33_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.2.0-canary.33_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
;
;
const protectedRoutes = '/dashboard';
async function middleware(request) {
    const { pathname } = request.nextUrl;
    const sessionCookie = request.cookies.get('session');
    const isProtectedRoute = pathname.startsWith(protectedRoutes);
    if (isProtectedRoute && !sessionCookie) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$33_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/sign-in', request.url));
    }
    let res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$33_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    if (sessionCookie) {
        try {
            const parsed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$session$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["verifyToken"])(sessionCookie.value);
            const expiresInOneDay = new Date(Date.now() + 24 * 60 * 60 * 1000);
            res.cookies.set({
                name: 'session',
                value: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$session$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["signToken"])({
                    ...parsed,
                    expires: expiresInOneDay.toISOString()
                }),
                httpOnly: true,
                secure: true,
                sameSite: 'lax',
                expires: expiresInOneDay
            });
        } catch (error) {
            console.error('Error updating session:', error);
            res.cookies.delete('session');
            if (isProtectedRoute) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0$2d$canary$2e$33_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/sign-in', request.url));
            }
        }
    }
    return res;
}
const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__120ffc._.js.map