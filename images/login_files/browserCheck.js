function BrowserCheck()
{
    var N= navigator.appName, ua= navigator.userAgent, tem;
    var M= ua.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) {M[2]=tem[1];}
    M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
    return M;
}

function upgradeNavigator() {
    //window.location.href = '/adp/upgrade_navigator.html';
}

var browserData = BrowserCheck(),
    browser = browserData[0],
    version = browserData[1].split('.'),
    major = parseInt(version[0]),
    minor = parseInt(version[1]),
    minor2 = parseInt(version[2]);

switch(browser) {
    case 'Safari':
        if( major <= 6 && minor <= 1 ) {
            if( major === 6 && minor === 1 ) {
                if( minor2 === 0 ) {
                    upgradeNavigator();
                }
            } else {
                upgradeNavigator();
            }
        }
        break;
}
