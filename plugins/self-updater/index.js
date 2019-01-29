
let config = {
    "url": "zadam/trilium",
    "betaBuilds": true
}

function getLocalVersion(){

    return api.runOnServer(() => {
        const getAppInfo = api.getAppInfo()
        return getAppInfo.appVersion
    })

}

function getLatestVersion(url){
    return fetch(url)
}

async function checkForNewer(){

    let url = `https://api.github.com/repos/${config.url}/releases`

    if(config.betaBuilds === false) {
        url = url.concat('/latest')
    }

    const data = await getLatestVersion(url)

        //double promise due to redirect from github

        const values = await Promise.all([
            getLocalVersion(),
            data.json()
        ])

        const localVersion = values[0]
        let latestVersion = config.betaBuilds ? values[1][0].tag_name : values[1].tag_name

        console.log(localVersion)

        let localVstripped  = localVersion.replace(/\D/g, '')
        let latestVstripped = latestVersion.replace(/\D/g, '')

        if(latestVstripped > localVstripped){
            window.alert(`                                       Update available!\n\nCurrent version: ${localVersion}\nLatest Version:   ${latestVersion}`)
        }
}

checkForNewer()
