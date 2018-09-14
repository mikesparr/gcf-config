import {Config, IConfig} from "../index";

describe("GCF Config", () => {
    const testNameKey: string = "name";
    const testNameEnvKey: string = "TEST_NAME";
    const testNameValue: string = "test_name";
    const testVersionKey: string = "version";
    const testVersionEnvKey: string = "TEST_VERSION";
    const testVersionValue: string = "test_version";

    const config: IConfig<string> = new Config({name: "TEST_NAME", version: "TEST_VERSION"});

    it("instantiates a config class", () => {
        expect(config).toBeInstanceOf(Config);
    });

    it("throws error if missing required object", () => {
        const testInstance = () => {
            return new Config(undefined);
        };

        expect( testInstance ).toThrow(TypeError);
    });

    describe("get", () => {
        let testConfig: IConfig<string>;

        beforeAll((done) => {
            // set test ENV vars
            process.env[testNameEnvKey] = testNameValue;
            process.env[testVersionEnvKey] = testVersionValue;

            testConfig = new Config({
                [testNameKey]: testNameEnvKey,
                [testVersionKey]: testVersionEnvKey,
            });

            done();
        });

        afterAll((done) => {
            // set test ENV vars
            process.env[testNameEnvKey] = undefined;
            process.env[testVersionEnvKey] = undefined;
            done();
        });

        it("returns expected value from config", () => {
            expect( testConfig.get(testNameKey) ).toEqual(testNameValue);
            expect( testConfig.get(testVersionKey) ).toEqual(testVersionValue);
        });
    }); // get
});
