import PersistentDrawerLeft from '../UI/MaterialUI/sideDrawer/sideDrawer';
import './index.scss'

import { Link } from 'react-router-dom';

import debounce from 'debounce';
import { useState, useEffect } from 'react';

// import { connect } from 'react-redux';
// import * as actions from '../../store/actions';

const Header = () => {
  // state = {
  //   searchType: 'player',
  //   searchResults: [],
  // };

  const [searchType, setSearchType] = useState('player')
  const [searchResults, setSearchResults] = useState([])
  

  useEffect(() => {
    // redux calls
    // getAllPlayers()
    // getAllTeams()
  }, [])
  
  // componentDidMount() {
  //   this.props.getAllPlayers();
  //   this.props.getAllTeams();
  // }

  /* Add debounce so it doesnt perform the update on every key stroke.
   This is a synthetic event the text must be passed in 
   directly or it will produce an error */
  const handleChange = debounce(text => {
    // create a condition that handles the type of search selected
    console.log('handle change');
    
    // const searchCategory = searchType === 'player' ? this.props.playerData.rowSet : this.props.teamData;
    // let searchResults = [];

    // // map through the dataset to find the searched item
    // searchCategory.map(d => {
    //   //if search type is player
    //   if (searchType === 'player') {
    //     if (d[2].toLowerCase().includes(text.toLowerCase())) {
    //       searchResults = [...searchResults, d];
    //     }
    //     return d;
    //   }
    //   // if search type is team
    //   if (d.teamName.toLowerCase().includes(text.toLowerCase())) {
    //     searchResults = [...searchResults, d];
    //   }
    //   return d;
    // });

    // if (!text) searchResults = [];

    // this.setState({ searchResults });
  }, 500);

  const searchOptionChanged = (event) =>
    setSearchType(event.target.value.toLowerCase() === 'team' ? 'team' : 'player')

  const openPlayerTeamProfile = (UID) => {
    //update the team or player based on the type of search

    // searchType === 'player' ? updatePlayerID(UID) : updateTeamID(UID);
  };

  // hides the result list when a player is selected
  const searchItemSelected = (searchType, TID, PID) => {
    setSearchResults([])

    openPlayerTeamProfile(searchType === 'team' ? TID : PID);
  };

  const showSearchedItemList = () => {
    console.log('show searched items');
    
    // return searchResults.map(
    //   (d, i) =>
    //     i < 6 && (
    //       <div onClick={() => searchItemSelected(searchType, d.teamID, d[0])} key={i}>
    //         <Link className={styles.ResultLink} to={searchType === 'team' ? '/teams' : '/'}>
    //           {searchType === 'team' ? d.teamName : d[2]}
    //         </Link>
    //       </div>
    //     )
    // );
  };

  // repopulates the results when selected input selected
  const updateResults = (val) => {
    // this.handleChange(val);
    console.log('update results');
    
  };

  const category = searchType;
  const routeActive = '/'//this.props.match.url === '/';

    return (
      <div className='header'>
        <PersistentDrawerLeft
          data={{
            category,
            routeActive,
            searchOptionChanged:(val) => searchOptionChanged(val),
            handleChange:(val) => handleChange(val),
            updateResults:(val) => updateResults(val),
            showSearchedItemList: (val) => showSearchedItemList(val),
            searchResults
          }}
        />
      </div>
    );
}

// const mapStateToProps = state => {
//   return {
//     playerData: state.players.playerList,
//     teamData: state.teams.teamList,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllPlayers: () => dispatch(actions.getAllPlayers()),
//     getAllTeams: () => dispatch(actions.getAllTeams()),
//     updatePlayerID: UID => dispatch(actions.updatePlayerID(UID)),
//     updateTeamID: UID => dispatch(actions.updateTeamID(UID)),
//   };
// };

export default Header
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Header);
