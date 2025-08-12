import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("characters", "routes/characters.tsx"),
    route("spells", "routes/spells.tsx")
] satisfies RouteConfig;
