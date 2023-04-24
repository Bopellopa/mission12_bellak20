import React from 'react';

interface TeamCardProps {
  school: string;
  mascot: string;
  city: string;
  state: string;
}

class TeamCard extends React.Component<TeamCardProps> {
  render() {
    const { school, mascot, city, state } = this.props;

    return (
      <div className="team-card">
        <h2>{school}</h2>
        <p>Mascot: {mascot}</p>
        <p>Location: {city}, {state}</p>
      </div>
    );
  }
}

export default TeamCard;

