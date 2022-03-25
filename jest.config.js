module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['<rootDir>/src'],
	coverageThreshold: {
		'./src': {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
};
