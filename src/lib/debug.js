/**
 * Debug tools (Leva) are not part of the Next.js port, debug mode is always off.
 * The exports of the original file are kept so every import path and name still resolves.
 */
export const isDebugMode = false;

// Nothing to load without Leva
export async function loadDebugTools() {}

export function getLevaModule() {
  return null;
}

// Same signature as Leva's folder()
export function folder(schema) {
  return { isFolderPlaceholder: true, schema };
}

function isFolderPlaceholder(value) {
  return (
    typeof value === "object" &&
    value !== null &&
    "isFolderPlaceholder" in value
  );
}

// Flattened default values of a Leva schema, like useControls() returns them
function getSchemaDefaultValues(schema) {
  const values = {};

  for (const [key, input] of Object.entries(schema)) {
    if (isFolderPlaceholder(input))
      Object.assign(values, getSchemaDefaultValues(input.schema));
    else if (
      typeof input === "object" &&
      input !== null &&
      "value" in input &&
      !Array.isArray(input)
    )
      values[key] = input.value;
    else values[key] = input;
  }

  return values;
}

const defaultValuesCache = new Map();

/**
 * Drop-in replacement of Leva's useControls(): always returns the plain default values
 */
export function useDebugControls(name, schema) {
  // Stable object identity across renders (the values never change without the debug panel)
  if (!defaultValuesCache.has(name))
    defaultValuesCache.set(name, getSchemaDefaultValues(schema));
  return defaultValuesCache.get(name);
}
