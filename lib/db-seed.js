var db          = require('diskdb');
db              = db.connect('./db', ['schedule']);

var Schedule = require('../models/scheduleModel');
var ImportRule = require('../models/importRuleModel');
var RunnerRule = require('../models/runnerRuleModel');





function ScheduleCreate(){
   var schedule = new Schedule({
       schedule_type: 'movie',
       title: "Filme #" + Math.random(),
       serie_id: '',
       video_file: {
           fullPath: 'c:/windows/filmes.avi',
           duration: '300'
        }
    });
    db.schedule.save(schedule);
}

function ScheduleCreate(){
   var schedule = new Schedule({
       schedule_type: 'movie',
       title: "Filme #" + Math.random(),
       serie_id: '',
       video_file: {
           fullPath: 'c:/windows/filmes.avi',
           duration: '300'
        }
    });
    db.schedule.save(schedule);
}

// function ImportRuleCreate(){
//    var schedule = new Schedule({
//        schedule_type: 'movie',
//        title: "Filme #" + Math.random(),
//        serie_id: '',
//        video_file: {
//            fullPath: 'c:/windows/filmes.avi',
//            duration: '300'
//         }
//     });
//     db.schedule.save(schedule);
// }

var i = 0;
while (i < 10) {
    ScheduleCreate();
    console.log(i);
    i++;
}


