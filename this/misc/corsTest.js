/**
 * Tests to see if the request would be blocked due to cors rules
 * @param {String} - url The url that is being tested
 * @return {Boolean} The result
 */
export default async url => {
	// FIXME: Doesn't always work
	try {
		const controller = new AbortController();
		const signal = controller.signal;

		await fetch(url, { signal });

		// Don't actually send the request.
		controller.abort();

		return false;
	} catch (err) {
		return err.name === "AbortError";
	}
};
