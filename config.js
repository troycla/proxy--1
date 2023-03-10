const aeroPrefix = "/aero/";
const prefix = "/go/";

const backends = ["/fetch"];
const wsBackends = ["/fetchws"];
// Not implemented yet
const wrtcBackends = {
	// This is recommended, as it will likely be unblocked
	ice: ["stun:stun.l.google.com:19302"],
};

const dynamicConfig = {
	// The database name
	dbName: "aero",
	// Id to differentiate message from other purposes
	id: "update",
};

// For experimental features
const flags = {
	legacy: true, // Recommended
	nonstandard: true, // Browser-specific code. Recommended
	dynamicUpdates: false, // Recommended
	corsEmulation: true, // Recommended
	wrtc: true, // Recommended
	ws: true, // Recommended
	misc: false, // Experimental features that haven't been tested, and aren't significant enough to earn a flag
	safariSupport: false, // Safari has limited support of SW, so there may be some workarounds
	advancedScoping: true, // May impair performance
	nestedWorkers: false, // Not finished
};

// Ignore these if you are not a programmer
const debug = {
	errors: true,
	url: false,
	src: false,
	scoping: false,
};

export {
	aeroPrefix,
	prefix,
	backends,
	wsBackends,
	wrtcBackends,
	dynamicConfig,
	flags,
	debug,
};
