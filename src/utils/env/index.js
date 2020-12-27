import 'dotenv/config';
/**
 *
 * @param varName
 * @param defaultValue
 * @returns {string | *}
 */
function getEnv(varName, defaultValue) {
    return process.env[varName] || defaultValue;
}

/**
 *
 * @param varNames
 * @returns {object}
 */
function getEnvVariables(...varNames) {
    return varNames.reduce((acc, varName) => ({ ...acc, [varName]: process.env[varName] }), {});
}

export { getEnvVariables, getEnv };