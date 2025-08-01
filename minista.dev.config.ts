import { defineConfig } from "minista"
import createConfig from "./minista.common.config";

export default defineConfig(
    createConfig({
        base: '/'
    })
);