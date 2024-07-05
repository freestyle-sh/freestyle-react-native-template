import { Hono } from "npm:hono";
import { serveStatic } from 'npm:hono/deno'

const app = new Hono();

app.use(serveStatic({
    root: './dist',
}));

Deno.serve(app.fetch);
