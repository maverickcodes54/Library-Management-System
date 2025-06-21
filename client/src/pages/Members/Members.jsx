import React, { useState } from 'react';
import MembersForm from '../../components/MembersForm/MembersForm';
import MembersList from '../../components/MembersList/MembersList';

const Members = () => {
    const [members, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null);

    const handleAddMember = (member) => {
        if (member.id != null) {
            setMembers(prev =>
                prev.map(m => (m.id === member.id ? member : m))
            );
        } else {
            member.id = Date.now();
            setMembers(prev => [...prev, member]);
        }
        setSelectedMember(null);
    };

    const handleEditMember = (member) => {
        setSelectedMember(member);
    };

    const handleDeleteMember = (id) => {
        setMembers(prev => prev.filter(m => m.id !== id));
    };

    return (
        <div className="card">
            <MembersForm onAddMember={handleAddMember} selectedMember={selectedMember} clearSelectedMember={() => setSelectedMember(null)} />
            <MembersList members={members} onEdit={handleEditMember} onDelete={handleDeleteMember} />
        </div>
    );
};

export default Members;
