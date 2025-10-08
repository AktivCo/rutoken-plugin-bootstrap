
function bindAlgorithms(plugin) {
    const hashAlgorithms = {};

    hashAlgorithms[plugin.HASH_TYPE_GOST3411_94] = {
        name: 'HASH_TYPE_GOST3411_94',
        text: 'ГОСТ Р 34.11-94',
        value: plugin.HASH_TYPE_GOST3411_94,
    };

    hashAlgorithms[plugin.HASH_TYPE_GOST3411_12_256] = {
        name: 'HASH_TYPE_GOST3411_12_256',
        text: 'ГОСТ Р 34.11-12 256',
        value: plugin.HASH_TYPE_GOST3411_12_256,
    };

    hashAlgorithms[plugin.HASH_TYPE_GOST3411_12_512] = {
        name: 'HASH_TYPE_GOST3411_12_512',
        text: 'ГОСТ Р 34.11-12 512',
        value: plugin.HASH_TYPE_GOST3411_12_512,
    };

    hashAlgorithms[plugin.HASH_TYPE_MD5] = {
        name: 'HASH_TYPE_MD5',
        text: 'MD5',
        value: plugin.HASH_TYPE_MD5,
    };

    hashAlgorithms[plugin.HASH_TYPE_SHA1] = {
        name: 'HASH_TYPE_SHA1',
        text: 'SHA1',
        value: plugin.HASH_TYPE_SHA1,
    };

    hashAlgorithms[plugin.HASH_TYPE_SHA256] = {
        name: 'HASH_TYPE_SHA256',
        text: 'SHA256',
        value: plugin.HASH_TYPE_SHA256,
    };

    hashAlgorithms[plugin.HASH_TYPE_SHA512] = {
        name: 'HASH_TYPE_SHA512',
        text: 'SHA512',
        value: plugin.HASH_TYPE_SHA512,
    };


    const keyAlgorithms = {};

    keyAlgorithms[plugin.PUBLIC_KEY_ALGORITHM_GOST3410_2012_256] = {
        name: 'PUBLIC_KEY_ALGORITHM_GOST3410_2012_256',
        text: 'ГОСТ Р 34.10-2012 256-бит',
        value: plugin.PUBLIC_KEY_ALGORITHM_GOST3410_2012_256,
        additional: 'используется в ЕГАИС',
        paramset: 'A',
        signatureSize: 512,
        hash: [
            hashAlgorithms[plugin.HASH_TYPE_GOST3411_12_256],
        ],
    };

    keyAlgorithms[plugin.PUBLIC_KEY_ALGORITHM_GOST3410_2012_512] = {
        name: 'PUBLIC_KEY_ALGORITHM_GOST3410_2012_512',
        text: 'ГОСТ Р 34.10-2012 512-бит',
        value: plugin.PUBLIC_KEY_ALGORITHM_GOST3410_2012_512,
        paramset: 'A',
        signatureSize: 1024,
        hash: [
            hashAlgorithms[plugin.HASH_TYPE_GOST3411_12_512],
        ],
    };

    keyAlgorithms[plugin.PUBLIC_KEY_ALGORITHM_RSA] = {
        name: 'PUBLIC_KEY_ALGORITHM_RSA',
        text: 'RSA',
        value: plugin.PUBLIC_KEY_ALGORITHM_RSA,
        signatureSize: 2048,
        hash: [
            hashAlgorithms[plugin.HASH_TYPE_MD5],
            hashAlgorithms[plugin.HASH_TYPE_SHA1],
            hashAlgorithms[plugin.HASH_TYPE_SHA256],
            hashAlgorithms[plugin.HASH_TYPE_SHA512],
        ],
    };

    keyAlgorithms[plugin.PUBLIC_KEY_ALGORITHM_GOST3410_2001] = {
        name: 'PUBLIC_KEY_ALGORITHM_GOST3410_2001',
        text: 'ГОСТ Р 34.10-2001',
        value: plugin.PUBLIC_KEY_ALGORITHM_GOST3410_2001,
        additional: 'выводится из эксплуатации',
        paramset: 'A',
        signatureSize: 512,
        hash: [
            hashAlgorithms[plugin.HASH_TYPE_GOST3411_94],
        ],
    };

    keyAlgorithms[plugin.PUBLIC_KEY_ALGORITHM_ECDSA] = {
        name: 'PUBLIC_KEY_ALGORITHM_ECDSA',
        text: 'ECDSA',
        value: plugin.PUBLIC_KEY_ALGORITHM_ECDSA,
        paramsets: [
            { paramset: 'secp256k1', signatureSize: 512 },
            { paramset: 'secp256r1', signatureSize: 512 },
            { paramset: 'secp384r1', signatureSize: 768 },
            { paramset: 'secp521r1', signatureSize: 1056 },
        ],
        hash: [
            hashAlgorithms[plugin.HASH_TYPE_SHA256],
        ],
    };

    this.keyAlgorithms = keyAlgorithms;
}

export default bindAlgorithms;
