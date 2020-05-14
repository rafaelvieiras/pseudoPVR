const NodeMediaServer = require('node-media-server');
const { spawn } = require('child_process');
const kill = require('tree-kill');
const { FileFind } = require('./src/utils/FileFind');
 
// const config = {
//   rtmp: {
//     port: 1935,
//     chunk_size: 60000,
//     gop_cache: true,
//     ping: 30,
//     ping_timeout: 60
//   },
//   http: {
//     port: 8000,
//     allow_origin: '*'
//   }
// };
 
// var nms = new NodeMediaServer(config)
// nms.run();

// let exProcess = null;

// nms.on('prePlay', (id, args) => {
//     console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`);
//     exProcess = spawn('ffmpeg', 
//     [   
//         '-re',
//         '-i',
//         'justice.mkv',
//         '-c:v',
//         'libx264',
//         '-preset',
//         'superfast',
//         '-tune',
//         'zerolatency',
//         '-c:a',
//         'aac',
//         '-ar',
//         '44100',
//         '-f',
//         'flv',
//         'rtmp://localhost:1935/live/batman'
//     ]);
// });

// nms.on('doneConnect', (id, StreamPath, args) => {
//     console.log('[NodeEvent on doneConnect]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
//     kill(exProcess.pid);
// });

function init() {
    const root = '/run/user/1000/gvfs/sftp:host=nashome.local/sharedfolders/media/Videos/Filmes';
    const find = new FileFind(null, root);
}

init();