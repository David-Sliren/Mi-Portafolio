#!/usr/bin/env node
// scripts/check-i18n.mjs
// Verifica que src/messages/es.json y src/messages/en.json tengan exactamente
// las mismas claves (anidadas), los mismos tipos de hoja y la misma longitud
// en los arrays (p. ej. experience.achievements).

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const esPath = join(root, "src/messages/es.json");
const enPath = join(root, "src/messages/en.json");

function load(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (err) {
    console.error(`❌ No se pudo leer ${path}: ${err.message}`);
    process.exit(1);
  }
}

const es = load(esPath);
const en = load(enPath);

const errors = [];

// Recorre un objeto y devuelve un Map: ruta -> { type, arrayLength? }
// Para arrays registra la longitud en la ruta del array y recursiona por índice.
function walk(value, path, out) {
  if (Array.isArray(value)) {
    out.set(path, { kind: "array", length: value.length });
    value.forEach((item, i) => walk(item, `${path}[${i}]`, out));
    return;
  }
  if (value !== null && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      walk(v, path ? `${path}.${k}` : k, out);
    }
    // objeto vacío: registrar como objeto hoja
    if (Object.keys(value).length === 0) {
      out.set(path, { kind: "object", length: 0 });
    }
    return;
  }
  out.set(path, { kind: typeof value });
}

const esMap = new Map();
const enMap = new Map();
walk(es, "", esMap);
walk(en, "", enMap);

// Normalizar la ruta vacía (raíz) por si acaso
esMap.delete("");
enMap.delete("");

const allKeys = new Set([...esMap.keys(), ...enMap.keys()]);

for (const key of [...allKeys].sort()) {
  const a = esMap.get(key);
  const b = enMap.get(key);
  if (!a) {
    errors.push(`Falta la clave en es.json: "${key}"`);
    continue;
  }
  if (!b) {
    errors.push(`Falta la clave en en.json: "${key}"`);
    continue;
  }
  if (a.kind !== b.kind) {
    errors.push(
      `Tipo distinto en "${key}": es.json tiene "${a.kind}", en.json tiene "${b.kind}".`
    );
    continue;
  }
  if (a.kind === "array" && a.length !== b.length) {
    errors.push(
      `Longitud de array distinta en "${key}": es.json tiene ${a.length}, en.json tiene ${b.length}.`
    );
  }
}

if (errors.length > 0) {
  console.error("❌ check-i18n: los archivos de mensajes no coinciden:");
  for (const e of errors) console.error("  - " + e);
  console.error(
    `\nTotal de diferencias: ${errors.length}. Revisa src/messages/es.json y src/messages/en.json.`
  );
  process.exit(1);
}

console.log(
  `✅ check-i18n: paridad OK — ${esMap.size} claves coinciden (incluyendo longitudes de arrays).`
);
process.exit(0);
