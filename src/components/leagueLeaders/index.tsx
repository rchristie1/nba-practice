import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../widgets/loader';
import { LeaderStats, leagueLeadersAll } from '../../store/stats/leagueLeaders';
import { AppDispatch, RootState } from '../../store/store';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const LeagueLeaders = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [pointLeaders, setPointLeaders] = useState<any[]>([])
  const [assistLeaders, setAssistLeaders] = useState<any[]>([])
  const [stealLeaders, setStealLeaders] = useState<any[]>([])
  const [blockLeaders, setBlockLeaders] = useState<any[]>([])
  const [reboundLeaders, setReboundLeaders] = useState<any[]>([])

  const leaders = useSelector((state: RootState) => state.leagueLeaders)
  const dispatch = useDispatch<AppDispatch>()
  

  useEffect(() => {
    dispatch(leagueLeadersAll())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTopTenLeaders = (leaderData: LeaderStats) : LeaderStats => {
    const results = {
      pointLeaders: [],
      reboundLeaders: [],
      blockLeaders: [],
      stealLeaders: [],
      assistLeaders: [],
    }
    for (const [key] of Object.entries(leaderData)) {
      Object.assign(results, { 
        [key]: leaderData[key as keyof typeof leaderData].slice(0, 10)
      })
    }

    return results;
  }


  useEffect(() => {
    if (
        leaders.assistLeaders &&
        leaders.blockLeaders &&
        leaders.pointLeaders &&
        leaders.reboundLeaders &&
        leaders.stealLeaders
      ) {

      const trimmedData = getTopTenLeaders(leaders)

      console.log(leaders);
      

      setPointLeaders(trimmedData.pointLeaders)
      setAssistLeaders(trimmedData.assistLeaders)
      setBlockLeaders(trimmedData.blockLeaders)
      setReboundLeaders(trimmedData.reboundLeaders)
      setStealLeaders(trimmedData.stealLeaders)

      setIsLoading(false)
    }
    
  }, [leaders])

  const renderLeaderCategories = () => {
    const leaderCategories = [
      pointLeaders,
      assistLeaders,
      stealLeaders,
      blockLeaders,
      reboundLeaders
    ]

    return leaderCategories.map((category, i) => {
      return (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            key={i}
          >
            Point Leaders
          </AccordionSummary>
          {category.map((player, j) => {
            return (
              <AccordionDetails key={i+j}>
                {player}
              </AccordionDetails>
            )

          })}
        </Accordion>
      )
    })
  }

  return (
    <div className="leagueLeaders">
      <h1>League Leaders</h1>
      {isLoading ? 
        <Loader />
        :
        renderLeaderCategories()
      }
    </div>
  );
};

export default LeagueLeaders;
