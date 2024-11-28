import { parseLeaderData } from '../helpers/leaders'
import * as config from './default-config'

export const getLeaders = async (category: string) => {
    config.leagueleaders.StatCategory = category
    // let data: any[] = [];

    // if (process.env.NODE_ENV === 'development') {
    //     return await fetch('db/league-leaders/points.json')
    //     .then(res => res.json())
    //     .then(res => res.resultSet.rowSet)
    //     .catch(err => console.log('Error while getting leage leaders', err))

    // } else {
        fetch('https://stats.nba.com/stats/leagueleaders', {
            method: 'POST',
            body: JSON.stringify(config.leagueleaders),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => res.json())
        .then(res => {
            // console.log(res.resultSet.rowSet)
            return res.resultSet.rowSet
        })
        .catch(err => console.log('Error while getting leage leaders', err))
    // }

    // return parseLeaderData(lb);

    // await fetch('/leagueleaders', {
    //     method: 'POST',
    //     body: JSON.stringify(config.leagueleaders),
    //     headers: {
    //         'Accept': 'application/json, text/plain, */*',
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    //     .then(res => res.json())
    //     .then(res => console.log(res.data.resultSet.rowSet))
    //     .catch(err => console.log('Error while getting leage leaders', err))

    // axios.post('/leagueleaders', config.leagueleaders)
    // .then(res => dispatch(action(res.data.resultSet.rowSet)))
    // .catch(err => console.log(err))
}

// export const getPlayers = (dispatch, action) => {
//     axios.post('/commonallplayers', config.commonallplayers)
//     .then(res => dispatch(action(res.data.resultSets[0])))
//     .catch(err => console.log(err));
// }

// export const getTeams = (dispatch, action, id) => {
//     config.teaminfocommon.TeamID = id
//     axios.post("/teaminfocommon", config.teaminfocommon)
//     .then(res => dispatch(action(res.data.resultSets[0].rowSet[0])))
//     .catch(err => console.log(err))
// }