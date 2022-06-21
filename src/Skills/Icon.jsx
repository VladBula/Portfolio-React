import IcoMoon from 'react-icomoon';
const iconSet = require('../assets/images/selection.json');

export const Icon = (props) => {
    return <IcoMoon iconSet={iconSet} {...props}/>
}