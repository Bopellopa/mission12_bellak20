import React from 'react';

type TeamProps = {
  name: string;
  school: string;
  city: string;
  state: string;
}

class Team extends React.Component<TeamProps> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div className="team-card">
        <h2>{school}</h2>
        <p>Mascot: {name}</p>
        <p>Location: {city}, {state}</p>
      </div>
    );
  }
}

export default Team;
