/**
 * Returns the FreeRTOS port identifier for a given ARM Cortex core name when TrustZone is enabled.
 * @param {string} coreName - The name of the ARM Cortex core (e.g., "Cortex-M33").
 * @returns {string} - The corresponding FreeRTOS port identifier, or "UnknownPort" if not found.
 */
function get_freertos_port_tz(coreName) {
  /* Map coreType to port for TrustZone enabled */
  const mapping = {
    "Cortex-M23": "ARM_CM23",
    "Cortex-M33": "ARM_CM33",
    "Cortex-M55": "ARM_CM55",
    "Cortex-M85": "ARM_CM85",
    /* Add more as needed */
  };
  return mapping[coreName] || 'UnknownPort';
}

/**
 * Returns the FreeRTOS port identifier for a given ARM Cortex core name when TrustZone is disabled.
 * @param {string} coreName - The name of the ARM Cortex core (e.g., "Cortex-M33").
 * @returns {string} - The corresponding FreeRTOS port identifier, or "UnknownPort" if not found.
 */
function get_freertos_port_no_tz(coreName) {
  /* Map coreType to port for TrustZone disabled */
  const mapping = {
    "Cortex-M0": "ARM_CM0",
    "Cortex-M0+": "ARM_CM0",
    "Cortex-M3": "ARM_CM3",
    "Cortex-M4": "ARM_CM4F",
    "Cortex-M7": "ARM_CM4F",
    "Cortex-M23": "ARM_CM23_NTZ",
    "Cortex-M33": "ARM_CM33_NTZ",
    "Cortex-M55": "ARM_CM55_NTZ",
    "Cortex-M85": "ARM_CM85_NTZ",
    /* Add more as needed */
  };
  return mapping[coreName] || 'UnknownPort';
}

/**
 * Function to get a default name based on the current item and its position in a list.
 *
 * @param {string} default_value - The base default name to be used.
 * @param {Object} current_item - The current item for which the default name is being generated.
 * @param {Array} items - The list of items to search for the current item.
 * @returns {string} - The generated default name, potentially appended with an index.
 *
 * This function checks if the current item exists in the provided list of items.
 * If found, it appends the item's index (plus one) to the default name.
 * If not found, it returns the original default name.
 */
function get_default_name(default_value, current_item, items) {
    if (items && items instanceof Array && items.length > 0) {
      var index = items.indexOf(current_item);
      default_value = (index !== -1) ? default_value + (index + 1) : default_value;
    }
    return default_value;
  }

module.exports = {
  get_default_name,
  get_freertos_port_no_tz,
  get_freertos_port_tz
}