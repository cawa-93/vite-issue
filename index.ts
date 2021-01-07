import {autoUpdater} from 'electron-updater';

try {
    console.log({autoUpdater});
    console.log('Runtime success');
} catch (e) {
    console.log('Import success');
}
