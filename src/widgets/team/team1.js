import React from 'react';
import team1 from '../../assets/images/team/01.png';
import team2 from '../../assets/images/team/02.png';
import team3 from '../../assets/images/team/03.png';
import team4 from '../../assets/images/team/04.png';
import TeamMember from './TeamMember';

function Team1() {
    const teamMembers = [
        {
            imageSrc: team1,
            name: 'Vinit Saw',
            role: 'Manager',
        },
        {
            imageSrc: team2,
            name: 'Nina Loe',
            role: 'CEO',
        },
        {
            imageSrc: team3,
            name: 'Renut John',
            role: 'Founder',
        },
        {
            imageSrc: team4,
            name: 'Biton Leeny',
            role: 'Supervisor',
        },
    ];
    return (
        <div> <section>
            <div className="container pe-8 ps-8">
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                        <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                            Bootsland Team
                        </span>
                            <h2 className="mt-3 font-w-6">Meet Our Team Of Expert</h2>
                            <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                        </div>
                    </div>
                </div>
                {/* / .row */}
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <TeamMember
                            key={index}
                            imageSrc={member.imageSrc}
                            name={member.name}
                            role={member.role}
                        />
                    ))}
                </div>            </div>
        </section>
        </div>
    )
}

export default Team1