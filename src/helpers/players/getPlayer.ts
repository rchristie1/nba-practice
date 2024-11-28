import noImage from '../../../assets/images/noImage.jpg';
import {PlayerDetails} from '../../components/Players/PlayerDetails';
import {commonplayerinfo, playercareerstats, HeadShotsNBA} from '../../api/default-config';

export const getPlayer = (id: any, [setPlayerData, setPlayerAverages, setCareerStats, setTotals, setPlayerImage, dispatch]: any) => {
    const PID = id;
    //Apply the current PlayerID to the config options
    commonplayerinfo.PlayerID = PID;
    playercareerstats.PlayerID = PID;

    fetch('/commonplayerinfo', {
      method: 'POST'
    })
    .then(res => res.json())
    .then(res => {
      setPlayerData(res.data.resultSets[0].rowSet[0]);
      setPlayerAverages(res.data.resultSets[1].rowSet[0]);

      fetch('/playercareerstats', {
        method: 'POST',
        body: JSON.stringify(playercareerstats),
      })
      .then(res => res.json())
      .then(res => {
        setCareerStats(res.data.resultSets);
        setTotals(PlayerDetails(res.data.resultSets, dispatch));
      })
      .catch(err => console.log('Error retrieving career stats:', err));
      
      fetch(`${HeadShotsNBA}/${PID}.png`)
      .then(res => res.json())
      .then(() => {
        setPlayerImage(`${HeadShotsNBA}/${PID}.png`);
      })
      .catch(err => console.log('Error retrieving career head shots', err));
    })
    .catch(err => {
      setPlayerImage(noImage)
      console.log('Error retrieving common player info', err)}
    );

    // axios
    //   .post('/commonplayerinfo', commonplayerinfo)
    //   // .get(`${API2}/commonplayerinfo`)
    //   .then(res => {
    //     setPlayerData(res.data.resultSets[0].rowSet[0]);
    //     setPlayerAverages(res.data.resultSets[1].rowSet[0]);

    //     axios
    //       .post('/playercareerstats', playercareerstats)
    //       // .get(`${API2}/playercareerstats`)
    //       .then(resp => {
    //         setCareerStats(resp.data.resultSets);
    //         setTotals(PlayerDetails(resp.data.resultSets, dispatch));
    //       })
    //       .catch(err => console.log(err));

    //       axios
    //       .get(`${HeadShotsNBA}/${PID}.png`)
    //       .then(() => {
    //         setPlayerImage(`${HeadShotsNBA}/${PID}.png`);
    //       })
    //       .catch(setPlayerImage(noImage))
    //   })
    //   .catch(err => console.log(err));
  };