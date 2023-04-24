import teams from './teams.json';
import Team from './Team';



function TeamList() {
  // ensure that teams is an array
  const teamList = Array.isArray(teams) ? teams : [];

  return (
    <div>
      {teamList.map((team) => (
        <Team
          key={team.tid}
          name={team.name}
          school={team.school}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
}

export default TeamList;




