function knownDeviceModels(plugin) {
    const knownDevices = [];

    function RutokenModel() {
        this.mechanisms = undefined;
        this.features = undefined;
        this.speed = undefined;
        this.name = undefined;
        this.type = undefined;
    }

    RutokenModel.prototype.has = function (mechanisms, features, speed) {
        function findSecondArrayInFirst(firts, second) {
            for (const key in second) {
                if (firts.indexOf(second[key]) == -1) return false;
            }
            return true;
        }
        // eslint-disable-next-line
        for (const mechType in this.mechanisms) {
            for (const implType in this.mechanisms[mechType]) {
                if (!findSecondArrayInFirst(mechanisms[mechType][implType], this.mechanisms[mechType][implType])) {
                    return false;
                }
            }
        }
        // eslint-disable-next-line
        for (const featureName in this.features) {
            // eslint-disable-next-line
            if (!this.features.hasOwnProperty(featureName)) { return false; }

            if (features[featureName] != this.features[featureName]) { return false; }
        }

        if (this.speed != undefined && this.speed != speed) {
            return false;
        }
        return true;
    };

    const mechsSignGost2012 = [plugin.PUBLIC_KEY_ALGORITHM_GOST3410_2012_256, plugin.PUBLIC_KEY_ALGORITHM_GOST3410_2012_512];
    const mechsSignGost2001 = [plugin.PUBLIC_KEY_ALGORITHM_GOST3410_2001];
    const mechsSignRsa = [plugin.PUBLIC_KEY_ALGORITHM_RSA_512,
        plugin.PUBLIC_KEY_ALGORITHM_RSA_768, plugin.PUBLIC_KEY_ALGORITHM_RSA_1024,
        plugin.PUBLIC_KEY_ALGORITHM_RSA_1280, plugin.PUBLIC_KEY_ALGORITHM_RSA_1536,
        plugin.PUBLIC_KEY_ALGORITHM_RSA_1792, plugin.PUBLIC_KEY_ALGORITHM_RSA_2048];
    const mechsSignRsa4096 = [plugin.PUBLIC_KEY_ALGORITHM_RSA_4096];

    const mechsHash94 = [plugin.HASH_TYPE_GOST3411_94];
    const mechsHash2012 = [plugin.HASH_TYPE_GOST3411_12_256, plugin.HASH_TYPE_GOST3411_12_512];

    const mechGostCipher = [plugin.CIPHER_ALGORITHM_GOST28147];

    const ecp3_0Mechanisms = {
        sign: { hardware: [].concat(mechsSignGost2001).concat(mechsSignGost2012).concat(mechsSignRsa).concat(mechsSignRsa4096) },

        hash: { hardware: [].concat(mechsHash94).concat(mechsHash2012) },

    };

    const ecp2_0Mechanisms = {
        sign: { hardware: [].concat(mechsSignGost2001).concat(mechsSignGost2012).concat(mechsSignRsa) },

        hash: { hardware: [].concat(mechsHash94).concat(mechsHash2012) },

    };

    const ecpMechanisms = {
        sign: { hardware: [].concat(mechsSignGost2001).concat(mechsSignRsa) },

        hash: { hardware: [].concat(mechsHash94) },

        cipher: { hardware: [].concat(mechGostCipher) },
    };

    const RutokenEcp3_0 = function () {
        this.mechanisms = ecp3_0Mechanisms;

        this.features = {
            journal: true,
            customPin: true,
            externalAuth: false,
        };

        this.name = 'Рутокен ЭЦП 3.0';
        this.type = rutokenDeviceType.RutokenEcp3_0;
        this.isSupported = true;
    };
    RutokenEcp3_0.prototype = new RutokenModel();
    knownDevices.push(new RutokenEcp3_0());

    const RutokenEcp2_0 = function () {
        this.mechanisms = ecp2_0Mechanisms;

        this.features = { journal: true };

        this.speed = 3;

        this.type = rutokenDeviceType.RutokenEcp2_0;
        this.name = 'Рутокен ЭЦП 2.0';
        this.isSupported = true;
    };

    RutokenEcp2_0.prototype = new RutokenModel();
    knownDevices.push(new RutokenEcp2_0());

    const RutokenEcpFlash2_0 = function () {
        this.mechanisms = ecp2_0Mechanisms;

        this.features = {
            journal: true,
            flashDrive: true,
        };

        this.type = rutokenDeviceType.RutokenEcpFlash2_0;
        this.name = 'Рутокен ЭЦП 2.0 Flash';
        this.isSupported = true;
    };
    RutokenEcpFlash2_0.prototype = new RutokenModel();
    knownDevices.push(new RutokenEcpFlash2_0());

    const RutokenEcpTouch2_0 = function () {
        this.mechanisms = ecp2_0Mechanisms;

        this.features = {
            journal: true,
            confirmation: true,
            visualization: false,
        };

        this.name = 'Рутокен ЭЦП 2.0';
        this.type = rutokenDeviceType.RutokenEcpTouch2_0;
        this.isSupported = true;
    };
    RutokenEcpTouch2_0.prototype = new RutokenModel();
    knownDevices.push(new RutokenEcpTouch2_0());

    const RutokenEcpFlashTouch2_0 = function () {
        this.mechanisms = ecp2_0Mechanisms;

        this.features = {
            journal: true,
            confirmation: true,
            flashDrive: true,
            visualization: false,
        };

        this.name = 'Рутокен ЭЦП 2.0 Flash';
        this.type = rutokenDeviceType.RutokenEcpFlashTouch2_0;
        this.isSupported = true;
    };
    RutokenEcpFlashTouch2_0.prototype = new RutokenModel();
    knownDevices.push(new RutokenEcpFlashTouch2_0());

    const RutokenEcpPki2_0 = function () {
        this.mechanisms = ecp2_0Mechanisms;

        this.features = { journal: true };

        this.speed = 1;
        this.type = rutokenDeviceType.RutokenEcpPki2_0;
        this.name = 'Рутокен ЭЦП 2.0';
        this.isSupported = true;
    };
    RutokenEcpPki2_0.prototype = new RutokenModel();
    knownDevices.push(new RutokenEcpPki2_0());

    const RutokenEcp2151 = function () {
        this.mechanisms = ecp2_0Mechanisms;

        this.features = {
            journal: true,
            bio: 1,
        };

        this.name = 'Рутокен 2151';
        this.isSupported = false;
    };
    RutokenEcp2151.prototype = new RutokenModel();
    knownDevices.push(new RutokenEcp2151());

    const RutokenEcp2_0Bluetooth = function () {
        this.mechanisms = ecp2_0Mechanisms;

        this.features = { sm: true };

        this.type = rutokenDeviceType.RutokenEcp2_0Bluetooth;
        this.name = 'Рутокен Bluethooth';
        this.isSupported = false;
    };
    RutokenEcp2_0Bluetooth.prototype = new RutokenModel();
    knownDevices.push(new RutokenEcp2_0Bluetooth());

    const RutokenPinpad2_0 = function () {
        this.mechanisms = ecp2_0Mechanisms;

        this.features = {
            journal: true,
            pin2: true,
            confirmation: true,
            visualization: true,
        };

        this.type = rutokenDeviceType.RutokenPinpad2_0;
        this.name = 'Рутокен PINPad';
        this.isSupported = false;
    };
    RutokenPinpad2_0.prototype = new RutokenModel();
    knownDevices.push(new RutokenPinpad2_0());

    const RutokenEcp = function () {
        this.mechanisms = ecpMechanisms;

        this.speed = 3;

        this.type = rutokenDeviceType.RutokenEcp;
        this.name = 'Рутокен ЭЦП';
        this.isSupported = false;
    };
    RutokenEcp.prototype = new RutokenModel();
    knownDevices.push(new RutokenEcp());

    const RutokenEcpBluetooth = function () {
        this.mechanisms = ecpMechanisms;

        this.features = { sm: true };

        this.type = rutokenDeviceType.RutokenEcpBluetooth;
        this.name = 'Рутокен Bluethooth';
        this.isSupported = false;
    };
    RutokenEcpBluetooth.prototype = new RutokenModel();
    knownDevices.push(new RutokenEcpBluetooth());

    const RutokenEcpPki = function () {
        this.mechanisms = ecpMechanisms;

        this.speed = 1;

        this.type = rutokenDeviceType.RutokenEcpPki;
        this.name = 'Рутокен PKI';
        this.isSupported = false;
    };
    RutokenEcpPki.prototype = new RutokenModel();
    knownDevices.push(new RutokenEcpPki());

    const RutokenEcpFlash = function () {
        this.mechanisms = ecpMechanisms;

        this.features = { flashDrive: true };

        this.type = rutokenDeviceType.RutokenEcpFlash;
        this.name = 'Рутокен ЭЦП Flash';
        this.isSupported = false;
    };
    RutokenEcpFlash.prototype = new RutokenModel();
    knownDevices.push(new RutokenEcpFlash());

    const RutokenLite = function () {
        this.mechanisms = {
            sign: { hardware: [] },

            hash: { hardware: [] },

            cipher: { hardware: [] },
        };

        this.type = rutokenDeviceType.RutokenLite;
        this.name = 'Рутокен Lite';
    };
    RutokenLite.prototype = new RutokenModel();
    knownDevices.push(new RutokenLite());

    return knownDevices;
}

export function detectRutokenDevice(device, plugin) {
    const knownModels = knownDeviceModels(plugin);

    for (const i in knownModels) {
        if (knownModels[i].has(device.mechanisms, device.features, device.speed)) {
            return {
                modelName: knownModels[i].name,
                deviceType: knownModels[i].type,
                isSupported: knownModels[i].isSupported,
            };
        }
    }

    return { modelName: 'Неизвестная модель', isSupported: false };
}

export const rutokenDeviceType = {
    RutokenEcp3_0: 1,
    RutokenEcp2_0: 2,
    RutokenEcpFlash2_0: 3,
    RutokenEcpFlashTouch2_0: 4,
    RutokenEcpPki2_0: 5,
    RutokenEcp2_0Bluetooth: 6,
    RutokenPinpad2_0: 7,
    RutokenEcp: 8,
    RutokenEcpBluetooth: 9,
    RutokenEcpPki: 10,
    RutokenEcpFlash: 11,
    RutokenLite: 12,
};
