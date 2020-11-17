const supportedBrowsers = {
    desktop:
    {
        Windows:
        {
            'Internet Explorer': {
                versions: [
                    {
                        browserSupportedVersions: '>10',
                        pluginVersion: '4.3.0.0',
                        extensionCheck: false,
                    },
                    {
                        browserSupportedVersions: '>10',
                        pluginVersion: '4.2.0.0',
                        extensionCheck: false,
                    },
                ],
            },
            Opera: {
                versions: [
                    {
                        browserSupportedVersions: '>15',
                        pluginVersion: '4.3.0.0',
                        extensionCheck: true,
                    },
                    {
                        browserSupportedVersions: '>15',
                        pluginVersion: '4.2.0.0',
                        extensionCheck: true,
                    },
                ],
            },
            'Microsoft Edge': {
                versions: [
                    {
                        browserSupportedVersions: '>78',
                        pluginVersion: '4.3.0.0',
                        extensionCheck: true,
                    },
                    {
                        browserSupportedVersions: '>10',
                        pluginVersion: '4.3.0.0',
                        extensionCheck: false,
                    }
                ],
            },
            Firefox: {
                versions: [
                    {
                        browserSupportedVersions: '>73',
                        pluginVersion: '4.5.0.0',
                        extensionCheck: true,
                    },
                    {
                        browserSupportedVersions: '>52',
                        pluginVersion: '4.2.0.0',
                        extensionCheck: true,
                    },
                ],
            },
            Chrome: {
                versions: [
                    {
                        browserSupportedVersions: '>50',
                        pluginVersion: '4.3.0.0',
                        extensionCheck: true,
                    },
                    {
                        browserSupportedVersions: '>50',
                        pluginVersion: '4.2.0.0',
                        extensionCheck: true,
                    },
                ],
            },
            'Yandex Browser': {
                versions: [
                    {
                        browserSupportedVersions: '>1',
                        pluginVersion: '4.3.0.0',
                        extensionCheck: true,
                    },
                    {
                        browserSupportedVersions: '>1',
                        pluginVersion: '4.2.0.0',
                        extensionCheck: true,
                    },
                ],
            },
            SputnikBrowser: {
                versions: [
                    {
                        browserSupportedVersions: '>3',
                        pluginVersion: '4.3.0.0',
                        extensionCheck: true,
                    },
                    {
                        browserSupportedVersions: '>3',
                        pluginVersion: '4.2.0.0',
                        extensionCheck: true,
                    },
                ],
            },
            Vivaldi: {
                versions: [
                    {
                        browserSupportedVersions: '>2',
                        pluginVersion: '4.3.0.0',
                        extensionCheck: true,
                    },
                ],
            },
        },
        macOS:
        {
            Opera: {
                versions: [
                    {
                        browserSupportedVersions: '>15',
                        pluginVersion: '4.3.0.0',
                        extensionCheck: true,
                    },
                ],
            },
            Firefox: {
                versions: [
                    {
                        browserSupportedVersions: '>73',
                        pluginVersion: '4.5.0.0',
                        extensionCheck: true,
                    },
                    {
                        browserSupportedVersions: '>51',
                        pluginVersion: '4.2.0.0',
                        extensionCheck: false,
                    },
                ],
            },
            Chrome: {
                versions: [
                    {
                        browserSupportedVersions: '>50',
                        pluginVersion: '4.3.0.0',
                        extensionCheck: true,
                    },
                ],
            },
            'Yandex Browser': {
                versions: [
                    {
                        browserSupportedVersions: '>1',
                        pluginVersion: '4.3.0.0',
                        extensionCheck: true,
                    },
                ],
            },
        },
        Linux:
        {
            Firefox: {
                versions: [
                    {
                        browserSupportedVersions: '>73',
                        pluginVersion: '4.5.0.0',
                        extensionCheck: true,
                    },
                    {
                        browserSupportedVersions: '>50',
                        pluginVersion: '4.2.0.0',
                        extensionCheck: false,
                    },
                ],
            },
            Opera: {
                versions: [
                    {
                        browserSupportedVersions: '>15',
                        pluginVersion: '4.3.3.0',
                        extensionCheck: true,
                    },
                ],
            },
            Chrome: {
                versions: [
                    {
                        browserSupportedVersions: '>50',
                        pluginVersion: '4.3.3.0',
                        extensionCheck: true,
                    },
                ],
            },
            SputnikBrowser: {
                versions: [
                    {
                        browserSupportedVersions: '>3',
                        pluginVersion: '4.5.0.0',
                        extensionCheck: true,
                    },
                ],
            },
            Chromium: {
                versions: [
                    {
                        browserSupportedVersions: '>49',
                        pluginVersion: '4.2.0.0',
                        extensionCheck: true,
                        allowUnknownBrowserVersion: true
                    },
                ],
            }
        },
    },
};

export default supportedBrowsers;
